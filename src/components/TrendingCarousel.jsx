import { useRef } from 'react'
import Reveal from './Reveal.jsx'
import { ProductCard } from './ProductCard.jsx'
import { PRODUCTS } from '../data.js'

export default function TrendingCarousel({ onAdd, wishlist, onWish, onQuick }) {
  const ref = useRef(null)
  const items = [...PRODUCTS].reverse()
  return (
    <section className="lux-section" id="trending">
      <div className="container">
        <Reveal>
          <div className="lux-head">
            <div>
              <div className="lux-kicker">MOST LOVED RIGHT NOW</div>
              <h2 className="lux-h2">TRENDING <em>Collection</em></h2>
              <p className="lead">Horizontal carousel with premium hover and quick add-to-cart.</p>
            </div>
            <div className="lux-arrows">
              <button className="arrow-btn" aria-label="Previous" onClick={() => ref.current?.scrollBy({ left: -340, behavior: 'smooth' })}>‹</button>
              <button className="arrow-btn" aria-label="Next" onClick={() => ref.current?.scrollBy({ left: 340, behavior: 'smooth' })}>›</button>
            </div>
          </div>
        </Reveal>
        <div className="lux-carousel" ref={ref}>
          {items.map((p) => (
            <ProductCard key={p.id} p={p} wished={wishlist.includes(p.id)} onWish={onWish} onAdd={onAdd} onQuick={onQuick} />
          ))}
        </div>
      </div>
    </section>
  )
}
