/**
 * Safe localStorage wrapper for the SPOKE wishlist.
 *
 * Browsers can throw on storage access (Safari private mode, disabled cookies,
 * quota exceeded, sandboxed iframes). Every access here is wrapped so a storage
 * failure degrades to an in-memory map for the session instead of crashing the
 * app or logging to the console.
 *
 * This is a persistence UTILITY only — the single source of truth for wishlist
 * state remains the existing `useState` in App.jsx. No second state system.
 */

const WISH_KEY = 'spoke_wishlist'

// Session fallback used when localStorage is unavailable.
const memory = new Map()

let storeChecked = false
let store = null

function getStore() {
  if (storeChecked) return store
  storeChecked = true
  try {
    const ls = window.localStorage
    // Verify the store is genuinely readable AND writable before trusting it.
    const probe = '__spoke_probe__'
    ls.setItem(probe, probe)
    ls.removeItem(probe)
    store = ls
  } catch {
    store = null
  }
  return store
}

export function readWishlist() {
  const raw = (() => {
    const ls = getStore()
    if (!ls) return memory.get(WISH_KEY) ?? null
    try {
      return ls.getItem(WISH_KEY)
    } catch {
      return memory.get(WISH_KEY) ?? null
    }
  })()

  if (raw == null) return []

  let parsed
  try {
    parsed = JSON.parse(raw)
  } catch {
    // Corrupted payload — start clean rather than crash.
    return []
  }

  if (!Array.isArray(parsed)) return []

  // Normalise to numbers and drop anything that is not a usable product id.
  // Guards against string ids sneaking in and breaking `.includes()`.
  return parsed
    .map((id) => Number(id))
    .filter((id) => Number.isFinite(id))
}

export function writeWishlist(ids) {
  const clean = Array.isArray(ids)
    ? [...new Set(ids.map((id) => Number(id)).filter((id) => Number.isFinite(id)))]
    : []

  const payload = JSON.stringify(clean)
  // Always keep memory in sync so a later read stays consistent.
  memory.set(WISH_KEY, payload)

  const ls = getStore()
  if (!ls) return
  try {
    ls.setItem(WISH_KEY, payload)
  } catch {
    // Quota or permission error — wishlist still works for this session.
  }
}