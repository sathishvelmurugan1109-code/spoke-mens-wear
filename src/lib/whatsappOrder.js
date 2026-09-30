import { formatINR } from '../data.js'

/**
 * SPOKE — WhatsApp order handoff.
 *
 * WhatsApp is the order-confirmation channel for the site: there is no
 * payment gateway. Clicking "CHECKOUT →" composes a message from the CURRENT
 * cart state and hands the user to WhatsApp. The cart is intentionally NOT
 * cleared — the order is confirmed by the store, not by the browser.
 */

/** Store WhatsApp number in full international form, digits only. */
export const ORDER_WHATSAPP_NUMBER = '916374959491' // +91 63749 59491

const DISPLAY_NUMBER = '+91 63749 59491'

/**
 * Build the plain-text order message from live cart items.
 * Every line is derived from the item, so counts, quantities, unit prices,
 * line totals and the subtotal can never go stale.
 */
export function buildOrderMessage(items) {
  const lines = items.map((item, index) => {
    const unit = item.price
    const lineTotal = unit * item.qty
    return [
      `${index + 1}. ${item.name}`,
      `   Category: ${item.category}`,
      `   Qty: ${item.qty}`,
      `   Price: ${formatINR(unit)}`,
      `   Line total: ${formatINR(lineTotal)}`,
    ].join('\n')
  })

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const totalQty = items.reduce((sum, item) => sum + item.qty, 0)

  return [
    'Hello SPOKE MENS WEAR,',
    '',
    'I would like to place an order.',
    '',
    'Order Details:',
    ...lines,
    '',
    `Subtotal: ${formatINR(subtotal)}`,
    `Total items: ${totalQty}`,
    '',
    'Please confirm my order and delivery details.',
    '',
    'Thank you,',
    'SPOKE MENS WEAR Customer',
  ].join('\n')
}

/** Fully-qualified, correctly encoded wa.me deep link. */
export function buildWhatsAppUrl(items) {
  return `https://wa.me/${ORDER_WHATSAPP_NUMBER}?text=${encodeURIComponent(buildOrderMessage(items))}`
}

/**
 * Hand the order to WhatsApp.
 *
 * `wa.me` resolves to the installed WhatsApp app on mobile and to WhatsApp
 * Web in a new tab on desktop, so a single new-tab open covers both cases.
 * Returns the URL so callers can log or test it.
 */
export function openWhatsAppOrder(items) {
  // Never open an empty order.
  if (!Array.isArray(items) || items.length === 0) return null

  const url = buildWhatsAppUrl(items)
  const win = window.open(url, '_blank', 'noopener,noreferrer')

  // Popup blocked — fall back to a same-tab navigation so checkout still works.
  if (!win) window.location.href = url

  return url
}

export { DISPLAY_NUMBER }