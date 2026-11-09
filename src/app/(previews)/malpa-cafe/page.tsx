"use client";

import React, { useState } from "react";
import {
  Star,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Heart,
  X,
  Menu as MenuIcon,
  Flame,
  Utensils,
  Award,
  ShoppingBag,
  Calendar,
  Coffee,
  ChevronLeft,
  Navigation,
  Info,
  Layers,
  AlertTriangle
} from "lucide-react";

// --- DATA STRUCTURES ---

const VISUAL_ASSETS = [
  {
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLeU4F1TBWsXbjnSm79ruJGGBssG-wJ4Ujx5m53N7aanrQbLWeNXg8O6hxvQoUQKR67ehCiBq2HcGCttWZZmFszVjDMeY4GzyAwPluENqCYwMaOe0UmnYCPWBQ6ZrrSmFaGHkb33SkDoU7eF=s4800-w1000-h800",
    caption: "Malpa Cafe Interior Warmth",
    tagline: "Exposed Brick & Amber Radiance"
  },
  {
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLc-oG8aBL15_-Tpts0-9r_7prwrL7cvg4EKoIxFEPTMLBjbJL4ELU4Wi37FRTy3vbKqCEFvV7xCA-O-UjSK7nTT3i3WL6loTFKpfeS04EwUgLCdLEkNsFNhrqmqE_MbZjZ0b3pT0RRHDRs=s4800-w1000-h800",
    caption: "Signature Espresso & Pour-overs",
    tagline: "Artisanal Single-Origin Beans"
  },
  {
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLf1TiXnsyXaSFVVsoLIlKsQiuuTRs0crVRtc_F_E5dpD6SqMWy6VPGPL6qyBho--Di1wzRndePjYlZyHGx25KIfHgjxmCE4qxRtam31YwBx0w0qsosIMd7Lvo0iSeZkT90EIscAJP911NoR=s4800-w1000-h800",
    caption: "Freshly Baked House Treats",
    tagline: "Golden Croissants & Banana Bread"
  },
  {
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLd61GEQFm0ppT3Ja4CW-uW0g0A7-5sSCpkVMgGvPuPcwyKE94V7eYi7VPuqXbzTS6iirEal0RoHMNGtI1mU2ECIjE-y15Z-FrV2mEy5PusRVueD72YiRRsaoRzbCXenxSyoldz02Cj5SOYr=s4800-w1000-h800",
    caption: "Artisanal Grilled Cheese & Paninis",
    tagline: "Melted Gruyere & Pressed Sourdough"
  }
];

const POLAROID_STACK = [
  {
    id: "p1",
    img: VISUAL_ASSETS[2].url,
    title: "Famous Banana Bread",
    reviewQuote: "“This was the BEST banana bread I have ever had.”",
    author: "Harper M.",
    rotation: "-rotate-6",
    badge: "Baked Daily"
  },
  {
    id: "p2",
    img: VISUAL_ASSETS[1].url,
    title: "Rosemary Maple Latte",
    reviewQuote: "“Smooth, velvety, with just the right touch of maple sweetness.”",
    author: "Gabe R.",
    rotation: "rotate-3",
    badge: "House Signature"
  },
  {
    id: "p3",
    img: VISUAL_ASSETS[3].url,
    title: "Gourmet Paninis",
    reviewQuote: "“The ham and cheese croissant & pressed sandwiches are unbelievable!”",
    author: "Julia D.",
    rotation: "-rotate-2",
    badge: "Local Favorite"
  }
];

