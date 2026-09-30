import { useEffect, useRef } from 'react'

export default function Reveal({ children, className = '', delay }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (delay) el.style.transitionDelay = `${delay}ms`
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    el.classList.add('reveal')
    if (className) className.split(' ').forEach((c) => c && el.classList.add(c))
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref}>{children}</div>
}

