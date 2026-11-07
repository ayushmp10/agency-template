"use client";
import React, { useState } from "react";
import { 
  Star, MapPin, Phone, Clock, ArrowRight, CheckCircle2, ChevronRight, 
  Sparkles, ExternalLink, ShieldCheck, Heart, X, Menu as MenuIcon, 
  Flame, Utensils, Award, ShoppingBag, Calendar, Info, AlertCircle 
} from "lucide-react";

export default function ClientSitePage() {
  const [activeCategory, setActiveCategory] = useState("featured-items");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive Customizer State
  const [customProteinStyle, setCustomProteinStyle] = useState("65 Style");
  const [customProtein, setCustomProtein] = useState("Chicken");
  const [customSpice, setCustomSpice] = useState("Medium");

  const catalogCategories = [
    {
      category_id: "featured-items",
      category_name: "Featured Items",
      badge: "Popular",
      description: "Our most sought-after chef creations",
      items: [
        {
          name: "65 — Choose Your Protein",
          price: "$16.00",
          description: "Pan sautéed, battered crisp, garlic, onion, cilantro",
          image: "https://d1w7312wesee68.cloudfront.net/yUpPmiyPjjbo6bBBXpQ8vStJiNZGONOv2cveMBwGlik/resize:fit:720:720/plain/s3://toasttab/restaurants/restaurant-39654000000000000/menu/items/8/item-500000032324990708_1793752208.jpg",
          badge: "Bestseller",
          tags: ["Spicy", "Chef Pick"]
        },
        {
          name: "555 — Choose Your Protein",
          price: "$16.00",
          description: "Crispy pan sautéed, turmeric, pepper, red chili, yogurt",
          image: "https://d1w7312wesee68.cloudfront.net/rwdCIWF1W9HGlE7iIuiOB6IweMqKk-bbhZa-7P6lq7c/resize:fit:720:720/plain/s3://toasttab/restaurants/restaurant-39654000000000000/menu/items/6/item-500000032324990716_1791581122.jpg",
          badge: "Signature",
          tags: ["Spicy"]
        },
        {
          name: "Chicken Lollipops",
          price: "$24.00",
          description: "Chicken drumsticks, Pan Asian spices, crisp to perfection",
          image: "https://d1w7312wesee68.cloudfront.net/fuEC7iImSx9cEyhowOI48gLtipulUbupvW9zjMMKnko/resize:fit:720:720/plain/s3://toasttab/restaurants/restaurant-39654000000000000/menu/items/4/item-500000029051614434_1791581264.jpg",
          badge: "Local Favorite",
          tags: ["Crispy"]
        }
      ]
    },
    {
      category_id: "live-fire",
      category_name: "Live Fire",
      badge: "Tandoor",
      description: "Charred and roasted to perfection in our traditional tandoor",
      items: [
        {
          name: "Angaarey Paneer",
          price: "$24.00",
          description: "Paneer marinated in ghost chilli, turmeric, ginger, finished in tandoor",
          image: "https://d1w7312wesee68.cloudfront.net/nm1fPb4iP-W81qnDxMiiWhbbm6nMWDS5xDWKSVPECuE/resize:fit:720:720/plain/s3://toasttab/restaurants/restaurant-39654000000000000/menu/items/4/item-500000005139265024_1791580686.jpg",
          badge: "Spicy",
          tags: ["Vegetarian", "Gluten-Free"]
        },
        {
          name: "Hyderabadi Royale Lamb Chop",
          price: "$58.00",
          description: "Domestic oregon farm-raised lamb chop, fennel, cloves, slow roasted",
          image: "https://d1w7312wesee68.cloudfront.net/0pqiF8FMWoqGO5_cYcbG4PyRg2tdYmZGuAj0vwF10T0/resize:fit:720:720/plain/s3://toasttab/restaurants/restaurant-39654000000000000/menu/items/9/item-500000005730067859_1791580872.jpg",
          badge: "Chef Pick",
          tags: ["Halal", "Signature"]
        },
        {
          name: "Nasheele Jhinga",
          price: "$41.00",
          description: "Tiger prawns with Thairum, coastal spices and ajwain",
          image: "https://d1w7312wesee68.cloudfront.net/rUweTWBJ-g02cujUNkFuOSrYE4IbAcHKoghVRIn7vws/resize:fit:720:720/plain/s3://toasttab/restaurants/restaurant-39654000000000000/menu/items/9/item-500000005139274869_1791580880.jpg",
          badge: "Seafood",
          tags: ["Gluten-Free"]
        }
      ]
    },
    {
      category_id: "crispy-treats",
      category_name: "Crispy Treats",
      badge: "Appetizers",
      description: "Crispy light bites to start your meal",
      items: [
        {
          name: "Loaded Fries",
          price: "$12.00",
          description: "French fries, onion tomato masala, ground spices, cheddar cheese",
          image: "https://d1w7312wesee68.cloudfront.net/UCHO6A-omkO_S_UUHRZhn2VteEVnxhiEXeehG8GlWjE/resize:fit:720:720/plain/s3://toasttab/restaurants/restaurant-39654000000000000/menu/items/9/item-500000029051234049_1791580888.jpg",
          badge: "",
          tags: ["Vegetarian"]
        },
        {
          name: "Mini Samosa",
          price: "$12.00",
          description: "Punjabi style, potatoes and peas, crispy turnovers",
          image: "https://d1w7312wesee68.cloudfront.net/YN1c7TMfyOK3SmTM_ZiZpnmjXVbze_SkLyL7vb1kTvI/resize:fit:720:720/plain/s3://toasttab/restaurants/restaurant-39654000000000000/menu/items/7/item-500000029051280237_1791580897.jpg",
          badge: "Vegetarian",
          tags: ["Traditional"]
        },
        {
          name: "Kurkure Bhindi",
          price: "$14.00",
          description: "Crispy okra, battered ginger garlic, onion, tomatoes, zesty masala",
          image: "https://d1w7312wesee68.cloudfront.net/WeybSQaPP2yO-1OMDY2w6kUsTVGhlj7D4g7Zk91Bu64/resize:fit:720:720/plain/s3://toasttab/restaurants/restaurant-39654000000000000/menu/items/9/item-500000029051280239_1791580079.jpg",
          badge: "Local Favorite",
          tags: ["Vegetarian", "Crispy"]
        }
      ]
    },
    {
      category_id: "soups",
      category_name: "Soups",
      badge: "Warm & Comforting",
      description: "Slow-simmered broths infused with coastal and traditional herbs",
      items: [
        {
          name: "Tomato Basil Soup",
          price: "$12.00",
          description: "Tomatoes char grilled, peppers, basil, cream",
          image: "https://d1w7312wesee68.cloudfront.net/p6r4NjLIRFNM-fXLFPnCHAzZBLiCG4H1eKxWANZkSuE/resize:fit:720:720/plain/s3://toasttab/restaurants/restaurant-39654000000000000/menu/items/1/item-500000029051280241_1791580905.jpg",
          badge: "",
          tags: ["Vegetarian"]
        },
        {
          name: "She Crab Soup",
          price: "$16.00",
          description: "Coconut milk, she-crab, spinach, turmeric",
          image: "https://d1w7312wesee68.cloudfront.net/yr5Ef33SsTC-sBCbZSLd1j8l2Y7ShtWOstAatokxO3s/resize:fit:720:720/plain/s3://toasttab/restaurants/restaurant-39654000000000000/menu/items/2/item-500000029279927452_1793752190.jpg",
          badge: "Seafood",
          tags: ["Rich"]
        },
        {
          name: "Goat Paaya Soup",
          price: "$16.00",
          description: "Extract of coastal spices, hind shank of goat, butter broth",
          image: "https://d1w7312wesee68.cloudfront.net/kLAicN_uphYnBNB-4kVKKrT90mwAXmsMSDLQrVIi6aY/resize:fit:720:720/plain/s3://toasttab/restaurants/restaurant-39654000000000000/menu/items/7/item-500000015598055557_1791606712.jpg",
          badge: "Traditional",
          tags: ["Hearty"]
        }
      ]
    }
  ];

  const galleryImages = [
    "https://lh3.googleusercontent.com/grass-cs/AABkmLcCHW1otSU5bVHc5ap67y5FsXv51mepZHhmLGlEPMr_Plid2ronRM0y5dEGSV6Qd3PFw5XcW4rU5SRCaVThYU97P6Tcaeqmx8mxpGhyMDIsf09D_JhGQ4w_VQyrFH0u4izT6zVV=s4800-w1000-h576",
    "https://lh3.googleusercontent.com/grass-cs/AABkmLc9Q8SucWIBz09NdRf_RcmkonxMpPRGExotdB2Fwu0kGTgeRNsKbGPXGJAJM_BugzZXl3Eg3IFLOHMyenUu9I-G1iap5oZMyQ43f5Q8KMSRnQ7ky7BMjhvcmqruMANgGLd72-ZzDGgeWnji=s4800-w1000-h800",
    "https://lh3.googleusercontent.com/grass-cs/AABkmLeVk1TAaXlUbDK8wcjjokuTDHzz6MXWYcgpqGE57T6rMBbIdDZLOQiPoEzqZQ5tB3cmddHyEaKMMNS-PzSMc7gCFaN52uLRzQ0ZZVt94_5O6tGFDJMODVBlQcUG6MRCw_OMUQloh_oJhUVe=s4800-w768-h511",
    "https://lh3.googleusercontent.com/grass-cs/AABkmLdqehrNjvZf_My3-yURylY4zPoSt0uag7nK2oFf6lHjbTBb8AL-JiVdqbzdTzsDXJy-NXo3x3HUpjzJcA6UwHdYFBMfc8mUtx-aUph8p4RlMTI32Y6ECTYlHfeCuh5ma_qYn2ncMHviaqRh=s4800-w1000-h800",
    "https://d28f3w0x9i80nq.cloudfront.net/restaurantImages/5302da3e-f6e2-41f0-ace4-88361982496d/Deccan-Spice-Edison.png",
    "https://d1w7312wesee68.cloudfront.net/qixLAi0O56t78yFZtzUW6lDHkkGVE3BdgPgflx7WJlE/ext:webp/quality:85/plain/s3://toast-sites-resources-prod/restaurantImages/5302da3e-f6e2-41f0-ace4-88361982496d/Toast%20(1).png"
  ];

  const reviews = [
    {
      author: "Cosimo and Amanda Rizzo",
      text: "Pankaj was amazing. He was so funny, light and attentive. The food was really good. We had the butter chicken and the curry goat. I’m not even a goat person but I liked it better than my chicken. Good food, beautiful place. Amazing staff. It was our first date",
      rating: 5,
      relativeTime: "2 weeks ago",
      verifiedGoogle: true
    },
    {
      author: "Krishna patel",
      text: "it was an amazing experience! The restaurant has a beautiful modern ambiance with a private dining room that’s perfect for small gatherings. We ordered several chef’s special dishes, and every plate was beautifully presented and absolutely delicious.",
      rating: 5,
      relativeTime: "3 months ago",
      verifiedGoogle: true
    },
    {
      author: "mohit bansal",
      text: "We recently visited Deccan Spice and had a wonderful experience. The restaurant offers a great variety of Indian food, which we really appreciated. The space is spacious, clean, and very welcoming, making it perfect for a family outing.",
      rating: 5,
      relativeTime: "6 months ago",
      verifiedGoogle: true
    },
    {
      author: "Shiva Reddy",
      text: "Visited Deccan Spice with a team and unfortunately, the food did not live up to the price or the hype. We had a mix of both vegetarian and non-vegetarian dishes, and the overall consensus was mixed, though the atmosphere was stunning.",
      rating: 3,
      relativeTime: "2 weeks ago",
      verifiedGoogle: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-[#f5f5f5] font-sans selection:bg-[#d4af37] selection:text-[#121212] antialiased">
      
      {/* TOP DEMO BAR */}
      <div className="bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#b8860b] text-[#121212] px-4 py-2 text-xs md:text-sm font-medium sticky top-0 z-50 shadow-md flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 mx-auto md:mx-0">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span>Live Concept Preview crafted for <strong>Deccan Spice - Edison</strong> • Built by Apex Digital</span>
        </div>
        <button 
          onClick={() => setIsDemoModalOpen(true)}
          className="bg-[#121212] text-[#f5f5f5] px-3 py-1 rounded-full text-xs font-semibold hover:bg-[#1e1e1e] transition-all flex items-center gap-1 shadow-sm mx-auto md:mx-0 cursor-pointer"
        >
          ⚡ Compare Before vs. After
        </button>
      </div>

      {/* NAVIGATION */}
      <nav className="sticky top-[37px] md:top-[41px] z-40 bg-[#121212]/95 backdrop-blur-md border-b border-[#1e1e1e] px-4 lg:px-12 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center text-[#121212] font-bold text-xl shadow-md">
              DS
            </div>
            <div>
              <span className="font-serif text-xl tracking-wide font-bold text-[#f5f5f5] group-hover:text-[#d4af37] transition-colors">
                Deccan Spice
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-[#d4af37]">Edison, NJ</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#f5f5f5]/80">
            <a href="#story" className="hover:text-[#d4af37] transition-colors">Heritage Story</a>
            <a href="#offerings" className="hover:text-[#d4af37] transition-colors">Menu & Offerings</a>
            <a href="#builder" className="hover:text-[#d4af37] transition-colors">Custom Dish</a>
            <a href="#gallery" className="hover:text-[#d4af37] transition-colors">Ambiance</a>
            <a href="#reviews" className="hover:text-[#d4af37] transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-[#d4af37] transition-colors">Hours & Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Open Now
            </span>
            <a 
              href="https://edison.deccanspice.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#121212] font-semibold px-5 py-2.5 rounded-full text-sm shadow-lg hover:opacity-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Ahead
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#f5f5f5] p-2 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#1e1e1e] border-b border-[#2a2a2a] px-6 py-6 flex flex-col gap-4 shadow-xl">
            <a href="#story" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-[#f5f5f5] hover:text-[#d4af37]">Heritage Story</a>
            <a href="#offerings" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-[#f5f5f5] hover:text-[#d4af37]">Menu & Offerings</a>
            <a href="#builder" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-[#f5f5f5] hover:text-[#d4af37]">Custom Dish Builder</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-[#f5f5f5] hover:text-[#d4af37]">Ambiance Gallery</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-[#f5f5f5] hover:text-[#d4af37]">Customer Reviews</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-[#f5f5f5] hover:text-[#d4af37]">Hours & Contact</a>
            <div className="pt-4 border-t border-[#2a2a2a] flex flex-col gap-3">
              <a 
                href="https://edison.deccanspice.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#d4af37] text-[#121212] font-semibold py-3 rounded-lg text-center shadow-md flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" /> Order Ahead Now
              </a>
              <a 
                href="tel:7329022888" 
                className="w-full bg-[#121212] border border-[#d4af37]/40 text-[#f5f5f5] font-semibold py-3 rounded-lg text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" /> (732) 902-2888
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#121212] px-4 py-20">
        {/* Background Overlay image with warm amber lighting effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/grass-cs/AABkmLcCHW1otSU5bVHc5ap67y5FsXv51mepZHhmLGlEPMr_Plid2ronRM0y5dEGSV6Qd3PFw5XcW4rU5SRCaVThYU97P6Tcaeqmx8mxpGhyMDIsf09D_JhGQ4w_VQyrFH0u4izT6zVV=s4800-w1000-h576" 
            alt="Deccan Spice Ambiance" 
            className="w-full h-full object-cover opacity-30 scale-105 filter brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-transparent to-[#121212]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e1e1e]/90 border border-[#d4af37]/30 text-[#d4af37] text-xs md:text-sm font-semibold tracking-wider uppercase mb-6 shadow-lg backdrop-blur-md">
            <Sparkles className="w-4 h-4" /> Authentic Indian Cuisine in Edison, NJ
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#f5f5f5] tracking-tight leading-[1.1] mb-6">
            A Celebration of Royal Indian Flavors & Modern Elegance
          </h1>

          <p className="text-base sm:text-xl text-[#f5f5f5]/80 max-w-3xl font-light leading-relaxed mb-10">
            Located at the heart of Edison, Deccan Spice offers a sophisticated voyage through India's rich culinary traditions. From meticulously blended coastal spices and slow-roasted royal lamb chops to live-fire tandoori masterpieces.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="https://edison.deccanspice.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#121212] font-bold px-8 py-4 rounded-full text-base shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Order Online Direct
            </a>
            <a 
              href="#offerings" 
              className="w-full sm:w-auto bg-[#1e1e1e]/90 border border-[#d4af37]/40 text-[#f5f5f5] font-semibold px-8 py-4 rounded-full text-base hover:bg-[#252525] transition-all flex items-center justify-center gap-2 backdrop-blur-md"
            >
              Explore Full Menu <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            </a>
          </div>

          {/* Trust Metrics */}
          <div className="mt-16 pt-8 border-t border-[#1e1e1e] grid grid-cols-2 md:grid-cols-3 gap-6 text-center max-w-2xl w-full">
            <div className="bg-[#1e1e1e]/50 p-4 rounded-xl border border-[#2a2a2a] backdrop-blur-sm">
              <div className="flex items-center justify-center gap-1 text-[#d4af37] mb-1">
                <Star className="w-5 h-5 fill-[#d4af37]" />
                <span className="text-xl font-bold text-[#f5f5f5]">4.5</span>
              </div>
              <p className="text-xs text-[#f5f5f5]/60">9,982+ Verified Google Reviews</p>
            </div>
            <div className="bg-[#1e1e1e]/50 p-4 rounded-xl border border-[#2a2a2a] backdrop-blur-sm">
              <div className="flex items-center justify-center gap-1 text-[#d4af37] mb-1">
                <Flame className="w-5 h-5" />
                <span className="text-xl font-bold text-[#f5f5f5]">Live Fire</span>
              </div>
              <p className="text-xs text-[#f5f5f5]/60">Traditional Tandoori Craft</p>
            </div>
            <div className="col-span-2 md:col-span-1 bg-[#1e1e1e]/50 p-4 rounded-xl border border-[#2a2a2a] backdrop-blur-sm">
              <div className="flex items-center justify-center gap-1 text-[#d4af37] mb-1">
                <MapPin className="w-5 h-5" />
                <span className="text-xl font-bold text-[#f5f5f5]">Wood Ave</span>
              </div>
              <p className="text-xs text-[#f5f5f5]/60">Edison, NJ 08820</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROYAL HERITAGE STORY */}
      <section id="story" className="py-24 bg-[#1e1e1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#d4af37]/20 to-transparent rounded-3xl blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl bg-[#121212]">
                <img 
                  src="https://lh3.googleusercontent.com/grass-cs/AABkmLc9Q8SucWIBz09NdRf_RcmkonxMpPRGExotdB2Fwu0kGTgeRNsKbGPXGJAJM_BugzZXl3Eg3IFLOHMyenUu9I-G1iap5oZMyQ43f5Q8KMSRnQ7ky7BMjhvcmqruMANgGLd72-ZzDGgeWnji=s4800-w1000-h800" 
                  alt="Deccan Spice Elegant Interior" 
                  className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#121212] p-6">
                  <span className="text-[#d4af37] text-xs font-semibold tracking-wider uppercase">Timber Lattice & Warm Ambience</span>
                  <p className="text-sm text-[#f5f5f5]/80 mt-1">Designed for memorable family celebrations and intimate date nights.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wider uppercase w-fit mb-4">
                Authentic Indian Cuisine
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f5f5f5] mb-6 leading-tight">
                A Sophisticated Voyage Through Royal Indian Heritage
              </h2>
              <p className="text-[#f5f5f5]/80 font-light leading-relaxed mb-6">
                Located at the heart of Edison, Deccan Spice offers a sophisticated voyage through India's rich culinary traditions. From meticulously blended coastal spices and slow-roasted royal lamb chops to live-fire tandoori masterpieces, every dish is crafted with passion and authenticity.
              </p>
              <p className="text-[#f5f5f5]/80 font-light leading-relaxed mb-8">
                Our spacious, beautifully appointed dining room provides the perfect backdrop for family celebrations, intimate dates, and unforgettable gastronomic experiences.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#121212] border border-[#2a2a2a]">
                  <h4 className="font-serif font-bold text-[#d4af37] text-lg mb-1">Royal Recipes</h4>
                  <p className="text-xs text-[#f5f5f5]/70">Hyderabadi heritage preparations slow-cooked to perfection.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#121212] border border-[#2a2a2a]">
                  <h4 className="font-serif font-bold text-[#d4af37] text-lg mb-1">Live-Fire Tandoor</h4>
                  <p className="text-xs text-[#f5f5f5]/70">Charred aromatic breads and sizzling succulent meats.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE OFFERINGS / FULL MENU CATALOG */}
      <section id="offerings" className="py-24 bg-[#121212] relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-widest block mb-2">Full Menu & Signature Offerings</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#f5f5f5] mb-4">Crafted Fresh Daily</h2>
            <p className="text-[#f5f5f5]/70 text-sm sm:text-base">Prepared fresh daily with authentic Indian spices and premium ingredients. Explore our curated categories below.</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {catalogCategories.map((cat) => (
              <button
                key={cat.category_id}
                onClick={() => setActiveCategory(cat.category_id)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  activeCategory === cat.category_id 
                    ? "bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#121212] shadow-lg scale-105"
                    : "bg-[#1e1e1e] text-[#f5f5f5]/80 border border-[#2a2a2a] hover:bg-[#252525]"
                }`}
              >
                <span>{cat.category_name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  activeCategory === cat.category_id ? "bg-[#121212]/20 text-[#121212]" : "bg-[#121212] text-[#d4af37]"
                }`}>
                  {cat.badge}
                </span>
              </button>
            ))}
          </div>

          {/* Active Category Display */}
          {catalogCategories.map((cat) => {
            if (cat.category_id !== activeCategory) return null;
            return (
              <div key={cat.category_id} className="transition-all animate-fadeIn">
                <div className="text-center mb-10">
                  <p className="text-[#f5f5f5]/60 text-sm italic">{cat.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cat.items.map((item, index) => (
                    <div 
                      key={index} 
                      className="bg-[#1e1e1e] rounded-2xl overflow-hidden border border-[#2a2a2a] hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col justify-between shadow-xl group"
                    >
                      <div className="relative h-56 overflow-hidden bg-[#121212]">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent"></div>
                        {item.badge && (
                          <span className="absolute top-4 right-4 bg-[#121212]/90 backdrop-blur-md text-[#d4af37] border border-[#d4af37]/30 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <div className="p-6 flex flex-col flex-grow justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h3 className="font-serif font-bold text-lg text-[#f5f5f5] group-hover:text-[#d4af37] transition-colors">
                              {item.name}
                            </h3>
                            <span className="text-[#d4af37] font-bold text-lg whitespace-nowrap">{item.price}</span>
                          </div>
                          <p className="text-xs text-[#f5f5f5]/70 leading-relaxed mb-4">
                            {item.description}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-[#2a2a2a] flex items-center justify-between">
                          <div className="flex flex-wrap gap-1.5">
                            {item.tags.map((tag, tIdx) => (
                              <span key={tIdx} className="text-[10px] bg-[#121212] text-[#f5f5f5]/80 px-2 py-0.5 rounded border border-[#2a2a2a]">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <a 
                            href="https://edison.deccanspice.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-[#d4af37] hover:underline flex items-center gap-1"
                          >
                            Order <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTERACTIVE CUSTOMIZER WIDGET */}
      <section id="builder" className="py-24 bg-[#1e1e1e] border-t border-b border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto px-4 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-widest block mb-2">Interactive Dish Studio</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f5f5f5] mb-4">Build Your Custom Dish</h2>
            <p className="text-[#f5f5f5]/70 text-sm">Tailor your favorite Deccan Spice protein style, flavor profile, and heat preference.</p>
          </div>

          <div className="bg-[#121212] rounded-3xl p-8 border border-[#d4af37]/30 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              
              {/* Step 1 */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                  Step 1: Protein Style
                </label>
                <div className="space-y-2">
                  {["65 Style", "555 Style", "Manchurian", "Chili", "Massamam"].map((style) => (
                    <button
                      key={style}
                      onClick={() => setCustomProteinStyle(style)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                        customProteinStyle === style
                          ? "bg-[#d4af37] text-[#121212] font-semibold shadow-md"
                          : "bg-[#1e1e1e] text-[#f5f5f5]/80 hover:bg-[#252525] border border-[#2a2a2a]"
                      }`}
                    >
                      <span>{style}</span>
                      {customProteinStyle === style && <CheckCircle2 className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                  Step 2: Select Protein
                </label>
                <div className="space-y-2">
                  {["Paneer", "Chicken", "Lamb", "Shrimp", "Vegetable"].map((prot) => (
                    <button
                      key={prot}
                      onClick={() => setCustomProtein(prot)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                        customProtein === prot
                          ? "bg-[#d4af37] text-[#121212] font-semibold shadow-md"
                          : "bg-[#1e1e1e] text-[#f5f5f5]/80 hover:bg-[#252525] border border-[#2a2a2a]"
                      }`}
                    >
                      <span>{prot}</span>
                      {customProtein === prot && <CheckCircle2 className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                  Step 3: Spice Level
                </label>
                <div className="space-y-2">
                  {["Mild", "Medium", "Spicy", "Andhra Fire"].map((sp) => (
                    <button
                      key={sp}
                      onClick={() => setCustomSpice(sp)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                        customSpice === sp
                          ? "bg-[#d4af37] text-[#121212] font-semibold shadow-md"
                          : "bg-[#1e1e1e] text-[#f5f5f5]/80 hover:bg-[#252525] border border-[#2a2a2a]"
                      }`}
                    >
                      <span>{sp}</span>
                      {customSpice === sp && <CheckCircle2 className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Summary Box */}
            <div className="pt-6 border-t border-[#2a2a2a] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#f5f5f5]/60 uppercase tracking-widest block mb-1">Your Custom Creation</span>
                <h4 className="text-xl font-serif font-bold text-[#f5f5f5]">
                  {customProtein} ({customProteinStyle}) — <span className="text-[#d4af37]">{customSpice} Spice</span>
                </h4>
              </div>
              <a 
                href="https://edison.deccanspice.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#121212] font-bold px-8 py-3.5 rounded-full text-sm shadow-xl hover:opacity-95 transition-all text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" /> Order Custom Creation ($16.00)
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* REAL PHOTO SHOWCASE */}
      <section id="gallery" className="py-24 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-widest block mb-2">Visual Gallery</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#f5f5f5] mb-4">Atmosphere & Culinary Art</h2>
            <p className="text-[#f5f5f5]/70 text-sm">Take a glimpse inside our Edison dining room and signature dishes.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((imgUrl, index) => (
              <div 
                key={index} 
                className="relative h-72 rounded-2xl overflow-hidden border border-[#2a2a2a] group shadow-lg bg-[#1e1e1e]"
              >
                <img 
                  src={imgUrl} 
                  alt={`Deccan Spice Gallery ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-xs text-[#f5f5f5] font-medium flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#d4af37]" /> Deccan Spice - Edison Ambiance
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERIFIED REVIEWS SECTION */}
      <section id="reviews" className="py-24 bg-[#1e1e1e] border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-widest block mb-2">Google Guest Testimonials</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#f5f5f5] mb-4">Loved by Edison Foodies</h2>
            <div className="flex items-center justify-center gap-2 text-[#d4af37]">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#d4af37]" />
                ))}
              </div>
              <span className="text-white font-bold ml-2">4.5 / 5.0</span>
              <span className="text-[#f5f5f5]/60 text-sm">(9,982+ Reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((rev, index) => (
              <div 
                key={index} 
                className="bg-[#121212] p-8 rounded-2xl border border-[#2a2a2a] relative shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#d4af37]">
                      {[...Array(rev.rating)].map((_, rIdx) => (
                        <Star key={rIdx} className="w-4 h-4 fill-[#d4af37]" />
                      ))}
                    </div>
                    {rev.verifiedGoogle && (
                      <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        <ShieldCheck className="w-3 h-3" /> Verified Google Review
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-[#f5f5f5]/80 font-light leading-relaxed mb-6 italic">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2a2a2a] flex items-center justify-between">
                  <span className="font-serif font-bold text-[#f5f5f5] text-sm">{rev.author}</span>
                  <span className="text-xs text-[#f5f5f5]/50">{rev.relativeTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOURS & NEIGHBORHOOD MAP CONTACT SECTION */}
      <section id="contact" className="py-24 bg-[#121212] relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact & Hours Info */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-widest block mb-2">Visit & Connect</span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f5f5f5] mb-6">Deccan Spice - Edison</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1e1e1e] border border-[#2a2a2a] flex items-center justify-center text-[#d4af37] flex-shrink-0 mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-[#f5f5f5] mb-1">Address</h4>
                      <p className="text-xs text-[#f5f5f5]/70 leading-relaxed">153 Wood Ave, Edison, NJ 08820, USA</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1e1e1e] border border-[#2a2a2a] flex items-center justify-center text-[#d4af37] flex-shrink-0 mt-1">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-[#f5f5f5] mb-1">Direct Phone</h4>
                      <a href="tel:7329022888" className="text-xs text-[#d4af37] hover:underline">(732) 902-2888</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1e1e1e] border border-[#2a2a2a] flex items-center justify-center text-[#d4af37] flex-shrink-0 mt-1">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-[#f5f5f5] mb-2">Operating Hours</h4>
                      <ul className="space-y-1.5 text-xs text-[#f5f5f5]/70">
                        <li>Monday – Thursday: 11:30 AM – 11:00 PM</li>
                        <li>Friday – Saturday: 11:30 AM – 12:00 AM</li>
                        <li>Sunday: 11:30 AM – 11:00 PM</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://edison.deccanspice.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#121212] font-bold px-6 py-3 rounded-full text-sm shadow-xl hover:opacity-95 transition-all text-center flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" /> Order Online Now
                </a>
                <a 
                  href="https://maps.google.com/?q=153+Wood+Ave,+Edison,+NJ+08820" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1e1e1e] border border-[#2a2a2a] text-[#f5f5f5] font-semibold px-6 py-3 rounded-full text-sm hover:bg-[#252525] transition-all text-center flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-[#d4af37]" /> Open in Google Maps
                </a>
              </div>
            </div>

            {/* Simulated Map / Venue Showcase */}
            <div className="relative rounded-3xl overflow-hidden border border-[#2a2a2a] bg-[#1e1e1e] h-[450px] shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/grass-cs/AABkmLeVk1TAaXlUbDK8wcjjokuTDHzz6MXWYcgpqGE57T6rMBbIdDZLOQiPoEzqZQ5tB3cmddHyEaKMMNS-PzSMc7gCFaN52uLRzQ0ZZVt94_5O6tGFDJMODVBlQcUG6MRCw_OMUQloh_oJhUVe=s4800-w768-h511" 
                alt="Deccan Spice Location" 
                className="w-full h-full object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-[#121212]/90 backdrop-blur-md p-6 rounded-2xl border border-[#d4af37]/30 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-base text-[#f5f5f5]">Deccan Spice - Edison</h4>
                  <p className="text-xs text-[#f5f5f5]/70">153 Wood Ave, Edison, NJ 08820</p>
                </div>
                <a 
                  href="https://maps.google.com/?q=153+Wood+Ave,+Edison,+NJ+08820" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#d4af37] text-[#121212] font-bold px-4 py-2 rounded-xl text-xs hover:opacity-95 transition-all shadow-md"
                >
                  Directions
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1e1e1e] border-t border-[#2a2a2a] py-12 px-4 lg:px-12 text-center text-xs text-[#f5f5f5]/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#d4af37] text-[#121212] font-bold flex items-center justify-center text-sm">
              DS
            </div>
            <span className="font-serif font-bold text-[#f5f5f5] text-sm">Deccan Spice - Edison</span>
          </div>

          <p>© {new Date().getFullYear()} Deccan Spice. All rights reserved. Crafted with bespoke excellence.</p>

          <div className="flex items-center gap-6">
            <a href="https://edison.deccanspice.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors">Order Online</a>
            <a href="#story" className="hover:text-[#d4af37] transition-colors">Heritage</a>
            <a href="#offerings" className="hover:text-[#d4af37] transition-colors">Menu</a>
            <a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE DOCK */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#1e1e1e]/95 backdrop-blur-md border-t border-[#2a2a2a] p-3 flex items-center justify-between gap-3 shadow-2xl">
        <a 
          href="tel:7329022888" 
          className="flex-1 bg-[#121212] border border-[#d4af37]/40 text-[#f5f5f5] font-semibold py-3 rounded-xl text-xs flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4 text-[#d4af37]" /> Call (732) 902-2888
        </a>
        <a 
          href="https://edison.deccanspice.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#121212] font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg"
        >
          <ShoppingBag className="w-4 h-4" /> Order Ahead
        </a>
      </div>

      {/* DEMO / BEFORE VS AFTER MODAL */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#121212]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#1e1e1e] border border-[#d4af37]/40 rounded-3xl max-w-2xl w-full p-6 md:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsDemoModalOpen(false)}
              className="absolute top-6 right-6 text-[#f5f5f5]/60 hover:text-[#f5f5f5] bg-[#121212] p-2 rounded-full border border-[#2a2a2a]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#d4af37] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" /> Concept Uplift Dossier
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#f5f5f5] mb-4">Why This Bespoke Concept Wins</h3>
            <p className="text-sm text-[#f5f5f5]/70 mb-6 leading-relaxed">
              We analyzed your current online ordering presence and identified key opportunities to capture your stunning Edison ambiance and drive higher customer conversion.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-[#121212] p-4 rounded-2xl border border-[#2a2a2a]">
                <h4 className="font-semibold text-sm text-[#d4af37] mb-1 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> Current Friction Point
                </h4>
                <p className="text-xs text-[#f5f5f5]/70">
                  Standard white-label templates fail to showcase your gorgeous timber lattice ceilings, warm amber illumination, and rich Hyderabadi heritage.
                </p>
              </div>

              <div className="bg-[#121212] p-4 rounded-2xl border border-[#d4af37]/30">
                <h4 className="font-semibold text-sm text-[#d4af37] mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Apex Digital Solution
                </h4>
                <p className="text-xs text-[#f5f5f5]/70">
                  This custom digital storefront seamlessly blends your high-end interior photography, full menu category filtering, interactive custom dish studio, and verified Google reviews into a high-converting masterpiece.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="https://edison.deccanspice.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#121212] font-bold py-3.5 rounded-full text-center text-sm shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-2"
              >
                Visit Existing Site <ExternalLink className="w-4 h-4" />
              </a>
              <button 
                onClick={() => setIsDemoModalOpen(false)}
                className="flex-1 bg-[#121212] border border-[#d4af37]/40 text-[#f5f5f5] font-semibold py-3.5 rounded-full text-center text-sm hover:bg-[#252525] transition-all"
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