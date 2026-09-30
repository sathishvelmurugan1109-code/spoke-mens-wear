import { useEffect, useRef } from 'react'
import { STYLE_CARDS } from '../data.js'
import '../shopbystyle.css'
import '../shopbystyle2.css'

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

function StyleCard({ card, wide }) {
  const cardRef = useRef(null)
  const arrowRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return
    if (img.complete && img.naturalWidth > 0) img.classList.add('loaded')
  }, [card.img])

  const onMove = (e) => {
    if (window.matchMedia('(hover: none)').matches) return
    const el = cardRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--px', `${(x * 8).toFixed(1)}px`)
    el.style.setProperty('--py', `${(y * 8).toFixed(1)}px`)
    if (arrowRef.current) arrowRef.current.style.transform = `translate(${(x * 10).toFixed(1)}px, ${(y * 10 - 3).toFixed(1)}px)`
  }
  const onLeave = () => {
    const el = cardRef.current
    if (!el) return
    el.style.setProperty('--px', '0px')
    el.style.setProperty('--py', '0px')
    if (arrowRef.current) arrowRef.current.style.transform = ''
  }

  return (
    <a
      ref={cardRef}
      href={card.href || '#new-arrivals'}
      className={`sbs-card ${wide ? 'sbs-wide' : ''}`}
      aria-label={`Explore ${card.title}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <span className="sbs-media" aria-hidden="true">
        <img
          ref={imgRef}
          src={card.img}
          alt=""
          loading="lazy"
          decoding="async"
          sizes={wide ? '(max-width: 760px) 92vw, (max-width: 1180px) 92vw, 880px' : '(max-width: 760px) 92vw, (max-width: 1180px) 44vw, 460px'}
          style={card.pos ? { objectPosition: card.pos } : undefined}
          onLoad={(e) => e.currentTarget.classList.add('loaded')}
        />
        <span className="sbs-shade" />
      </span>
      <span className="sbs-frame" aria-hidden="true" />
      {card.tall && <span className="sbs-feature-tag">FEATURED</span>}
      <span className="sbs-content">
        <span>
          <span className="sbs-num">{card.num}</span>
          <span className="sbs-tip">{card.title}</span>
          <span className="sbs-desc">{card.desc}</span>
          <span className="sbs-cta"><span className="bar" aria-hidden="true" />EXPLORE <span aria-hidden="true">→</span></span>
        </span>
        <span ref={arrowRef} className="sbs-arrow" aria-hidden="true">↗</span>
      </span>
    </a>
  )
}

export default function ShopByStyle() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-inview')
          io.unobserve(entry.target)
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="sbs-section" id="shop" aria-labelledby="sbs-heading">
      <span className="sbs-glow sbs-glow--a" aria-hidden="true" />
      <span className="sbs-glow sbs-glow--b" aria-hidden="true" />
      <Leaf className="sbs-leaf sbs-leaf--l" />
      <Leaf className="sbs-leaf sbs-leaf--r" />
      <div className="sbs-container">
        <div className="sbs-head">
          <div>
            <p className="sbs-eyebrow">DISCOVER YOUR STYLE</p>
            <div className="sbs-title-wrap">
              <span className="sbs-title-line" aria-hidden="true" />
              <h2 className="sbs-title" id="sbs-heading">SHOP BY <span className="green">STYLE</span></h2>
            </div>
          </div>
          <a className="sbs-explore" href="#collections">EXPLORE ALL COLLECTIONS <span className="arr" aria-hidden="true">→</span></a>
        </div>
        <div className="sbs-grid">
          {STYLE_CARDS.map((c, i) => (
            <div key={c.title} className={`sbs-cell sbs-cell--${i}`}>
              <StyleCard card={c} wide={Boolean(c.wide)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


