import { useState, useEffect } from 'react'
import Reveal from './Reveal.jsx'

const WA_LINK = 'https://wa.me/919997768607?text=Hi%20SPOKE%20Mens%20Wear'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const subscribe = (e) => {
    e.preventDefault()
    if (!email.includes('@')) { setMsg('Please enter a valid email.'); return }
    setMsg('Welcome to the SPOKE club. Check your inbox.')
    setEmail('')
  }
  return (
    <footer className="spk-foot" aria-label="SPOKE footer">
      <span className="spk-foot-glow" aria-hidden="true" />
      <span className="spk-foot-mark" aria-hidden="true">SPOKE</span>
      <div className="spk-foot-top">
        <div className="spk-foot-inner">
          <Reveal>
            <div className="spk-foot-col">
              <div className="spk-foot-crown" aria-hidden="true">♛</div>
              <div className="spk-foot-logo">SPOKE</div>
              <div className="spk-foot-logo-sub">MEN'S WEAR</div>
              <p className="spk-foot-desc">Modern menswear for the everyday man. Refined essentials. Timeless confidence.</p>
              <div className="spk-foot-social">
                <a href="#home" aria-label="SPOKE on Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" /></svg>
                </a>
                <a href={WA_LINK} target="_blank" rel="noreferrer" aria-label="SPOKE on WhatsApp">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M12 3.5a8.5 8.5 0 00-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1012 3.5z" /></svg>
                </a>
                <a href="#home" aria-label="SPOKE on Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8.3v3h2.4v7h2.8z" /></svg>
                </a>
                <a href="#home" aria-label="SPOKE on YouTube">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="2.8" y="6" width="18.4" height="12.5" rx="3.5" /><path d="M10.5 9.7v4.6L14.5 12l-4-2.3z" fill="currentColor" stroke="none" /></svg>
                </a>
              </div>
              <form className="spk-foot-news" onSubmit={subscribe}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" aria-label="Email address" />
                <button type="submit">JOIN →</button>
              </form>
              {msg && <p className="spk-foot-msg" role="status">{msg}</p>}
            </div>
          </Reveal>
          <Reveal className="reveal-d1">
            <nav className="spk-foot-col" aria-label="Quick links">
              <h3 className="spk-foot-h">QUICK LINKS</h3>
              <ul className="spk-foot-links">
                <li><a href="#home"><span>Home</span><span aria-hidden="true">›</span></a></li>
                <li><a href="#collections"><span>Collections</span><span aria-hidden="true">›</span></a></li>
                <li><a href="#new-arrivals"><span>New Arrivals</span><span aria-hidden="true">›</span></a></li>
                <li><a href="#offers"><span>Offers</span><span aria-hidden="true">›</span></a></li>
                <li><a href="#contact"><span>Contact</span><span aria-hidden="true">›</span></a></li>
              </ul>
            </nav>
          </Reveal>
          <Reveal className="reveal-d2">
            <nav className="spk-foot-col" aria-label="Collections">
              <h3 className="spk-foot-h">COLLECTIONS</h3>
              <ul className="spk-foot-links">
                <li><a href="#shop"><span>Shirts</span><span aria-hidden="true">›</span></a></li>
                <li><a href="#shop"><span>T-Shirts</span><span aria-hidden="true">›</span></a></li>
                <li><a href="#shop"><span>Trousers</span><span aria-hidden="true">›</span></a></li>
                <li><a href="#shop"><span>Jeans</span><span aria-hidden="true">›</span></a></li>
                <li><a href="#shop"><span>Accessories</span><span aria-hidden="true">›</span></a></li>
              </ul>
            </nav>
          </Reveal>
          <Reveal className="reveal-d3">
            <nav className="spk-foot-col" aria-label="Customer support">
              <h3 className="spk-foot-h">CUSTOMER SUPPORT</h3>
              <ul className="spk-foot-links">
                <li><a href="#contact"><span>Size Guide</span><span aria-hidden="true">›</span></a></li>
                <li><a href="#contact"><span>Shipping Policy</span><span aria-hidden="true">›</span></a></li>
                <li><a href="#contact"><span>Return and Exchange</span><span aria-hidden="true">›</span></a></li>
                <li><a href="#contact"><span>FAQ</span><span aria-hidden="true">›</span></a></li>
                <li><a href="#contact"><span>Track Order</span><span aria-hidden="true">›</span></a></li>
              </ul>
            </nav>
          </Reveal>
          <Reveal className="reveal-d4">
            <div className="spk-foot-col">
              <h3 className="spk-foot-h">CONTACT US</h3>
              <ul className="spk-foot-contact">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.6" /></svg>
                  <span>Chennai, India</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /></svg>
                  <a href="tel:+919997768607">+91 99977 68607</a>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3.5 7l8.5 6 8.5-6" /></svg>
                  <a href="mailto:support@spokemenswear.in">support@spokemenswear.in</a>
                </li>
              </ul>
              <a className="spk-foot-wa" href={WA_LINK} target="_blank" rel="noreferrer">CHAT ON WHATSAPP</a>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="spk-foot-bar">
        <div className="spk-foot-bar-inner">
          <span>© 2026 SPOKE MEN'S WEAR. All rights reserved.</span>
          <span className="spk-foot-legal">
            <a href="#contact">Privacy Policy</a><i>|</i><a href="#contact">Terms &amp; Conditions</a>
          </span>
          <button type="button" className={showTop ? 'spk-foot-topbtn show' : 'spk-foot-topbtn'} aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
        </div>
      </div>
    </footer>
  )
}

