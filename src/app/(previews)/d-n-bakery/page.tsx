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
  Coffee,
  ShoppingBag,
  Info,
  Calendar,
  Layers
} from "lucide-react";

export default function ClientSitePage() {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenuTab, setActiveMenuTab] = useState("all");
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedItemForOrder, setSelectedItemForOrder] = useState<any>(null);
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Coffee pairing interactive state
  const [coffeeSize, setCoffeeSize] = useState("Regular");
  const [coffeeMilk, setCoffeeMilk] = useState("Whole Milk");
  const [coffeeFlavor, setCoffeeFlavor] = useState("None");

  const menuItems = [
    {
      id: 1,
      name: "Signature Honey Cake",
      category: "pastries",
      price: "$8.50",
      description: "Delicate, multi-layered honey-drenched sponge with whipped cream filling. Soft, perfectly layered, and not overly sweet.",
      badge: "Bestseller",
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLfX43Mw53GYClJ96E1kY2Jo-Zqj9iVLawUsUFiCGn4f-RcaL-uwGpZb28l7Cp4XoX6yD4CdO91dtObOuDuc1EAzgpGkO-ACkI7-LUQG37XAo6ln-n4Qy7uqWIgBkT8wWz0ED4vCp7Bo8pBc=s4800-w1000-h800"
    },
    {
      id: 2,
      name: "San Sebastian Cheesecake",
      category: "pastries",
      price: "$9.00",
      description: "Rich, flourless Basque cheesecake with a delightfully caramelized top and an ultra-creamy, decadent interior.",
      badge: "Fan Favorite",
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLdnYgPpjPRwGoijkx4vGzDhVszUp6XO6XhAKBlCcCQPEIgrDjqgTE-G3nm9bVrMlu0tRXkjjJU_LDHz6K1LC_NN_5Y6k00zWS0VHnDlz7knZ4zUfSbguL55BZD9sjrJ6uPznF9RlUIQwcdf=s4800-w1000-h800"
    },
    {
      id: 3,
      name: "Cheese & Parsley Savory Pastry",
      category: "savory",
      price: "$6.50",
      description: "Flaky, golden-brown artisanal pastry filled with savory European cheeses and fresh aromatic parsley.",
      badge: "Fresh Baked",
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLcOCIO0Zzz6NfXefzq0JRPiJ8AyM1oCKgQNBgADg3atevLX8x4c1CCEuXpssHLgvlWLmQKQt5q7KssVLaNeszLqPgrsLU02zeNf3DSkZsaiCWGcQtXWbNzac6CfbJbRmPjv991J_Q8fSuo_=s4800-w1000-h800"
    },
    {
      id: 4,
      name: "Artisanal Chocolate Croissant",
      category: "pastries",
      price: "$5.75",
      description: "Laminated butter dough baked to an shattering crisp, stuffed with rich European dark chocolate batons.",
      badge: "Morning Batch",
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLdW7AGTFgkUTZI7-QpthBY5PR3oqYG5RAALui4WFDNuCilRsARhweZOTJ_f6Qw8H36rkRj_8ln0m9jKT8KQE4ZfWqVHZEM56wlFKAhrkizb74gex0tvOsYxWLx97d0_oZUY4_4tMn0AIyY=s4800-w1000-h800"
    },
    {
      id: 5,
      name: "Signature Cappuccino",
      category: "beverages",
      price: "$4.75",
      description: "Double shot of rich espresso paired with velvety microfoam, crafted to complement our honey cake layers.",
      badge: "Barista Pick",
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLcOCIO0Zzz6NfXefzq0JRPiJ8AyM1oCKgQNBgADg3atevLX8x4c1CCEuXpssHLgvlWLmQKQt5q7KssVLaNeszLqPgrsLU02zeNf3DSkZsaiCWGcQtXWbNzac6CfbJbRmPjv991J_Q8fSuo_=s4800-w1000-h800"
    },
    {
      id: 6,
      name: "European Iced Latte",
      category: "beverages",
      price: "$5.25",
      description: "Smooth espresso poured over artisanal ice and your choice of chilled milk with optional natural vanilla or honey.",
      badge: "Refreshing",
      image: "https://lh3.googleusercontent.com/grass-cs/AABkmLdW7AGTFgkUTZI7-QpthBY5PR3oqYG5RAALui4WFDNuCilRsARhweZOTJ_f6Qw8H36rkRj_8ln0m9jKT8KQE4ZfWqVHZEM56wlFKAhrkizb74gex0tvOsYxWLx97d0_oZUY4_4tMn0AIyY=s4800-w1000-h800"
    }
  ];

  const filteredMenu = activeMenuTab === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeMenuTab);

  const reviews = [
    {
      author: "Angelika Klepacka",
      text: "Absolutely love this coffee shop! Everything is delicious, especially the European-style! 🥐☕ The desserts are fresh, flavorful, and truly remind me of authentic European bakeries. The atmosphere is warm and welcoming, making it a perfect place to relax and enjoy.",
      rating: 5,
      relativeTime: "3 weeks ago"
    },
    {
      author: "Carlos A. Hernandez",
      text: "The desserts were amazing - the san Sebastian cheesecake was incredible. The café also has great seating. I highly recommend!!",
      rating: 5,
      relativeTime: "2 months ago"
    },
    {
      author: "Joseph Alminawi",
      text: "Exciting spot for some pastry action! Really enjoyed the cheese and parsley pastry. Looking forward to trying out the others. Staff were super nice and it just kinda felt like they put a lot of love into the place. Very polished.",
      rating: 5,
      relativeTime: "a month ago"
    },
    {
      author: "Gani Stambek",
      text: "Great experience at Dan Bakery & Cafe in Hoboken! We came with a group and tried several desserts, and everything was fresh and delicious. The honey cake was especially good—soft, perfectly layered, and not overly sweet. We also enjoyed the chocolate pastries.",
      rating: 5,
      relativeTime: "a month ago"
    }
  ];

  const handleOpenOrder = (item: any) => {
    setIteamForOrder(item);
    setOrderModalOpen(true);
    setOrderSuccess(false);
  };

  const setIteamForOrder = (item: any) => {
    setSelectedItemForOrder(item);
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSuccess(true);
    setTimeout(() => {
      setOrderModalOpen(false);
      setOrderSuccess(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2B231F] font-sans selection:bg-[#D05A30]/20 selection:text-[#D05A30] pb-24 md:pb-0">
      
      {/* TOP DEMO BAR */}
      <div className="bg-[#2B231F] text-[#FAF4ED] px-4 py-2.5 text-xs sm:text-sm font-medium flex flex-wrap items-center justify-between gap-2 border-b border-[#D99B26]/30 sticky top-0 z-50">
        <div className="flex items-center gap-2 max-w-4xl">
          <span className="flex h-2 w-2 rounded-full bg-[#D99B26] animate-pulse"></span>
          <span>Live Concept Preview crafted exclusively for <strong className="text-[#D99B26]">Dän Bakery</strong> (Hoboken, NJ)</span>
        </div>
        <button 
          onClick={() => setShowDemoModal(true)}
          className="bg-[#D05A30] hover:bg-[#D05A30]/90 text-white px-3 py-1 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D99B26]" />
          Compare Before vs. After
        </button>
      </div>

      {/* NAVIGATION */}
      <header className="bg-[#FAF4ED]/90 backdrop-blur-md border-b border-[#2B231F]/10 sticky top-[41px] z-40 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D05A30] to-[#D99B26] flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              D
            </div>
            <div>
              <span className="text-2xl font-serif font-bold tracking-tight text-[#2B231F]">Dän Bakery</span>
              <span className="block text-[10px] uppercase tracking-widest text-[#D05A30] font-semibold">Hoboken • Washington St</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2B231F]/80">
            <a href="#about" className="hover:text-[#D05A30] transition-colors">Our Craft</a>
            <a href="#offerings" className="hover:text-[#D05A30] transition-colors">Signature Menu</a>
            <a href="#pairing" className="hover:text-[#D05A30] transition-colors">Coffee Pairings</a>
            <a href="#gallery" className="hover:text-[#D05A30] transition-colors">Gallery</a>
            <a href="#reviews" className="hover:text-[#D05A30] transition-colors">Reviews (4.9★)</a>
            <a href="#contact" className="hover:text-[#D05A30] transition-colors">Visit Us</a>
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="tel:5512997999"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full border border-[#D05A30]/30 text-[#D05A30] hover:bg-[#D05A30]/5 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              (551) 299-7999
            </a>
            <button 
              onClick={() => {
                setSelectedItemForOrder(menuItems[0]);
                setOrderModalOpen(true);
              }}
              className="bg-[#D05A30] hover:bg-[#b84a22] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-[#FAF4ED]" />
              Order Pickup
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#2B231F] hover:bg-[#2B231F]/5"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF4ED] border-b border-[#2B231F]/10 px-6 py-5 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-3 font-medium">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#D05A30]">Our Craft</a>
              <a href="#offerings" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#D05A30]">Signature Menu</a>
              <a href="#pairing" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#D05A30]">Coffee Pairings</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#D05A30]">Gallery</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#D05A30]">Reviews (4.9★)</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#D05A30]">Visit Us</a>
            </nav>
            <div className="pt-2 border-t border-[#2B231F]/10 flex flex-col gap-2.5">
              <a 
                href="tel:5512997999"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold rounded-xl border border-[#D05A30]/30 text-[#D05A30]"
              >
                <Phone className="w-4 h-4" />
                Call (551) 299-7999
              </a>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSelectedItemForOrder(menuItems[0]);
                  setOrderModalOpen(true);
                }}
                className="w-full bg-[#D05A30] text-white py-3 rounded-xl font-medium shadow flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Order Pickup Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 lg:pt-28 lg:pb-36 bg-gradient-to-b from-[#FAF4ED] to-[#FDFBF7]">
        {/* Background decorative warmth */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D99B26]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D05A30]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Copy & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Badge & Live indicator */}
              <div className="inline-flex items-center gap-2.5 bg-white/85 border border-[#D05A30]/20 px-3.5 py-1.5 rounded-full shadow-sm">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-[#D05A30] uppercase tracking-wider">Fresh Daily on Washington St</span>
                <span className="text-[#2B231F]/30">•</span>
                <span className="text-xs font-medium text-[#2B231F]/80">Open Today until 8:00 PM</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#2B231F] leading-[1.15] tracking-tight">
                Authentic European <span className="text-[#D05A30] underline decoration-[#D99B26]/40 decoration-wavy decoration-1">Bakery Craft</span> in Hoboken.
              </h1>

              {/* Narrative Subtitle */}
              <p className="text-base sm:text-lg text-[#2B231F]/80 leading-relaxed max-w-2xl font-normal">
                From delicate, honey-drenched cake layers to rich San Sebastian cheesecakes, Dän Bakery brings authentic European baking traditions to Washington Street every single morning. We put love, polish, and uncompromised quality into every pastry.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button 
                  onClick={() => {
                    setSelectedItemForOrder(menuItems[0]);
                    setOrderModalOpen(true);
                  }}
                  className="bg-[#D05A30] hover:bg-[#b84a22] text-white px-7 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2.5 text-base group"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Order Pickup Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="#offerings"
                  className="bg-white hover:bg-[#FAF4ED] text-[#2B231F] border border-[#2B231F]/15 px-6 py-3.5 rounded-full font-semibold transition-all text-base shadow-sm"
                >
                  Explore Signature Menu
                </a>
              </div>

              {/* Trust Metric Banner */}
              <div className="pt-6 border-t border-[#2B231F]/10 flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="font-bold text-[#2B231F]">4.9 / 5.0</span>
                  <span className="text-[#2B231F]/65">(49 Verified Reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-[#2B231F]/80">
                  <MapPin className="w-4 h-4 text-[#D05A30]" />
                  <span>500 Washington St, Hoboken, NJ</span>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Image Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#FAF4ED] aspect-[4/5]">
                  <img 
                    src="https://lh3.googleusercontent.com/grass-cs/AABkmLfX43Mw53GYClJ96E1kY2Jo-Zqj9iVLawUsUFiCGn4f-RcaL-uwGpZb28l7Cp4XoX6yD4CdO91dtObOuDuc1EAzgpGkO-ACkI7-LUQG37XAo6ln-n4Qy7uqWIgBkT8wWz0ED4vCp7Bo8pBc=s4800-w1000-h800"
                    alt="Dän Bakery Signature Honey Cake" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-[#2B231F]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#D99B26]">Featured Masterpiece</span>
                        <h4 className="font-serif text-lg font-bold text-white">Signature Honey Cake Layers</h4>
                      </div>
                      <span className="bg-[#D05A30] text-white text-xs px-3 py-1.5 rounded-full font-bold shadow">
                        $8.50
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative floating card */}
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-[#2B231F]/10 hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D99B26]/20 flex items-center justify-center text-[#D99B26] font-bold">
                    <Flame className="w-5 h-5 text-[#D05A30]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#2B231F]">Baked Fresh at 7:00 AM</p>
                    <p className="text-[11px] text-[#2B231F]/70">Daily batches on Washington St</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BRAND STORY / CRAFT SECTION */}
      <section id="about" className="py-20 bg-white border-y border-[#2B231F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Mosaic */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/5] bg-[#FAF4ED]">
                  <img 
                    src="https://lh3.googleusercontent.com/grass-cs/AABkmLcOCIO0Zzz6NfXefzq0JRPiJ8AyM1oCKgQNBgADg3atevLX8x4c1CCEuXpssHLgvlWLmQKQt5q7KssVLaNeszLqPgrsLU02zeNf3DSkZsaiCWGcQtXWbNzac6CfbJbRmPjv991J_Q8fSuo_=s4800-w1000-h800" 
                    alt="Café interior" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-[#FAF4ED]">
                  <img 
                    src="https://lh3.googleusercontent.com/grass-cs/AABkmLdYgPpjPRwGoijkx4vGzDhVszUp6XO6XhAKBlCcCQPEIgrDjqgTE-G3nm9bVrMlu0tRXkjjJU_LDHz6K1LC_NN_5Y6k00zWS0VHnDlz7knZ4zUfSbguL55BZD9sjrJ6uPznF9RlUIQwcdf=s4800-w1000-h800" 
                    alt="San Sebastian Cheesecake" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-[#FAF4ED] p-5 rounded-2xl border border-[#D05A30]/20">
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="w-5 h-5 text-[#D05A30]" />
                    <span className="font-bold text-sm text-[#2B231F]">Hoboken Local Favorite</span>
                  </div>
                  <p className="text-xs text-[#2B231F]/80">Rated 4.9 stars by passionate coffee and pastry lovers across NJ.</p>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#FAF4ED] border border-[#D05A30]/20 px-3.5 py-1 rounded-full text-xs font-semibold text-[#D05A30]">
                <Heart className="w-3.5 h-3.5 fill-[#D05A30]" />
                Authentic European Heritage
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B231F] leading-tight">
                Where Old-World Baking Meets Hoboken&apos;s Historic Washington Street
              </h2>

              <div className="space-y-4 text-[#2B231F]/80 text-base leading-relaxed">
                <p>
                  At Dän Bakery, every single morning begins long before the sun rises over Hoboken. Our master bakers honor classic European traditions by meticulously crafting our signature multi-layer Honey Cake, rich San Sebastian cheesecakes, and savory pastries from scratch using premium ingredients.
                </p>
                <p>
                  We believe that a great cafe is more than just a place to grab a morning latte—it is a warm sanctuary. Whether you are settling in with friends in our beautifully lit seating area or grabbing a quick pastry on your commute, we put love, polish, and uncompromised quality into every moment.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#2B231F]/10">
                <div>
                  <h4 className="text-2xl font-bold font-serif text-[#D05A30]">4.9★</h4>
                  <p className="text-xs text-[#2B231F]/70 font-medium">Google Rating</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold font-serif text-[#D05A30]">Daily</h4>
                  <p className="text-xs text-[#2B231F]/70 font-medium">Fresh Batches</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold font-serif text-[#D05A30]">500</h4>
                  <p className="text-xs text-[#2B231F]/70 font-medium">Washington St</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* OFFERINGS / SIGNATURE MENU SECTION */}
      <section id="offerings" className="py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D05A30] bg-[#FAF4ED] px-3.5 py-1.5 rounded-full border border-[#D05A30]/20">
              Handcrafted Daily
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B231F]">
              Signature Pastry Board & Menu
            </h2>
            <p className="text-[#2B231F]/80 text-base">
              Explore our legendary Hoboken favorites, made fresh every morning. Reserve online for quick, seamless pickup.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { id: "all", label: "All Offerings" },
                { id: "pastries", label: "Pastries & Cakes" },
                { id: "savory", label: "Savory Bakes" },
                { id: "beverages", label: "Coffee & Drinks" }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveMenuTab(tab.id)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeMenuTab === tab.id
                      ? "bg-[#D05A30] text-white shadow-md"
                      : "bg-[#FAF4ED] hover:bg-[#FAF4ED]/80 text-[#2B231F] border border-[#2B231F]/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.map(item => (
              <div 
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#2B231F]/10 hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image & Badge */}
                <div className="relative h-60 overflow-hidden bg-[#FAF4ED]">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-[#2B231F]/90 backdrop-blur-md text-[#FAF4ED] text-xs font-bold px-3 py-1 rounded-full shadow">
                    {item.badge}
                  </span>
                  <span className="absolute top-4 right-4 bg-[#D05A30] text-white text-sm font-extrabold px-3 py-1 rounded-full shadow">
                    {item.price}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-xl text-[#2B231F] group-hover:text-[#D05A30] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#2B231F]/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <button 
                    onClick={() => handleOpenOrder(item)}
                    className="w-full bg-[#FAF4ED] hover:bg-[#D05A30] hover:text-white text-[#2B231F] border border-[#D05A30]/20 font-semibold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Order for Pickup
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INTERACTIVE COFFEE & ESPRESSO PAIRING GUIDE */}
      <section id="pairing" className="py-20 bg-[#FAF4ED] border-y border-[#2B231F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white border border-[#D05A30]/20 px-3.5 py-1 rounded-full text-xs font-semibold text-[#D05A30]">
                <Coffee className="w-3.5 h-3.5" />
                Barista Craft
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B231F]">
                Find Your Perfect Coffee & Pastry Pairing
              </h2>
              <p className="text-base text-[#2B231F]/80 leading-relaxed">
                Our artisanal espresso and rich European roasts are selected to elevate the honey notes in our signature cake and balance the caramelized top of our San Sebastian cheesecake. Customize your drink below and add it to your order!
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-[#2B231F]/10 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#D05A30]/10 flex items-center justify-center text-[#D05A30] font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#2B231F]">Honey Cake + Cappuccino</h4>
                    <p className="text-xs text-[#2B231F]/70">The velvety microfoam enhances the whipped cream layers of the honey cake.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-[#2B231F]/10 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#D05A30]/10 flex items-center justify-center text-[#D05A30] font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#2B231F]">San Sebastian Cheesecake + Double Espresso</h4>
                    <p className="text-xs text-[#2B231F]/70">A bold shot of straight espresso cuts through the rich, creamy cheese finish.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side interactive builder */}
            <div className="lg:col-span-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-[#2B231F]/10 space-y-6">
                <div className="flex items-center justify-between border-b border-[#2B231F]/10 pb-4">
                  <h3 className="font-serif font-bold text-xl text-[#2B231F]">Interactive Drink Builder</h3>
                  <span className="text-xs font-bold bg-[#D05A30] text-white px-3 py-1 rounded-full">Customizer</span>
                </div>

                {/* Size Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#2B231F] uppercase tracking-wider">1. Select Size</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Small", "Regular", "Large"].map(size => (
                      <button
                        key={size}
                        onClick={() => setCoffeeSize(size)}
                        className={`py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                          coffeeSize === size
                            ? "bg-[#D05A30] text-white border-[#D05A30] shadow"
                            : "bg-[#FDFBF7] text-[#2B231F] border-[#2B231F]/15 hover:bg-[#FAF4ED]"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Milk Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#2B231F] uppercase tracking-wider">2. Choose Milk</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {["Whole Milk", "Oat Milk", "Almond Milk", "Skim Milk"].map(milk => (
                      <button
                        key={milk}
                        onClick={() => setCoffeeMilk(milk)}
                        className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all text-center ${
                          coffeeMilk === milk
                            ? "bg-[#D05A30] text-white border-[#D05A30] shadow"
                            : "bg-[#FDFBF7] text-[#2B231F] border-[#2B231F]/15 hover:bg-[#FAF4ED]"
                        }`}
                      >
                        {milk}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Flavor Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#2B231F] uppercase tracking-wider">3. Natural Flavor</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["None", "Vanilla", "Honey Drizzle"].map(flavor => (
                      <button
                        key={flavor}
                        onClick={() => setCoffeeFlavor(flavor)}
                        className={`py-2 rounded-xl text-xs font-semibold border transition-all text-center ${
                          coffeeFlavor === flavor
                            ? "bg-[#D05A30] text-white border-[#D05A30] shadow"
                            : "bg-[#FDFBF7] text-[#2B231F] border-[#2B231F]/15 hover:bg-[#FAF4ED]"
                        }`}
                      >
                        {flavor}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Summary & CTA */}
                <div className="pt-4 border-t border-[#2B231F]/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#2B231F]/60">Your Custom Coffee</p>
                    <p className="text-sm font-bold text-[#2B231F]">{coffeeSize} • {coffeeMilk} {coffeeFlavor !== "None" ? `• ${coffeeFlavor}` : ""}</p>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedItemForOrder({
                        name: `Custom Cappuccino (${coffeeSize}, ${coffeeMilk}, ${coffeeFlavor})`,
                        price: "$4.75",
                        image: "https://lh3.googleusercontent.com/grass-cs/AABkmLcOCIO0Zzz6NfXefzq0JRPiJ8AyM1oCKgQNBgADg3atevLX8x4c1CCEuXpssHLgvlWLmQKQt5q7KssVLaNeszLqPgrsLU02zeNf3DSkZsaiCWGcQtXWbNzac6CfbJbRmPjv991J_Q8fSuo_=s4800-w1000-h800"
                      });
                      setOrderModalOpen(true);
                    }}
                    className="bg-[#D05A30] hover:bg-[#b84a22] text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow transition-all"
                  >
                    Add Drink ($4.75)
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* REAL PHOTO SHOWCASE GALLERY */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D05A30] bg-[#FAF4ED] px-3.5 py-1.5 rounded-full border border-[#D05A30]/20">
              Atmosphere & Treats
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B231F]">
              Inside Dän Bakery on Washington St
            </h2>
            <p className="text-[#2B231F]/80 text-base">
              Real photos from our Hoboken storefront. Come visit us today for fresh European desserts and warm hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                url: "https://lh3.googleusercontent.com/grass-cs/AABkmLdW7AGTFgkUTZI7-QpthBY5PR3oqYG5RAALui4WFDNuCilRsARhweZOTJ_f6Qw8H36rkRj_8ln0m9jKT8KQE4ZfWqVHZEM56wlFKAhrkizb74gex0tvOsYxWLx97d0_oZUY4_4tMn0AIyY=s4800-w1000-h800",
                caption: "Dän Bakery Exterior & Showcase"
              },
              {
                url: "https://lh3.googleusercontent.com/grass-cs/AABkmLcOCIO0Zzz6NfXefzq0JRPiJ8AyM1oCKgQNBgADg3atevLX8x4c1CCEuXpssHLgvlWLmQKQt5q7KssVLaNeszLqPgrsLU02zeNf3DSkZsaiCWGcQtXWbNzac6CfbJbRmPjv991J_Q8fSuo_=s4800-w1000-h800",
                caption: "Cozy Seating & Atmosphere by Rex Accavallo"
              },
              {
                url: "https://lh3.googleusercontent.com/grass-cs/AABkmLfX43Mw53GYClJ96E1kY2Jo-Zqj9iVLawUsUFiCGn4f-RcaL-uwGpZb28l7Cp4XoX6yD4CdO91dtObOuDuc1EAzgpGkO-ACkI7-LUQG37XAo6ln-n4Qy7uqWIgBkT8wWz0ED4vCp7Bo8pBc=s4800-w1000-h800",
                caption: "Signature Multi-layer Honey Cake by Gani Stambek"
              },
              {
                url: "https://lh3.googleusercontent.com/grass-cs/AABkmLdnYgPpjPRwGoijkx4vGzDhVszUp6XO6XhAKBlCcCQPEIgrDjqgTE-G3nm9bVrMlu0tRXkjjJU_LDHz6K1LC_NN_5Y6k00zWS0VHnDlz7knZ4zUfSbguL55BZD9sjrJ6uPznF9RlUIQwcdf=s4800-w1000-h800",
                caption: "San Sebastian Cheesecake by Rohit Sood"
              }
            ].map((photo, idx) => (
              <div 
                key={idx}
                className="group relative rounded-3xl overflow-hidden shadow-md aspect-square bg-[#FAF4ED] border border-[#2B231F]/10"
              >
                <img 
                  src={photo.url} 
                  alt={photo.caption} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <p className="text-white text-xs font-medium leading-snug">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* VERIFIED REVIEWS SECTION */}
      <section id="reviews" className="py-20 bg-[#FAF4ED] border-y border-[#2B231F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#D05A30]/20 shadow-sm">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span className="text-xs font-bold text-[#2B231F]">4.9 Star Verified Google Rating</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B231F]">
              Hoboken Neighborhood Love Wall
            </h2>
            <p className="text-[#2B231F]/80 text-base">
              Read what our wonderful guests have to say about their experience at Dän Bakery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((rev, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-lg border border-[#2B231F]/10 flex flex-col justify-between space-y-4 relative"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-[#2B231F]/60">{rev.relativeTime}</span>
                  </div>
                  <p className="text-[#2B231F]/85 text-base italic leading-relaxed font-normal">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2B231F]/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#2B231F]">{rev.author}</h4>
                    <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Google Reviewer
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#FAF4ED] text-[#D05A30] font-bold flex items-center justify-center font-serif text-lg">
                    {rev.author.charAt(0)}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HOURS & NEIGHBORHOOD MAP / CONTACT */}
      <section id="contact" className="py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-3xl shadow-xl border border-[#2B231F]/10 overflow-hidden">
            
            {/* Info Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D05A30] bg-[#FAF4ED] px-3.5 py-1.5 rounded-full border border-[#D05A30]/20">
                  Storefront Location
                </span>
                <h2 className="text-3xl font-serif font-bold text-[#2B231F]">
                  Visit Us on Washington Street
                </h2>
                <p className="text-sm text-[#2B231F]/75">
                  Stop by for a fresh slice of honey cake, artisan pastries, or a warm cup of coffee. We are located right in the heart of Hoboken.
                </p>
              </div>

              {/* Details List */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF4ED] text-[#D05A30] flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#2B231F]">Address</h4>
                    <p className="text-sm text-[#2B231F]/80">500 Washington St, Hoboken, NJ 07030, USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF4ED] text-[#D05A30] flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#2B231F]">Direct Phone</h4>
                    <a href="tel:5512997999" className="text-sm text-[#D05A30] font-semibold hover:underline">
                      (551) 299-7999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF4ED] text-[#D05A30] flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#2B231F]">Operating Hours</h4>
                    <div className="text-xs text-[#2B231F]/80 space-y-1 mt-1">
                      <p>Monday – Friday: 7:00 AM – 8:00 PM</p>
                      <p>Saturday – Sunday: 8:00 AM – 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map CTA Button */}
              <div className="pt-2">
                <a 
                  href="https://maps.google.com/?q=500+Washington+St,+Hoboken,+NJ+07030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D05A30] hover:bg-[#b84a22] text-white px-6 py-3.5 rounded-full font-semibold shadow-md inline-flex items-center gap-2 text-sm transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  Open in Google Maps
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>

            </div>

            {/* Visual / Map Mockup Column */}
            <div className="lg:col-span-6 relative bg-[#FAF4ED] min-h-[400px] flex items-center justify-center p-8">
              <div className="absolute inset-0">
                <img 
                  src="https://lh3.googleusercontent.com/grass-cs/AABkmLdW7AGTFgkUTZI7-QpthBY5PR3oqYG5RAALui4WFDNuCilRsARhweZOTJ_f6Qw8H36rkRj_8ln0m9jKT8KQE4ZfWqVHZEM56wlFKAhrkizb74gex0tvOsYxWLx97d0_oZUY4_4tMn0AIyY=s4800-w1000-h800" 
                  alt="Storefront on Washington St" 
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B231F]/80 via-[#2B231F]/30 to-transparent"></div>
              
              <div className="relative z-10 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 max-w-sm w-full space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Open Now in Hoboken</span>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#2B231F]">Dän Bakery Cafe</h4>
                  <p className="text-xs text-[#2B231F]/70">500 Washington St, Hoboken, NJ 07030</p>
                </div>
                <a 
                  href="https://maps.google.com/?q=500+Washington+St,+Hoboken,+NJ+07030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#2B231F] hover:bg-[#D05A30] text-white py-2.5 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  Get Directions
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2B231F] text-[#FAF4ED] py-14 border-t border-[#D99B26]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
            
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D05A30] to-[#D99B26] flex items-center justify-center text-white font-bold text-lg">
                  D
                </div>
                <span className="text-2xl font-serif font-bold text-white">Dän Bakery</span>
              </div>
              <p className="text-sm text-[#FAF4ED]/75 max-w-sm leading-relaxed">
                Authentic European-style baking featuring signature multi-layer Honey Cake, San Sebastian cheesecake, and savory pastries on Hoboken&apos;s historic Washington Street.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-serif font-bold text-base text-[#D99B26]">Quick Links</h4>
              <ul className="space-y-2 text-sm text-[#FAF4ED]/80">
                <li><a href="#about" className="hover:text-white transition-colors">Our Craft Story</a></li>
                <li><a href="#offerings" className="hover:text-white transition-colors">Signature Menu</a></li>
                <li><a href="#pairing" className="hover:text-white transition-colors">Coffee Pairing Guide</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Verified Customer Reviews</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Storefront & Hours</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-serif font-bold text-base text-[#D99B26]">Location & Contact</h4>
              <p className="text-sm text-[#FAF4ED]/80 leading-relaxed">
                500 Washington St<br />
                Hoboken, NJ 07030, USA<br />
                Phone: <a href="tel:5512997999" className="text-[#D99B26] underline">(551) 299-7999</a>
              </p>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF4ED]/60">
            <p>© {new Date().getFullYear()} Dän Bakery. All rights reserved.</p>
            <p>Concept Design & Architecture crafted by Apex Digital for Dän Bakery.</p>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE DOCK (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-[#2B231F]/10 p-3 flex items-center justify-between gap-3 z-40 sm:hidden shadow-2xl">
        <a 
          href="tel:5512997999"
          className="flex-1 bg-[#FAF4ED] text-[#2B231F] py-3 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 border border-[#2B231F]/10"
        >
          <Phone className="w-4 h-4 text-[#D05A30]" />
          Call Store
        </a>
        <button 
          onClick={() => {
            setSelectedItemForOrder(menuItems[0]);
            setOrderModalOpen(true);
          }}
          className="flex-1 bg-[#D05A30] text-white py-3 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 shadow"
        >
          <ShoppingBag className="w-4 h-4" />
          Order Pickup
        </button>
      </div>

      {/* BEFORE VS AFTER AUDIT MODAL */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-[#FAF4ED] rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative border border-[#D05A30]/30 max-h-[90vh] overflow-y-auto">
            
            <button 
              onClick={() => setShowDemoModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#2B231F]/5 hover:bg-[#2B231F]/10 text-[#2B231F] transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D05A30] bg-white px-3 py-1 rounded-full border border-[#D05A30]/20 inline-block">
                Transformation Dossier
              </span>
              <h3 className="font-serif font-bold text-2xl text-[#2B231F]">
                Why This Bespoke Concept Outperforms the Old Page
              </h3>
              <p className="text-sm text-[#2B231F]/80">
                We analyzed Dän Bakery&apos;s current Hoboken location page and resolved key mobile conversion bottlenecks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Old site critique */}
              <div className="bg-white p-5 rounded-2xl border border-red-200 space-y-3">
                <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                  <X className="w-4 h-4" />
                  Old Page Friction Points
                </div>
                <p className="text-xs text-[#2B231F]/75 leading-relaxed">
                  Current hero visual overlays high-contrast text directly across the bakery interior photo, obstructing mobile clarity and visual hierarchy.
                </p>
                <div className="rounded-xl overflow-hidden border border-red-100 h-40 bg-gray-100">
                  <img 
                    src="https://iad.microlink.io/RKqPxSpsqHIP3HniUOs3RyK3xx7qEDmTQ30iDqm3qQlIL_P0p_ybJo6mBKdlFqHhnOHuWGXk7UnSj9K9ssMKLQ.png" 
                    alt="Old Site Screenshot"
                    className="w-full h-full object-cover object-top" 
                  />
                </div>
                <p className="text-[11px] text-red-500 italic">Lacks interactive menu previews and direct pastry showcase before forcing navigation.</p>
              </div>

              {/* New concept advantages */}
              <div className="bg-white p-5 rounded-2xl border border-emerald-200 space-y-3">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  New Bespoke Uplift
                </div>
                <p className="text-xs text-[#2B231F]/75 leading-relaxed">
                  Engineered with a warm terracotta &amp; honeyed wood European aesthetic, live morning bake status, and instant local pickup ordering.
                </p>
                <div className="space-y-2 pt-1 text-xs text-[#2B231F]/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Signature Honey Cake &amp; Cheesecake showcase</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Interactive Coffee &amp; Espresso pairing guide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Verified 4.9★ Google review integration</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#2B231F]/10 flex justify-end">
              <button 
                onClick={() => setShowDemoModal(false)}
                className="bg-[#D05A30] hover:bg-[#b84a22] text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow transition-all"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ORDER / RESERVATION MODAL */}
      {orderModalOpen && selectedItemForOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl relative border border-[#D05A30]/30">
            
            <button 
              onClick={() => setOrderModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#FAF4ED] hover:bg-[#FAF4ED]/80 text-[#2B231F] transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {orderSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#2B231F]">Pickup Order Reserved!</h3>
                <p className="text-sm text-[#2B231F]/75">
                  Your fresh batch of <strong className="text-[#D05A30]">{selectedItemForOrder.name}</strong> will be ready for pickup at 500 Washington St, Hoboken.
                </p>
                <div className="bg-[#FAF4ED] p-4 rounded-2xl text-xs text-[#2B231F]/80">
                  <p>Confirmation #DAN-{Math.floor(1000 + Math.random() * 9000)}</p>
                  <p className="mt-1 font-semibold text-[#D05A30]">Ready in ~15 minutes!</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleCompleteOrder} className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D05A30] bg-[#FAF4ED] px-3 py-1 rounded-full border border-[#D05A30]/20 inline-block">
                    Express Pickup
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-[#2B231F]">
                    Reserve for Pickup
                  </h3>
                  <p className="text-xs text-[#2B231F]/70">
                    Skip the line at 500 Washington St. Your pastry will be freshly boxed and waiting.
                  </p>
                </div>

                {/* Selected Item Summary Card */}
                <div className="flex items-center gap-4 bg-[#FAF4ED] p-3.5 rounded-2xl border border-[#2B231F]/10">
                  <img 
                    src={selectedItemForOrder.image} 
                    alt={selectedItemForOrder.name} 
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-grow">
                    <h4 className="font-serif font-bold text-sm text-[#2B231F]">{selectedItemForOrder.name}</h4>
                    <span className="text-xs font-extrabold text-[#D05A30]">{selectedItemForOrder.price}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#2B231F]">Your Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#2B231F]/20 text-sm focus:outline-none focus:border-[#D05A30]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#2B231F]">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. (201) 555-0199"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#2B231F]/20 text-sm focus:outline-none focus:border-[#D05A30]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#2B231F]">Estimated Pickup Time</label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-[#2B231F]/20 text-sm focus:outline-none focus:border-[#D05A30] bg-white">
                      <option>As soon as possible (~15 mins)</option>
                      <option>In 30 minutes</option>
                      <option>This afternoon (After 2 PM)</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#D05A30] hover:bg-[#b84a22] text-white py-3 rounded-xl font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Confirm Pickup Reservation
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}