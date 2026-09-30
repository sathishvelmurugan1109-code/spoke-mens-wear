import { useEffect, useRef } from 'react'
import { formatINR, discountPct } from '../data.js'

export default function WishlistDrawer({ open, items, onClose, onRemove, onAdd, onView, onExplore }) {
  const closeRef = useRef(null)

  // Lock background scroll while open, matching the cart drawer behaviour.
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <>
      <div className="wl-overlay" onClick={onClose} aria-hidden="true" />
      <aside className="wl-drawer" role="dialog" aria-modal="true" aria-label="Your wishlist">
        <div className="wl-head">
          <div>
            <span className="wl-eyebrow">SPOKE MENS WEAR</span>
            <h3 className="wl-title">YOUR WISHLIST <span className="wl-count">({items.length})</span></h3>
          </div>
          <button ref={closeRef} className="icon-btn" onClick={onClose} aria-label="Close wishlist">✕</button>
        </div>

        <div className="wl-body">
          {items.length === 0 ? (
            <div className="wl-empty">
              <span className="wl-empty-mark" aria-hidden="true">♡</span>
              <h4>YOUR WISHLIST IS EMPTY</h4>
              <p>Save your favorite SPOKE pieces and find them here.</p>
              <button className="btn btn-lime wl-empty-btn" onClick={onExplore}>
                EXPLORE NEW ARRIVALS <span aria-hidden="true">→</span>
              </button>
            </div>
          ) : (
            items.map((p) => {
              const off = discountPct(p)
              return (
                <div className="wl-line" key={p.id}>
                  <img src={p.img} alt={p.name} loading="lazy" />
                  <div className="wl-line-body">
                    <span className="wl-line-cat">{p.category}</span>
                    <div className="wl-line-name">{p.name}</div>
                    <div className="wl-line-price">
                      <b>{formatINR(p.price)}</b>
                      {p.mrp && p.mrp > p.price && <s>{formatINR(p.mrp)}</s>}
                      {off > 0 && <em>SAVE {off}%</em>}
                    </div>
                    <div className="wl-line-actions">
                      <button className="wl-act wl-act--cart" onClick={() => onAdd(p)}>ADD TO CART</button>
                      <button className="wl-act wl-act--view" onClick={() => onView(p)}>VIEW</button>
                    </div>
                  </div>
                  <button
                    className="wl-remove"
                    onClick={() => onRemove(p.id)}
                    aria-label={`Remove ${p.name} from wishlist`}
                    title="Remove from wishlist"
                  >♥</button>
                </div>
              )
            })
          )}
        </div>
      </aside>
    </>
  )
}