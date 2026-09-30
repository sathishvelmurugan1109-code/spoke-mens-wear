import { useMemo, useState, useEffect, useRef, useCallback } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Splash from './components/Splash.jsx'
import TrendingCarousel from './components/TrendingCarousel.jsx'
import ShopByStyle from './components/ShopByStyle.jsx'
import NewArrivals from './components/NewArrivals.jsx'
import { Collections, Editorial, WhySpoke } from './components/Extras.jsx'
import { Reviews, SocialGrid, FinalCta } from './components/Sections.jsx'
import { QuickView } from './components/ProductCard.jsx'
import SearchOverlay from './components/SearchOverlay.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import WishlistDrawer from './components/WishlistDrawer.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import './index.css'
import './splash.css'
import './redesign.css'
import './redesign2.css'
import './redesign3.css'
import './redesign4.css'
import './redesign5.css'
import './redesign-responsive.css'
import './shopbystyle.css'
import './shopbystyle2.css'
import './newarrivals.css'
import './editorial.css'
import './whyspoke.css'
import './spokeworld.css'
import './finalfooter.css'
import './wishlist.css'
import { PRODUCTS } from './data.js'
import { readWishlist, writeWishlist } from './lib/safeStorage.js'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [cart, setCart] = useState([])
  // Lazy init: hydrate the wishlist from storage on first render (req. 5).
  const [wishlist, setWishlist] = useState(readWishlist)
  const [cartOpen, setCartOpen] = useState(false)
  const [wishOpen, setWishOpen] = useState(false)
  const [toast, setToast] = useState('')
  const [quickId, setQuickId] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)

  const toastTimer = useRef(null)

  const cartCount = useMemo(() => cart.reduce((s, i) => s + i.qty, 0), [cart])

  // Persist on every change so it survives navigation + refresh.
  useEffect(() => { writeWishlist(wishlist) }, [wishlist])

  // Always clear the pending timer on unmount to avoid a late setState.
  useEffect(() => () => clearTimeout(toastTimer.current), [])

  const flash = useCallback((msg) => {
    setToast(msg)
    // Reset the timer so rapid toggles can't have a stale timer wipe a
    // newer message early (previously leaked on every call).
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(''), 2200)
  }, [])

  const addToCart = (p) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === p.id)
      if (found) return prev.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i))
      return [...prev, { ...p, qty: 1 }]
    })
    flash(`${p.name} added to cart`)
  }

  const changeQty = (id, d) => {
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + d) } : i)))
  }

  // Wishlist is kept as product ids only. It is a single source of truth
  // shared by every ProductCard, so hearts stay in sync everywhere (req. 6).
  const toggleWish = (id) => {
    const product = PRODUCTS.find((x) => x.id === id)
    const has = wishlist.includes(id)
    // Side effect kept OUTSIDE the updater — updaters must stay pure or
    // React StrictMode double-invokes them and `flash` runs twice.
    flash(`${product?.name || 'Item'} ${has ? 'removed from' : 'saved to'} wishlist`)
    setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  // Resolve ids -> products, dropping any id that no longer exists.
  const wishProducts = useMemo(
    () => wishlist.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean),
    [wishlist]
  )

  useEffect(() => {
    document.body.classList.toggle('splash-lock', showSplash)
    return () => document.body.classList.remove('splash-lock')
  }, [showSplash])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') { setQuickId(null); setSearchOpen(false); setWishOpen(false) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const quickProduct = PRODUCTS.find((p) => p.id === quickId) || null

  return (
    <div className="redesign">
      {showSplash && <Splash onDone={() => setShowSplash(false)} />}
      <CursorGlow />
      <Navbar cartCount={cartCount} wishCount={wishlist.length} onCartOpen={() => setCartOpen(true)} onWishOpen={() => setWishOpen(true)} onSearchOpen={() => setSearchOpen(true)} />
      <main>
        <Hero />
        <NewArrivals onAdd={addToCart} wishlist={wishlist} onWish={toggleWish} onQuick={(p) => setQuickId(p.id)} />
        <ShopByStyle />
        <TrendingCarousel onAdd={addToCart} wishlist={wishlist} onWish={toggleWish} onQuick={(p) => setQuickId(p.id)} />
        <Collections />
        <Editorial />
        <WhySpoke />
        <Reviews />
        <SocialGrid />
        <FinalCta />
      </main>
      <Footer />
      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onQty={changeQty}
        onRemove={(id) => setCart((prev) => prev.filter((i) => i.id !== id))}
      />
      <QuickView product={quickProduct} wished={quickProduct ? wishlist.includes(quickProduct.id) : false} onWish={toggleWish} onAdd={addToCart} onClose={() => setQuickId(null)} />
      <WishlistDrawer
        open={wishOpen}
        items={wishProducts}
        onClose={() => setWishOpen(false)}
        onRemove={toggleWish}
        onAdd={addToCart}
        onView={(p) => { setWishOpen(false); setQuickId(p.id) }}
        onExplore={() => {
          setWishOpen(false)
          document.getElementById('new-arrivals')?.scrollIntoView({ behavior: 'smooth' })
        }}
      />
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} onAdd={addToCart} wishlist={wishlist} onWish={toggleWish} onQuick={(p) => { setSearchOpen(false); setQuickId(p.id) }} />}
      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}
