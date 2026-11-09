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
  AlertTriangle,
  Coffee,
  Sun,
  Compass,
  Check,
  Coffee as CoffeeIcon,
  Sun as GardenIcon,
  ChefHat
} from "lucide-react";

// --- REAL ASSETS & DATA ---
const HERO_IMG = "https://lh3.googleusercontent.com/grass-cs/AABkmLf1b9aL6Wwzsqqf7W8599mtCNoxNVDVJVnhDmyakumMw74D4G0UmbTfcwrbQP7JMtFbO1medzYDrXWLfSfsL1TQP-LzPXN-Fb6XqKSahjC0GV1evcbDj4iAFGAjyiCmSaKFvIma=s4800-w1000-h800";
const COFFEE_IMG = "https://lh3.googleusercontent.com/grass-cs/AABkmLfuygMcKeZy3h-8tMEHzzkqAekrMe9lcD2yFwhCIdSL8k2U6A1-udf6Rw6XrI1RGPakv8-IIC1zzHtZfMECrs6xanHn5mh_MVIERzGqXJAycovUMJRh8E9RRB0UEyWIoA_JUXtrmA=s4800-w1000-h800";
const FOOD_IMG = "https://lh3.googleusercontent.com/grass-cs/AABkmLcRzsn43Kkfp0qqFqvVFaGSTliFkeTodMB9RDv_Fc15GsemeULAqjRYOKTmZfDrJceHJWFub4wJicvs9OqHMGtS5mlpnyo-WEMfoigd2sHgE4KYjTzzwQz776HJ29QuN0lZFj4Uqg=s4800-w1000-h800";
const PASTRY_IMG = "https://lh3.googleusercontent.com/grass-cs/AABkmLe09ijpWE2xRcEm0I6vNPf3sB_tjRLAO0cPuKEGpSQSJiMr9AWNMl0M5DTSIpyAPpIzQPaeCxcnsVw2pHCHxi76aCCMISAFhPrIB-Gc0AkLOCclsCzhsCy1Xde5xNrhPD1Gzf9a6Q=s4800-w1000-h800";

const REVIEWS = [
  {
    author: "Rhiannon Wynn",
    text: "Enjoyed a delicious breakfast today at Parker. The space is quaint and small; homey. The menu was ample… many choices… made it hard to choose. I went with the brunch special Dominican Crispy Chicken sandwich because, pickled red onions + queso frito + fried chicken!",
    rating: 5,
    relativeTime: "a month ago",
    verifiedGoogle: true
  },
  {
    author: "Andrew Chalmers",
    text: "Amazing coffee shop and I ordered a cortado. The service was amazing and the coffee tasted delicious. They also have some delicious looking pastries and donuts!",
    rating: 5,
    relativeTime: "a month ago",
    verifiedGoogle: true
  },
  {
    author: "Nana Mensah",
    text: "The heart and intentions of this establishment are evident in the taste of the food they serve. It is clear that they are deeply rooted in a genuine desire to create something simply special yet not overbearing.",
    rating: 5,
    relativeTime: "5 months ago",
    verifiedGoogle: true
  },
  {
    author: "Julio Balmaseda",
    text: "Always Perfection! Our Go-To Brunch Spot. Parker Cafe never disappoints! We have been here many times for brunch, and every single visit is absolutely amazing from start to finish. The food is incredible—their French toasts are always delicious!",
    rating: 5,
    relativeTime: "5 months ago",
    verifiedGoogle: true
  }
];

