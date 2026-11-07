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
  Coffee,
  ShoppingBag,
  Calendar,
  Utensils,
  Award,
  Info,
  AlertTriangle,
  Layers,
  Flame,
  Check,
  Send
} from "lucide-react";

export default function ClientSitePage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedBakeTime, setSelectedBakeTime] = useState("Morning (8 AM)");
  const [cateringFormSubmitted, setCateringFormSubmitted] = useState(false);
  const [cateringData, setCateringData] = useState({
    name: "",
    email: "",
    eventType: "Honey Cake Celebration",
    guestCount: "15-25 guests",
    date: "",
    notes: ""
  });

  const photos = [
    {
      url: "https://lh3.googleusercontent.com/grass-cs/AABkmLdW7AGTFgkUTZI7-QpthBY5PR3oqYG5RAALui4WFDNuCilRsARhweZOTJ_f6Qw8H36rkRj_8ln0m9jKT8KQE4ZfWqVHZEM56wlFKAhrkizb74gex0tvOsYxWLx97d0_oZUY4_4tMn0AIyY=s4800-w1000-h800",
      caption: "Dän Bakery Storefront & Artisanal Interior",
      tag: "Storefront"
    },
    {
      url: "https://lh3.googleusercontent.com/grass-cs/AABkmLcOCIO0Zzz6NfXefzq0JRPiJ8AyM1oCKgQNBgADg3atevLX8x4c1CCEuXpssHLgvlWLmQKQt5q7KssVLaNeszLqPgrsLU02zeNf3DSkZsaiCWGcQtXWbNzac6CfbJbRmPjv991J_Q8fSuo_=s4800-w1000-h800",
      caption: "San Sebastian Cheesecake & Honey Cake Selection",
      tag: "Signature Cakes"
    },
    {
      url: "https://lh3.googleusercontent.com/grass-cs/AABkmLfX43Mw53GYClJ96E1kY2Jo-Zqj9iVLawUsUFiCGn4f-RcaL-uwGpZb28l7Cp4XoX6yD4CdO91dtObOuDuc1EAzgpGkO-ACkI7-LUQG37XAo6ln-n4Qy7uqWIgBkT8wWz0ED4vCp7Bo8pBc=s4800-w1000-h800",
      caption: "Fresh Daily Pastries & Savory Samsas",
      tag: "Baked Daily"
    },
    {
      url: "https://lh3.googleusercontent.com/grass-cs/AABkmLdnYgPpjPRwGoijkx4vGzDhVszUp6XO6XhAKBlCcCQPEIgrDjqgTE-G3nm9bVrMlu0tRXkjjJU_LDHz6K1LC_NN_5Y6k00zWS0VHnDlz7knZ4zUfSbguL55BZD9sjrJ6uPznF9RlUIQwcdf=s4800-w1000-h800",
      caption: "Artisanal Espresso & Warm European Atmosphere",
      tag: "Coffeehouse"
    }
  ];

  const reviews = [
    {
      author: "Angelika Klepacka",
      text: "Absolutely love this coffee shop! Everything is delicious, especially the European-style! 🍰☕ The desserts are fresh, flavorful, and truly remind me of authentic European bakeries. The atmosphere is warm and welcoming, making it a perfect place to relax and enjoy.",
      rating: 5,
      relativeTime: "3 weeks ago",
      verifiedGoogle: true
    },
    {
      author: "Carlos A. Hernandez",
      text: "The desserts were amazing - the san Sebastian cheesecake was incredible. The café also has great seating. I highly recommend!!",
      rating: 5,
      relativeTime: "2 months ago",
      verifiedGoogle: true
    },
    {
      author: "Joseph Alminawi",
      text: "Exciting spot for some pastry action! Really enjoyed the cheese and parsley pastry. Looking forward to trying out the others. Staff were super nice and it just kinda felt like they put a lot of love into the place. Very polished.",
      rating: 5,
      relativeTime: "a month ago",
      verifiedGoogle: true
    },
    {
      author: "Gani Stambek",
      text: "Great experience at Dan Bakery & Cafe in Hoboken! We came with a group and tried several desserts, and everything was fresh and delicious. The honey cake was especially good—soft, perfectly layered, and not overly sweet. We also enjoyed the chocolate pastries.",
      rating: 5,
      relativeTime: "a month ago",
      verifiedGoogle: true
    }
  ];

  const menuItems = [
    {
      id: 1,
      name: "Authentic Multi-Layered Honey Cake (Medovik)",
      category: "cakes",
      price: "$8.50 / slice",
      badge: "Signature Bestseller",
      description: "Delicately thin honey-infused sponge layers resting between silky, light sour cream frosting. Soft, melt-in-your-mouth texture.",
      tags: ["Wildflower Honey", "Hand-Layered", "Low Sweetness"]
    },
    {
      id: 2,
      name: "Caramelised San Sebastian Cheesecake",
      category: "cakes",
      price: "$9.00 / slice",
      badge: "Customer Favorite",
      description: "Basque-inspired baked cheesecake with a rich caramelized outer crust and a ultra-creamy, velvety custard center.",
      tags: ["Crustless", "Caramelised Crust", "Silky Center"]
    },
    {
      id: 3,
      name: "Savory Cheese & Parsley Samsa",
      category: "savory",
      price: "$6.50",
      badge: "Hot Bake",
      description: "Flaky European golden puff pastry stuffed with salted aged cheese, fresh parsley, and aromatic spices.",
      tags: ["Fresh Herbs", "Crispy Layers", "Baked Fresh Daily"]
    },
    {
      id: 4,
      name: "Traditional Beef & Onion Samsa",
      category: "savory",
      price: "$7.25",
      badge: "Chef Special",
      description: "Hand-folded flaky pastry filled with slow-marinated diced beef, caramelized onions, and cumin.",
      tags: ["Slow Marinated", "Savory Flaky", "Hearty Warmth"]
    },
    {
      id: 5,
      name: "Handmade Artisanal Chocolate Croissant",
      category: "pastries",
      price: "$5.75",
      badge: "Morning Favorite",
      description: "Butter croissant laminated in-house using European butter, filled with rich dark Belgian chocolate.",
      tags: ["84% Butter", "Belgian Chocolate", "Crispy Flakes"]
    },
    {
      id: 6,
      name: "Classic European Espresso & Cappuccino",
      category: "coffee",
      price: "$4.50",
      badge: "House Roast",
      description: "Double shot of single-origin beans roasted specifically to pair with sweet honey cake & buttery pastries.",
      tags: ["Micro-Lot Beans", "Velvet Steam", "Perfect Pairing"]
    }
  ];

  const bakeSchedule = [
    { time: "7:00 AM", event: "First Batch of Flaky Samsas & Croissants Out of Oven", icon: Flame },
    { time: "8:30 AM", event: "Signature Honey Cake Slicing & Espresso Bar Peak", icon: Layers },
    { time: "11:30 AM", event: "Fresh Midday Batch of Warm Savory Pastries", icon: Coffee },
    { time: "3:00 PM", event: "Afternoon San Sebastian Cheesecake & Tea Service", icon: Heart }
  ];

  const filteredMenu = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const handleCateringSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCateringFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FCF9F4] text-[#1E1E1E] font-sans selection:bg-[#D85A2A] selection:text-white">
      {/* 1. TOP DEMO CONVERSION BAR */}
      <div className="sticky top-0 z-50 bg-[#2B2D31] text-white px-4 py-2.5 text-xs sm:text-sm shadow-md border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center bg-[#D85A2A] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Concept Redesign
            </span>
            <span className="font-medium text-amber-100">
              Bespoke digital experience for <strong className="text-white font-semibold">Dän Bakery • Hoboken</strong>
            </span>
          </div>

          <button
            onClick={() => setIsAuditModalOpen(true)}
            className="inline-flex items-center gap-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-400/40 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>⚡ Compare Before vs. After</span>
          </button>
        </div>
      </div>

      {/* 2. NAVIGATION HEADER */}
      <header className="sticky top-[41px] z-40 bg-[#FCF9F4]/90 backdrop-blur-md border-b border-[#2B2D31]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full bg-[#2B2D31] text-[#FCF9F4] flex items-center justify-center font-serif text-2xl font-bold border-2 border-[#D85A2A] group-hover:scale-105 transition-transform">
                D
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-[#2B2D31] block leading-tight">
                  Dän Bakery
                </span>
                <span className="text-[11px] uppercase tracking-widest text-[#D85A2A] font-semibold block">
                  Hoboken • Washington St
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-[#1E1E1E]/80">
              <a href="#about" className="hover:text-[#D85A2A] transition-colors">Our Craft</a>
              <a href="#menu" className="hover:text-[#D85A2A] transition-colors">Signature Menu</a>
              <a href="#gallery" className="hover:text-[#D85A2A] transition-colors">Atmosphere</a>
              <a href="#reviews" className="hover:text-[#D85A2A] transition-colors">Reviews</a>
              <a href="#catering" className="hover:text-[#D85A2A] transition-colors">Special Orders</a>
              <a href="#contact" className="hover:text-[#D85A2A] transition-colors">Visit Us</a>
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Open Today until 8:00 PM
              </div>

              <a
                href="tel:5512997999"
                className="inline-flex items-center gap-2 bg-[#D85A2A] hover:bg-[#c24e23] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md transition-all duration-200 hover:shadow-lg"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Ahead</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#2B2D31] rounded-lg hover:bg-black/5"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-[#2B2D31]/10 bg-[#FCF9F4] px-4 pt-2 pb-6 space-y-3">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#1E1E1E]"
            >
              Our Craft
            </a>
            <a
              href="#menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#1E1E1E]"
            >
              Signature Menu
            </a>
            <a
              href="#gallery"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#1E1E1E]"
            >
              Atmosphere & Desserts
            </a>
            <a
              href="#reviews"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#1E1E1E]"
            >
              4.9★ Reviews
            </a>
            <a
              href="#catering"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#1E1E1E]"
            >
              Special Event Cakes
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#1E1E1E]"
            >
              Location & Hours
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:5512997999"
                className="w-full text-center bg-[#D85A2A] text-white py-3 rounded-xl font-semibold shadow-md"
              >
                Call (551) 299-7999
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#FCF9F4] via-[#F8F3EA] to-[#FCF9F4]">
        {/* Subtle decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D85A2A]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-[#2B2D31]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2B2D31] text-[#FCF9F4] text-xs font-semibold tracking-wide shadow-sm">
                <Award className="w-3.5 h-3.5 text-[#D85A2A]" />
                <span>Authentic European Craft • 500 Washington St</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2B2D31] leading-[1.12]">
                Bringing Old-World <br className="hidden sm:inline" />
                European Pastry Artistry to <span className="text-[#D85A2A] underline decoration-amber-300 underline-offset-8">Washington Street</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#1E1E1E]/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                At Dän Bakery, every morning starts with traditional craftsmanship—delicately hand-layering authentic honey cake, caramelizing Basque cheesecake, and baking flaky savory pastries fresh for the Hoboken community.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#menu"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D85A2A] hover:bg-[#c24e23] text-white px-8 py-4 rounded-xl text-base font-semibold shadow-lg shadow-[#D85A2A]/25 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Explore Daily Bakes</span>
                </a>

                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-amber-50 text-[#2B2D31] border border-[#2B2D31]/20 px-8 py-4 rounded-xl text-base font-semibold shadow-sm transition-all duration-200"
                >
                  <MapPin className="w-5 h-5 text-[#D85A2A]" />
                  <span>Visit Hoboken Store</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-[#2B2D31]/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-[#1E1E1E]/80">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-[#2B2D31]">4.9 / 5.0</span>
                  <span className="text-xs text-gray-500">(49 Google Reviews)</span>
                </div>
                <div className="hidden sm:block text-gray-300">•</div>
                <div className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Baked Fresh Daily</span>
                </div>
                <div className="hidden sm:block text-gray-300">•</div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Heart className="w-4 h-4 text-[#D85A2A]" />
                  <span>Hoboken Favorite</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Hero Card / Store Showcase */}
            <div className="lg:col-span-5">
              <div className="bg-white p-3 rounded-2xl shadow-xl border border-[#2B2D31]/10 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] group">
                  <img
                    src={photos[0].url}
                    alt={photos[0].caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block bg-[#D85A2A] text-white text-xs font-semibold px-2.5 py-1 rounded-md mb-2">
                      Live In-Store Status
                    </span>
                    <h3 className="font-serif text-xl font-bold">500 Washington St Facade</h3>
                    <p className="text-xs text-amber-100/90 mt-0.5">Step inside for warm coffee, honey cake, & sourdough savory pastries.</p>
                  </div>
                </div>

                {/* Pickup Status Widget inside Hero */}
                <div className="mt-3 bg-[#FCF9F4] p-4 rounded-xl border border-amber-200/60">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2B2D31] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D85A2A]" />
                      Daily Bake Schedule
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      Fresh Batch Ready
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-amber-100">
                      <span className="font-medium text-gray-800">Signature Honey Cake</span>
                      <span className="font-bold text-[#D85A2A]">Slices Ready</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-amber-100">
                      <span className="font-medium text-gray-800">San Sebastian Cheesecake</span>
                      <span className="font-bold text-[#D85A2A]">Warm Caramelized</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. BRAND STORY & EUROPEAN CRAFT SECTION */}
      <section id="about" className="py-20 bg-white border-y border-[#2B2D31]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Visual Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4] border border-gray-100">
                  <img
                    src={photos[1].url}
                    alt="San Sebastian Cheesecake"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-[#FCF9F4] rounded-2xl border border-amber-200/50 text-center">
                  <span className="font-serif text-3xl font-bold text-[#D85A2A]">100%</span>
                  <p className="text-xs font-semibold text-[#2B2D31] mt-1">Authentic European Recipes</p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="p-4 bg-[#2B2D31] text-white rounded-2xl text-center shadow-lg">
                  <span className="font-serif text-3xl font-bold text-amber-400">4.9 ★</span>
                  <p className="text-xs font-medium text-amber-100 mt-1">Hoboken's Highest Rated Bakery</p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4] border border-gray-100">
                  <img
                    src={photos[2].url}
                    alt="Savory Samsas & Pastries"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Story Text Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-[#D85A2A] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Our Story & Heritage
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2D31] leading-tight">
                European Bakery Traditions Meets Washington Street Charm
              </h2>

              <p className="text-[#1E1E1E]/80 leading-relaxed text-base">
                Behind our dark charcoal architectural facade on Washington Street, Dän Bakery is a love letter to classic European espresso bars and artisanal pastry kitchens. We believe great baking requires time, patience, and uncompromised ingredient quality.
              </p>

              <p className="text-[#1E1E1E]/80 leading-relaxed text-base">
                Whether it is our multi-layered honey cake (crafted with thin, golden honey sponge and light sour cream layers) or our burnt Basque San Sebastian cheesecake, every slice offers an authentic taste of European coffeehouse culture right here in New Jersey.
              </p>

              {/* Daily Timeline Feature */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-serif text-lg font-bold text-[#2B2D31] mb-4">
                  The Daily Morning Rhythm
                </h4>

                <div className="space-y-3">
                  {bakeSchedule.map((step, idx) => {
                    const IconComp = step.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#D85A2A]/10 text-[#D85A2A] flex items-center justify-center shrink-0">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="flex-1 flex justify-between text-xs sm:text-sm">
                          <span className="font-semibold text-[#2B2D31]">{step.time}</span>
                          <span className="text-[#1E1E1E]/75">{step.event}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. ARTISANAL PASTRY SHOWCASE (SIGNATURE MENU) */}
      <section id="menu" className="py-20 bg-[#FCF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-[#2B2D31] text-[#FCF9F4] text-xs font-bold tracking-widest uppercase">
              Handcrafted Everyday
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2D31]">
              Signature European Offerings
            </h2>
            <p className="text-[#1E1E1E]/70 text-base">
              Explore our freshly baked honey cakes, caramelized Basque cheesecakes, flaky savory samsas, and specialty coffee.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { id: "all", label: "All Offerings" },
                { id: "cakes", label: "Signature Cakes" },
                { id: "savory", label: "Savory & Samsas" },
                { id: "pastries", label: "Flaky Pastries" },
                { id: "coffee", label: "Coffeehouse Drinks" }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                    activeCategory === cat.id
                      ? "bg-[#D85A2A] text-white shadow-md scale-105"
                      : "bg-white text-[#2B2D31] border border-gray-200 hover:bg-amber-50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenu.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-[#2B2D31]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-amber-100 text-[#D85A2A] text-[11px] font-bold">
                      {item.badge}
                    </span>
                    <span className="font-bold text-lg text-[#2B2D31] font-serif">
                      {item.price}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#2B2D31] group-hover:text-[#D85A2A] transition-colors mb-2">
                    {item.name}
                  </h3>

                  <p className="text-sm text-[#1E1E1E]/75 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-medium bg-[#FCF9F4] text-gray-600 px-2 py-0.5 rounded border border-gray-200">
                        • {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="tel:5512997999"
                    className="mt-4 w-full inline-flex items-center justify-center gap-1.5 bg-[#FCF9F4] hover:bg-[#D85A2A] text-[#2B2D31] hover:text-white py-2.5 rounded-xl font-semibold text-xs border border-gray-200 hover:border-[#D85A2A] transition-all"
                  >
                    <span>Reserve for Pickup</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-amber-200 max-w-2xl mx-auto shadow-sm">
            <div className="flex items-center justify-center gap-2 text-[#D85A2A] font-bold text-sm mb-1">
              <Info className="w-4 h-4" />
              <span>Planning a Special Gathering or Whole Cake?</span>
            </div>
            <p className="text-xs text-gray-600">
              Whole Honey Cakes and San Sebastian Cheesecakes can be reserved 24 hours in advance for birthday celebrations or dinner parties.
            </p>
          </div>

        </div>
      </section>

      {/* 6. REAL PHOTO SHOWCASE (GOOGLE PLACES GALLERY) */}
      <section id="gallery" className="py-20 bg-white border-t border-[#2B2D31]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D85A2A] block mb-1">
                Authentic Gallery
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2D31]">
                Step Inside Dän Bakery
              </h2>
            </div>
            <p className="text-sm text-[#1E1E1E]/70 max-w-md mt-3 md:mt-0">
              Real moments captured inside our 500 Washington Street coffee shop in Hoboken.
            </p>
          </div>

          {/* Mosaic Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute top-3 left-3">
                  <span className="bg-[#2B2D31]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm uppercase tracking-wider">
                    {photo.tag}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-semibold leading-tight font-serif mb-1">
                    {photo.caption}
                  </p>
                  <span className="text-[11px] text-amber-300 flex items-center gap-1 font-sans">
                    <MapPin className="w-3 h-3" /> Hoboken, NJ
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VERIFIED REVIEWS SECTION (WALL OF LOVE) */}
      <section id="reviews" className="py-20 bg-[#FCF9F4] border-t border-[#2B2D31]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-1.5 bg-amber-100 text-[#D85A2A] px-3 py-1 rounded-full text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-[#D85A2A]" />
              <span>4.9 Star Verified Rating</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2D31]">
              Loved by Hoboken Coffee & Pastry Enthusiasts
            </h2>
            <p className="text-[#1E1E1E]/70 text-base">
              Read real Google Reviews from neighborhood regulars who savor our honey cake and European atmosphere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-[#2B2D31]/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Verified Google Review
                    </span>
                  </div>

                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed italic font-serif">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-[#2B2D31] text-sm">{rev.author}</h4>
                    <span className="text-xs text-gray-400">{rev.relativeTime}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#D85A2A]/10 text-[#D85A2A] font-bold text-xs flex items-center justify-center">
                    {rev.author.charAt(0)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SPECIALTY CAKE & CATERING MODULE */}
      <section id="catering" className="py-20 bg-[#2B2D31] text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#D85A2A]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-[#D85A2A] text-white text-xs font-bold uppercase tracking-wider">
                Celebrations & Events
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
                Order Whole Specialty Cakes for Your Event
              </h2>

              <p className="text-amber-100/80 leading-relaxed text-base">
                Elevate your birthday, office celebration, or weekend party in Hoboken with a custom whole Honey Cake or San Sebastian Cheesecake baked fresh to order by our pastry master.
              </p>

              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#D85A2A]" />
                  <span>Whole 8-inch & 10-inch layered honey cakes available</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#D85A2A]" />
                  <span>Custom burnt Basque San Sebastian cheesecakes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#D85A2A]" />
                  <span>Savory samsa platter options for morning meetings</span>
                </div>
              </div>
            </div>

            {/* Quick Request Form */}
            <div className="lg:col-span-6 bg-white text-[#1E1E1E] p-6 sm:p-8 rounded-2xl shadow-2xl">
              {cateringFormSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#2B2D31]">Inquiry Received!</h3>
                  <p className="text-sm text-gray-600 max-w-xs mx-auto">
                    Thank you! Our bakery team will call or email you within 2 hours to confirm your custom order.
                  </p>
                  <button
                    onClick={() => setCateringFormSubmitted(false)}
                    className="text-xs font-bold text-[#D85A2A] underline pt-2"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCateringSubmit} className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-[#2B2D31]">
                    Reserve a Whole Cake
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={cateringData.name}
                        onChange={(e) => setCateringData({ ...cateringData, name: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D85A2A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Phone or Email</label>
                      <input
                        type="text"
                        required
                        placeholder="(551) 000-0000"
                        value={cateringData.email}
                        onChange={(e) => setCateringData({ ...cateringData, email: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D85A2A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Cake Type</label>
                      <select
                        value={cateringData.eventType}
                        onChange={(e) => setCateringData({ ...cateringData, eventType: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D85A2A] bg-white"
                      >
                        <option>Whole Honey Cake (Medovik)</option>
                        <option>San Sebastian Cheesecake</option>
                        <option>Savory Samsa Platter</option>
                        <option>Assorted Pastry Box</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Pickup Date</label>
                      <input
                        type="date"
                        required
                        value={cateringData.date}
                        onChange={(e) => setCateringData({ ...cateringData, date: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D85A2A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Special Requests / Inscriptions</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Happy Birthday Alex on top!"
                      value={cateringData.notes}
                      onChange={(e) => setCateringData({ ...cateringData, notes: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D85A2A]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#D85A2A] hover:bg-[#c24e23] text-white font-semibold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Cake Request</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 9. LOCATION & OPERATING HOURS */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D85A2A] block">
                Washington Street Storefront
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2D31]">
                Visit Dän Bakery in Hoboken
              </h2>

              <p className="text-gray-600 text-base leading-relaxed">
                Located conveniently in the heart of Hoboken on Washington Street. Perfect stop for your morning espresso, lunch samsa, or evening dessert slice.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FCF9F4] border border-amber-200/60">
                  <MapPin className="w-5 h-5 text-[#D85A2A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#2B2D31]">Address</h4>
                    <p className="text-xs text-gray-600 mt-0.5">500 Washington St, Hoboken, NJ 07030, USA</p>
                    <a
                      href="https://maps.google.com/?q=500+Washington+St,+Hoboken,+NJ+07030"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#D85A2A] mt-2 hover:underline"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FCF9F4] border border-amber-200/60">
                  <Phone className="w-5 h-5 text-[#D85A2A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#2B2D31]">Direct Bakery Line</h4>
                    <a href="tel:5512997999" className="text-xs text-gray-800 font-semibold hover:text-[#D85A2A] mt-0.5 block">
                      (551) 299-7999
                    </a>
                    <span className="text-[11px] text-gray-500">Call ahead for whole cake holds & daily bake status</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Column */}
            <div className="lg:col-span-7 bg-[#FCF9F4] p-6 sm:p-8 rounded-2xl border border-[#2B2D31]/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#D85A2A]" />
                    <h3 className="font-serif text-xl font-bold text-[#2B2D31]">Operating Hours</h3>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Open Now
                  </span>
                </div>

                <div className="space-y-2.5 text-sm">
                  {[
                    { day: "Monday", hours: "7:00 AM – 8:00 PM", current: true },
                    { day: "Tuesday", hours: "7:00 AM – 8:00 PM" },
                    { day: "Wednesday", hours: "7:00 AM – 8:00 PM" },
                    { day: "Thursday", hours: "7:00 AM – 8:00 PM" },
                    { day: "Friday", hours: "7:00 AM – 8:00 PM" },
                    { day: "Saturday", hours: "8:00 AM – 8:00 PM" },
                    { day: "Sunday", hours: "8:00 AM – 8:00 PM" }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex justify-between py-2 px-3 rounded-lg text-xs sm:text-sm ${
                        item.current ? "bg-amber-100/70 font-bold text-[#2B2D31]" : "text-gray-700"
                      }`}
                    >
                      <span>{item.day}</span>
                      <span>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-500">
                  Walk-ins always welcome. Coffee & pastries ready to go.
                </span>
                <a
                  href="tel:5512997999"
                  className="inline-flex items-center gap-2 bg-[#2B2D31] hover:bg-[#1E1E1E] text-white px-5 py-2 rounded-xl text-xs font-semibold shadow transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call (551) 299-7999</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2B2D31] text-white py-12 border-t border-amber-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#D85A2A] text-white flex items-center justify-center font-serif text-xl font-bold">
                D
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight block">Dän Bakery</span>
                <span className="text-[11px] text-amber-200/80">Hoboken European Pastry & Coffeehouse</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-amber-100/70">
              <a href="#about" className="hover:text-white">Our Craft</a>
              <a href="#menu" className="hover:text-white">Signature Menu</a>
              <a href="#gallery" className="hover:text-white">Gallery</a>
              <a href="#reviews" className="hover:text-white">Reviews</a>
              <a href="#contact" className="hover:text-white">Directions</a>
            </div>

            <div className="text-xs text-amber-200/60 text-center md:text-right">
              <p>© {new Date().getFullYear()} Dän Bakery. All rights reserved.</p>
              <p className="mt-1 text-[10px]">500 Washington St, Hoboken, NJ 07030</p>
            </div>
          </div>
        </div>
      </footer>

      {/* 10. STICKY MOBILE DOCK (ONLY MOBILE) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 p-3 shadow-2xl flex items-center gap-2">
        <a
          href="tel:5512997999"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#2B2D31] text-white py-3 rounded-xl text-xs font-bold"
        >
          <Phone className="w-4 h-4 text-[#D85A2A]" />
          <span>Call Bakery</span>
        </a>

        <a
          href="#menu"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#D85A2A] text-white py-3 rounded-xl text-xs font-bold"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>View Menu</span>
        </a>
      </div>

      {/* 11. INTERACTIVE AUDIT COMPARISON MODAL */}
      {isAuditModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            
            <button
              onClick={() => setIsAuditModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[#D85A2A] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Conversion Audit & Redesign Breakdown</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2D31]">
                Dän Bakery: Before vs. Bespoke Experience
              </h2>

              {/* Side-by-Side Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                
                {/* Old Site Breakdown */}
                <div className="bg-red-50 p-5 rounded-xl border border-red-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-red-800 text-sm flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4" />
                      Previous Web Layout
                    </span>
                    <span className="text-[10px] bg-red-200 text-red-900 font-bold px-2 py-0.5 rounded">
                      Friction Points
                    </span>
                  </div>

                  <div className="rounded-lg overflow-hidden border border-red-200 aspect-video bg-gray-200">
                    <img
                      src="https://iad.microlink.io/RKqPxSpsqHIP3HniUOs3RyK3xx7qEDmTQ30iDqm3qQlIL_P0p_ybJo6mBKdlFqHhnOHuWGXk7UnSj9K9ssMKLQ.png"
                      alt="Old Site Screenshot"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <ul className="text-xs text-red-900 space-y-2 list-disc list-inside">
                    <li>Generic template banners that obscured real in-store baked goods.</li>
                    <li>No direct mobile order status or interactive honey cake showcase.</li>
                    <li>Missed potential to highlight outstanding 4.9★ Google standing in Hoboken.</li>
                  </ul>
                </div>

                {/* New Bespoke Uplift */}
                <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-800 text-sm flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      Apex Digital Bespoke Concept
                    </span>
                    <span className="text-[10px] bg-emerald-200 text-emerald-900 font-bold px-2 py-0.5 rounded">
                      High Conversion
                    </span>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-emerald-200 space-y-2">
                    <div className="text-xs font-bold text-[#2B2D31]">Key Improvements Implemented:</div>
                    <div className="text-xs text-gray-700 space-y-1.5">
                      <div className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>Warm European aesthetic with historic Washington St charcoal framing.</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>Interactive Honey Cake & San Sebastian Showcase with visual tags.</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>One-tap sticky mobile pickup bar for Washington St commuters.</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-emerald-900 italic">
                    Tailored specifically for Dän Bakery to convert local Hoboken traffic into daily repeat customers.
                  </p>
                </div>

              </div>

              {/* Outreach Note */}
              <div className="bg-[#FCF9F4] p-4 rounded-xl border border-amber-200 text-xs text-gray-700 space-y-2">
                <span className="font-bold text-[#2B2D31] block">Suggested Pitch Note:</span>
                <p className="italic">
                  &ldquo;Hi Dän Bakery team, we were admiring your fantastic 4.9-star standing in Hoboken—the raving customer reviews for your layered honey cake and San Sebastian cheesecake are so well earned! We crafted a custom, ultra-fast mobile storefront concept designed specifically to increase local pickup orders on Washington Street.&rdquo;
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setIsAuditModalOpen(false)}
                  className="bg-[#2B2D31] hover:bg-[#1E1E1E] text-white px-6 py-2.5 rounded-xl text-xs font-semibold"
                >
                  Close Audit Preview
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}