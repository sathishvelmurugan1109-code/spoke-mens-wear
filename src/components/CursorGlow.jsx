import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let x = window.innerWidth / 2
    let y = 200
    let tx = x
    let ty = y
    let raf = 0
    const move = (e) => { tx = e.clientX; ty = e.clientY }
    const loop = () => {
      x += (tx - x) * 0.08
      y += (ty - y) * 0.08
      el.style.transform = `translate(${x - 260}px, ${y - 260}px)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', move, { passive: true })
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])
  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}
