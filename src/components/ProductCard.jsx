import Reveal from './Reveal.jsx'
import { PRODUCTS, formatINR, discountPct } from '../data.js'

function Stars({ n }) {
  const full = Math.round(n || 5)
  return <span className="lux-stars">{'★'.repeat(full)}{'☆'.repeat(5 - full)} <span>({n?.toFixed(1)})</span></span>
}

export function ProductCard({ p, wished, onWish, onAdd, onQuick }) {
  const off = discountPct(p)
  return (
    <article className="lux-card">
      <div className="lux-card-img">
        <img src={p.img} alt={p.name} loading="lazy" />
        {p.tag && <span className="lux-badge">{p.tag}</span>}
        {off > 0 && <span className="lux-off">−{off}%</span>}
        <button
          type="button"
          className={`lux-wish ${wished ? 'active' : ''}`}
          aria-label={wished ? `Remove ${p.name} from wishlist` : `Add ${p.name} to wishlist`}
          aria-pressed={wished}
          onClick={(e) => { e.stopPropagation(); e.preventDefault(); onWish(p.id) }}
        >
          <span aria-hidden="true">{wished ? '♥' : '♡'}</span>
        </button>
        <button className="lux-quick" onClick={() => onQuick(p)}>QUICK VIEW +</button>
      </div>
      <div className="lux-card-body">
        <span className="cat">{p.category}</span>
        <h4>{p.name}</h4>
        <Stars n={p.rating} />
        <div className="lux-price">
          <span><b>{formatINR(p.price)}</b>{p.mrp && <s>{formatINR(p.mrp)}</s>}</span>
          <button className="lux-add" aria-label={`Add ${p.name} to cart`} onClick={() => onAdd(p)}>+</button>
        </div>
      </div>
    </article>
  )
}

export function QuickView({ product, wished, onWish, onAdd, onClose }) {
  if (!product) return null
  const off = discountPct(product)
  return (
    <div className="qv-overlay" onClick={onClose}>
      <div className="qv" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={product.name}>
        <div className="qv-img"><img src={product.img} alt={product.name} /></div>
        <div className="qv-body">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 11, letterSpacing: '0.3em', color: 'var(--gold)' }}>{product.category}</span>
            <button className="icon-btn" onClick={onClose} aria-label="Close">✕</button>
          </div>
          <h3 style={{ fontFamily: 'Oswald', fontSize: 30, letterSpacing: '0.04em' }}>{product.name}</h3>
          <Stars n={product.rating} />
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <b style={{ fontSize: 24 }}>{formatINR(product.price)}</b>
            {product.mrp && <s style={{ color: 'var(--muted)' }}>{formatINR(product.mrp)}</s>}
            {off > 0 && <span className="lux-badge" style={{ position: 'static' }}>SAVE {off}%</span>}
          </div>
          <p style={{ color: 'var(--muted)', fontSize: 14 }}>Premium fabric, refined fit and everyday confidence. Designed for real men — from office to evening.</p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 6 }}>
            <button className="btn btn-lime" style={{ flex: 1 }} onClick={() => { onAdd(product); onClose() }}>ADD TO CART →</button>
            <button className="btn btn-ghost" aria-pressed={wished} aria-label={wished ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`} onClick={() => onWish(product.id)}>{wished ? '♥ WISHLISTED' : '♡ WISHLIST'}</button>
          </div>
          <p style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--muted)', marginTop: 8 }}>FREE SHIPPING • EASY 7-DAY EXCHANGE • COD AVAILABLE</p>
        </div>
      </div>
    </div>
  )
}

export { PRODUCTS }
export default ProductCard
