import { useEffect, useState } from 'react'
import '../splash.css'
import splashBg from '../assets/splash-bg.png'

export default function Splash({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const start = Date.now()
    const DURATION = 3000
    const tick = setInterval(() => {
      const el = Date.now() - start
      const pct = Math.min(100, Math.round((el / DURATION) * 100))
      setProgress(pct)
      if (pct >= 100) clearInterval(tick)
    }, 30)
    const leaveTimer = setTimeout(() => setLeaving(true), 3100)
    const doneTimer = setTimeout(() => onDone && onDone(), 3800)
    return () => {
      clearInterval(tick)
      clearTimeout(leaveTimer)
      clearTimeout(doneTimer)
    }
  }, [onDone])

  return (
    <div className={`splash ${leaving ? 'splash-leave' : ''}`} aria-hidden="true">
      {/* Intha landscape photo dhaan (model right side) background */}
      <img
        src={splashBg}
        alt=""
        className="splash-photo"
      />
      <div className="splash-shade" />
      <div className="splash-rays" />

      <div className="splash-top">
        <span className="splash-line" />
        <p>STYLE&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;COMFORT&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;CONFIDENCE</p>
        <span className="splash-line" />
      </div>

      <div className="splash-main">
        <div className="splash-brand">
          <div className="splash-crown">♛</div>
          <h1 className="splash-logo">
            {'SPOKE'.split('').map((ch, i) => (
              <span key={i} style={{ animationDelay: `${0.15 + i * 0.08}s` }}>{ch}</span>
            ))}
          </h1>
          <div className="splash-sub">
            <span className="splash-line sm" />
            <p>MEN&rsquo;S WEAR</p>
            <span className="splash-line sm" />
          </div>
          <p className="splash-script">
            <span>Dress Better</span>
            <span>Feel Better</span>
          </p>
        </div>
        <div className="splash-spacer" />
      </div>

      <div className="splash-bottom">
        <div className="splash-bar">
          <div className="splash-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="splash-loading">LOADING{progress < 100 ? '...' : ' — WELCOME'}</p>
      </div>
    </div>
  )
}

