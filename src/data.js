export const NAV_LINKS = ['HOME', 'SHOP', 'NEW ARRIVALS', 'COLLECTIONS', 'ABOUT', 'CONTACT']

export const NAV_IDS = {
  HOME: 'home',
  SHOP: 'shop',
  'NEW ARRIVALS': 'new-arrivals',
  COLLECTIONS: 'collections',
  ABOUT: 'about',
  CONTACT: 'contact',
}

export const PRODUCTS = [
  {
    id: 1,
    name: 'Textured Casual Shirt',
    category: 'SHIRTS',
    price: 1299,
    mrp: 1999,
    rating: 4.8,
    reviews: 214,
    tag: 'NEW',
    img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Essential Oversized Tee',
    category: 'T-SHIRTS',
    price: 899,
    mrp: 1299,
    rating: 4.7,
    reviews: 186,
    tag: 'NEW',
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Cargo Trousers',
    category: 'TROUSERS',
    price: 1499,
    mrp: 2199,
    rating: 4.6,
    reviews: 142,
    tag: 'NEW',
    img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Regular Fit Jeans',
    category: 'JEANS',
    price: 1399,
    mrp: 1999,
    rating: 4.7,
    reviews: 178,
    tag: 'NEW',
    img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Premium Linen Shirt',
    category: 'SHIRTS',
    price: 1599,
    mrp: 2499,
    rating: 4.9,
    reviews: 231,
    tag: 'NEW',
    img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Midnight Black Shirt',
    category: 'SHIRTS',
    price: 1499,
    mrp: 2299,
    rating: 4.8,
    reviews: 167,
    tag: 'HOT',
    img: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Urban Graphic Tee',
    category: 'T-SHIRTS',
    price: 799,
    mrp: 1199,
    rating: 4.5,
    reviews: 129,
    tag: 'NEW',
    img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Tailored Beige Trousers',
    category: 'TROUSERS',
    price: 1699,
    mrp: 2599,
    rating: 4.7,
    reviews: 98,
    tag: 'NEW',
    img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop',
  },
]

export const STYLE_CARDS = [
  {
    num: '01',
    title: 'SHIRTS',
    desc: 'Elevate your everyday look with premium shirts.',
    img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=900&auto=format&fit=crop',
    pos: '50% 20%',
    tall: true,
    href: '#new-arrivals',
  },
  {
    num: '02',
    title: 'T-SHIRTS',
    desc: 'Comfort meets style for everyday.',
    img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop',
    pos: '50% 18%',
    href: '#new-arrivals',
  },
  {
    num: '03',
    title: 'TROUSERS',
    desc: 'Modern fit for every occasion.',
    img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop',
    pos: '50% 15%',
    href: '#new-arrivals',
  },
  {
    num: '04',
    title: 'JEANS',
    desc: 'Rugged. Stylish. Always in trend.',
    img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1200&auto=format&fit=crop',
    pos: '50% 35%',
    wide: true,
    href: '#new-arrivals',
  },
]

export const WORLD_IMAGES = [
  'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=500&auto=format&fit=crop',
]

export const formatINR = (n) => '₹' + n.toLocaleString('en-IN')

export const discountPct = (p) => {
  if (!p.mrp || p.mrp <= p.price) return 0
  return Math.round(((p.mrp - p.price) / p.mrp) * 100)
}

export const CATEGORIES = [
  {
    title: 'CASUAL WEAR',
    short: 'CASUAL',
    desc: 'Relaxed everyday fits',
    img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=500&auto=format&fit=crop',
  },
  {
    title: 'FORMAL WEAR',
    short: 'FORMAL',
    desc: 'Sharp office classics',
    img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=500&auto=format&fit=crop',
  },
  {
    title: 'STREETWEAR',
    short: 'STREETWEAR',
    desc: 'Bold urban attitude',
    img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500&auto=format&fit=crop',
  },
  {
    title: 'DAILY ESSENTIALS',
    short: 'ESSENTIALS',
    desc: 'Tees, shirts and more',
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop',
  },
  {
    title: 'ACCESSORIES',
    short: 'ACCESSORIES',
    desc: 'Watches, belts and more',
    img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=500&auto=format&fit=crop',
  },
]

export const FEATURES = [
  { num: '01', title: 'TRENDY COLLECTIONS', icon: '◈' },
  { num: '02', title: 'PREMIUM QUALITY', icon: '◇' },
  { num: '03', title: 'AFFORDABLE PRICES', icon: '⬔' },
  { num: '04', title: 'EVERYDAY CONFIDENCE', icon: '♛' },
]

export const TESTIMONIALS = [
  {
    name: 'Arun Kumar',
    city: 'Chennai',
    text: 'Fit is perfect and fabric feels truly premium. SPOKE is now my go-to for office and weekend looks.',
    rating: 5,
  },
  {
    name: 'Vikram R.',
    city: 'Bengaluru',
    text: 'Ordered shirts and jeans. Stitching, packaging and delivery were all top class. Value for money.',
    rating: 5,
  },
  {
    name: 'Deepak S.',
    city: 'Coimbatore',
    text: 'Streetwear collection is fire. Modern cuts, comfortable fabric, and it looks expensive.',
    rating: 4,
  },
]

export const WORLD_CARDS = [
  {
    title: 'CLEAN LOOKS',
    sub: 'FORMAL WEAR',
    img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=640&auto=format&fit=crop',
    pos: '50% 15%',
    href: '#shop',
  },
  {
    title: 'DETAILS MATTER',
    sub: 'EVERYDAY STYLE',
    img: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=640&auto=format&fit=crop',
    pos: '50% 22%',
    href: '#new-arrivals',
  },
  {
    title: 'REAL PEOPLE',
    sub: 'REAL STYLE',
    img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=640&auto=format&fit=crop',
    pos: '50% 18%',
    href: '#shop',
  },
  {
    title: 'STYLE COMBOS',
    sub: 'SHOP THE LOOK',
    img: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=640&auto=format&fit=crop',
    pos: '50% 25%',
    href: '#new-arrivals',
  },
  {
    title: 'EVERYDAY ESSENTIALS',
    sub: 'BUILD YOUR WARDROBE',
    img: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=640&auto=format&fit=crop',
    pos: '50% 20%',
    href: '#collections',
  },
  {
    title: 'TRENDING NOW',
    sub: 'NEW ARRIVALS',
    img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=640&auto=format&fit=crop',
    pos: '50% 28%',
    href: '#new-arrivals',
  },
  {
    title: 'CASUAL VIBES',
    sub: 'COMFORT FIRST',
    img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=640&auto=format&fit=crop',
    pos: '50% 18%',
    href: '#shop',
  },
]

export const SOCIAL_IMAGES = [
  'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=600&auto=format&fit=crop',
]
