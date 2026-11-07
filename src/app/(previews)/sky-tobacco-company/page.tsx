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
  Flame, 
  Coffee, 
  Wine, 
  Compass,
  X, 
  Menu as MenuIcon,
  Info
} from "lucide-react";

export default function ClientSitePage() {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("mild");
  const [pairingItem, setPairingItem] = useState("coffee");

  const cigars = [
    {
      id: "arturo-fuente",
      name: "Arturo Fuente Hemingway Short Story",
      category: "mild",
      strength: "Mild to Medium",
      origin: "Dominican Republic",
      notes: "Cedar, roasted nuts, subtle sweet vanilla",
      price: "$9.50",
      badge: "Beginner Favorite",
      description: "A legendary figurado shape offering a smooth, approachable draw with exquisite complexity. Perfect for a 30-minute afternoon retreat."
    },
    {
      id: "padron-1964",
      name: "Padrón 1964 Anniversary Series Exclusivo",
      category: "full",
      strength: "Full-Bodied",
      origin: "Nicaragua",
      notes: "Dark cocoa, espresso beans, rich earth, leather",
      price: "$21.00",
      badge: "Aficionado Choice",
      description: "Box-pressed masterpiece aged for a minimum of four years. Impeccably constructed with a rich, velvety smoke profile."
    },
    {
      id: "oliva-serie-v",
      name: "Oliva Serie V Melanio Figurado",
      category: "medium",
      strength: "Medium to Full",
      origin: "Nicaragua",
      notes: "Caramel, cedar, rich pepper, creamy espresso",
      price: "$18.50",
      badge: "Top Rated",
      description: "Crafted with expertly fermented Ecuadorian Sumatra seed wrapper. Delivers a lush, balanced finish with exceptional aroma."
    },
    {
      id: "rocky-patel",
      name: "Rocky Patel Decade Robusto",
      category: "medium",
      strength: "Medium-Full",
      origin: "Honduras",
      notes: "Rich dark chocolate, sweet spices, leather",
      price: "$13.00",
      badge: "Signature",
      description: "Celebrates ten years of excellence. Features a dark Ecuadorian Habano wrapper enveloping rich Honduran filler leaves."
    }
  ];

  const filteredCigars = cigars.filter(c => selectedCategory === "all" || c.category === selectedCategory);

  const galleryImages = [
    {
      url: "https://lh3.googleusercontent.com/grass-cs/AABkmLe_Tg7AmRruvPy4zQRDRVdVruNau_aPtDrLW9HiPJk1YEjYQ2q2fmAOl4LGgYvxh_za55qGUKOFZ90Gc09yebS3UHU5lpYbzZsbdHFMd_nMG667DX4IrnTI-WiKn5IXV4OPeBF8LA=s4800-w1000-h800",
      caption: "Walk-in Humidor Cedar Walls & Selection"
    },
    {
      url: "https://lh3.googleusercontent.com/grass-cs/AABkmLeKwRPoAOFCBs683wtOcaEDlhNJmAJlsSqa30KVUOioHvN_eybvadVU0H1xqCSemNHTEgE1B1P8K7rsK5ceawANh6n4KVsxMnJS_SJM9k2YXkfcC3HWKmcPEtZm2b1nTqN_IgRD0g=s4800-w1000-h800",
      caption: "Cozy Lounge Seating on Grove Street"
    },
    {
      url: "https://lh3.googleusercontent.com/grass-cs/AABkmLch2dspwuL_ZBhfYoVLKoVKTTHnF4MmAm-6LG2qPep4ifd-l4zXq5wB9aYaeoidB8xRNDQP9fMHqyYaClShpe6jqsa8etrTd0gORam9QTK79CZDEPY93fp5-wrwhsi5fNZ94nCv8A=s4800-w1000-h800",
      caption: "Expert Guidance by Gabriel & Team"
    },
    {
      url: "https://lh3.googleusercontent.com/grass-cs/AABkmLfg6IwfkkpqVFLgjhOg7pAHIAGb7BNKDrU1F_rgy4o7o9xIP355BZS3u9rfHYAapBuFNs4Z5psoJv3d9w20LrK9mE_a-i8_wzcmvRxNoHc7OOrdcS187YnpNGSvH6aNMR9iBF4o=s4800-w1000-h800",
      caption: "Pristine Humidification & Accessories"
    }
  ];

  const reviews = [
    {
      author: "Judith Davis",
      text: "Always fresh cigars there. The lady that works there is very very nice. She gave time and tips on how to keep my stash fresher. Wooden box and humidifier pack. Wish I knew her name.. next time I'll ask 😌",
      rating: 5,
      relativeTime: "3 months ago"
    },
    {
      author: "Anderson Diaz",
      text: "Great selection of cigars, nice small lounge with a tv and very good air circulation and filter. Owner is a great guy with good recommendations. Don’t think twice to come here. This is a definitely a go to cigar lounge. 10/10",
      rating: 5,
      relativeTime: "2 months ago"
    },
    {
      author: "Davros E",
      text: "My first time walking into a cigar shop. The lady was very helpful with my cigar selection and helped with things I needed and basically gave me a 2 min crash course on everything. It will be my go-to spot for future purchases.",
      rating: 5,
      relativeTime: "4 months ago"
    },
    {
      author: "Hein Garbers",
      text: "A great spot which I love to visit when I’m in Jersey for work. The owner of some 30 years long, Gabriel, is an institution in the area - a true gentleman. The shop offers a Very wide selection of everything non-cuban. Good prices.",
      rating: 5,
      relativeTime: "2 years ago"
    }
  ];

  const schedule = [
    "Monday: 11:30 AM – 8:00 PM",
    "Tuesday: 11:30 AM – 8:00 PM",
    "Wednesday: 11:30 AM – 10:00 PM",
    "Thursday: 11:30 AM – 10:00 PM",
    "Friday: 11:30 AM – 10:00 PM",
    "Saturday: 11:30 AM – 10:00 PM",
    "Sunday: 12:00 – 5:00 PM"
  ];

  return (
    <div className="min-h-screen bg-[#120E0C] text-[#F4EFEA] font-serif selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
      
      {/* TOP DEMO BAR */}
      <div className="bg-[#1C1613] border-b border-[#D4AF37]/20 py-2.5 px-4 sticky top-0 z-50 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="flex h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[#F4EFEA]/90 font-sans">
              Live Concept Preview crafted for <strong className="text-[#D4AF37]">Sky Tobacco Company</strong> • Downtown Jersey City
            </span>
          </div>
          <button
            onClick={() => setShowDemoModal(true)}
            className="bg-[#D4AF37] text-[#120E0C] px-3 py-1 rounded font-sans font-medium hover:bg-[#e6c158] transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            ⚡ Compare Before vs. After
          </button>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="border-b border-[#D4AF37]/15 bg-[#120E0C]/95 backdrop-blur-md sticky top-[41px] sm:top-[45px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border-2 border-[#D4AF37] flex items-center justify-center bg-[#1C1613] text-[#D4AF37] font-bold text-lg shadow-inner group-hover:scale-105 transition-transform">
              ST
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold tracking-wider text-[#F4EFEA] group-hover:text-[#D4AF37] transition-colors">
                SKY TOBACCO CO.
              </span>
              <span className="block text-[10px] tracking-widest text-[#A0522D] uppercase font-sans">
                Grove St. Sanctuary • Est. 2004
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8 font-sans text-sm text-[#F4EFEA]/80">
            <a href="#humidor" className="hover:text-[#D4AF37] transition-colors">Humidor</a>
            <a href="#heritage" className="hover:text-[#D4AF37] transition-colors">Gabriel&apos;s Legacy</a>
            <a href="#amenities" className="hover:text-[#D4AF37] transition-colors">Lounge</a>
            <a href="#pairing" className="hover:text-[#D4AF37] transition-colors">Pairing Guide</a>
            <a href="#reviews" className="hover:text-[#D4AF37] transition-colors">Reviews</a>
            <a href="#location" className="hover:text-[#D4AF37] transition-colors">Location</a>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <div className="text-right hidden xl:block font-sans">
              <span className="block text-xs text-emerald-400 font-medium flex items-center gap-1 justify-end">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Open Now
              </span>
              <span className="text-[11px] text-[#F4EFEA]/60">Close at 8:00 PM</span>
            </div>
            <a
              href="tel:2014324071"
              className="border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#120E0C] px-4 py-2.5 rounded font-sans text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              (201) 432-4071
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#F4EFEA] p-2 hover:text-[#D4AF37] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1C1613] border-b border-[#D4AF37]/20 px-6 py-5 font-sans space-y-4">
            <a href="#humidor" onClick={() => setMobileMenuOpen(false)} className="block text-base hover:text-[#D4AF37]">Walk-In Humidor</a>
            <a href="#heritage" onClick={() => setMobileMenuOpen(false)} className="block text-base hover:text-[#D4AF37]">Gabriel&apos;s Legacy</a>
            <a href="#amenities" onClick={() => setMobileMenuOpen(false)} className="block text-base hover:text-[#D4AF37]">Lounge &amp; Air Filtration</a>
            <a href="#pairing" onClick={() => setMobileMenuOpen(false)} className="block text-base hover:text-[#D4AF37]">Cigar Pairing Guide</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="block text-base hover:text-[#D4AF37]">Customer Reviews</a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)} className="block text-base hover:text-[#D4AF37]">Grove St Directions</a>
            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <a href="tel:2014324071" className="w-full bg-[#D4AF37] text-[#120E0C] py-2.5 rounded font-bold text-center flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Call (201) 432-4071
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 py-20">
        {/* Background Atmosphere Image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/grass-cs/AABkmLe_Tg7AmRruvPy4zQRDRVdVruNau_aPtDrLW9HiPJk1YEjYQ2q2fmAOl4LGgYvxh_za55qGUKOFZ90Gc09yebS3UHU5lpYbzZsbdHFMd_nMG667DX4IrnTI-WiKn5IXV4OPeBF8LA=s4800-w1000-h800"
            alt="Sky Tobacco Humidor Interior"
            className="w-full h-full object-cover object-center filter brightness-[0.25] saturate-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120E0C] via-[#120E0C]/70 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1C1613]/90 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-sans tracking-widest uppercase shadow-lg backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Est. 2004 • Downtown Jersey City Institution</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-[#F4EFEA]">
            Three Decades of Hand-Selected Sticks &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f3d37a] to-[#A0522D]">Warm Hospitality</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-[#F4EFEA]/80 font-serif leading-relaxed">
            Step into a refined sanctuary on Grove Street crafted for seasoned aficionados and curious beginners alike. Guided by Gabriel with over 30 years of mastery.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 font-sans">
            <a
              href="#humidor"
              className="w-full sm:w-auto bg-[#D4AF37] text-[#120E0C] hover:bg-[#e6c158] px-8 py-4 rounded-lg font-bold text-sm tracking-wider uppercase transition-all shadow-xl flex items-center justify-center gap-2 group"
            >
              Explore Walk-In Humidor
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#location"
              className="w-full sm:w-auto bg-[#1C1613]/90 hover:bg-[#1C1613] text-[#F4EFEA] border border-[#D4AF37]/30 px-8 py-4 rounded-lg font-bold text-sm tracking-wider uppercase transition-all backdrop-blur flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              Visit Grove St. Lounge
            </a>
          </div>

          {/* Trust Metrics Bar */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto border-t border-[#D4AF37]/15">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-[#D4AF37] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm font-sans font-semibold text-[#F4EFEA]">4.6 ★ Google Rating</p>
              <p className="text-xs text-[#F4EFEA]/60 font-sans">118+ Verified Reviews</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-bold font-serif text-[#D4AF37]">30+ Years</p>
              <p className="text-xs text-[#F4EFEA]/60 font-sans mt-0.5">Expert Guidance by Gabriel</p>
            </div>
            <div className="col-span-2 md:col-span-1 text-center">
              <p className="text-xl sm:text-2xl font-bold font-serif text-[#D4AF37]">344 Grove St</p>
              <p className="text-xs text-[#F4EFEA]/60 font-sans mt-0.5">Jersey City, NJ 07302</p>
            </div>
          </div>

        </div>
      </section>

      {/* HERITAGE STORY SPLIT */}
      <section id="heritage" className="py-24 bg-[#1C1613] relative border-y border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="relative space-y-6">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-[#D4AF37]/40 pointer-events-none" />
              <div className="relative rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/grass-cs/AABkmLeKwRPoAOFCBs683wtOcaEDlhNJmAJlsSqa30KVUOioHvN_eybvadVU0H1xqCSemNHTEgE1B1P8K7rsK5ceawANh6n4KVsxMnJS_SJM9k2YXkfcC3HWKmcPEtZm2b1nTqN_IgRD0g=s4800-w1000-h800"
                  alt="Gabriel inside Sky Tobacco lounge"
                  className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120E0C] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-sans uppercase tracking-widest text-[#D4AF37] font-semibold">Downtown JC Staple</span>
                  <p className="text-lg font-serif italic text-[#F4EFEA]">“A true gentleman and an absolute institution on Grove Street.”</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-[#D4AF37]/40 pointer-events-none" />
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-sans tracking-widest uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Unrivaled Craft &amp; Humidor Mastery</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#F4EFEA] leading-tight">
                Rooted on Grove Street with a Passion for Perfection
              </h2>

              <div className="space-y-4 text-[#F4EFEA]/80 font-serif text-base sm:text-lg leading-relaxed">
                <p>
                  Stepping into Sky Tobacco means entering a refined sanctuary crafted for seasoned aficionados and curious beginners alike. Guided by Gabriel—a neighborhood staple with over 30 years of mastery—our climate-controlled humidor offers an unmatched selection of premium non-Cuban cigars.
                </p>
                <p>
                  Never walked into a humidor before? First-time visitors frequently praise our signature 2-minute crash courses. Whether you need help selecting a single stick for an evening walk or tips on how to properly maintain your own desktop humidor at home, we take pride in warm, unpretentious hospitality.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4 font-sans">
                <div className="border-l-2 border-[#D4AF37] pl-4">
                  <p className="text-2xl font-bold font-serif text-[#D4AF37]">30+ Years</p>
                  <p className="text-xs text-[#F4EFEA]/70 mt-1">Industry Mastery &amp; Expertise</p>
                </div>
                <div className="border-l-2 border-[#D4AF37] pl-4">
                  <p className="text-2xl font-bold font-serif text-[#D4AF37]">100% Non-Cuban</p>
                  <p className="text-xs text-[#F4EFEA]/70 mt-1">Pristine Humidified Stock</p>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href="#location"
                  className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#120E0C] hover:bg-[#e6c158] px-6 py-3 rounded font-sans font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Plan Your Visit <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HUMIDOR INTERACTIVE COLLECTION PREVIEW */}
      <section id="humidor" className="py-24 bg-[#120E0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-sans tracking-widest uppercase text-[#D4AF37] font-semibold">Climate-Controlled Sanctuary</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#F4EFEA]">The Walk-In Humidor Collection</h2>
            <p className="text-[#F4EFEA]/70 font-serif">
              Explore a curated sample of our most sought-after sticks, maintained at perfect 70% humidity. Visit our Grove Street walk-in humidor to browse over 100+ selections.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-6 font-sans text-xs sm:text-sm">
              {[
                { id: "all", label: "All Selections" },
                { id: "mild", label: "Mild & Beginner Friendly" },
                { id: "medium", label: "Medium & Balanced" },
                { id: "full", label: "Full-Bodied Aficionado" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === tab.id
                      ? "bg-[#D4AF37] text-[#120E0C] shadow-md"
                      : "bg-[#1C1613] text-[#F4EFEA]/80 hover:bg-[#1C1613]/80 border border-[#D4AF37]/20"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCigars.map((cigar) => (
              <div
                key={cigar.id}
                className="bg-[#1C1613] border border-[#D4AF37]/20 rounded-xl p-6 flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all group shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-[#D4AF37]/10 px-3 py-1 rounded-bl-xl border-l border-b border-[#D4AF37]/30 text-[10px] font-sans tracking-wider text-[#D4AF37] uppercase">
                  {cigar.badge}
                </div>

                <div className="space-y-4">
                  <div className="pt-2">
                    <span className="text-[11px] font-sans tracking-wider text-[#A0522D] uppercase block">{cigar.origin}</span>
                    <h3 className="text-xl font-bold font-serif text-[#F4EFEA] group-hover:text-[#D4AF37] transition-colors mt-1">
                      {cigar.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#F4EFEA]/70 font-serif leading-relaxed">
                    {cigar.description}
                  </p>

                  <div className="bg-[#120E0C] p-3 rounded-lg border border-[#D4AF37]/10 space-y-1.5 font-sans text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#F4EFEA]/50">Strength:</span>
                      <span className="text-[#D4AF37] font-medium">{cigar.strength}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#F4EFEA]/50">Flavor Notes:</span>
                      <span className="text-[#F4EFEA] text-right max-w-[140px] truncate" title={cigar.notes}>{cigar.notes}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-sans">
                  <div>
                    <span className="text-[10px] text-[#F4EFEA]/50 uppercase block">In-Store Price</span>
                    <span className="text-lg font-bold text-[#D4AF37]">{cigar.price}</span>
                  </div>
                  <a
                    href="tel:2014324071"
                    className="bg-[#120E0C] hover:bg-[#D4AF37] hover:text-[#120E0C] text-[#D4AF37] border border-[#D4AF37]/40 px-3 py-2 rounded text-xs font-semibold transition-all flex items-center gap-1"
                  >
                    Hold Stick <Phone className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-[#1C1613] border border-[#D4AF37]/20 p-6 rounded-xl max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
            <div className="text-left">
              <h4 className="font-serif text-lg font-bold text-[#F4EFEA]">Looking for a specific brand or limited release?</h4>
              <p className="text-xs text-[#F4EFEA]/70">Call Gabriel directly or walk into our Grove Street shop to check today&apos;s fresh inventory.</p>
            </div>
            <a
              href="tel:2014324071"
              className="bg-[#D4AF37] text-[#120E0C] hover:bg-[#e6c158] px-5 py-2.5 rounded font-bold text-xs uppercase tracking-wider shrink-0 flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" /> Call (201) 432-4071
            </a>
          </div>

        </div>
      </section>

      {/* LOUNGE AMENITIES SHOWCASE */}
      <section id="amenities" className="py-24 bg-[#1C1613] border-y border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-sans tracking-widest uppercase text-[#D4AF37] font-semibold">The Speakeasy Sanctuary</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#F4EFEA]">Lounge Amenities &amp; Comfort</h2>
            <p className="text-[#F4EFEA]/70 font-serif">
              Designed for relaxation, our intimate Grove Street lounge provides the perfect backdrop to unwind after a long workday.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-[#120E0C] border border-[#D4AF37]/20 p-8 rounded-xl space-y-4 hover:border-[#D4AF37]/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-[#F4EFEA]">State-of-the-Art Air Filtration</h3>
              <p className="text-sm text-[#F4EFEA]/70 font-serif leading-relaxed">
                Enjoy pristine indoor air quality. Our high-efficiency commercial air circulation and filtration systems keep the lounge remarkably fresh and comfortable at all times.
              </p>
              <div className="pt-2 font-sans text-xs text-[#D4AF37] font-medium flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Zero Smoke Haze Guaranteed
              </div>
            </div>

            <div className="bg-[#120E0C] border border-[#D4AF37]/20 p-8 rounded-xl space-y-4 hover:border-[#D4AF37]/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-[#F4EFEA]">Plush Leather Seating &amp; TV</h3>
              <p className="text-sm text-[#F4EFEA]/70 font-serif leading-relaxed">
                Kick back in our intimate corner leather seating area. Catch the game or simply enjoy quiet conversation in an authentic speakeasy atmosphere.
              </p>
              <div className="pt-2 font-sans text-xs text-[#D4AF37] font-medium flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Intimate 5-Seat Corner
              </div>
            </div>

            <div className="bg-[#120E0C] border border-[#D4AF37]/20 p-8 rounded-xl space-y-4 hover:border-[#D4AF37]/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-[#F4EFEA]">Beginner-Friendly Crash Courses</h3>
              <p className="text-sm text-[#F4EFEA]/70 font-serif leading-relaxed">
                Nervous as a first-timer? Gabriel and team provide personalized 2-minute crash courses on cutting, lighting, pacing, and cigar preservation so you feel right at home.
              </p>
              <div className="pt-2 font-sans text-xs text-[#D4AF37] font-medium flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Zero Intimidation Policy
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* INTERACTIVE CIGAR SELECTION & PAIRING GUIDE */}
      <section id="pairing" className="py-24 bg-[#120E0C]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-sans tracking-widest uppercase text-[#D4AF37] font-semibold">Sommelier Craft</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#F4EFEA]">Interactive Pairing Guide</h2>
            <p className="text-[#F4EFEA]/70 font-serif">
              Elevate your smoke with the perfect beverage accompaniment. Select your preferred drink to see Gabriel&apos;s recommended stick profile.
            </p>

            {/* Drink Selector Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-6 font-sans">
              {[
                { id: "coffee", label: "Espresso & Dark Roast", icon: Coffee },
                { id: "bourbon", label: "Small Batch Bourbon", icon: Wine },
                { id: "scotch", label: "Single Malt Scotch", icon: Sparkles }
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setPairingItem(item.id)}
                    className={`px-5 py-3 rounded-lg font-medium text-xs sm:text-sm transition-all flex items-center gap-2 ${
                      pairingItem === item.id
                        ? "bg-[#D4AF37] text-[#120E0C] shadow-lg font-bold"
                        : "bg-[#1C1613] text-[#F4EFEA]/80 hover:bg-[#1C1613]/80 border border-[#D4AF37]/20"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pairing Display Card */}
          <div className="bg-[#1C1613] border border-[#D4AF37]/30 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
            
            {pairingItem === "coffee" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-sans uppercase tracking-widest text-[#D4AF37]">Afternoon Ritual</span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#F4EFEA]">Espresso &amp; Medium Connecticut</h3>
                  <p className="text-sm text-[#F4EFEA]/80 font-serif leading-relaxed">
                    The natural acidity and roasted bitterness of a double espresso cut cleanly through the creamy nuttiness of a mild-to-medium Connecticut or Dominican wrapper.
                  </p>
                  <div className="space-y-2 pt-2 font-sans text-xs text-[#F4EFEA]/70">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Recommended Stick: Arturo Fuente Hemingway</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Flavor Harmony: Roasted cedar &amp; espresso crema</div>
                  </div>
                </div>
                <div className="bg-[#120E0C] p-6 rounded-xl border border-[#D4AF37]/20 space-y-4 font-sans">
                  <span className="text-xs text-[#D4AF37] uppercase tracking-wider block font-semibold">Gabriel&apos;s Tasting Note</span>
                  <blockquote className="text-sm font-serif italic text-[#F4EFEA]/90">
                    &ldquo;Nothing beats sitting by the Grove Street window with a fresh espresso and an Arturo Fuente in the afternoon.&rdquo;
                  </blockquote>
                  <a href="tel:2014324071" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] hover:underline">
                    Reserve this pairing <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {pairingItem === "bourbon" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-sans uppercase tracking-widest text-[#D4AF37]">Evening Relaxation</span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#F4EFEA]">Small Batch Bourbon &amp; Maduro</h3>
                  <p className="text-sm text-[#F4EFEA]/80 font-serif leading-relaxed">
                    The caramel, vanilla, and oak notes in a quality small batch bourbon mirror the deep cocoa and sweet spice found in aged Maduro wrappers like the Padrón Anniversary series.
                  </p>
                  <div className="space-y-2 pt-2 font-sans text-xs text-[#F4EFEA]/70">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Recommended Stick: Padrón 1964 Exclusivo</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Flavor Harmony: Caramel, dark cocoa &amp; toasted oak</div>
                  </div>
                </div>
                <div className="bg-[#120E0C] p-6 rounded-xl border border-[#D4AF37]/20 space-y-4 font-sans">
                  <span className="text-xs text-[#D4AF37] uppercase tracking-wider block font-semibold">Gabriel&apos;s Tasting Note</span>
                  <blockquote className="text-sm font-serif italic text-[#F4EFEA]/90">
                    &ldquo;Bourbon brings out the natural sweetness in full-bodied Nicaraguan tobaccos. A match made in heaven.&rdquo;
                  </blockquote>
                  <a href="tel:2014324071" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] hover:underline">
                    Reserve this pairing <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {pairingItem === "scotch" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-sans uppercase tracking-widest text-[#D4AF37]">Sophisticated Speakeasy</span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#F4EFEA]">Single Malt Scotch &amp; Habano</h3>
                  <p className="text-sm text-[#F4EFEA]/80 font-serif leading-relaxed">
                    Peat, honey, and dried fruit notes in a 12-year single malt complement the rich pepper, leather, and complex spice of an Ecuadorian Habano wrapper.
                  </p>
                  <div className="space-y-2 pt-2 font-sans text-xs text-[#F4EFEA]/70">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Recommended Stick: Oliva Serie V Melanio</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Flavor Harmony: Peat smoke, leather &amp; subtle pepper</div>
                  </div>
                </div>
                <div className="bg-[#120E0C] p-6 rounded-xl border border-[#D4AF37]/20 space-y-4 font-sans">
                  <span className="text-xs text-[#D4AF37] uppercase tracking-wider block font-semibold">Gabriel&apos;s Tasting Note</span>
                  <blockquote className="text-sm font-serif italic text-[#F4EFEA]/90">
                    &ldquo;For evening aficionados who appreciate complexity, a peaty Scotch with a box-pressed Habano is unbeatable.&rdquo;
                  </blockquote>
                  <a href="tel:2014324071" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] hover:underline">
                    Reserve this pairing <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* REAL PHOTO SHOWCASE */}
      <section className="py-24 bg-[#1C1613] border-t border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-sans tracking-widest uppercase text-[#D4AF37] font-semibold">Atmospheric Gallery</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#F4EFEA]">Inside Sky Tobacco Company</h2>
            <p className="text-[#F4EFEA]/70 font-serif">
              A glimpse into our Grove Street sanctuary. Warm cedar walls, immaculate humidor cases, and comfortable lounge seating await you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl overflow-hidden border border-[#D4AF37]/20 bg-[#120E0C] h-80 shadow-lg"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120E0C] via-transparent to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-sans tracking-widest uppercase text-[#D4AF37] font-semibold">Sky Tobacco Sanctuary</span>
                  <p className="text-sm font-serif font-bold text-[#F4EFEA] mt-0.5">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CUSTOMER REVIEW WALL */}
      <section id="reviews" className="py-24 bg-[#120E0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-1 text-[#D4AF37] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#F4EFEA]">Verified Google Reviews</h2>
            <p className="text-[#F4EFEA]/70 font-serif">
              Read what neighborhood regulars and first-time visitors have to say about their experience at Sky Tobacco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-[#1C1613] border border-[#D4AF37]/20 p-8 rounded-xl space-y-4 shadow-xl relative hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#D4AF37]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-sans text-[#F4EFEA]/50">{rev.relativeTime}</span>
                  </div>

                  <p className="text-sm sm:text-base font-serif text-[#F4EFEA]/90 italic leading-relaxed">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-sans">
                  <div>
                    <p className="font-bold text-sm text-[#F4EFEA]">{rev.author}</p>
                    <p className="text-[11px] text-[#D4AF37] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Verified Google Reviewer
                    </p>
                  </div>
                  <span className="text-xs text-[#F4EFEA]/40">Jersey City, NJ</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* GROVE STREET LOCATION & WALK-IN DIRECTIONS */}
      <section id="location" className="py-24 bg-[#1C1613] border-t border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-sans tracking-widest uppercase text-[#D4AF37] font-semibold">Downtown Jersey City</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#F4EFEA]">Visit Us on Grove Street</h2>
              <p className="text-sm sm:text-base text-[#F4EFEA]/80 font-serif leading-relaxed">
                Conveniently located right in the heart of downtown Jersey City at 344 Grove St. Just steps from the Grove Street PATH station. Drop in today to browse our humidor or relax in the lounge.
              </p>

              <div className="space-y-4 pt-2 font-sans">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#F4EFEA]">Address</p>
                    <p className="text-sm text-[#F4EFEA]/70">344 Grove St #1, Jersey City, NJ 07302, USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#F4EFEA]">Direct Phone</p>
                    <a href="tel:2014324071" className="text-sm text-[#D4AF37] hover:underline">(201) 432-4071</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#F4EFEA]">Current Status</p>
                    <p className="text-xs text-emerald-400 font-medium flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Open Now • Closes at 8:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 font-sans">
                <a
                  href="https://maps.google.com/?q=344+Grove+St+%231,+Jersey+City,+NJ+07302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D4AF37] text-[#120E0C] hover:bg-[#e6c158] px-6 py-3.5 rounded font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <MapPin className="w-4 h-4" /> Get Walking Directions <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="tel:2014324071"
                  className="bg-[#120E0C] text-[#F4EFEA] border border-[#D4AF37]/40 hover:bg-[#D4AF37] hover:text-[#120E0C] px-6 py-3.5 rounded font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Call Shop Now
                </a>
              </div>

            </div>

            {/* Operating Hours Card */}
            <div className="bg-[#120E0C] border border-[#D4AF37]/30 p-8 rounded-xl shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-xl font-bold font-serif text-[#F4EFEA]">Operating Hours</h3>
                <span className="text-xs font-sans bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full font-medium">
                  Open Today
                </span>
              </div>

              <div className="space-y-3 font-sans text-xs sm:text-sm">
                {schedule.map((item, idx) => {
                  const [day, time] = item.split(": ");
                  return (
                    <div key={idx} className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-[#F4EFEA]/80 font-medium">{day}</span>
                      <span className="text-[#D4AF37]">{time}</span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 text-center">
                <p className="text-[11px] text-[#F4EFEA]/50 font-sans">
                  Holiday hours may vary. Please call ahead to confirm evening lounge availability.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#120E0C] border-t border-[#D4AF37]/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10 font-sans">
            
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-[#D4AF37] flex items-center justify-center bg-[#1C1613] text-[#D4AF37] font-bold text-sm">
                  ST
                </div>
                <span className="font-serif text-lg font-bold tracking-wider text-[#F4EFEA]">SKY TOBACCO</span>
              </div>
              <p className="text-xs text-[#F4EFEA]/70 font-serif leading-relaxed">
                Downtown Jersey City&apos;s premier walk-in humidor and quiet cigar lounge on Grove Street. Serving aficionados for over 30 years.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <p className="font-bold text-sm text-[#D4AF37] uppercase tracking-wider font-serif">Quick Links</p>
              <ul className="space-y-2 text-[#F4EFEA]/70">
                <li><a href="#humidor" className="hover:text-[#D4AF37]">Walk-In Humidor</a></li>
                <li><a href="#heritage" className="hover:text-[#D4AF37]">Gabriel&apos;s Legacy</a></li>
                <li><a href="#amenities" className="hover:text-[#D4AF37]">Lounge &amp; Air Filtration</a></li>
                <li><a href="#pairing" className="hover:text-[#D4AF37]">Cigar Pairing Guide</a></li>
                <li><a href="#reviews" className="hover:text-[#D4AF37]">Verified Reviews</a></li>
              </ul>
            </div>

            <div className="space-y-3 text-xs">
              <p className="font-bold text-sm text-[#D4AF37] uppercase tracking-wider font-serif">Location &amp; Contact</p>
              <p className="text-[#F4EFEA]/70">344 Grove St #1<br />Jersey City, NJ 07302</p>
              <p className="text-[#D4AF37] font-semibold pt-1"><a href="tel:2014324071">(201) 432-4071</a></p>
            </div>

            <div className="space-y-3 text-xs">
              <p className="font-bold text-sm text-[#D4AF37] uppercase tracking-wider font-serif">Legal Notice</p>
              <p className="text-[#F4EFEA]/60 leading-relaxed">
                You must be 21 years of age or older to purchase tobacco products. Enjoy responsibly in designated lounges.
              </p>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-[#F4EFEA]/50">
            <p>© {new Date().getFullYear()} Sky Tobacco Company. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              <span>Bespoke Concept Design crafted by Apex Digital</span>
            </p>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE DOCK */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1C1613]/95 backdrop-blur border-t border-[#D4AF37]/30 p-3 flex items-center justify-between gap-3 font-sans">
        <a
          href="tel:2014324071"
          className="flex-1 bg-[#D4AF37] text-[#120E0C] py-2.5 rounded font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow-lg"
        >
          <Phone className="w-3.5 h-3.5" /> Call (201) 432-4071
        </a>
        <a
          href="https://maps.google.com/?q=344+Grove+St+%231,+Jersey+City,+NJ+07302"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#120E0C] text-[#F4EFEA] border border-[#D4AF37]/40 py-2.5 rounded font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5"
        >
          <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> Directions
        </a>
      </div>

      {/* BEFORE VS AFTER MODAL */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#1C1613] border border-[#D4AF37] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
            
            <button
              onClick={() => setShowDemoModal(false)}
              className="absolute top-4 right-4 text-[#F4EFEA]/70 hover:text-[#D4AF37] p-2 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-sans tracking-widest uppercase text-[#D4AF37] font-semibold">Architecture Audit &amp; Transformation</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#F4EFEA]">Why This Bespoke Uplift Works for Sky Tobacco</h3>
              <p className="text-sm font-serif text-[#F4EFEA]/70">
                Transforming the digital presence of Downtown Jersey City&apos;s 30-year Grove Street cigar sanctuary.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 font-sans text-xs sm:text-sm">
              
              {/* Old Website Friction */}
              <div className="bg-[#120E0C] border border-red-500/30 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-red-400 font-bold">
                  <Info className="w-5 h-5" />
                  <span>Previous Website Limitations</span>
                </div>
                <ul className="space-y-2.5 text-[#F4EFEA]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">•</span>
                    <span>Low-contrast script typography over beige boxes that misses the rich, premium dark speakeasy mood of Grove St.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">•</span>
                    <span>Mobile visitors cannot easily view lounge amenities, air filtration details, or humidor stock.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">•</span>
                    <span>Missing one-tap directions and direct phone call actions for mobile commuters stepping off the PATH.</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#F4EFEA]/40 block mb-2">Old Mobile Snapshot Reference</span>
                  <div className="rounded border border-white/10 overflow-hidden h-40 bg-[#120E0C]">
                    <img
                      src="https://iad.microlink.io/N55jcBmpXQsjLRdH9ikwdKPM584nAutx3v6W5L7XhhmrBwTj5y-iXpzT4rtTfsesgELWaOeZzNXgszKW5Xmq_g.png"
                      alt="Old site mobile screenshot"
                      className="w-full h-full object-cover object-top opacity-70"
                    />
                  </div>
                </div>
              </div>

              {/* New Bespoke Uplift */}
              <div className="bg-[#120E0C] border border-[#D4AF37]/40 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-[#D4AF37] font-bold">
                  <Sparkles className="w-5 h-5" />
                  <span>New Bespoke Speakeasy Uplift</span>
                </div>
                <ul className="space-y-2.5 text-[#F4EFEA]/90">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>Dark cedar humidor aesthetic with warm amber glow, burnished gold accents, and espresso leather tones.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>Interactive walk-in humidor catalog with origin notes, strength ratings, and beginner badges.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>Interactive pairing guide connecting cigars with espresso, bourbon, and Scotch.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>Sticky mobile bottom dock with instant phone call and Google Maps directions for Grove St visitors.</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <a
                    href="tel:2014324071"
                    className="w-full bg-[#D4AF37] text-[#120E0C] py-3 rounded font-bold text-xs uppercase tracking-wider text-center block shadow-lg hover:bg-[#e6c158] transition-all"
                  >
                    Contact Gabriel at Sky Tobacco
                  </a>
                </div>
              </div>

            </div>

            <div className="pt-4 text-center">
              <button
                onClick={() => setShowDemoModal(false)}
                className="bg-[#120E0C] hover:bg-[#1C1613] text-[#F4EFEA] border border-[#D4AF37]/40 px-6 py-2.5 rounded font-sans text-xs uppercase tracking-wider font-semibold transition-all"
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