const MENU_CATEGORIES = [
  {
    category_id: "specialty-coffee",
    category_name: "Specialty Coffee & Espresso Bar",
    badge: "House Roasted",
    description: "Expertly pulled espresso drinks crafted with premium beans and precision",
    items: [
      {
        name: "Signature Cortado",
        price: "$4.50",
        description: "Equal parts rich espresso and silky textured steamed milk served in a classic glass tumbler.",
        image: COFFEE_IMG,
        badge: "Bestseller",
        tags: ["Gluten-Free", "Espresso"]
      },
      {
        name: "Handcrafted Cafe Latte",
        price: "$5.25",
        description: "Smooth espresso blended with velvety microfoam milk and custom latte art.",
        image: HERO_IMG,
        badge: "Local Favorite",
        tags: ["Vegetarian"]
      },
      {
        name: "Cold Brew Reserve",
        price: "$4.75",
        description: "Steeped slow for 18 hours for a bold, low-acidity profile with natural caramel notes.",
        image: COFFEE_IMG,
        badge: "",
        tags: ["Vegan", "Cold Brew"]
      }
    ]
  },
  {
    category_id: "brunch-specials",
    category_name: "Signature Brunch & Kitchen Specials",
    badge: "Chef Specials",
    description: "Freshly prepared warm breakfast and savory lunch dishes made to order",
    items: [
      {
        name: "Dominican Crispy Chicken Sandwich",
        price: "$14.50",
        description: "Crispy fried chicken breast topped with fried cheese (queso frito), tangy pickled red onions, and house sauce on a toasted brioche bun.",
        image: FOOD_IMG,
        badge: "Signature",
        tags: ["Local Favorite", "Spicy"]
      },
      {
        name: "Parker House French Toast",
        price: "$13.00",
        description: "Thick-cut artisanal brioche dipped in spiced custard, seared golden brown, topped with fresh berries and warm maple syrup.",
        image: HERO_IMG,
        badge: "Bestseller",
        tags: ["Vegetarian", "Sweet"]
      },
      {
        name: "Avocado & Egg Breakfast Plate",
        price: "$12.50",
        description: "Smashed avocado on sourdough with poached farm eggs, chili flakes, and microgreens.",
        image: FOOD_IMG,
        badge: "",
        tags: ["Vegetarian"]
      }
    ]
  },
  {
    category_id: "bakery-treats",
    category_name: "Artisanal Bakery & Sweets",
    badge: "Baked Fresh Daily",
    description: "Decadent fresh pastries, daily donuts, and baked goods paired perfectly with coffee",
    items: [
      {
        name: "Artisanal Glazed Donut",
        price: "$3.75",
        description: "Fluffy house-made yeast donut with a lightly sweet vanilla bean glaze.",
        image: PASTRY_IMG,
        badge: "Daily Special",
        tags: ["Vegetarian"]
      },
      {
        name: "Flaky Butter Croissant",
        price: "$4.00",
        description: "Traditional French-style butter croissant baked fresh every morning.",
        image: PASTRY_IMG,
        badge: "",
        tags: ["Vegetarian"]
      }
    ]
  }
];

const CUSTOMIZER_STEPS = [
  {
    step_name: "Step 1: Choose Your Coffee Base",
    options: ["Cortado", "Cafe Latte", "Cold Brew", "Cappuccino", "Drip Coffee"]
  },
  {
    step_name: "Step 2: Choose Milk & Flavor",
    options: ["Whole Milk", "Oat Milk", "Almond Milk", "Vanilla Bean", "Sugar-Free Vanilla", "Caramel"]
  },
  {
    step_name: "Step 3: Select Brunch Main",
    options: ["Dominican Crispy Chicken Sandwich", "Parker House French Toast", "Avocado & Egg Toast", "Fresh Glazed Donut"]
  }
];

