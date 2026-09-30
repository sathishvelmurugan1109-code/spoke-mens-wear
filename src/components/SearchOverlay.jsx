import { useEffect, useMemo, useState } from 'react'
import { PRODUCTS, formatINR } from '../data.js'

export default function SearchOverlay({ onClose, onAdd, onQuick, wishlist = [], onWish }) {
  const [q, setQ] = useState('')
  const results = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return PRODUCTS.slice(0, 4)
    return PRODUCTS.filter((p) => `${p.name} ${p.category}`.toLowerCase().includes(s)).slice(0, 6)
  }, [q])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-box" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <span style={{ fontSize: 11, letterSpacing: '0.4em', color: 'var(--gold)' }}>SEARCH SPOKE</span>
          <button className="icon-btn" onClick={onClose} aria-label="Close search">✕</button>
        </div>
        <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Shirts, jeans, tees..." aria-label="Search products" />
        <div className="search-results">
          {results.map((p) => {
            const wished = wishlist.includes(p.id)
            return (
              <div key={p.id} className="search-hit">
                <img src={p.img} alt={p.name} loading="lazy" />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{p.name}</div>
                  <div style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--muted)' }}>{p.category} • {formatINR(p.price)}</div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  {onWish && (
                    <button
                      className={`wl-search-wish ${wished ? 'active' : ''}`}
                      aria-label={wished ? `Remove ${p.name} from wishlist` : `Add ${p.name} to wishlist`}
                      aria-pressed={wished}
                      onClick={() => onWish(p.id)}
                    >
                      <span aria-hidden="true">{wished ? '♥' : '♡'}</span>
                    </button>
                  )}
                  <button className="chip" onClick={() => onQuick(p)}>VIEW</button>
                  <button className="chip active" onClick={() => { onAdd(p); onClose() }}>ADD</button>
                </div>
              </div>
            )
          })}
          {results.length === 0 && <p style={{ color: 'var(--muted)', fontSize: 14 }}>No matches. Try “shirt”, “jean” or “tee”.</p>}
        </div>
      </div>
    </div>
  )
}
