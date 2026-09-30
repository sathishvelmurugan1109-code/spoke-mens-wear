import { useEffect, useState } from 'react'
import { NAV_LINKS, NAV_IDS } from '../data.js'

export default function Navbar({ cartCount, wishCount, onCartOpen, onWishOpen, onSearchOpen }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('HOME')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = Object.values(NAV_IDS)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const found = Object.keys(NAV_IDS).find((k) => NAV_IDS[k] === e.target.id)
            if (found) setActive(found)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open ])

  return (
    <>
      <header className={`topbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="topbar-inner">
          <a href="#home" className="logo" aria-label="SPOKE home">
            <span className="logo-crown">♛</span>
            <span className="logo-text"><b>SP<em>O</em>KE</b><span>MEN'S WEAR</span></span>
          </a>
          <nav className="nav" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href={`#${NAV_IDS[l]}`}
                className={active === l ? 'active' : ''}
                onClick={() => setActive(l)}
              >
                {l}
              </a>
            ))}
          </nav>
          <div className="nav-icons">
            <button className="icon-btn" aria-label="Search" onClick={onSearchOpen}>⌕</button>
            <button className="icon-btn" aria-label="Account" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>◉</button>
            <button className="icon-btn" aria-label={`Wishlist, ${wishCount} item${wishCount === 1 ? '' : 's'}`} aria-expanded={false} onClick={onWishOpen}>
              ♡{wishCount > 0 && <span className="cart-count">{wishCount}</span>}
            </button>
            <button className="icon-btn" aria-label="Cart" onClick={onCartOpen}>
              🛒{cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </button>
            <button className="icon-btn hamburger" aria-label="Menu" onClick={() => setOpen(true)}>☰</button>
          </div>
        </div>
      </header>

      <div className={`scrim ${open ? 'show' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`drawer-nav ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontFamily: 'Oswald', letterSpacing: '0.2em', color: 'var(--gold)' }}>♛ SPOKE</span>
          <button className="icon-btn" aria-label="Close menu" onClick={() => setOpen(false)}>✕</button>
        </div>
        {NAV_LINKS.map((l, i) => (
          <a
            key={l}
            className="mlink"
            href={`#${NAV_IDS[l]}`}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: `${i * 30}ms` }}
          >
            {l} <small>0{i + 1}</small>
          </a>
        ))}
        <p style={{ marginTop: 18, fontSize: 11, letterSpacing: '0.3em', color: 'var(--muted)' }}>STYLE | COMFORT | CONFIDENCE</p>
        <button className="btn btn-lime" style={{ marginTop: 16 }} onClick={() => { setOpen(false); document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' }) }}>
          SHOP NOW →
        </button>
      </aside>
    </>
  )
}

