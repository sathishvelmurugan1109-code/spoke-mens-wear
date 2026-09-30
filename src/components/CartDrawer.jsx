import { formatINR } from '../data.js'
import { openWhatsAppOrder } from '../lib/whatsappOrder.js'

export default function CartDrawer({ open, items, onClose, onQty, onRemove }) {
  if (!open) return null
  const total = items.reduce((s, i) => s + i.price * i.qty, 0)

  // Sends the live cart to WhatsApp. The cart is intentionally left intact.
  const handleCheckout = () => { openWhatsAppOrder(items) }
  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <aside className="drawer">
        <div className="drawer-head">
          <h3 style={{ letterSpacing: '0.14em', fontSize: 16 }}>YOUR CART ({items.reduce((s, i) => s + i.qty, 0)})</h3>
          <button className="icon-btn" onClick={onClose}>✕</button>
        </div>
        <div className="drawer-body">
          {items.length === 0 && <p style={{ color: '#9db3a6', fontSize: 14 }}>Your cart is empty. Explore the new arrivals.</p>}
          {items.map((i) => (
            <div className="cart-line" key={i.id}>
              <img src={i.img} alt={i.name} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{i.name}</div>
                <div style={{ fontSize: 11, color: '#9db3a6', letterSpacing: '0.14em' }}>{i.category}</div>
                <div style={{ fontSize: 13, fontWeight: 700, marginTop: 4 }}>{formatINR(i.price)}</div>
                <div className="qty">
                  <button onClick={() => onQty(i.id, -1)}>−</button>
                  <span style={{ fontSize: 13 }}>{i.qty}</span>
                  <button onClick={() => onQty(i.id, 1)}>+</button>
                </div>
              </div>
              <button className="icon-btn" onClick={() => onRemove(i.id)} aria-label="remove">🗑</button>
            </div>
          ))}
        </div>
        <div className="drawer-foot">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14, fontWeight: 700 }}>
            <span>Subtotal</span><span>{formatINR(total)}</span>
          </div>
          <button
            className="btn btn-lime"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={handleCheckout}
            disabled={items.length === 0}
          >CHECKOUT →</button>
        </div>
      </aside>
    </>
  )
}
