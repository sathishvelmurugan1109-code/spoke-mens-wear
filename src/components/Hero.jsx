import { useEffect, useRef } from 'react'
import { CATEGORIES, FEATURES } from '../data.js'
import heroImg from '../assets/splash-bg.png'

const LETTERS = ['S', 'P', 'O', 'K', 'E']

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (!bgRef.current) return
        const y = Math.min(window.scrollY, window.innerHeight * 1.2)
        bgRef.current.style.transform = `scale(1.06) translateY(${y * 0.12}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="lux-hero" id="home">
      <div className="lux-hero-bg">
        <img ref={bgRef} src={heroImg} alt="SPOKE menswear model in premium green studio" fetchPriority="high" />
      </div>
      <div className="lux-shade" />
      <div className="lux-rays" />
      <div className="lux-grain" />
      <div className="lux-gold-line" />
      <div className="lux-particles" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} style={{ left: `${6 + i * 9}%`, bottom: `${4 + (i % 4) * 8}%`, animationDelay: `${i * 0.9}s`, animationDuration: `${7 + (i % 4) * 2}s` }} />
        ))}
      </div>
      <div className="lux-side-note">SPOKE — MENS WEAR</div>

      <div className="lux-hero-inner">
        <div>
          <div className="lux-eyebrow">STYLE&nbsp;&nbsp;|&nbsp;&nbsp;COMFORT&nbsp;&nbsp;|&nbsp;&nbsp;CONFIDENCE</div>
          <h1 className="lux-logo" aria-label="SPOKE">
            {LETTERS.map((ch, i) => (
              <span key={i} className={ch === 'O' ? 'hl' : ''} style={{ animationDelay: `${0.15 + i * 0.09}s` }}>{ch}</span>
            ))}
          </h1>
          <div className="lux-sub-row">
            <span className="rule" />
            <p>MENS&nbsp;WEAR</p>
            <span className="rule" style={{ transform: 'scaleX(-1)' }} />
          </div>
          <div className="lux-tagline">
            <span className="script">Modern Style <em>for Real Men</em></span>
            <small>Premium styles crafted for everyday confidence.</small>
          </div>
          <div className="lux-cta">
            <a className="btn btn-lime" href="#shop">SHOP NOW <span>→</span></a>
            <a className="btn btn-ghost" href="#collections">EXPLORE COLLECTION</a>
          </div>
          <div className="lux-meta">
            <span>◉ VISIT OUR STORE</span>
            <span style={{ color: 'var(--gold)' }}>♛ PREMIUM MENSWEAR</span>
          </div>
          <div className="lux-features">
            {FEATURES.map((f, i) => (
              <div className="lux-feat" key={f.num} style={{ animationDelay: `${1 + i * 0.1}s` }}>
                <i>{f.icon}</i>
                <div><small>{f.num}</small><b>{f.title}</b></div>
              </div>
            ))}
          </div>
        </div>

        <div className="lux-editorial">
          <div className="script">Wear<br />Your<br /><em>Attitude</em></div>
          <ul>
            {CATEGORIES.map((c) => (
              <li key={c.short}><a href="#shop" style={{ minHeight: 32, display: 'inline-flex', alignItems: 'center' }}>{c.short}</a></li>
            ))}
          </ul>
        </div>

        <div className="lux-count">
          <b>01</b>
          <span>NEW<br />SEASON<br />2026</span>
        </div>
      </div>

      <div className="lux-cats">
        {CATEGORIES.map((c) => (
          <a key={c.title} href="#shop" className="lux-cat">
            <img src={c.img} alt={c.title} loading="lazy" />
            <div><small>{c.desc}</small><b>{c.title}</b></div>
            <span className="go">→</span>
          </a>
        ))}
      </div>

      <div className="lux-shopbar">
        <a className="btn btn-lime" href="#shop" style={{ minWidth: 230 }}>SHOP NOW <span>→</span></a>
        <span className="store"><span style={{ color: 'var(--lime)' }}>◉</span> VISIT OUR STORE — PREMIUM MENSWEAR COLLECTIONS</span>
      </div>

      <div className="marquee">
        <div className="marquee-inner">
          <span>SPOKE &nbsp;•&nbsp; MODERN MENSWEAR &nbsp;•&nbsp; STYLE | COMFORT | CONFIDENCE &nbsp;•&nbsp; SPOKE &nbsp;•&nbsp; MODERN MENSWEAR &nbsp;•&nbsp; STYLE | COMFORT | CONFIDENCE &nbsp;•&nbsp;&nbsp;</span>
          <span>SPOKE &nbsp;•&nbsp; MODERN MENSWEAR &nbsp;•&nbsp; STYLE | COMFORT | CONFIDENCE &nbsp;•&nbsp; SPOKE &nbsp;•&nbsp; MODERN MENSWEAR &nbsp;•&nbsp; STYLE | COMFORT | CONFIDENCE &nbsp;•&nbsp;&nbsp;</span>
        </div>
      </div>
    </section>
  )
}