const MENU_ITEMS = [
  {
    id: "m1",
    name: "Famous Artisanal Banana Bread",
    category: "pastries",
    price: "$5.50",
    description: "Moist house-made banana loaf infused with organic cinnamon, brown sugar, and toasted walnuts.",
    dietary: ["Vegetarian", "Freshly Baked"],
    badge: "Legendary",
    image: VISUAL_ASSETS[2].url,
    tastingNote: "Warm, rich, slightly caramelized top crust"
  },
  {
    id: "m2",
    name: "Rosemary Maple Latte",
    category: "specialties",
    price: "$6.50",
    description: "Double espresso infused with pure Vermont maple syrup and subtle fresh rosemary essence.",
    dietary: ["Signature Craft", "Hot or Iced"],
    badge: "Top Seller",
    image: VISUAL_ASSETS[1].url,
    tastingNote: "Piney aromatic finish with cozy maple undertones"
  },
  {
    id: "m3",
    name: "Cinnamon Maple Latte",
    category: "specialties",
    price: "$6.50",
    description: "Espresso steamed with velvety whole or oat milk, Ceylon cinnamon spice, and dark amber maple.",
    dietary: ["Organic Milk Options"],
    badge: "Fan Favorite",
    image: VISUAL_ASSETS[1].url,
    tastingNote: "Spicy-sweet warmth with dense microfoam"
  },
  {
    id: "m4",
    name: "Gourmet Pressed Grilled Cheese",
    category: "paninis",
    price: "$11.00",
    description: "Artisanal country sourdough layered with aged sharp cheddar, Gruyère, and garlic butter glaze.",
    dietary: ["Comfort Classic"],
    badge: "Hot & Crispy",
    image: VISUAL_ASSETS[3].url,
    tastingNote: "Golden crispy sourdough with stringy melted cheese"
  },
  {
    id: "m5",
    name: "Ham & Cheese Flaky Croissant",
    category: "paninis",
    price: "$8.50",
    description: "Fresh French butter croissant stuffed with smoked honey ham and melted Swiss cheese.",
    dietary: ["Warm Bakery Special"],
    badge: "Chef Choice",
    image: VISUAL_ASSETS[0].url,
    tastingNote: "Buttery, flaky layers with savory smoked ham"
  },
  {
    id: "m6",
    name: "Organic Chia Seed Pudding",
    category: "pastries",
    price: "$6.75",
    description: "Soaked organic chia seeds in vanilla coconut milk, topped with fresh seasonal berries and agave.",
    dietary: ["Vegan", "Gluten-Free"],
    badge: "Healthy Bite",
    image: VISUAL_ASSETS[2].url,
    tastingNote: "Refreshing, creamy, and naturally sweet"
  },
  {
    id: "m7",
    name: "Ceremonial Grade Matcha Latte",
    category: "specialties",
    price: "$6.25",
    description: "First-harvest Uji matcha whisked to perfection with oat milk and a kiss of wildflower honey.",
    dietary: ["Antioxidant Rich"],
    badge: "Popular",
    image: VISUAL_ASSETS[1].url,
    tastingNote: "Earthy, smooth, and balanced green tea perfection"
  },
  {
    id: "m8",
    name: "Slow-Steeped Cold Brew",
    category: "specialties",
    price: "$5.50",
    description: "24-hour cold steeped specialty bean blend resulting in low-acidity dark chocolate tasting notes.",
    dietary: ["Zero Sugar", "High Caffeine"],
    badge: "Refresher",
    image: VISUAL_ASSETS[0].url,
    tastingNote: "Silky smooth with subtle dark cocoa finish"
  }
];

const CUSTOMER_REVIEWS = [
  {
    author: "Harper Meehan",
    text: "Stumbled upon this cafe while we were visiting for a few days. We tried the Rosemary Maple latte, cinnamon maple latte, grilled cheese, chia seed pudding and banana bread. This was the BEST banana bread I have ever had. This cafe is locally and family owned.",
    rating: 5,
    relativeTime: "a month ago",
    verifiedGoogle: true,
    highlight: "BEST banana bread I have ever had"
  },
  {
    author: "Gabe Raybould",
    text: "Malpa Cafe is the best!! The atmosphere is warm and inviting, making it the perfect place to slow down, enjoy a coffee, and have something delicious to eat. You can tell the owners put a heavy emphasis on quality ingredients when it comes to the coffee and the food.",
    rating: 5,
    relativeTime: "a month ago",
    verifiedGoogle: true,
    highlight: "Warm & inviting slow-living atmosphere"
  },
  {
    author: "Braden",
    text: "I'm so lucky to have Malpa Cafe in my neighborhood! It's a stylish space and the owners are so friendly, I've only ever had good experiences every time I've gone. I like to get a matcha since I'm not much of a coffee person. The pastries and sandwiches are top notch.",
    rating: 5,
    relativeTime: "7 months ago",
    verifiedGoogle: true,
    highlight: "Stylish space & friendly local owners"
  },
  {
    author: "Julia Danzeisen",
    text: "Yesterday was my first time at Malpa and I was so blown away by the cozy vibes and excellent food! I got a matcha and a ham and cheese croissant and honestly I would love to come back to do work every weekend. Lots of seating and great service!! ❤️",
    rating: 5,
    relativeTime: "3 weeks ago",
    verifiedGoogle: true,
    highlight: "Cozy vibes & amazing ham & cheese croissant"
  }
];

const OPERATING_HOURS = [
  { day: "Monday", hours: "Closed", active: false },
  { day: "Tuesday", hours: "Closed", active: false },
  { day: "Wednesday", hours: "7:00 AM – 3:00 PM", active: true },
  { day: "Thursday", hours: "7:00 AM – 3:00 PM", active: true },
  { day: "Friday", hours: "7:00 AM – 3:00 PM", active: true },
  { day: "Saturday", hours: "8:00 AM – 3:00 PM", active: true },
  { day: "Sunday", hours: "Closed", active: false }
];

