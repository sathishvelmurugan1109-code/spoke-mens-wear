import Reveal from './Reveal.jsx'
import { TESTIMONIALS, SOCIAL_IMAGES, WORLD_CARDS } from '../data.js'

export function Reviews() {
  return (
    <section className="lux-section">
      <div className="container">
        <Reveal>
          <div className="lux-head">
            <div>
              <div className="lux-kicker">WORN AND LOVED</div>
              <h2 className="lux-h2">CUSTOMER <span className="thin">Reviews</span></h2>
            </div>
            <span style={{ color: 'var(--gold)', letterSpacing: '0.2em', fontSize: 12 }}>4.8 / 5 RATED</span>
          </div>
        </Reveal>
        <div className="lux-tests">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} className={`reveal-d${i}`}>
              <div className="lux-test">
                <div className="q">“</div>
                <div style={{ color: 'var(--gold)', fontSize: 13 }}>{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
                <p>{t.text}</p>
                <b>{t.name}</b>
                <small>{t.city.toUpperCase()} • VERIFIED BUYER</small>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SocialGrid() {
  const cards = WORLD_CARDS && WORLD_CARDS.length >= 7 ? WORLD_CARDS : SOCIAL_IMAGES.map((src, i) => ({ title: `LOOK 0${i + 1}`, sub: 'SPOKE STYLE', img: src, pos: '50% 20%', href: '#shop' }))
  return (
    <section className="spk-world" id="offers" aria-labelledby="spk-world-title">
      <div className="spk-world-div" aria-hidden="true" />
      <span className="spk-world-mark" aria-hidden="true">SPOKE</span>
      <span className="spk-world-glow" aria-hidden="true" />
      <div className="spk-world-inner">
        <Reveal>
          <div className="spk-world-head">
            <div className="spk-world-head-l">
              <p className="spk-eyebrow spk-world-eyebrow">STYLE IN EVERY STORY</p>
              <h2 className="spk-world-title" id="spk-world-title">THE SPOKE <em>WORLD</em></h2>
              <p className="spk-world-sub">Real fits. Real streets. Real confidence — worn by the SPOKE community.</p>
            </div>
            <a className="spk-follow" href="#shop" aria-label="Follow SPOKE on social">FOLLOW US @SPOKE <span aria-hidden="true">→</span></a>
          </div>
        </Reveal>
        <div className="spk-world-strip" role="list">
          {cards.map((c, i) => (
            <Reveal key={`${c.title}-${i}`} className={`reveal-d${i % 4}`} delay={(i % 7) * 60}>
              <a
                role="listitem"
                className="spk-world-card"
                href={c.href || '#shop'}
                aria-label={`${c.title} — ${c.sub}`}
              >
                <img src={c.img} alt={`${c.title} — ${c.sub} | SPOKE Mens Wear`} loading="lazy" decoding="async" style={c.pos ? { objectPosition: c.pos } : undefined} />
                <span className="spk-world-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="spk-world-txt">
                  <span className="spk-world-txt-l">
                    <b>{c.title}</b>
                    <small>{c.sub}</small>
                  </span>
                  <span className="spk-world-arrow" aria-hidden="true">→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <p className="spk-world-hint" aria-hidden="true">SWIPE →</p>
      </div>
    </section>
  )
}

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

const FINAL_IMG = 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1800&auto=format&fit=crop'

export function FinalCta() {
  return (
    <section className="spk-final" id="contact" aria-labelledby="spk-final-title">
      <div className="spk-final-bg" aria-hidden="true">
        <img src={FINAL_IMG} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="spk-final-shade" aria-hidden="true" />
      <div className="spk-final-grade" aria-hidden="true" />
      <div className="spk-final-grain" aria-hidden="true" />
      <Leaf className="spk-final-leaf spk-final-leaf--l" />
      <Leaf className="spk-final-leaf spk-final-leaf--r" />
      <div className="spk-final-inner">
        <Reveal>
          <div>
            <p className="spk-final-eyebrow">EXPLORE THE COLLECTION</p>
            <h2 className="spk-final-title" id="spk-final-title">YOUR STYLE.<br /><em>YOUR PACE.</em></h2>
            <p className="spk-final-sub">Discover the latest SPOKE collection.</p>
            <div className="spk-final-cta-row">
              <a className="spk-final-btn" href="#shop">SHOP SPOKE <span aria-hidden="true">→</span></a>
            </div>
            <p className="spk-final-meta"><span>STYLE</span><i>|</i><span>COMFORT</span><i>|</i><span>CONFIDENCE</span></p>
          </div>
        </Reveal>
        <Reveal className="reveal-d1">
          <div className="spk-final-badge" aria-hidden="true"><b>MODERN<br />MENSWEAR<br />FOR A<br />PURPOSE</b></div>
        </Reveal>
      </div>
    </section>
  )
}