export default function ClientSitePage() {
  const [activeCategory, setActiveCategory] = useState("specialty-coffee");
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Customizer state
  const [coffeeBase, setCoffeeBase] = useState("Cortado");
  const [milkOption, setMilkOption] = useState("Oat Milk");
  const [brunchMain, setBrunchMain] = useState("Dominican Crispy Chicken Sandwich");
  const [comboAdded, setComboAdded] = useState(false);

  const handleComboAdd = () => {
    setComboAdded(true);
    setTimeout(() => setComboAdded(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#292524] font-sans antialiased selection:bg-[#0e7b88] selection:text-white pb-20 md:pb-0">

      {/* TOP AUDIT PREVIEW DEMO BAR */}
      <div className="bg-[#292524] text-white text-xs md:text-sm py-2.5 px-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-stone-200">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="font-medium">Live Bespoke Concept Preview crafted for Parker coffeeshop</span>
            <span className="hidden md:inline text-stone-400">• Built by Apex Digital</span>
          </div>
          <button
            onClick={() => setIsAuditModalOpen(true)}
            className="flex items-center gap-1.5 bg-[#0e7b88] hover:bg-[#0c6a75] text-white px-3 py-1 rounded-full text-xs font-semibold transition-all shadow-sm hover:shadow"
          >
            <AlertTriangle className="w-3.5 h-3.5 text-amber-300" />
            <span>⚡ Compare Before vs. After Security Uplift</span>
          </button>
        </div>
      </div>

      {/* BEFORE VS AFTER AUDIT MODAL */}
      {isAuditModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto border border-stone-200">
            <button
              onClick={() => setIsAuditModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-1.5 rounded-full hover:bg-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#0e7b88] font-bold text-sm uppercase tracking-wider mb-2">
              <ShieldCheck className="w-5 h-5 text-[#d97706]" />
              Website Security & Performance Upgrade Dossier
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">
              Restoring Parker Cafe&apos;s Digital Sanctuary
            </h3>

            <div className="space-y-4 text-sm text-stone-600 mb-6">
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-900">
                <div className="font-bold flex items-center gap-2 text-red-800 mb-1">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                  Critical Issue Identified on Former Domain (cafeparker.com)
                </div>
                <p className="text-xs leading-relaxed text-red-700">
                  The original web domain cafeparker.com became compromised, serving malicious foreign gambling spam redirects. This actively turned away local West New York customers attempting to access your digital menu and store hours online.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-900">
                <div className="font-bold flex items-center gap-2 text-[#0e7b88] mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#0e7b88] shrink-0" />
                  The Solution: This High-Performance Bespoke Experience
                </div>
                <ul className="text-xs leading-relaxed text-stone-700 space-y-1.5 list-disc list-inside">
                  <li><strong>Instant Loading Speed:</strong> Built on modern Next.js React architecture.</li>
                  <li><strong>Mobile & Local Ready:</strong> Seamless access to your 4.6★ menu and garden patio details.</li>
                  <li><strong>Zero Malware Risk:</strong> Encrypted, clean, high-converting digital storefront.</li>
                </ul>
              </div>

              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Outreach Message Context</div>
                <p className="text-xs text-stone-700 italic">
                  &ldquo;Hi Parker Cafe team, I was searching for your coffee shop after hearing incredible reviews about your Dominican Crispy Chicken Sandwich and Cortados, but noticed your website cafeparker.com was compromised. We built this clean, fast, modern website concept specifically for Parker Cafe to showcase your garden patio and delicious food.&rdquo;
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsAuditModalOpen(false)}
              className="w-full bg-[#0e7b88] hover:bg-[#0c6a75] text-white py-3 rounded-xl font-bold transition-colors shadow-md text-center"
            >
              Explore Modern Parker Web Concept
            </button>
          </div>
        </div>
      )}

      {/* NAVIGATION */}
      <nav className="bg-[#fdfbf7]/90 backdrop-blur-md border-b border-stone-200 sticky top-[41px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#0e7b88] flex items-center justify-center text-white font-serif text-xl font-bold group-hover:bg-[#d97706] transition-colors shadow-sm">
              P
            </div>
            <div>
              <span className="font-serif text-2xl font-bold text-stone-900 tracking-tight block leading-none">
                Parker
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#d97706] font-semibold">
                Coffeeshop & Garden Patio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-700">
            <a href="#about" className="hover:text-[#0e7b88] transition-colors">Our Story</a>
            <a href="#menu" className="hover:text-[#0e7b88] transition-colors">Full Menu</a>
            <a href="#customizer" className="hover:text-[#0e7b88] transition-colors">Brunch Combo</a>
            <a href="#gallery" className="hover:text-[#0e7b88] transition-colors">Garden Patio</a>
            <a href="#reviews" className="hover:text-[#0e7b88] transition-colors">Reviews</a>
            <a href="#location" className="hover:text-[#0e7b88] transition-colors">Hours & Map</a>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:2016992398"
              className="px-4 py-2 text-xs font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#0e7b88]" />
              (201) 699-2398
            </a>
            <a
              href="#menu"
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#0e7b88] hover:bg-[#0c6a75] rounded-full transition-all shadow-sm hover:shadow"
            >
              Order Ahead
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 px-4 py-6 space-y-3 shadow-lg">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-800 font-medium py-1"
            >
              Our Story
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-800 font-medium py-1"
            >
              Full Menu
            </a>
            <a
              href="#customizer"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-800 font-medium py-1"
            >
              Brunch Combo
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-800 font-medium py-1"
            >
              Garden Patio
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-800 font-medium py-1"
            >
              Reviews
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-800 font-medium py-1"
            >
              Hours & Map
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:2016992398"
                className="w-full text-center py-2.5 rounded-full bg-stone-100 font-bold text-stone-800 text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#0e7b88]" /> Call (201) 699-2398
              </a>
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full bg-[#0e7b88] text-white font-bold text-sm"
              >
                Order Online
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#292524] text-white py-16 px-4">
        {/* Background Image with Warm Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay scale-105 transition-transform duration-10000"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#292524] via-[#292524]/60 to-transparent" />

        <div className="relative max-w-5xl mx-auto text-center z-10 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#0e7b88]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-teal-300/30 text-teal-50 text-xs md:text-sm font-semibold tracking-wide shadow-lg">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>West New York&apos;s Beloved Garden Patio Cafe</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-stone-100 leading-[1.15]">
            Craft Coffee, Genuine Intention, <br className="hidden sm:block" />
            <span className="italic font-normal text-amber-200">&amp; A Peaceful Garden Escape</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-xl text-stone-300 font-light leading-relaxed">
            Nestled on Park Avenue in West New York. Handcrafted cortados, golden French toast, and our iconic Dominican Crispy Chicken Sandwich served under sun-drenched turquoise umbrellas.
          </p>

          {/* Trust Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-6 py-2 text-sm text-stone-300">
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white ml-1">4.6 ★</span>
              <span className="text-stone-300 text-xs">(480+ Reviews)</span>
            </div>
            <div className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-4 h-4 text-teal-400" />
              <span>6504 Park Ave, West New York, NJ</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#menu"
              className="w-full sm:w-auto px-8 py-4 bg-[#0e7b88] hover:bg-[#0c6a75] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 text-base"
            >
              <Utensils className="w-5 h-5 text-amber-300" />
              Explore Menu &amp; Order
            </a>
            <a
              href="#location"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md font-semibold rounded-full border border-white/20 transition-all flex items-center justify-center gap-2 text-base"
            >
              <Clock className="w-5 h-5 text-teal-300" />
              View Hours &amp; Garden Patio
            </a>
          </div>
        </div>
      </section>

      {/* FEATURE HIGHLIGHT STRIP */}
      <section className="bg-[#0e7b88] text-white py-6 border-y border-teal-700/50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center justify-center p-2">
            <GardenIcon className="w-6 h-6 text-amber-300 mb-1" />
            <span className="font-serif font-bold text-base">Outdoor Garden Patio</span>
            <span className="text-xs text-teal-100">String Lights &amp; Rustic Wood</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <CoffeeIcon className="w-6 h-6 text-amber-300 mb-1" />
            <span className="font-serif font-bold text-base">Signature Cortados</span>
            <span className="text-xs text-teal-100">Velvety Microfoam Art</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <ChefHat className="w-6 h-6 text-amber-300 mb-1" />
            <span className="font-serif font-bold text-base">Latin Brunch Specials</span>
            <span className="text-xs text-teal-100">Queso Frito &amp; Crispy Chicken</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <Award className="w-6 h-6 text-amber-300 mb-1" />
            <span className="font-serif font-bold text-base">Baked Fresh Daily</span>
            <span className="text-xs text-teal-100">Artisanal Yeast Glazed Donuts</span>
          </div>
        </div>
      </section>

      {/* BRAND STORY & HERITAGE */}
      <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-[#d97706] font-bold text-xs uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              <Sun className="w-3.5 h-3.5" />
              West New York Gem
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
              Craft Coffee, Genuine Intention, &amp; A Peaceful Garden Escape
            </h2>
            <div className="w-16 h-1 bg-[#0e7b88] rounded-full" />
            <p className="text-stone-600 leading-relaxed text-base">
              At Parker Coffeeshop, every dish and espresso shot is prepared with genuine heart and dedication. Nestled on Park Avenue in West New York, our homey neighborhood cafe offers a quiet sanctuary with a lush outdoor garden patio, rustic wooden tables, and sparkling string lights.
            </p>
            <p className="text-stone-600 leading-relaxed text-base">
              From meticulously pulled cortados and velvety latte art to our celebrated Dominican Crispy Chicken Sandwich—stacked with queso frito and tangy pickled red onions—we combine bold culinary heritage with modern cafe culture. Whether you&apos;re relaxing on the patio for a weekend brunch or stopping by for a fresh morning donut, Parker Cafe delivers warmth and flavor in every visit.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
                <div className="font-serif font-bold text-2xl text-[#0e7b88]">4.6 ★</div>
                <div className="text-xs text-stone-500 font-medium">480+ Google Reviews</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
                <div className="font-serif font-bold text-2xl text-[#d97706]">Daily</div>
                <div className="text-xs text-stone-500 font-medium">Fresh Baked Pastries</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={COFFEE_IMG}
                alt="Handcrafted Coffee at Parker Cafe"
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">Patio &amp; Espresso</span>
                <p className="font-serif text-lg font-bold">Serving West New York with warmth &amp; flavor</p>
              </div>
            </div>

            {/* Overlapping small visual card */}
            <div className="hidden sm:flex absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-stone-200 items-center gap-4 max-w-xs">
              <img
                src={FOOD_IMG}
                alt="Dominican Crispy Chicken"
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div>
                <span className="text-xs font-bold text-[#d97706] block">Signature Dish</span>
                <span className="text-sm font-bold text-stone-900 block leading-snug">Dominican Crispy Chicken</span>
                <span className="text-xs text-stone-500">Queso Frito &amp; Pickled Onions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL MENU & BRUNCH CATALOG */}
      <section id="menu" className="py-20 bg-stone-100/60 border-y border-stone-200 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0e7b88] bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
              Full Menu &amp; Brunch Specials
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900">
              Artisanal Coffee &amp; Handcrafted Brunch Favorites
            </h2>
            <p className="text-stone-600 text-base">
              Every item is crafted fresh to order using fine ingredients and authentic Latin culinary pairings.
            </p>

            {/* Category Tab Switcher */}
            <div className="flex flex-wrap justify-center gap-2 pt-6">
              {MENU_CATEGORIES.map((cat) => (
                <button
                  key={cat.category_id}
                  onClick={() => setActiveCategory(cat.category_id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat.category_id
                      ? "bg-[#0e7b88] text-white shadow-md scale-105"
                      : "bg-white text-stone-700 hover:bg-stone-200 border border-stone-200"
                  }`}
                >
                  {cat.category_name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Category Display */}
          {MENU_CATEGORIES.filter((c) => c.category_id === activeCategory).map((cat) => (
            <div key={cat.category_id} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-300 gap-2">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 flex items-center gap-2">
                    {cat.category_name}
                    {cat.badge && (
                      <span className="text-xs font-sans font-semibold bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full border border-amber-300">
                        {cat.badge}
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-stone-500 mt-1">{cat.description}</p>
                </div>
              </div>

              {/* Items Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-200 flex flex-col justify-between group"
                  >
                    <div>
                      {item.image && (
                        <div className="relative h-48 overflow-hidden bg-stone-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {item.badge && (
                            <span className="absolute top-3 right-3 bg-[#0e7b88] text-white text-[11px] font-bold uppercase px-2.5 py-1 rounded-full shadow">
                              {item.badge}
                            </span>
                          )}
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="font-serif font-bold text-xl text-stone-900 group-hover:text-[#0e7b88] transition-colors">
                            {item.name}
                          </h4>
                          <span className="font-serif font-bold text-lg text-[#d97706] shrink-0">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-stone-600 text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-stone-100 mt-auto">
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-medium bg-stone-100 text-stone-600 px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href="tel:2016992398"
                        className="text-xs font-bold text-[#0e7b88] hover:text-[#0c6a75] flex items-center gap-1"
                      >
                        Order <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE BRUNCH COMBO BUILDER */}
      <section id="customizer" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0e7b88] to-[#09545e] rounded-3xl p-6 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-black/20 px-3 py-1 rounded-full border border-amber-300/30">
              Interactive Menu Feature
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">
              Build Your Ideal Parker Brunch Combo
            </h2>
            <p className="text-teal-100 text-sm sm:text-base">
              Custom-craft your perfect morning pairing: specialty coffee, milk, flavor, and signature brunch main.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Step 1 */}
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 space-y-3">
              <span className="text-xs font-bold uppercase text-amber-300 tracking-wider">Step 1: Coffee Base</span>
              <div className="space-y-2">
                {CUSTOMIZER_STEPS[0].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setCoffeeBase(opt)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      coffeeBase === opt
                        ? "bg-amber-500 text-stone-900 font-bold shadow"
                        : "bg-white/5 hover:bg-white/15 text-stone-100"
                    }`}
                  >
                    <span>{opt}</span>
                    {coffeeBase === opt && <Check className="w-4 h-4 text-stone-900" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 space-y-3">
              <span className="text-xs font-bold uppercase text-amber-300 tracking-wider">Step 2: Milk &amp; Flavor</span>
              <div className="space-y-2">
                {CUSTOMIZER_STEPS[1].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setMilkOption(opt)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      milkOption === opt
                        ? "bg-amber-500 text-stone-900 font-bold shadow"
                        : "bg-white/5 hover:bg-white/15 text-stone-100"
                    }`}
                  >
                    <span>{opt}</span>
                    {milkOption === opt && <Check className="w-4 h-4 text-stone-900" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 space-y-3">
              <span className="text-xs font-bold uppercase text-amber-300 tracking-wider">Step 3: Brunch Main</span>
              <div className="space-y-2">
                {CUSTOMIZER_STEPS[2].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setBrunchMain(opt)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      brunchMain === opt
                        ? "bg-amber-500 text-stone-900 font-bold shadow"
                        : "bg-white/5 hover:bg-white/15 text-stone-100"
                    }`}
                  >
                    <span className="truncate pr-2">{opt}</span>
                    {brunchMain === opt && <Check className="w-4 h-4 text-stone-900 shrink-0" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Combo Summary Bar */}
          <div className="bg-stone-900/90 backdrop-blur-md p-6 rounded-2xl border border-amber-400/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
                Your Custom Combo Selection
              </span>
              <p className="text-white font-serif text-lg">
                <span className="font-bold text-amber-200">{coffeeBase}</span> ({milkOption}) +{" "}
                <span className="font-bold text-amber-200">{brunchMain}</span>
              </p>
            </div>
            <button
              onClick={handleComboAdd}
              className={`w-full md:w-auto px-8 py-3.5 rounded-full font-bold transition-all shadow-lg text-sm flex items-center justify-center gap-2 ${
                comboAdded
                  ? "bg-emerald-500 text-white"
                  : "bg-amber-500 hover:bg-amber-400 text-stone-950"
              }`}
            >
              {comboAdded ? (
                <>
                  <Check className="w-5 h-5" /> Added to Order!
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" /> Reserve This Combo
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* REAL PHOTO GALLERY SHOWCASE */}
      <section id="gallery" className="py-20 px-4 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d97706] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Garden Patio &amp; Coffee Vibe
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Experience Parker Coffeeshop
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Sun-drenched patio seating, handcrafted drinks, and heartfelt dishes in West New York.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative h-80 rounded-2xl overflow-hidden shadow-md border border-stone-200">
              <img
                src={HERO_IMG}
                alt="Parker Garden Patio"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">Atmosphere</span>
                <h4 className="font-serif font-bold text-lg">Outdoor Garden Patio</h4>
                <p className="text-xs text-stone-300">Rustic tables &amp; turquoise umbrellas</p>
              </div>
            </div>

            <div className="group relative h-80 rounded-2xl overflow-hidden shadow-md border border-stone-200">
              <img
                src={COFFEE_IMG}
                alt="Craft Espresso & Cortados"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">Espresso Bar</span>
                <h4 className="font-serif font-bold text-lg">Signature Cortados</h4>
                <p className="text-xs text-stone-300">House roasted precision espresso</p>
              </div>
            </div>

            <div className="group relative h-80 rounded-2xl overflow-hidden shadow-md border border-stone-200">
              <img
                src={FOOD_IMG}
                alt="Dominican Crispy Chicken Sandwich"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">Brunch Favorite</span>
                <h4 className="font-serif font-bold text-lg">Latin-Infused Dishes</h4>
                <p className="text-xs text-stone-300">Queso frito &amp; pickled red onions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFIED CUSTOMER REVIEWS */}
      <section id="reviews" className="py-20 bg-[#fdfbf7] px-4 border-t border-stone-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1 text-amber-500 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-amber-500" />
              Verified 4.6 ★ Rating
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Loved by West New York Neighbors
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Real stories from our patrons celebrating our food, coffee, and peaceful patio atmosphere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {REVIEWS.map((rev, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-stone-200 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    {rev.verifiedGoogle && (
                      <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-[#0e7b88]" /> Verified Google Review
                      </span>
                    )}
                  </div>
                  <p className="text-stone-700 italic text-sm leading-relaxed font-serif">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="font-bold text-stone-900 text-sm">{rev.author}</span>
                  <span>{rev.relativeTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOURS & NEIGHBORHOOD LOCATION */}
      <section id="location" className="py-20 bg-stone-900 text-white px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-white/10 px-3 py-1 rounded-full border border-white/15">
              Visit Parker Cafe
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-100">
              Your Sanctuary in West New York
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Stop by for a fresh morning cortado, sit in our quiet garden patio, or take out our signature Latin brunch items.
            </p>

            <div className="space-y-4 text-stone-300 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0e7b88] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Address</span>
                  <span>6504 Park Ave, West New York, NJ 07093, USA</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#0e7b88] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Direct Phone</span>
                  <a href="tel:2016992398" className="hover:text-amber-300 transition-colors">
                    (201) 699-2398
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#0e7b88] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Operating Schedule</span>
                  <div className="mt-1 space-y-1 text-xs text-stone-400">
                    <p>Mon - Thu: 9:00 AM – 4:00 PM</p>
                    <p className="text-amber-300 font-semibold">Friday: 9:00 AM – 4:00 PM &amp; 5:30 PM – 9:30 PM</p>
                    <p>Sat - Sun: 9:00 AM – 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="https://maps.google.com/?q=6504+Park+Ave+West+New+York+NJ+07093"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-[#0e7b88] hover:bg-[#0c6a75] text-white font-bold rounded-full transition-all text-sm flex items-center gap-2 shadow"
              >
                <Compass className="w-4 h-4 text-amber-300" /> Open in Google Maps
              </a>
              <a
                href="tel:2016992398"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition-all text-sm flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-teal-300" /> Call Store
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Card */}
          <div className="bg-stone-800 rounded-3xl p-6 border border-stone-700 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-stone-700 pb-4">
              <div>
                <h4 className="font-serif font-bold text-lg text-white">Parker coffeeshop</h4>
                <p className="text-xs text-stone-400">West New York, NJ • 4.6 ★ (480 Reviews)</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Moderate Price
              </span>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden bg-stone-900 border border-stone-700 flex items-center justify-center">
              <img
                src={HERO_IMG}
                alt="Map View Location"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-stone-900/40" />
              <div className="relative text-center p-4 bg-stone-900/90 backdrop-blur-md rounded-2xl border border-stone-600 shadow-xl max-w-xs">
                <MapPin className="w-8 h-8 text-[#0e7b88] mx-auto mb-2 animate-bounce" />
                <p className="font-serif font-bold text-stone-100 text-sm">6504 Park Ave</p>
                <p className="text-xs text-stone-400">West New York, NJ 07093</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-950 text-stone-400 py-12 px-4 border-t border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#0e7b88] flex items-center justify-center text-white font-serif font-bold text-sm">
              P
            </div>
            <span className="font-serif text-lg font-bold text-stone-200">Parker coffeeshop</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-stone-400">
            <a href="#about" className="hover:text-white transition-colors">Our Story</a>
            <a href="#menu" className="hover:text-white transition-colors">Full Menu</a>
            <a href="#customizer" className="hover:text-white transition-colors">Brunch Builder</a>
            <a href="#gallery" className="hover:text-white transition-colors">Garden Patio</a>
            <a href="#location" className="hover:text-white transition-colors">Hours &amp; Location</a>
          </div>

          <div className="text-xs text-stone-500 text-center md:text-right">
            © {new Date().getFullYear()} Parker Cafe. All rights reserved. <br />
            <span className="text-stone-600">6504 Park Ave, West New York, NJ 07093</span>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE DOCK */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-stone-900/95 backdrop-blur-lg border-t border-stone-800 p-3 z-50 flex items-center gap-3 shadow-2xl">
        <a
          href="tel:2016992398"
          className="flex-1 py-3 px-4 rounded-full bg-stone-800 hover:bg-stone-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-stone-700"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          Call (201) 699-2398
        </a>
        <a
          href="#menu"
          className="flex-1 py-3 px-4 rounded-full bg-[#0e7b88] hover:bg-[#0c6a75] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
        >
          <Utensils className="w-4 h-4 text-amber-300" />
          Order Ahead
        </a>
      </div>

    </div>
  );
}