export default function ClientSitePage() {
  // Modal state
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Menu filter state
  const [activeCategory, setActiveCategory] = useState("all");
  const [favorites, setFavorites] = useState<string[]>([]);

  // Interactive Polaroid Hover state
  const [activePolaroidIndex, setActivePolaroidIndex] = useState(0);

  // Story Tab State
  const [ethosTab, setEthosTab] = useState<"coffee" | "pastry">("coffee");

  // Reviews slider index
  const [reviewIdx, setReviewIdx] = useState(0);

  // Baker's Freshness Meter Interactive State
  const [freshnessStatus, setFreshnessStatus] = useState([
    { name: "Famous Banana Bread", capacity: 95, batchTime: "Warm from oven (15 min ago)", available: true },
    { name: "Rosemary Maple Espresso", capacity: 100, batchTime: "Barista crafting live", available: true },
    { name: "Ham & Cheese Croissant", capacity: 78, batchTime: "Fresh morning bake", available: true },
    { name: "Cinnamon Maple Syrup", capacity: 90, batchTime: "Simmered today", available: true }
  ]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredMenu = MENU_ITEMS.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-[#1C1715] text-[#F4EDE2] font-sans selection:bg-[#C86D33] selection:text-white relative pb-20 md:pb-0">
      
      {/* ------------------------------------------------------------- */}
      {/* TOP STICKY DEMO COMPARISON BAR */}
      {/* ------------------------------------------------------------- */}
      <div className="sticky top-0 z-50 bg-[#28211E] border-b border-[#4A3E38] shadow-md px-4 py-2.5 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#D4A373]">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-semibold text-white tracking-wide">Live Concept Preview</span>
            <span className="hidden sm:inline text-[#4A3E38]">|</span>
            <span className="text-[#F4EDE2]/80 hidden md:inline">Crafted for Malpa Cafe by Apex Digital</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCompareOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3E322C] hover:bg-[#C86D33] text-[#F4EDE2] text-xs font-medium border border-[#4A3E38] transition-all duration-200 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>⚡ Compare Before vs. After</span>
            </button>
            <a
              href="http://www.malpacafe.com/"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex items-center gap-1 text-xs text-[#D4A373] hover:underline"
            >
              Original Web Link <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MAIN HEADER / NAVIGATION */}
      {/* ------------------------------------------------------------- */}
      <header className="bg-[#1C1715]/90 backdrop-blur-md sticky top-[41px] z-40 border-b border-[#4A3E38]/60 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-[#3E322C] border border-[#4A3E38] flex items-center justify-center text-[#C86D33] group-hover:border-[#C86D33] transition-colors">
              <Coffee className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-wider text-[#F4EDE2] block leading-none">
                MALPA
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4A373] font-mono block mt-1">
                Cafe & Artisanal Bites
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#hero-vintage-sanctuary" className="hover:text-[#C86D33] transition-colors">
              Home
            </a>
            <a href="#neighborhood-craft-ethos" className="hover:text-[#C86D33] transition-colors">
              Our Story
            </a>
            <a href="#signature-offerings" className="hover:text-[#C86D33] transition-colors">
              Menu & Specialties
            </a>
            <a href="#neighborhood-reviews" className="hover:text-[#C86D33] transition-colors">
              Reviews (4.9 ★)
            </a>
            <a href="#visit-and-hours" className="hover:text-[#C86D33] transition-colors">
              Visit Us
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:2017752500"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#F4EDE2] bg-[#3E322C] px-3.5 py-2 rounded-full border border-[#4A3E38] hover:border-[#D4A373] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#C86D33]" />
              (201) 775-2500
            </a>
            <a
              href="http://www.malpacafe.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#C86D33] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#b05d28] hover:shadow-[0_0_20px_rgba(200,109,51,0.4)] transition-all transform active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Online
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#28211E] border border-[#4A3E38] text-[#F4EDE2]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#28211E] border-b border-[#4A3E38] px-4 py-6 space-y-4">
            <a
              href="#hero-vintage-sanctuary"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium border-b border-[#4A3E38]/40"
            >
              Home
            </a>
            <a
              href="#neighborhood-craft-ethos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium border-b border-[#4A3E38]/40"
            >
              Our Story
            </a>
            <a
              href="#signature-offerings"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium border-b border-[#4A3E38]/40"
            >
              Menu & Specialties
            </a>
            <a
              href="#neighborhood-reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium border-b border-[#4A3E38]/40"
            >
              Neighborhood Reviews
            </a>
            <a
              href="#visit-and-hours"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium"
            >
              Find Our Corner
            </a>
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="http://www.malpacafe.com/"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center bg-[#C86D33] text-white py-3 rounded-full font-semibold shadow-lg"
              >
                Order Pickup Online
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 1: HERO VINTAGE SANCTUARY */}
      {/* ------------------------------------------------------------- */}
      <section
        id="hero-vintage-sanctuary"
        className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-[#1C1715] via-[#28211E] to-[#1C1715] border-b border-[#4A3E38]"
      >
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C86D33]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#D4A373]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 60%: Headline & Editorial intro */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3E322C] border border-[#4A3E38]">
                <Award className="w-4 h-4 text-[#D4A373]" />
                <span className="text-xs uppercase font-mono tracking-wider text-[#D4A373]">
                  4.9 ★ Rating • 93 Local Google Reviews
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4EDE2] leading-[1.15]">
                Warm Vintage European Cafe <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C86D33] via-[#D4A373] to-[#C86D33]">
                  in West New York
                </span>
              </h1>

              <p className="text-lg text-[#F4EDE2]/80 leading-relaxed max-w-2xl font-light">
                Step inside exposed brick walls, rich amber lighting, and the irresistible aroma of freshly baked 
                banana bread and handcrafted Rosemary Maple lattes. A cozy sanctuary designed to slow down and savor.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="http://www.malpacafe.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#C86D33] hover:bg-[#b05d28] text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-[0_0_30px_rgba(200,109,51,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Order Pickup Online</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#signature-offerings"
                  className="inline-flex items-center justify-center gap-2 bg-[#28211E] hover:bg-[#3E322C] text-[#F4EDE2] px-6 py-4 rounded-full text-base font-medium border border-[#4A3E38] hover:border-[#D4A373] transition-all duration-200"
                >
                  <Utensils className="w-4 h-4 text-[#D4A373]" />
                  <span>Explore Menu</span>
                </a>
              </div>

              {/* Quick Info Badges */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#4A3E38]/50 text-xs text-[#F4EDE2]/70 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C86D33]" />
                  <span>158 61st St, West NY</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C86D33]" />
                  <span>Wed–Sat: 7am–3pm</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#C86D33]" />
                  <span>Fresh Daily Pastries</span>
                </div>
              </div>

            </div>

            {/* Right 40%: Interactive Floating Polaroid Photo Stack */}
            <div className="lg:col-span-5 relative min-h-[420px] flex items-center justify-center">
              
              {/* Decorative Frame Stamp */}
              <div className="absolute -top-6 -right-6 text-[100px] font-serif font-black text-[#3E322C]/30 pointer-events-none select-none">
                MALPA
              </div>

              {/* Polaroid Selector Tabs */}
              <div className="absolute top-0 right-0 z-20 flex gap-2">
                {POLAROID_STACK.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActivePolaroidIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activePolaroidIndex === idx
                        ? "bg-[#C86D33] scale-125 shadow-[0_0_8px_#C86D33]"
                        : "bg-[#4A3E38] hover:bg-[#D4A373]"
                    }`}
                    title={item.title}
                  />
                ))}
              </div>

              {/* Active Polaroid Display Card */}
              <div className="relative w-full max-w-sm">
                {POLAROID_STACK.map((item, idx) => {
                  const isActive = idx === activePolaroidIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActivePolaroidIndex(idx)}
                      className={`cursor-pointer transition-all duration-500 transform ${
                        isActive
                          ? "relative z-30 scale-100 rotate-0 shadow-2xl shadow-black/80 opacity-100"
                          : `absolute top-4 left-4 z-10 scale-95 opacity-60 hover:opacity-90 ${item.rotation}`
                      }`}
                    >
                      <div className="bg-[#FAF6F0] text-[#1C1715] p-4 rounded-lg shadow-xl border border-stone-300">
                        {/* Photo Box */}
                        <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded bg-amber-950/10 mb-4 group">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                          />
                          <span className="absolute top-3 left-3 bg-[#1C1715]/85 text-[#D4A373] text-[10px] uppercase font-mono px-2.5 py-1 rounded border border-[#4A3E38]">
                            {item.badge}
                          </span>
                        </div>

                        {/* Polaroid Caption & Review Note */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="font-serif font-bold text-lg text-[#1C1715]">
                              {item.title}
                            </h3>
                            <div className="flex text-amber-500">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-current" />
                              ))}
                            </div>
                          </div>

                          <div className="p-2.5 bg-[#F2EBDC] rounded border border-stone-200 text-xs italic text-stone-800 leading-relaxed font-serif">
                            {item.reviewQuote}
                          </div>

                          <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1 font-mono">
                            <span>Verified Local Review</span>
                            <span className="font-semibold">— {item.author}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SIGNATURE INTERACTIVE WIDGET: BAKER'S FRESHNESS METER */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-[#28211E] border-b border-[#4A3E38] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1C1715] border border-[#4A3E38] rounded-2xl p-6 shadow-xl">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#4A3E38]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#3E322C] text-[#C86D33] border border-[#4A3E38]">
                  <Flame className="w-5 h-5 animate-bounce" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#F4EDE2]">
                    Daily Baker&apos;s Freshness & Specialty Meter
                  </h3>
                  <p className="text-xs text-[#D4A373] font-mono">
                    Live batch updates from our kitchen counter in West New York
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#F4EDE2]/70 bg-[#3E322C] px-3 py-1.5 rounded-lg border border-[#4A3E38]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Updated 12 Mins Ago</span>
              </div>
            </div>

            {/* Meter Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {freshnessStatus.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#28211E] p-4 rounded-xl border border-[#4A3E38] hover:border-[#C86D33]/60 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-semibold mb-2">
                    <span className="text-[#F4EDE2] truncate">{item.name}</span>
                    <span className="text-[#C86D33] font-mono">{item.capacity}% Fresh</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-[#1C1715] h-2 rounded-full overflow-hidden mb-2 border border-[#4A3E38]">
                    <div
                      className="bg-gradient-to-r from-[#C86D33] to-[#D4A373] h-full rounded-full transition-all duration-1000"
                      style={{ width: `${item.capacity}%` }}
                    />
                  </div>

                  <p className="text-[11px] text-[#D4A373]/90 font-mono italic">
                    {item.batchTime}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 2: OUR CRAFT & STORY */}
      {/* ------------------------------------------------------------- */}
      <section id="neighborhood-craft-ethos" className="py-20 bg-[#1C1715] border-b border-[#4A3E38]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4A373] bg-[#3E322C] px-3.5 py-1 rounded-full border border-[#4A3E38]">
              Established Cafe • West New York, NJ
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F4EDE2]">
              Welcome to Malpa Cafe
            </h2>
            
            {/* Brass-style divider line */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#D4A373]" />
              <div className="w-2 h-2 rounded-full bg-[#C86D33]" />
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#D4A373]" />
            </div>
          </div>

          {/* Narrative Card */}
          <div className="bg-[#28211E] border border-[#4A3E38] rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C86D33]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Toggle tabs for philosophy */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex p-1 bg-[#1C1715] rounded-full border border-[#4A3E38]">
                <button
                  onClick={() => setEthosTab("coffee")}
                  className={`px-5 py-2 rounded-full text-xs font-mono transition-all ${
                    ethosTab === "coffee"
                      ? "bg-[#C86D33] text-white shadow"
                      : "text-[#F4EDE2]/70 hover:text-white"
                  }`}
                >
                  ☕ Specialty Coffee Philosophy
                </button>
                <button
                  onClick={() => setEthosTab("pastry")}
                  className={`px-5 py-2 rounded-full text-xs font-mono transition-all ${
                    ethosTab === "pastry"
                      ? "bg-[#C86D33] text-white shadow"
                      : "text-[#F4EDE2]/70 hover:text-white"
                  }`}
                >
                  🥐 House Pastry Heritage
                </button>
              </div>
            </div>

            {/* Content text */}
            <div className="prose prose-invert max-w-none text-center sm:text-left space-y-6">
              {ethosTab === "coffee" ? (
                <>
                  <p className="text-lg text-[#F4EDE2]/90 leading-relaxed font-light">
                    Located in West New York, NJ, Malpa Cafe offers a cozy neighborhood spot for coffee and bites.
                    Operating Wednesday through Sunday with specialized morning and afternoon hours, we serve our community
                    with dedication and fresh daily offerings.
                  </p>
                  <p className="text-base text-[#F4EDE2]/75 leading-relaxed">
                    Our coffee program emphasizes quality ingredients, precision extraction, and signature handcrafted
                    flavors like our famous <strong className="text-[#D4A373]">Rosemary Maple Latte</strong> and warm Ceylon cinnamon infusions.
                    Whether you are stopping by for a morning pick-me-up or looking to slow down on the weekend, our door is wide open.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-lg text-[#F4EDE2]/90 leading-relaxed font-light">
                    Every pastry at Malpa Cafe is crafted with pure commitment to warmth and comfort. From our legendary
                    <strong className="text-[#D4A373]"> House Banana Bread</strong> that local patrons call &ldquo;the best ever tasted&rdquo;, to golden buttery croissants ham-and-cheese pressed paninis.
                  </p>
                  <p className="text-base text-[#F4EDE2]/75 leading-relaxed">
                    We source rich European butter, organic cinnamon, and local maple syrup so every single bite delivers high-contrast taste and rustic elegance.
                  </p>
                </>
              )}
            </div>

            {/* Owner Signature Highlight */}
            <div className="mt-10 pt-6 border-t border-[#4A3E38] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#D4A373]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C86D33]" />
                <span>Family & Locally Owned Storefront</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C86D33]" />
                <span>158 61st St, West New York, NJ</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 3: CURATED CAFE MENU */}
      {/* ------------------------------------------------------------- */}
      <section id="signature-offerings" className="py-20 bg-[#28211E] border-b border-[#4A3E38]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4A373] block mb-2">
                Fresh & Authentic Daily Selection
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F4EDE2]">
                Curated Cafe Menu
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 bg-[#1C1715] p-1.5 rounded-full border border-[#4A3E38]">
              {[
                { id: "all", label: "All Items" },
                { id: "specialties", label: "Specialty Lattes" },
                { id: "pastries", label: "Bakery & Treats" },
                { id: "paninis", label: "Warm Paninis" }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#C86D33] text-white font-semibold shadow-md"
                      : "text-[#F4EDE2]/70 hover:text-white hover:bg-[#3E322C]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tabbed Visual Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.map((item) => {
              const isFav = favorites.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-[#1C1715] rounded-xl border border-[#4A3E38] overflow-hidden hover:border-[#C86D33]/80 transition-all duration-300 shadow-xl group flex flex-col justify-between"
                >
                  {/* Photo Banner */}
                  <div className="relative h-52 overflow-hidden bg-stone-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1715] via-transparent to-transparent opacity-80" />

                    {/* Badge & Favorite */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="bg-[#3E322C]/90 backdrop-blur-md text-[#D4A373] text-[10px] font-mono font-semibold px-2.5 py-1 rounded border border-[#4A3E38]">
                        {item.badge}
                      </span>
                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className={`p-2 rounded-full backdrop-blur-md transition-all ${
                          isFav
                            ? "bg-rose-600 text-white shadow-md scale-110"
                            : "bg-[#1C1715]/70 text-[#F4EDE2]/70 hover:text-white"
                        }`}
                        title="Save item"
                      >
                        <Heart className={`w-4 h-4 ${isFav ? "fill-current" : ""}`} />
                      </button>
                    </div>

                    <div className="absolute bottom-3 left-3 font-mono font-bold text-lg text-[#D4A373] bg-[#1C1715]/85 px-3 py-1 rounded border border-[#4A3E38]">
                      {item.price}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-serif font-bold text-xl text-[#F4EDE2] group-hover:text-[#C86D33] transition-colors mb-2">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#F4EDE2]/75 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Tasting note badge */}
                    <div className="bg-[#28211E] p-3 rounded-lg border border-[#4A3E38] text-[11px] font-mono text-[#D4A373]">
                      <span className="text-[#F4EDE2]/50 block uppercase text-[9px] mb-0.5">Tasting Profile:</span>
                      {item.tastingNote}
                    </div>

                    {/* Dietary Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.dietary.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono bg-[#3E322C] text-[#F4EDE2]/80 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      <a
                        href="http://www.malpacafe.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#C86D33] hover:bg-[#b05d28] text-white text-xs font-semibold py-2.5 rounded-lg transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Order Item
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 4: NEIGHBORHOOD REVIEWS */}
      {/* ------------------------------------------------------------- */}
      <section id="neighborhood-reviews" className="py-20 bg-[#1C1715] border-b border-[#4A3E38] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4A373] bg-[#3E322C] px-3.5 py-1 rounded-full border border-[#4A3E38]">
              Neighborhood Love
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F4EDE2]">
              Loved by West New York Locals
            </h2>
            <div className="flex items-center justify-center gap-2 text-[#D4A373] pt-1">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-mono text-xs font-bold text-[#F4EDE2]">
                4.9 ★ (93 Verified Google Reviews)
              </span>
            </div>
          </div>

          {/* Testimonial Cards Slider / Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CUSTOMER_REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className="bg-[#28211E] border border-[#4A3E38] rounded-xl p-6 sm:p-8 relative shadow-lg hover:border-[#C86D33] transition-colors group"
              >
                {/* Watermark Quote */}
                <div className="absolute top-4 right-6 text-6xl font-serif text-[#4A3E38]/30 group-hover:text-[#C86D33]/20 transition-colors pointer-events-none select-none">
                  “
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C86D33] text-white flex items-center justify-center font-serif font-bold text-lg shadow-md">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#F4EDE2] text-sm">
                        {rev.author}
                      </h4>
                      <span className="text-[10px] font-mono text-[#D4A373] block">
                        Verified Google Reviewer • {rev.relativeTime}
                      </span>
                    </div>
                  </div>

                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="mb-4 bg-[#1C1715]/60 p-3 rounded-lg border border-[#4A3E38]/60 text-xs font-mono text-[#D4A373]">
                  <span className="text-[#F4EDE2]/50 block text-[9px] uppercase">Key Highlight:</span>
                  &ldquo;{rev.highlight}&rdquo;
                </div>

                <p className="text-xs sm:text-sm text-[#F4EDE2]/80 leading-relaxed italic font-serif">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 5: FIND OUR CORNER (VISIT & HOURS) */}
      {/* ------------------------------------------------------------- */}
      <section id="visit-and-hours" className="py-20 bg-[#28211E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left 6 columns: Styled Map frame */}
            <div className="lg:col-span-6 bg-[#1C1715] rounded-2xl border border-[#4A3E38] p-6 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#C86D33]" />
                    <h3 className="font-serif text-xl font-bold text-[#F4EDE2]">
                      West New York Storefront
                    </h3>
                  </div>
                  <span className="text-xs font-mono bg-[#3E322C] text-[#D4A373] px-2.5 py-1 rounded border border-[#4A3E38]">
                    NJ 07093
                  </span>
                </div>

                <p className="text-xs text-[#F4EDE2]/75 mb-6 font-mono">
                  158 61st St, West New York, NJ 07093, USA
                </p>

                {/* Map Graphic Container */}
                <div className="relative h-64 rounded-xl overflow-hidden border border-[#4A3E38] bg-[#1C1715] flex flex-col items-center justify-center text-center p-6 group">
                  <img
                    src={VISUAL_ASSETS[0].url}
                    alt="Malpa Cafe Location Map Preview"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                  />
                  <div className="relative z-10 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#C86D33] text-white flex items-center justify-center mx-auto shadow-xl animate-bounce">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-white text-base">
                        Malpa Cafe Corner
                      </h4>
                      <p className="text-xs text-[#D4A373] font-mono">
                        Easy street parking & neighborhood seating
                      </p>
                    </div>

                    <a
                      href="https://maps.google.com/?q=158+61st+St,+West+New+York,+NJ+07093"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-[#C86D33] hover:bg-[#b05d28] text-white text-xs font-semibold px-4 py-2 rounded-full shadow transition-all"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#4A3E38] flex items-center justify-between text-xs font-mono text-[#F4EDE2]/70">
                <span>Direct Phone Orders:</span>
                <a href="tel:2017752500" className="text-[#C86D33] hover:underline font-bold">
                  (201) 775-2500
                </a>
              </div>
            </div>

            {/* Right 6 columns: Operating Hours & Direct CTAs */}
            <div className="lg:col-span-6 bg-[#1C1715] rounded-2xl border border-[#4A3E38] p-8 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-[#3E322C] text-[#C86D33] border border-[#4A3E38]">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#F4EDE2]">
                      Operating Schedule
                    </h3>
                    <p className="text-xs text-[#D4A373] font-mono">
                      Specialized morning & afternoon cafe hours
                    </p>
                  </div>
                </div>

                {/* Hours List */}
                <div className="space-y-2.5 mb-8">
                  {OPERATING_HOURS.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-3 rounded-lg border text-xs font-mono transition-colors ${
                        item.active
                          ? "bg-[#28211E] border-[#4A3E38] text-[#F4EDE2]"
                          : "bg-[#1C1715] border-[#4A3E38]/40 text-[#F4EDE2]/40"
                      }`}
                    >
                      <span className="font-semibold">{item.day}</span>
                      <span className={item.active ? "text-[#D4A373] font-bold" : ""}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Actions */}
              <div className="space-y-3 pt-4 border-t border-[#4A3E38]">
                <a
                  href="http://www.malpacafe.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#C86D33] hover:bg-[#b05d28] text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(200,109,51,0.4)] transition-all"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Order Online for Pickup</span>
                </a>

                <a
                  href="tel:2017752500"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#28211E] hover:bg-[#3E322C] text-[#F4EDE2] py-3 rounded-xl font-medium border border-[#4A3E38] hover:border-[#D4A373] transition-all text-xs font-mono"
                >
                  <Phone className="w-4 h-4 text-[#C86D33]" />
                  <span>Call Storefront: (201) 775-2500</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* FOOTER */}
      {/* ------------------------------------------------------------- */}
      <footer className="bg-[#1C1715] border-t border-[#4A3E38] py-12 text-xs font-mono text-[#F4EDE2]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#3E322C] text-[#C86D33] flex items-center justify-center border border-[#4A3E38]">
              <Coffee className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif font-bold text-white text-sm block">MALPA CAFE</span>
              <span>158 61st St, West New York, NJ 07093</span>
            </div>
          </div>

          <div className="text-center md:text-right space-y-1">
            <p>© {new Date().getFullYear()} Malpa Cafe. All rights reserved.</p>
            <p className="text-[#D4A373]/80">
              Bespoke Digital Uplift Concept • Crafted by Apex Digital
            </p>
          </div>
        </div>
      </footer>

      {/* ------------------------------------------------------------- */}
      {/* STICKY MOBILE DOCK */}
      {/* ------------------------------------------------------------- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#28211E]/95 backdrop-blur-lg border-t border-[#4A3E38] p-3 shadow-2xl flex items-center gap-3">
        <a
          href="tel:2017752500"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#3E322C] text-[#F4EDE2] py-3 rounded-full font-mono text-xs font-bold border border-[#4A3E38]"
        >
          <Phone className="w-4 h-4 text-[#C86D33]" />
          <span>Call Store</span>
        </a>
        <a
          href="http://www.malpacafe.com/"
          target="_blank"
          rel="noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#C86D33] text-white py-3 rounded-full font-semibold text-xs shadow-lg"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Order Online</span>
        </a>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* BEFORE VS AFTER AUDIT COMPARISON MODAL */}
      {/* ------------------------------------------------------------- */}
      {isCompareOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
          <div className="bg-[#28211E] border border-[#4A3E38] rounded-2xl max-w-4xl w-full p-6 sm:p-8 relative shadow-2xl text-[#F4EDE2] my-8 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setIsCompareOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#1C1715] border border-[#4A3E38] text-[#F4EDE2] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-8 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3E322C] text-[#D4A373] text-xs font-mono mb-3 border border-[#4A3E38]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Storefront Digital Transformation Audit</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F4EDE2]">
                Malpa Cafe: Old Website vs. New Bespoke Storefront
              </h3>
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              
              {/* OLD SITE COLUMN */}
              <div className="bg-[#1C1715] p-5 rounded-xl border border-red-900/40 space-y-4">
                <div className="flex items-center justify-between border-b border-red-900/30 pb-3">
                  <span className="font-serif font-bold text-red-400 text-base">
                    Original Web Presence
                  </span>
                  <span className="text-[10px] font-mono bg-red-950 text-red-300 px-2.5 py-0.5 rounded border border-red-800/40">
                    High Friction
                  </span>
                </div>

                <div className="bg-stone-900 p-4 rounded border border-stone-800 text-xs font-mono text-stone-400 space-y-2">
                  <div className="flex items-center gap-2 text-red-400">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>Plain Text Placeholder</span>
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    The current website is a minimalist unstyled text page with zero food/drink photography or interactive menu options, completely hiding your 4.9-star reviews.
                  </p>
                </div>

                <ul className="space-y-2 text-xs text-stone-400 font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span> Zero mobile menu navigation or photography.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span> Customers forced to guess coffee offerings or call blindly.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span> 4.9-star Google rating and reviews completely unrepresented.
                  </li>
                </ul>
              </div>

              {/* NEW BESPOKE SITE COLUMN */}
              <div className="bg-[#1C1715] p-5 rounded-xl border border-emerald-900/40 space-y-4">
                <div className="flex items-center justify-between border-b border-emerald-900/30 pb-3">
                  <span className="font-serif font-bold text-emerald-400 text-base">
                    New Bespoke Storefront
                  </span>
                  <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2.5 py-0.5 rounded border border-emerald-800/40">
                    High Conversion
                  </span>
                </div>

                <div className="bg-[#28211E] p-4 rounded border border-[#4A3E38] text-xs font-mono text-[#D4A373] space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Warm Vintage European Aesthetic</span>
                  </div>
                  <p className="text-[11px] text-[#F4EDE2]/80 leading-relaxed">
                    Exposed brick textures, Polaroid photo stack, real customer review embeds, and interactive Baker&apos;s Freshness Meter.
                  </p>
                </div>

                <ul className="space-y-2 text-xs text-[#F4EDE2]/90 font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> Instant tabbed menu with dietary tags & tasting profiles.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> Real-time baker&apos;s item availability indicator.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> One-tap mobile ordering & store call buttons.
                  </li>
                </ul>
              </div>

            </div>

            {/* Outreach Copy Preview */}
            <div className="bg-[#1C1715] p-5 rounded-xl border border-[#4A3E38] space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4A373] block">
                Tailored Outreach Message Draft
              </span>
              <p className="text-xs text-[#F4EDE2]/80 italic font-serif leading-relaxed">
                &ldquo;Hi Malpa Cafe team, I&apos;ve been admiring your incredible 4.9-star reputation and heard your banana bread is legendary! Your current web presence is a bare text page that doesn&apos;t showcase your gorgeous West New York storefront or rich cafe offerings. We built a bespoke digital storefront for Malpa Cafe that highlights your specialty lattes and community warmth—take a look!&rdquo;
              </p>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsCompareOpen(false)}
                className="bg-[#C86D33] hover:bg-[#b05d28] text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}