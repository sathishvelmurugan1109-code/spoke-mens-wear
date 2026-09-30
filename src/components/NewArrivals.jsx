import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { PRODUCTS, formatINR, discountPct } from '../data.js'

const FILTERS = ['ALL', 'SHIRTS', 'T-SHIRTS', 'TROUSERS', 'JEANS']
const BANNER_IMG = 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop'
const SWATCH_FALLBACK = { 1: ['#5b8fd0', '#f2efe6', '#1c2a33'], 2: ['#f5f5f5', '#2b2b2b', '#7a8b7a'], 3: ['#6b7a5e', '#b8b4a8', '#2e332e'], 4: ['#3a5a8c', '#20294a', '#2b3446'], 5: ['#2e7d5b', '#f5f1e6', '#7a2f43'] }

function Leaf({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 260" aria-hidden="true" focusable="false">
      <g fill="currentColor">
        <ellipse cx="100" cy="40" rx="10" ry="34" transform="rotate(24 100 40)" />
        <ellipse cx="70" cy="90" rx="9" ry="30" transform="rotate(-18 70 90)" />
        <ellipse cx="130" cy="90" rx="9" ry="30" transform="rotate(18 130 90)" />
        <ellipse cx="60" cy="150" rx="9" ry="30" transform="rotate(-24 60 150)" />
        <ellipse cx="140" cy="150" rx="9" ry="30" transform="rotate(24 140 150)" />
        <ellipse cx="100" cy="210" rx="10" ry="34" />
      </g>
    </svg>
  )
}

function Stars({ rating }) {
  const full = Math.max(0, Math.min(5, Math.round(rating || 5)))
  return <span className="na-stars" aria-hidden="true">{'★'.repeat(full)}{'☆'.repeat(5 - full)}</span>
}

export default function NewArrivals({ onAdd, wishlist, onWish, onQuick }) {
  const [filter, setFilter] = useState('ALL')
  const [justAdded, setJustAdded] = useState(0)
  const list = PRODUCTS.filter((p) => filter === 'ALL' || p.category === filter).slice(0, 5)

  const handleAdd = (p) => {
    onAdd(p)
    setJustAdded(p.id)
    window.setTimeout(() => setJustAdded(0), 1200)
  }

  return (
    <section className="na-section" id="new-arrivals" aria-labelledby="na-heading">
      <span className="na-atmo" aria-hidden="true" />
      <Leaf className="na-leaf na-leaf--l" />
      <Leaf className="na-leaf na-leaf--r" />
      <Leaf className="na-leaf na-leaf--b" />
      <div className="na-container">
        <Reveal>
          <div className="na-head">
            <div>
              <p className="na-eyebrow"><span className="na-eyebrow-line" aria-hidden="true" />THE LATEST FROM SPOKE</p>
              <h2 className="na-title" id="na-heading">
                <span className="na-title-rule" aria-hidden="true" />
                <span className="na-title-new">NEW</span>
                <span className="na-title-arr">ARRIVALS</span>
              </h2>
              <p className="na-sub">Fresh silhouettes. Refined essentials. New season energy.</p>
            </div>
            <div className="na-head-right">
              <div className="na-watermark" aria-hidden="true">SPOKE<span>MENS WEAR</span></div>
              <a className="na-viewall" href="#shop">VIEW ALL <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </Reveal>
        <div className="na-filters" role="group" aria-label="Filter new arrivals by category">
          {FILTERS.map((f) => (
            <button key={f} type="button" aria-pressed={filter === f} className={`na-filter ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        <div className="na-grid">
          {list.map((p, i) => {
            const off = discountPct(p)
            const sw = p.colors || p.swatches || SWATCH_FALLBACK[p.id] || ['#4ade80', '#ecdcab', '#1c2a33']
            const wished = wishlist.includes(p.id)
            return (
              <Reveal key={p.id} delay={(i % 5) * 70}>
                <article className="na-card">
                  <div className="na-imgwrap">
                    <img src={p.img} alt={p.name} loading="lazy" decoding="async" />
                    <button className="na-imgbtn" type="button" aria-label={`Quick view ${p.name}`} onClick={() => onQuick(p)} />
                    <span className="na-badge">NEW ARRIVAL</span>
                    {off > 0 && <span className="na-off">−{off}%</span>}
                    <button type="button" className={`na-wish ${wished ? 'active' : ''}`} aria-label={wished ? `Remove ${p.name} from wishlist` : `Add ${p.name} to wishlist`} aria-pressed={wished} onClick={(e) => { e.stopPropagation(); e.preventDefault(); onWish(p.id) }}><span aria-hidden="true">{wished ? '♥' : '♡'}</span></button>
                    <button type="button" className="na-quick" aria-label={`Quick view ${p.name}`} onClick={() => onQuick(p)}>QUICK VIEW <span aria-hidden="true">→</span></button>
                  </div>
                  <div className="na-info">
                    <span className="na-num">{String(PRODUCTS.indexOf(p) + 1).padStart(2, '0')}</span>
                    <span className="na-cat">{p.category}</span>
                    <h3 className="na-name" title={p.name}>{p.name}</h3>
                    <div className="na-rating">
                      <Stars rating={p.rating} />
                      <span className="na-rating-val">{Number(p.rating || 5).toFixed(1)} ({p.reviews || 0})</span>
                    </div>
                    <div className="na-price-row">
                      <div className="na-price">
                        <b>{formatINR(p.price)}</b>
                        {p.mrp && p.mrp > p.price && <s>{formatINR(p.mrp)}</s>}
                        {off > 0 && <span className="na-save">SAVE {off}%</span>}
                      </div>
                      <button type="button" className={`na-cart ${justAdded === p.id ? 'added' : ''}`} aria-label={justAdded === p.id ? `${p.name} added to cart` : `Add ${p.name} to cart`} onClick={() => handleAdd(p)}>{justAdded === p.id ? '✓' : '🛒'}</button>
                    </div>
                    <div className="na-swatches" aria-label={`${p.name} colours`}>
                      {sw.slice(0, 3).map((c, k) => (<span key={k} className="na-dot" style={{ background: c }} />))}
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
        {list.length === 0 && <p className="na-empty">No products in this category yet.</p>}
        <Reveal className="reveal-d1">
          <div className="na-banner">
            <div className="na-banner-left">
              <p className="na-banner-eyebrow">SPOKE MENS WEAR</p>
              <h3 className="na-banner-title">THE NEW <span>SEASON</span></h3>
              <p className="na-banner-sub">Essential pieces designed for everyday confidence.</p>
              <a className="na-banner-cta" href="#shop">DISCOVER COLLECTION <span aria-hidden="true">→</span></a>
            </div>
            <div className="na-banner-mid">
              <img src={BANNER_IMG} alt="SPOKE new season menswear campaign" loading="lazy" decoding="async" />
            </div>
            <div className="na-banner-right">
              <div className="na-circle" aria-hidden="true">STYLE<br />COMFORT<br />CONFIDENCE</div>
              <p className="na-script">Wear<br />Your<br /><em>Attitude</em><span className="na-script-u" aria-hidden="true" /></p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

