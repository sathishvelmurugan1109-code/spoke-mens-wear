import Reveal from './Reveal.jsx'

const EDIT_BG = 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1600&auto=format&fit=crop'
const PHIL_IMG = 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop'
const EDIT_CATS = [
  { num: '01', label: 'CASUAL', href: '#shop' },
  { num: '02', label: 'FORMAL', href: '#shop' },
  { num: '03', label: 'EVERYDAY', href: '#new-arrivals' },
  { num: '04', label: 'PREMIUM', href: '#collections' },
]

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

export function Collections() {
  return (
    <section className="spk-edit" id="collections" aria-labelledby="spk-edit-title">
      <div className="spk-edit-bg" aria-hidden="true">
        <img src={EDIT_BG} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="spk-edit-shade" aria-hidden="true" />
      <div className="spk-edit-glow" aria-hidden="true" />
      <div className="spk-edit-grain" aria-hidden="true" />
      <Leaf className="spk-edit-leaf spk-edit-leaf--l" />
      <Leaf className="spk-edit-leaf spk-edit-leaf--r" />
      <span className="spk-edit-line-v" style={{ right: '268px' }} aria-hidden="true" />
      <div className="spk-edit-inner">
        <Reveal>
          <div className="spk-edit-content">
            <p className="spk-eyebrow">SPOKE MENS WEAR</p>
            <h2 className="spk-edit-title" id="spk-edit-title">SPOKE EDIT</h2>
            <p className="spk-edit-pace">MADE FOR <em>YOUR OWN PACE.</em></p>
            <p className="spk-edit-tag">STYLE TODAY. A STRONGER YOU TOMORROW.</p>
            <div className="spk-cta-row">
              <a className="spk-cta-mint spk-edit-cta" href="#new-arrivals">EXPLORE COLLECTION <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </Reveal>
        <Reveal className="reveal-d1">
          <nav className="spk-edit-nav" aria-label="Edit categories">
            {EDIT_CATS.map((c) => (
              <a key={c.num} href={c.href}><small>{c.num}</small><b>{c.label}</b></a>
            ))}
          </nav>
        </Reveal>
      </div>
    </section>
  )
}

export function Editorial() {
  return (
    <section className="spk-phil" id="about" aria-labelledby="spk-phil-title">
      <div className="spk-phil-grid">
        <div className="spk-phil-media">
          <img src={PHIL_IMG} alt="SPOKE model in navy suit" loading="lazy" decoding="async" />
          <span className="spk-phil-frame" aria-hidden="true" />
          <div className="spk-phil-side" aria-hidden="true"><span>STYLE</span><span>DISCIPLINE</span><span>CONFIDENCE</span><span>SPOKE</span></div>
          <span className="spk-phil-num" aria-hidden="true">01</span>
        </div>
        <div className="spk-phil-body">
          <span className="spk-phil-gold" aria-hidden="true" />
          <div className="spk-phil-mark" aria-hidden="true">SPOKE</div>
          <Leaf className="spk-phil-leaf" />
          <Reveal>
            <div className="spk-phil-txt">
              <p className="spk-phil-eyebrow">OUR PHILOSOPHY</p>
              <h2 id="spk-phil-title">STYLE IS NOT<br />A STATEMENT.<br /><em>IT’S A WAY<br />OF MOVING.</em></h2>
              <p className="spk-phil-brand">SPOKE MEN’S WEAR</p>
              <a className="spk-cta-ghost" href="#shop">DISCOVER MORE <span aria-hidden="true">→</span></a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function WhySpoke() {
  const items = [
    { num: '01', t: 'PREMIUM FABRICS', d1: 'Quality you can feel.', d2: 'Crafted for long-lasting comfort.', icon: 'crown' },
    { num: '02', t: 'REFINED FIT', d1: 'Designed for real men.', d2: 'Fits that move with you.', icon: 'shirt' },
    { num: '03', t: 'MODERN DESIGN', d1: 'Trends with timeless appeal.', d2: 'Always a step ahead.', icon: 'diamond' },
    { num: '04', t: 'EVERYDAY CONFIDENCE', d1: 'For your every move.', d2: 'Style that empowers.', icon: 'badge' },
  ]
  const Icon = ({ k }) => {
    if (k === 'crown') return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M3 8l3.5 3L12 5l5.5 6L21 8l-1.6 9H4.6L3 8z" /><path d="M5 20h14" /></svg>)
    if (k === 'shirt') return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M9 4L3 7l2 4 2-1v10h10V10l2 1 2-4-6-3a3 3 0 01-6 0z" /></svg>)
    if (k === 'diamond') return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M7 4h10l4 5-9 11L3 9l4-5z" /><path d="M3 9h18M9 4l3 5 3-5M12 9l0 11" /></svg>)
    return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="8.2" /><path d="M12 8.4l1 2 2.2.3-1.6 1.5.4 2.2-2-1-2 1 .4-2.2L8.8 10.7l2.2-.3 1-2z" fill="currentColor" stroke="none" /></svg>)
  }
  return (
    <section className="spk-why" id="why-spoke" aria-labelledby="spk-why-title">
      <span className="spk-why-glow" aria-hidden="true" />
      <span className="spk-why-glow spk-why-glow--r" aria-hidden="true" />
      <Leaf className="spk-why-leaf spk-why-leaf--l" />
      <Leaf className="spk-why-leaf spk-why-leaf--r" />
      <span className="spk-why-mark" aria-hidden="true">SPOKE</span>
      <div className="spk-why-inner">
        <div className="spk-why-top">
          <Reveal>
            <div>
              <p className="spk-eyebrow">OUR DIFFERENCE</p>
              <h2 className="spk-why-title" id="spk-why-title">WHY <em>SPOKE?</em></h2>
              <p className="spk-why-sub">More than just menswear — SPOKE is a lifestyle for men who move with purpose.</p>
              <div className="spk-why-rule" aria-hidden="true" />
            </div>
          </Reveal>
          <div className="spk-why-grid">
            {items.map((w, i) => (
              <Reveal key={w.num} className={`reveal-d${i}`}>
                <div className="spk-why-cell">
                  <div className="spk-why-cell-head">
                    <span className="spk-why-num" aria-hidden="true">{w.num}</span>
                    <span className="spk-why-ic"><Icon k={w.icon} /></span>
                  </div>
                  <h3>{w.t}</h3>
                  <p>{w.d1}<br />{w.d2}</p>
                  <span className="spk-why-tick" aria-hidden="true" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Extras() {
  return null
}

