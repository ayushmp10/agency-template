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
  Maximize2,
  Sliders,
  ChevronDown,
  ShoppingBag,
  Info
} from "lucide-react";

export default function ClientSitePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("boils");

  // Interactive Build-Your-Boil State
  const [selectedCatch, setSelectedCatch] = useState(["Snow Crab Legs", "Head-On Shrimp"]);
  const [selectedSauce, setSelectedSauce] = useState("Cap't Loui's Signature Blend");
  const [selectedSpice, setSelectedSpice] = useState("Medium (Medium Heat)");

  const catchesList = [
    { name: "Snow Crab Legs", price: "$18.99", popular: true },
    { name: "Lobster Tail", price: "$22.99", popular: true },
    { name: "Head-On Shrimp", price: "$14.99", popular: false },
    { name: "Black Mussels", price: "$13.99", popular: false },
    { name: "Green Mussels", price: "$14.99", popular: false },
    { name: "Andouille Sausage", price: "$6.99", popular: true }
  ];

  const saucesList = [
    { name: "Cap't Loui's Signature Blend", desc: "Garlic butter, cajun, lemon pepper, and secret spices combined into buttery perfection." },
    { name: "Cajun Classic", desc: "Traditional spicy cajun kick with heavy garlic and rich Louisiana flavor." },
    { name: "Lemon Pepper", desc: "Tangy, zesty lemon infused with savory melted butter and cracked black pepper." },
    { name: "Garlic Butter", desc: "Rich, creamy melted garlic butter for pure comfort seafood flavor." }
  ];

  const spiceLevels = [
    { level: "Non-Spicy", desc: "Pure buttery garlic flavor with zero heat." },
    { level: "Mild", desc: "A gentle touch of warmth to wake up your tastebuds." },
    { level: "Medium", desc: "Our house sweet spot — balanced kick that keeps you reaching for more." },
    { level: "Fire", desc: "For true spice lovers who want that intense Cajun burn." }
  ];

  const toggleCatchItem = (itemName: string) => {
    if (selectedCatch.includes(itemName)) {
      if (selectedCatch.length > 1) {
        setSelectedCatch(selectedCatch.filter(i => i !== itemName));
      }
    } else {
      setSelectedCatch([...selectedCatch, itemName]);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0F12] text-[#F3F4F6] font-sans selection:bg-[#D32F2F] selection:text-white">
      
      {/* TOP DEMO BAR */}
      <div className="bg-[#171A1F] border-b border-[#2A2E39] text-xs sm:text-sm py-2.5 px-4 sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 shadow-md">
        <div className="flex items-center gap-2">
          <span className="bg-[#D32F2F] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">PROTOTYPE</span>
          <span className="text-[#F3F4F6] font-medium">
            Live Concept Preview crafted for <strong className="text-[#F59E0B]">Cap&rsquo;t Loui - Edison, NJ</strong>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setCompareModalOpen(true)}
            className="flex items-center gap-1.5 bg-[#F59E0B]/10 hover:bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/30 px-3 py-1 rounded-md font-semibold transition-all text-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>⚡ Compare Before vs. After</span>
          </button>
          <a 
            href="#contact" 
            className="hidden sm:inline-flex items-center gap-1 bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-3 py-1 rounded-md font-medium transition-all text-xs"
          >
            <span>Claim This Design</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* NAVIGATION */}
      <header className="sticky top-[41px] sm:top-[45px] z-40 bg-[#0D0F12]/95 backdrop-blur-md border-b border-[#171A1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D32F2F] to-[#991B1B] flex items-center justify-center shadow-lg shadow-[#D32F2F]/20 group-hover:scale-105 transition-transform">
              <Utensils className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white block leading-none">
                CAP&rsquo;T LOUI
              </span>
              <span className="text-xs text-[#F59E0B] font-semibold uppercase tracking-widest mt-1 block">
                Edison, NJ • Route 27
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-[#F59E0B] transition-colors">Our Story</a>
            <a href="#builder" className="hover:text-[#F59E0B] transition-colors flex items-center gap-1">
              <span>Build A Boil</span>
              <span className="bg-[#D32F2F] text-white text-[9px] px-1.5 py-0.5 rounded font-bold">HOT</span>
            </a>
            <a href="#menu" className="hover:text-[#F59E0B] transition-colors">Menu & Sauces</a>
            <a href="#gallery" className="hover:text-[#F59E0B] transition-colors">Feast Gallery</a>
            <a href="#reviews" className="hover:text-[#F59E0B] transition-colors flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
              <span>4.9★ (1,989)</span>
            </a>
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right">
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Open Now • Closes 10 PM
              </span>
            </div>
            <a 
              href="tel:7323398019" 
              className="bg-[#D32F2F] hover:bg-[#b91c1c] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-[#D32F2F]/25 flex items-center gap-2 transition-all hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4" />
              <span>(732) 339-8019</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-[#171A1F] text-gray-300 hover:text-white border border-[#2A2E39]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#171A1F] border-b border-[#2A2E39] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-200 hover:text-[#F59E0B]"
            >
              Our Story
            </a>
            <a 
              href="#builder" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-200 hover:text-[#F59E0B]"
            >
              Build Your Boil 🦐
            </a>
            <a 
              href="#menu" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-200 hover:text-[#F59E0B]"
            >
              Signature Sauces & Menu
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-200 hover:text-[#F59E0B]"
            >
              Hands-On Feast Gallery
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-200 hover:text-[#F59E0B]"
            >
              Wall of Praise (4.9★)
            </a>
            <div className="pt-4 border-t border-gray-800 flex flex-col gap-3">
              <a 
                href="tel:7323398019" 
                className="w-full bg-[#D32F2F] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call (732) 339-8019</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-gradient-to-b from-[#0D0F12] via-[#12151B] to-[#0D0F12]">
        {/* Background neon glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D32F2F]/10 blur-[140px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#F59E0B]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#171A1F] border border-[#2A2E39] px-3.5 py-1.5 rounded-full shadow-inner">
                <div className="flex text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B]" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-gray-300">
                  Edison&rsquo;s Top-Rated Seafood Boil • <strong className="text-white">4.9★ on Google</strong>
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Gloves On, Flavor In: <br />
                <span className="bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D32F2F] bg-clip-text text-transparent">
                  Central Jersey&rsquo;s Premier Seafood Boil
                </span>
              </h1>

              {/* Subtitle / Narrative */}
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                At Cap&rsquo;t Loui Edison, every boil is crafted to order with fresh catches soaked in our secret-recipe house garlic butter sauces. We deliver an unforgettable, hands-on dining feast backed by warm Central Jersey hospitality.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a 
                  href="#builder" 
                  className="w-full sm:w-auto bg-[#D32F2F] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-[#D32F2F]/30 flex items-center justify-center gap-3 transition-all hover:scale-105"
                >
                  <Flame className="w-5 h-5 text-amber-300 animate-bounce" />
                  <span>Build Your Boil Combo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="https://maps.google.com/?q=1779+NJ-27+Edison+NJ+08817" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#171A1F] hover:bg-[#20242D] text-gray-200 border border-[#2A2E39] px-6 py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 transition-all"
                >
                  <MapPin className="w-4 h-4 text-[#F59E0B]" />
                  <span>Get Directions (Route 27)</span>
                </a>
              </div>

              {/* Quick Trust Bar */}
              <div className="pt-8 border-t border-[#171A1F] grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <div className="text-2xl font-extrabold text-white">1,900+</div>
                  <div className="text-xs text-gray-400 mt-0.5">5-Star Google Reviews</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[#F59E0B]">Fresh</div>
                  <div className="text-xs text-gray-400 mt-0.5">Daily Catches & Crabs</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white">Route 27</div>
                  <div className="text-xs text-gray-400 mt-0.5">Easy Parking in Edison</div>
                </div>
              </div>

            </div>

            {/* Right Column Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Featured Photo Card */}
                <div className="rounded-3xl overflow-hidden border-2 border-[#2A2E39] shadow-2xl shadow-black/80 bg-[#171A1F] relative group">
                  <img 
                    src="https://lh3.googleusercontent.com/grass-cs/AABkmLf3_lnbDP8OySa0WgBo63_L68CH-WULNHJIqDgF3V7kegHR21lWd-OH16Nlwjme9qB4LRmeoKakytGjzkmxmTW27-GKgQdrLOzsGmNahy3lzRf5fv_oomXoF1fjzdre9sVPY3l4cyz20tY=s4800-w1000-h800" 
                    alt="Cap't Loui Seafood Boil Feast" 
                    className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-[#F59E0B]/40 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Piping Hot & Buttery</span>
                  </div>

                  {/* Bottom Image Overlay Info */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-20">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-[#F59E0B] font-bold uppercase tracking-wider block">Featured Feast</span>
                        <h3 className="text-lg font-bold text-white">Snow Crab, Shrimp & Garlic Butter</h3>
                      </div>
                      <div className="bg-[#D32F2F] text-white p-2.5 rounded-xl shadow-md">
                        <Utensils className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating mini testimonial badge */}
                <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-[#171A1F]/95 backdrop-blur-md border border-[#2A2E39] p-4 rounded-2xl shadow-2xl max-w-[260px] hidden sm:block">
                  <div className="flex items-center gap-1 text-[#F59E0B] mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#F59E0B]" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-300 italic">
                    &ldquo;The seasoning is perfect and not too salty! Best seafood boil in Central Jersey.&rdquo;
                  </p>
                  <span className="text-[10px] font-bold text-gray-400 mt-1 block">— Allison A. (Google Review)</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BRAND STORY & CRAFT */}
      <section id="about" className="py-20 bg-[#12151B] border-t border-[#171A1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#D32F2F]/10 text-[#D32F2F] border border-[#D32F2F]/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Our Edison Roots
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Where Central Jersey Comes to Get Their Hands Dirty & Feast
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Located right on Route 27 in Edison, NJ, Cap&rsquo;t Loui was born out of a simple obsession: bringing the authentic, messy, high-energy spirit of coastal Cajun boils straight to our neighborhood. We don&rsquo;t just serve seafood—we curate an experience.
              </p>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                From our signature house garlic butter blend to our freshly sourced snow crabs, lobster tails, and Louisiana-style po&rsquo; boys, every batch is prepared fresh, tossed in spice bags, and served piping hot. Grab your bib, put on your gloves, and dive in.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-[#171A1F] p-4 rounded-2xl border border-[#2A2E39]">
                  <div className="text-[#F59E0B] font-bold text-lg mb-1">🔥 Custom Spice Levels</div>
                  <p className="text-xs text-gray-400">From mild garlic butter to blazing Fire heat tailored to your exact taste.</p>
                </div>
                <div className="bg-[#171A1F] p-4 rounded-2xl border border-[#2A2E39]">
                  <div className="text-[#F59E0B] font-bold text-lg mb-1">🦐 Premium Catches</div>
                  <p className="text-xs text-gray-400">Hand-selected snow crab, juicy shrimp, mussels, and lobster tail.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://lh3.googleusercontent.com/grass-cs/AABkmLcvxI39BFZYoHzxRzrYjJkwRQFQLcAJpTsFo7MfbWxEOYInt0v0iSrLrIUyGqwTq7i8NJ3GoL76J0wrmtnegbCJJGuRWTojQ4z5CXbHX--lQ3vFzzySFHifIMh0Ie1f6QN2XRhSyI6OnSum=s4800-w1000-h800" 
                  alt="Cap't Loui Interior Edison" 
                  className="rounded-2xl object-cover h-64 w-full border border-[#2A2E39] shadow-lg"
                />
                <div className="bg-[#D32F2F] p-6 rounded-2xl text-white shadow-xl">
                  <div className="text-3xl font-extrabold mb-1">4.9 ★</div>
                  <div className="text-xs text-red-100 uppercase tracking-widest font-semibold">Verified Google Rating across 1,989+ reviews</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-[#171A1F] p-6 rounded-2xl border border-[#2A2E39] text-gray-300">
                  <ShieldCheck className="w-8 h-8 text-[#F59E0B] mb-2" />
                  <h4 className="text-white font-bold text-base mb-1">Spotless & Welcoming</h4>
                  <p className="text-xs text-gray-400">Famously friendly customer service and immaculate dining rooms that families love.</p>
                </div>
                <img 
                  src="https://lh3.googleusercontent.com/grass-cs/AABkmLdi1Hg8PVDFQq7hqPYbHnKTPySzqRHmZ3v3HfBoWSlp--QE3nm4_mX_wx6L4JKwUqiRn3ymnUjbaljO19OuLtzIQ7teY880rC005Ksgwc7AAlUI8TPfFajeYTXcKgKcGc3YOpnz6KVmswIK=s4800-w1000-h800" 
                  alt="Seafood Feast Edison" 
                  className="rounded-2xl object-cover h-64 w-full border border-[#2A2E39] shadow-lg"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE 'BUILD YOUR SEAFOOD BOIL' SECTION */}
      <section id="builder" className="py-20 bg-[#0D0F12] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#2A2E39_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Interactive Feast Customizer
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Build Your Custom Seafood Boil
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Pick your favorite catches, choose our signature house sauce, and dial in your ideal spice level before ordering!
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Interactive Controls */}
            <div className="lg:col-span-7 space-y-8 bg-[#171A1F] p-6 sm:p-8 rounded-3xl border border-[#2A2E39] shadow-xl">
              
              {/* Step 1: Catches */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-[#D32F2F] text-white flex items-center justify-center text-xs">1</span>
                    <span>Select Your Catches (Multiple Select)</span>
                  </h3>
                  <span className="text-xs text-gray-400">Fresh Daily</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {catchesList.map((item) => {
                    const isSelected = selectedCatch.includes(item.name);
                    return (
                      <button
                        key={item.name}
                        onClick={() => toggleCatchItem(item.name)}
                        className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all ${
                          isSelected 
                            ? 'bg-[#D32F2F]/15 border-[#D32F2F] text-white shadow-md' 
                            : 'bg-[#12151B] border-[#2A2E39] text-gray-300 hover:border-gray-600'
                        }`}
                      >
                        <div>
                          <span className="font-semibold text-sm block">{item.name}</span>
                          <span className="text-xs text-gray-400">{item.price}</span>
                        </div>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                          isSelected ? 'bg-[#D32F2F] border-[#D32F2F] text-white' : 'border-gray-600'
                        }`}>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Signature Sauce */}
              <div className="pt-6 border-t border-[#2A2E39]">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#D32F2F] text-white flex items-center justify-center text-xs">2</span>
                  <span>Choose Your Sauce Blend</span>
                </h3>
                <div className="space-y-3">
                  {saucesList.map((sauce) => {
                    const isSelected = selectedSauce === sauce.name;
                    return (
                      <button
                        key={sauce.name}
                        onClick={() => setSelectedSauce(sauce.name)}
                        className={`w-full p-4 rounded-2xl border text-left transition-all ${
                          isSelected 
                            ? 'bg-[#F59E0B]/10 border-[#F59E0B] text-white shadow-md' 
                            : 'bg-[#12151B] border-[#2A2E39] text-gray-300 hover:border-gray-600'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-sm">{sauce.name}</span>
                          {isSelected && <span className="text-xs bg-[#F59E0B] text-black font-extrabold px-2 py-0.5 rounded-full">Selected</span>}
                        </div>
                        <p className="text-xs text-gray-400">{sauce.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Spice Heat Index */}
              <div className="pt-6 border-t border-[#2A2E39]">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#D32F2F] text-white flex items-center justify-center text-xs">3</span>
                  <span>Select Spice Heat Index</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {spiceLevels.map((spice) => {
                    const isSelected = selectedSpice.startsWith(spice.level);
                    return (
                      <button
                        key={spice.level}
                        onClick={() => setSelectedSpice(`${spice.level} (${spice.desc})`)}
                        className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center ${
                          isSelected 
                            ? 'bg-red-600/20 border-red-500 text-white shadow-md' 
                            : 'bg-[#12151B] border-[#2A2E39] text-gray-300 hover:border-gray-600'
                        }`}
                      >
                        <Flame className={`w-5 h-5 mb-1.5 ${isSelected ? 'text-red-500 animate-pulse' : 'text-gray-500'}`} />
                        <span className="font-bold text-xs">{spice.level}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right: Live Summary Card */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="bg-gradient-to-br from-[#171A1F] to-[#12151B] p-6 sm:p-8 rounded-3xl border-2 border-[#F59E0B]/40 shadow-2xl space-y-6">
                
                <div className="flex items-center justify-between border-b border-[#2A2E39] pb-4">
                  <div>
                    <span className="text-xs text-[#F59E0B] font-bold uppercase tracking-wider">Your Custom Boil</span>
                    <h3 className="text-xl font-extrabold text-white">Cap&rsquo;t Loui Feast Summary</h3>
                  </div>
                  <div className="bg-[#F59E0B] text-black font-extrabold px-3 py-1 rounded-full text-xs">
                    Ready to Order
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Selected Catches ({selectedCatch.length}):</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCatch.map(c => (
                        <span key={c} className="bg-[#12151B] text-white border border-[#2A2E39] px-2.5 py-1 rounded-lg text-xs font-semibold">
                          🦐 {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Selected Sauce:</span>
                    <span className="bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30 px-3 py-1.5 rounded-lg text-xs font-bold block">
                      ✨ {selectedSauce}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Spice Level:</span>
                    <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1.5 rounded-lg text-xs font-bold block">
                      🌶️ {selectedSpice}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2A2E39] space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Includes corn, potato & sausage side</span>
                    <span className="text-emerald-400 font-semibold">Free Side Included</span>
                  </div>

                  <a 
                    href="tel:7323398019" 
                    className="w-full bg-[#D32F2F] hover:bg-[#b91c1c] text-white py-4 rounded-xl font-extrabold text-sm shadow-lg shadow-[#D32F2F]/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Order This Combo Now • (732) 339-8019</span>
                  </a>

                  <p className="text-[11px] text-center text-gray-400">
                    Call ahead for rapid pickup or walk right in at 1779 NJ-27, Edison, NJ!
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SIGNATURE MENU & SAUCES SECTION */}
      <section id="menu" className="py-20 bg-[#12151B] border-t border-[#171A1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#D32F2F]/10 text-[#D32F2F] border border-[#D32F2F]/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Menu Highlights
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Signature Sauces & Favorites
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Explore what Central Jersey is raving about. From mouthwatering snow crabs to crispy Cajun fries and po&rsquo; boys.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#171A1F] p-6 rounded-3xl border border-[#2A2E39] flex flex-col justify-between hover:border-[#F59E0B]/50 transition-all">
              <div>
                <div className="bg-[#D32F2F]/10 text-[#D32F2F] text-xs font-bold px-2.5 py-1 rounded-md inline-block mb-3">BESTSELLER</div>
                <h3 className="text-xl font-bold text-white mb-2">Snow Crab Boil Combo</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  Fresh snow crab legs served with corn, potato, and soaked generously in our signature garlic butter Cajun sauce.
                </p>
              </div>
              <div className="pt-4 border-t border-[#2A2E39] flex items-center justify-between">
                <span className="text-[#F59E0B] font-extrabold text-lg">Market Price</span>
                <span className="text-xs text-gray-400">Hands-on Feast</span>
              </div>
            </div>

            <div className="bg-[#171A1F] p-6 rounded-3xl border border-[#2A2E39] flex flex-col justify-between hover:border-[#F59E0B]/50 transition-all">
              <div>
                <div className="bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-bold px-2.5 py-1 rounded-md inline-block mb-3">GUEST FAVORITE</div>
                <h3 className="text-xl font-bold text-white mb-2">Crispy Fish Po&rsquo; Boy</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  Golden fried fish fillet served on toasted French bread with lettuce, tomato, and house special remoulade sauce.
                </p>
              </div>
              <div className="pt-4 border-t border-[#2A2E39] flex items-center justify-between">
                <span className="text-[#F59E0B] font-extrabold text-lg">$14.99</span>
                <span className="text-xs text-gray-400">Crispy & Fresh</span>
              </div>
            </div>

            <div className="bg-[#171A1F] p-6 rounded-3xl border border-[#2A2E39] flex flex-col justify-between hover:border-[#F59E0B]/50 transition-all">
              <div>
                <div className="bg-[#D32F2F]/10 text-[#D32F2F] text-xs font-bold px-2.5 py-1 rounded-md inline-block mb-3">MUST TRY</div>
                <h3 className="text-xl font-bold text-white mb-2">Authentic Cajun Fries</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  Crispy seasoned French fries dusted with authentic Cajun spices. Praised by locals as the best seasoned fries around.
                </p>
              </div>
              <div className="pt-4 border-t border-[#2A2E39] flex items-center justify-between">
                <span className="text-[#F59E0B] font-extrabold text-lg">$6.99</span>
                <span className="text-xs text-gray-400">Spicy & Crispy</span>
              </div>
            </div>

            <div className="bg-[#171A1F] p-6 rounded-3xl border border-[#2A2E39] flex flex-col justify-between hover:border-[#F59E0B]/50 transition-all">
              <div>
                <div className="bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-bold px-2.5 py-1 rounded-md inline-block mb-3">LOADED COMBO</div>
                <h3 className="text-xl font-bold text-white mb-2">Custom 2lb Seafood Combo</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  Choose your catches (Shrimp, Mussels, Scallops, Crab) paired with free sausage, corn, and potatoes in Cap&rsquo;t Loui blend.
                </p>
              </div>
              <div className="pt-4 border-t border-[#2A2E39] flex items-center justify-between">
                <span className="text-[#F59E0B] font-extrabold text-lg">$38.99+</span>
                <span className="text-xs text-gray-400">Ultimate Feast</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* REAL PHOTO SHOWCASE */}
      <section id="gallery" className="py-20 bg-[#0D0F12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Hands-On Feast Gallery
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Real Guest Experiences in Edison
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Gloves on, bibs tied, and sauces flying. Take a peek inside Cap&rsquo;t Loui Edison.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="rounded-3xl overflow-hidden border border-[#2A2E39] bg-[#171A1F] group relative h-72">
              <img 
                src="https://lh3.googleusercontent.com/grass-cs/AABkmLf3_lnbDP8OySa0WgBo63_L68CH-WULNHJIqDgF3V7kegHR21lWd-OH16Nlwjme9qB4LRmeoKakytGjzkmxmTW27-GKgQdrLOzsGmNahy3lzRf5fv_oomXoF1fjzdre9sVPY3l4cyz20tY=s4800-w1000-h800" 
                alt="Cap't Loui Edison Feast" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-xs font-bold text-white bg-[#D32F2F] px-3 py-1 rounded-full">Cap&rsquo;t Loui - Edison, NJ</span>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-[#2A2E39] bg-[#171A1F] group relative h-72">
              <img 
                src="https://lh3.googleusercontent.com/grass-cs/AABkmLcvxI39BFZYoHzxRzrYjJkwRQFQLcAJpTsFo7MfbWxEOYInt0v0iSrLrIUyGqwTq7i8NJ3GoL76J0wrmtnegbCJJGuRWTojQ4z5CXbHX--lQ3vFzzySFHifIMh0Ie1f6QN2XRhSyI6OnSum=s4800-w1000-h800" 
                alt="Cap't Loui Edison Atmosphere" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-xs font-bold text-white bg-[#D32F2F] px-3 py-1 rounded-full">Vibrant Dining Room</span>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-[#2A2E39] bg-[#171A1F] group relative h-72">
              <img 
                src="https://lh3.googleusercontent.com/grass-cs/AABkmLdi1Hg8PVDFQq7hqPYbHnKTPySzqRHmZ3v3HfBoWSlp--QE3nm4_mX_wx6L4JKwUqiRn3ymnUjbaljO19OuLtzIQ7teY880rC005Ksgwc7AAlUI8TPfFajeYTXcKgKcGc3YOpnz6KVmswIK=s4800-w1000-h800" 
                alt="Xiaotong Sun Review Photo" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-xs font-bold text-white bg-[#D32F2F] px-3 py-1 rounded-full">Photo by Xiaotong Sun</span>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-[#2A2E39] bg-[#171A1F] group relative h-72">
              <img 
                src="https://lh3.googleusercontent.com/grass-cs/AABkmLdmkexVeTtTQif6_5o0P4gKtbtJeyMUOMpDshvXzHeM_zNDyQBomvanaf7uAvxju4OLK1IqtxI8WRu7cTe2ujuTXvSDnf15CBPakWUPvdS-AGNKc4x0VBygjNtD7QhcDLniu9yZug6Z4gnl=s4800-w1000-h800" 
                alt="Dennis Lubrin Review Photo" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-xs font-bold text-white bg-[#D32F2F] px-3 py-1 rounded-full">Photo by Dennis Lubrin</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VERIFIED REVIEWS SECTION */}
      <section id="reviews" className="py-20 bg-[#12151B] border-t border-[#171A1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Wall of Praise • 1,900+ 4.9★ Reviews
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Loved by Central Jersey Foodies
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Here is what real guests are saying about their seafood boils and hospitality at our Edison location.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Review 1 */}
            <div className="bg-[#171A1F] p-8 rounded-3xl border border-[#2A2E39] shadow-xl space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">2 weeks ago</span>
                </div>
                <p className="text-gray-200 text-sm sm:text-base italic leading-relaxed">
                  &ldquo;We been to many seafood boil places and this place is the best!!! The seasoning is perfect and not too salty and the staff was SO nice!!! Like I&rsquo;ve never experienced such nice customer service in NJ! They were so accommodating to our toddler and were just amazing.&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-[#2A2E39] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">Allison A.</h4>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Google Reviewer
                  </span>
                </div>
                <span className="bg-[#D32F2F]/10 text-[#D32F2F] text-xs font-bold px-2.5 py-1 rounded-md">5.0 ★</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-[#171A1F] p-8 rounded-3xl border border-[#2A2E39] shadow-xl space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">2 months ago</span>
                </div>
                <p className="text-gray-200 text-sm sm:text-base italic leading-relaxed">
                  &ldquo;Omgggg this seafood boil was sooo good 😭 everything was hot fresh and full of flavor. They definitely not stingy with the portions either. The crab legs lobster shrimp corn potatoes literally everything was soaking in that sauceeee 🤪 gloves went on and being c...&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-[#2A2E39] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">Trisha T.</h4>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Google Reviewer
                  </span>
                </div>
                <span className="bg-[#D32F2F]/10 text-[#D32F2F] text-xs font-bold px-2.5 py-1 rounded-md">5.0 ★</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-[#171A1F] p-8 rounded-3xl border border-[#2A2E39] shadow-xl space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">4 months ago</span>
                </div>
                <p className="text-gray-200 text-sm sm:text-base italic leading-relaxed">
                  &ldquo;Our experience at Cap&rsquo;t Louie in Edison was spectacular and I find one of the best seafood boil places in central Jersey. My wife and I ordered the custom 2lb combo with snow crab legs, head on shrimp, and scallops with the free side of sausage all in the Cap&rsquo;t...&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-[#2A2E39] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">Juni S.</h4>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Google Reviewer
                  </span>
                </div>
                <span className="bg-[#D32F2F]/10 text-[#D32F2F] text-xs font-bold px-2.5 py-1 rounded-md">5.0 ★</span>
              </div>
            </div>

            {/* Review 4 */}
            <div className="bg-[#171A1F] p-8 rounded-3xl border border-[#2A2E39] shadow-xl space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">a month ago</span>
                </div>
                <p className="text-gray-200 text-sm sm:text-base italic leading-relaxed">
                  &ldquo;I can no longer eat shellfish, so I had a fish po boy and it was so good. The sauce was amazing. The Cajun fries are the first I had that actually taste like true Cajun. This place was so clean and the staff are very pleasant. I will definitely be returning. M...&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-[#2A2E39] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">Nekia Williams</h4>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Google Reviewer
                  </span>
                </div>
                <span className="bg-[#D32F2F]/10 text-[#D32F2F] text-xs font-bold px-2.5 py-1 rounded-md">5.0 ★</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HOURS & NEIGHBORHOOD MAP SECTION */}
      <section id="contact" className="py-20 bg-[#0D0F12] border-t border-[#171A1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Visit Cap&rsquo;t Loui Edison
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Conveniently Located on Route 27 with Ample Parking
              </h2>

              <p className="text-gray-300 text-base leading-relaxed">
                Whether you&rsquo;re craving a quick lunch or planning a weekend family seafood feast, we are right around the corner in Edison, NJ. Walk-ins are always welcome!
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 bg-[#171A1F] p-4 rounded-2xl border border-[#2A2E39]">
                  <MapPin className="w-6 h-6 text-[#F59E0B] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-sm">Address</h4>
                    <p className="text-xs text-gray-300 mt-0.5">1779 NJ-27, Edison, NJ 08817, USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#171A1F] p-4 rounded-2xl border border-[#2A2E39]">
                  <Phone className="w-6 h-6 text-[#D32F2F] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-sm">Direct Phone</h4>
                    <a href="tel:7323398019" className="text-xs text-[#F59E0B] font-bold hover:underline mt-0.5 block">
                      (732) 339-8019
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://maps.google.com/?q=1779+NJ-27+Edison+NJ+08817" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#D32F2F] hover:bg-[#b91c1c] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-[#D32F2F]/20 flex items-center justify-center gap-2 transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
                <a 
                  href="tel:7323398019" 
                  className="bg-[#171A1F] hover:bg-[#20242D] text-gray-200 border border-[#2A2E39] px-6 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#F59E0B]" />
                  <span>Call (732) 339-8019</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="lg:col-span-6 bg-[#171A1F] p-8 rounded-3xl border border-[#2A2E39] shadow-xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2A2E39]">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#F59E0B]" />
                  <h3 className="text-lg font-bold text-white">Operating Hours</h3>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Open Today
                </span>
              </div>

              <div className="space-y-3 text-sm">
                {[
                  "Monday: 11:30 AM – 10:00 PM",
                  "Tuesday: 11:30 AM – 10:00 PM",
                  "Wednesday: 11:30 AM – 10:00 PM",
                  "Thursday: 11:30 AM – 10:00 PM",
                  "Friday: 11:30 AM – 11:00 PM",
                  "Saturday: 11:30 AM – 11:00 PM",
                  "Sunday: 11:30 AM – 10:00 PM"
                ].map((sched, idx) => {
                  const [day, time] = sched.split(": ");
                  return (
                    <div key={idx} className="flex items-center justify-between py-1.5 border-b border-[#2A2E39]/40 last:border-none">
                      <span className="text-gray-300 font-medium">{day}</span>
                      <span className="text-[#F59E0B] font-semibold">{time}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-[#2A2E39] text-center">
                <span className="text-xs text-gray-400">
                  ✨ Holiday hours may vary. Call ahead to confirm table availability.
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#090A0D] border-t border-[#171A1F] py-12 text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#D32F2F] flex items-center justify-center text-white font-bold">
              CL
            </div>
            <div>
              <span className="text-white font-bold block leading-none">Cap&rsquo;t Loui - Edison, NJ</span>
              <span className="text-xs text-gray-500 mt-1 block">© {new Date().getFullYear()} All rights reserved.</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <a href="#about" className="hover:text-white transition-colors">Our Story</a>
            <a href="#builder" className="hover:text-white transition-colors">Build A Boil</a>
            <a href="#menu" className="hover:text-white transition-colors">Menu</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews (4.9★)</a>
          </div>

          <div className="text-xs text-gray-500">
            Concept Prototype crafted by Apex Digital
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE BOTTOM DOCK */}
      <div className="fixed bottom-0 inset-x-0 bg-[#171A1F]/95 backdrop-blur-md border-t border-[#2A2E39] p-3 sm:hidden z-40 flex items-center gap-3">
        <a 
          href="tel:7323398019" 
          className="flex-1 bg-[#D32F2F] text-white py-3 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 shadow-md"
        >
          <Phone className="w-4 h-4" />
          <span>Call (732) 339-8019</span>
        </a>
        <a 
          href="#builder" 
          className="flex-1 bg-[#F59E0B] text-black py-3 rounded-xl font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md"
        >
          <Flame className="w-4 h-4" />
          <span>Build Boil</span>
        </a>
      </div>

      {/* COMPARE BEFORE VS. AFTER MODAL */}
      {compareModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#171A1F] border border-[#2A2E39] w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-[#2A2E39] flex items-center justify-between">
              <div>
                <span className="bg-[#D32F2F] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Audit & Redesign Breakdown</span>
                <h3 className="text-xl font-extrabold text-white mt-1">Cap&rsquo;t Loui Edison — Before vs. After Uplift</h3>
              </div>
              <button 
                onClick={() => setCompareModalOpen(false)}
                className="p-2 rounded-xl bg-[#0D0F12] text-gray-400 hover:text-white border border-[#2A2E39]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-8">
              
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Old Site Critique */}
                <div className="space-y-4 bg-[#0D0F12] p-6 rounded-2xl border border-red-500/30">
                  <div className="flex items-center justify-between">
                    <span className="text-red-400 font-bold text-sm uppercase tracking-wider">Current Old Site</span>
                    <span className="bg-red-500/10 text-red-400 text-xs px-2 py-0.5 rounded font-bold">Friction Points</span>
                  </div>
                  
                  <div className="rounded-xl overflow-hidden border border-gray-800">
                    <img 
                      src="https://iad.microlink.io/zEFjafiaicBUQI1xwFg4c2oJEZfrlVRWKIPwlAORfWWWPlA4oTCEJ3IeBgs3IL5UhW0W_QThKr-qbLT4Rs6cCQ.png" 
                      alt="Old Site Screenshot" 
                      className="w-full h-48 object-cover opacity-80"
                    />
                  </div>

                  <ul className="space-y-2 text-xs text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">✕</span>
                      <span>Heavy dark photo overlays obscure text, making tap targets difficult on mobile.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">✕</span>
                      <span>Custom boil combinations cannot be visualized on-page, forcing users to third-party menus.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">✕</span>
                      <span>Lacks prominence for their stellar 4.9-star Google rating across 1,900+ reviews.</span>
                    </li>
                  </ul>
                </div>

                {/* New Redesign */}
                <div className="space-y-4 bg-[#0D0F12] p-6 rounded-2xl border border-emerald-500/30">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider">New Apex Redesign</span>
                    <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-0.5 rounded font-bold">High Converting</span>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-emerald-500/30 bg-[#171A1F] h-48 flex items-center justify-center p-4 text-center">
                    <div>
                      <Sparkles className="w-8 h-8 text-[#F59E0B] mx-auto mb-2 animate-bounce" />
                      <span className="text-sm font-bold text-white block">Interactive Boil Builder & Mobile Optimized</span>
                      <span className="text-xs text-gray-400 mt-1 block">Instant catch selection, sauce preview, & direct calling</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>Interactive &ldquo;Build Your Boil&rdquo; widget lets guests customize catches and sauces instantly.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>Prominent 4.9-star Google review showcase with verified customer quotes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>Mobile-first sticky bottom dock for rapid calling and ordering access.</span>
                    </li>
                  </ul>
                </div>

              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-[#2A2E39] bg-[#12151B] flex items-center justify-between">
              <span className="text-xs text-gray-400">Ready to upgrade Cap&rsquo;t Loui Edison&rsquo;s digital storefront?</span>
              <button 
                onClick={() => setCompareModalOpen(false)}
                className="bg-[#D32F2F] hover:bg-[#b91c1c] text-white px-6 py-2 rounded-xl font-bold text-xs shadow-md"
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