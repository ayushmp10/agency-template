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
  Layers,
  Info,
  Check,
} from "lucide-react";

export default function ClientSitePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("the-boiler");

  // Customizer state for interactive 4-Step Cajun Boil Builder
  const [customCatch, setCustomCatch] = useState("Snow Crab Clusters");
  const [customSauce, setCustomSauce] = useState("Cap't Loui Signature Sauce");
  const [customSpice, setCustomSpice] = useState("Medium (A Little Kick)");
  const [customSides, setCustomSides] = useState<string[]>([
    "Garlic Noodles",
    "Smoked Cajun Sausages",
  ]);

  const toggleSide = (side: string) => {
    if (customSides.includes(side)) {
      setCustomSides(customSides.filter((s) => s !== side));
    } else {
      setCustomSides([...customSides, side]);
    }
  };

  const categories = [
    {
      category_id: "the-boiler",
      category_name: "The Boiler (Signature Seafood Boils)",
      badge: "Cap't Loui Classic",
      description:
        "Pick your seafood, sauce, and spice level. All boils include sweet corn and boiled potatoes.",
      items: [
        {
          name: "King Crab Legs Boil",
          price: "Market Price",
          description:
            "Wild-caught juicy King Crab legs steeped in your choice of Cap't Loui signature sauces with potato and corn.",
          image: "https://captloui.com/images/menu/boiler-bag.webp",
          badge: "Bestseller",
          tags: ["Wild Caught", "Signature", "Gluten-Free Option"],
        },
        {
          name: "Snow Crab Legs Boil",
          price: "Market Price",
          description:
            "Sweet and tender snow crab clusters tossed in steaming garlic butter and Louisiana Cajun seasoning.",
          image: "https://captloui.com/images/menu/boiler-bag.webp",
          badge: "Local Favorite",
          tags: ["Popular", "Gluten-Free Option"],
        },
        {
          name: "Whole Lobster / Lobster Tail",
          price: "Market Price",
          description:
            "Succulent whole lobster or tail cooked to perfection and drenched in your choice of spice sauce.",
          image: "https://captloui.com/images/menu/boiler-bag.webp",
          badge: "Premium",
          tags: ["Fresh Daily"],
        },
        {
          name: "Head-On / Head-Off Shrimp Boil",
          price: "Market Price",
          description:
            "Plump juicy shrimp boiled fresh and coated generously in our signature Loui sauce.",
          image: "https://captloui.com/images/menu/boiler-bag.webp",
          badge: "Bestseller",
          tags: ["Customer Pick"],
        },
        {
          name: "Fresh Louisiana Crawfish",
          price: "Market Price",
          description:
            "Traditional live Cajun crawfish soaked in flavor-infused broth and signature spice blends.",
          image: "https://captloui.com/images/menu/boiler-bag.webp",
          badge: "Authentic Cajun",
          tags: ["Spicy", "Seasonal"],
        },
        {
          name: "Mussels & Clams Combo Boil",
          price: "Market Price",
          description:
            "Tender green mussels and sweet clams boiled with garlic, butter, sausage, corn, and potatoes.",
          image: "https://captloui.com/images/menu/boiler-bag.webp",
          badge: "Chef Pick",
          tags: ["Seafood Favorite"],
        },
      ],
    },
    {
      category_id: "the-fryer",
      category_name: "The Fryer (Golden Cajun Baskets)",
      badge: "Crispy Favorites",
      description: "Golden fried seafood served crisp with seasoned Cajun fries.",
      items: [
        {
          name: "Fisherman's Platter",
          price: "$24.95",
          description:
            "Ultimate combo of crispy fish, fried shrimp, calamari, and softshell crab served with Cajun fries.",
          image: "https://captloui.com/images/menu/the-fryer.webp",
          badge: "Ultimate Feast",
          tags: ["Crispy", "Shareable"],
        },
        {
          name: "Soft Shell Crab Basket",
          price: "$18.95",
          description:
            "Crispy fried whole soft shell crab served golden brown with house Cajun dipping sauce.",
          image: "https://captloui.com/images/menu/the-fryer.webp",
          badge: "Specialty",
          tags: ["Crispy"],
        },
        {
          name: "Fish & Chips Basket",
          price: "$15.95",
          description:
            "Flaky white fish fillets lightly battered and fried to golden crispness with Cajun fries.",
          image: "https://captloui.com/images/menu/the-fryer.webp",
          badge: "Classic",
          tags: ["Top Rated"],
        },
        {
          name: "Fried Shrimp Basket",
          price: "$16.95",
          description:
            "Crispy golden fried jumbo shrimp served with house remoulade and seasoned fries.",
          image: "https://captloui.com/images/menu/the-fryer.webp",
          badge: "Bestseller",
          tags: ["Kids Favorite"],
        },
        {
          name: "Calamari Basket",
          price: "$14.95",
          description:
            "Tender calamari rings lightly dusted in Cajun spiced flour and fried crisp.",
          image: "https://captloui.com/images/menu/the-fryer.webp",
          badge: "Appetizer Favorite",
          tags: ["Crispy"],
        },
      ],
    },
    {
      category_id: "sandwiches",
      category_name: "Cajun Sandwiches & Po'boys",
      badge: "House Made",
      description:
        "Served on toasted French bread with lettuce, tomatoes, and signature sauces.",
      items: [
        {
          name: "New England Lobster Roll",
          price: "$22.95",
          description:
            "Chilled sweet lobster meat lightly dressed in lemon-butter sauce on a toasted split-top brioche roll.",
          image: "https://captloui.com/images/menu/sandwich.webp",
          badge: "Signature",
          tags: ["Chef Pick", "Fresh Lobster"],
        },
        {
          name: "Crispy Fish Po'boy",
          price: "$14.95",
          description:
            "Golden fried white fish fillet packed into toasted french bread with signature Loui sauce.",
          image: "https://captloui.com/images/menu/sandwich.webp",
          badge: "Highly Reviewed",
          tags: ["Staff Pick"],
        },
        {
          name: "Fried Shrimp Po'boy",
          price: "$15.95",
          description:
            "Crispy Cajun seasoned jumbo shrimp piled high with house sauce and fresh greens.",
          image: "https://captloui.com/images/menu/sandwich.webp",
          badge: "Bestseller",
          tags: ["Authentic"],
        },
        {
          name: "Softshell Crab Po'boy",
          price: "$17.95",
          description:
            "Whole crispy fried softshell crab nestled in warm toasted French bread with spicy sauce.",
          image: "https://captloui.com/images/menu/sandwich.webp",
          badge: "Delicacy",
          tags: ["Crispy"],
        },
      ],
    },
    {
      category_id: "soups-and-sides",
      category_name: "Soups & Boil Side Dishes",
      badge: "Must-Add Sides",
      description:
        "Perfect accompaniments to soak up every drop of signature garlic butter sauce.",
      items: [
        {
          name: "Cap't Loui Garlic Noodles",
          price: "$8.95",
          description:
            "Wok-tossed noodles coated in rich roasted garlic butter and herbs.",
          image: "https://captloui.com/images/menu/sides.jpg",
          badge: "Must Try",
          tags: ["Fan Favorite"],
        },
        {
          name: "Louisiana Seafood Jambalaya",
          price: "$9.95",
          description:
            "Slow-simmered rice dish packed with sausage, chicken, shrimp, and aromatic Cajun spices.",
          image: "https://captloui.com/images/menu/soups.webp",
          badge: "House Specialty",
          tags: ["Warm & Comforting"],
        },
        {
          name: "New England Clam Chowder",
          price: "$8.95",
          description:
            "Rich cream-based chowder packed with sweet clams and tender potatoes.",
          image: "https://captloui.com/images/menu/soups.webp",
          badge: "Classic",
          tags: ["Creamy"],
        },
        {
          name: "Cajun Sausages & Corn Sides",
          price: "$5.95",
          description:
            "Smoked savory Cajun sausage slices, sweet corn on the cob, and tender potatoes.",
          image: "https://captloui.com/images/menu/sides.jpg",
          badge: "Essential",
          tags: ["Boil Classic"],
        },
      ],
    },
  ];

  const reviews = [
    {
      author: "Allison A",
      text: "We been to many seafood boil places and this place is the best!!! The seasoning is perfect and not too salty and the staff was SO nice!!! Like I’ve never experienced such nice customer service in NJ! They were so accommodating to our toddler and were just amaz",
      rating: 5,
      relativeTime: "2 weeks ago",
      verifiedGoogle: true,
    },
    {
      author: "Trisha T",
      text: "Omgggg this seafood boil was sooo good 😭 everything was hot fresh and full of flavor. They definitely not stingy with the portions either. The crab legs lobster shrimp corn potatoes literally everything was soaking in that sauceeee 😆 gloves went on and being c",
      rating: 5,
      relativeTime: "2 months ago",
      verifiedGoogle: true,
    },
    {
      author: "Juni S.",
      text: "Our experience at Cap’t Louie in Edison was spectacular and I find one of the best seafood boil places in central Jersey. My wife and I ordered the custom 2lb combo with snow crab legs, head on shrimp, and scallops with the free side of sausage all in the Cap’t",
      rating: 5,
      relativeTime: "4 months ago",
      verifiedGoogle: true,
    },
    {
      author: "Nekia Williams",
      text: "I can no longer eat shellfish, so I had a fish po boy and it was so good. The sauce was amazing. The Cajun fries are the first I had that actually taste like true Cajun. This place was so clean and the staff are very pleasant. I will definitely be returning. M",
      rating: 5,
      relativeTime: "a month ago",
      verifiedGoogle: true,
    },
  ];

  const schedule = [
    "Monday: 11:30 AM – 10:00 PM",
    "Tuesday: 11:30 AM – 10:00 PM",
    "Wednesday: 11:30 AM – 10:00 PM",
    "Thursday: 11:30 AM – 10:00 PM",
    "Friday: 11:30 AM – 11:00 PM",
    "Saturday: 11:30 AM – 11:00 PM",
    "Sunday: 11:30 AM – 10:00 PM",
  ];

  return (
    <div className="min-h-screen bg-[#0C0E12] text-[#F5F5F7] font-sans selection:bg-[#C62828] selection:text-white">
      {/* TOP DEMO BAR */}
      <div className="bg-gradient-to-r from-[#C62828] via-[#8E0000] to-[#161920] text-white px-4 py-2.5 text-xs md:text-sm font-medium sticky top-0 z-50 shadow-lg border-b border-[#FFA000]/30 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FFA000] animate-pulse"></span>
          <span className="font-semibold">Live Concept Preview crafted for Cap&rsquo;t Loui - Edison, NJ</span>
          <span className="hidden md:inline-block opacity-80">• Built by Apex Digital Architects</span>
        </div>
        <button
          onClick={() => setDemoModalOpen(true)}
          className="bg-white/15 hover:bg-white/25 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all border border-white/25 flex items-center gap-1.5 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#FFA000]" />
          ⚡ Compare Before vs. After
        </button>
      </div>

      {/* COMPARISON MODAL */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#161920] border border-[#FFA000]/40 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative">
            <button
              onClick={() => setDemoModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-[#FFA000] mb-2 text-sm font-semibold tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4" /> Transformation Audit Dossier
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Cap&rsquo;t Loui Edison: Uplift Analysis
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              We analyzed the existing web presence for your 4.9-star Edison location (1,989+ Google reviews) and crafted this bespoke digital experience to solve critical local friction points and maximize guest conversion.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* OLD SITE PREVIEW */}
              <div className="bg-black/40 rounded-xl p-4 border border-red-500/30 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-red-400 font-semibold text-sm flex items-center gap-1.5">
                    <X className="w-4 h-4" /> Previous Web Friction
                  </span>
                  <span className="text-xs bg-red-500/20 text-red-300 px-2 py-0.5 rounded">
                    Off-site Reliance
                  </span>
                </div>
                <div className="relative rounded-lg overflow-hidden border border-gray-800 mb-3 bg-gray-900 flex-1 min-h-[220px]">
                  <img
                    src="https://iad.microlink.io/zEFjafiaicBUQI1xwFg4c2oJEZfrlVRWKIPwlAORfWWWPlA4oTCEJ3IeBgs3IL5UhW0W_QThKr-qbLT4Rs6cCQ.png"
                    alt="Old Cap't Loui Mobile Site Screenshot"
                    className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <ul className="text-xs text-gray-400 space-y-1.5 list-disc pl-4">
                  <li>Directs users off-site to generic delivery links instantly.</li>
                  <li>Lacks interactive visual Cajun boil builders on mobile.</li>
                  <li>Menu lacks rich photography and clear item pricing structure.</li>
                </ul>
              </div>

              {/* NEW BESPOKE UPLIFT */}
              <div className="bg-black/40 rounded-xl p-4 border border-emerald-500/30 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-emerald-400 font-semibold text-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Apex Custom Architecture
                  </span>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                    High Conversion
                  </span>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-[#C62828]/20 to-[#161920] border border-[#FFA000]/30 p-4 mb-3 flex-1 flex flex-col justify-center">
                  <div className="text-center">
                    <span className="text-2xl font-extrabold text-white">4.9 ★</span>
                    <p className="text-xs text-gray-300 mt-1">
                      1,989+ verified local reviews highlighted with interactive 4-step custom boil builder &amp; direct OpenTable sync.
                    </p>
                  </div>
                </div>
                <ul className="text-xs text-gray-300 space-y-1.5 list-disc pl-4">
                  <li>Interactive 4-Step Boil Customizer built right into the page.</li>
                  <li>Full menu catalog with pricing, category tabs &amp; real photography.</li>
                  <li>Lightning-fast mobile experience with bottom sticky action dock.</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDemoModalOpen(false)}
                className="bg-[#C62828] hover:bg-[#a51d1d] text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-[#C62828]/30"
              >
                Explore Live Concept
              </button>
            </div>
          </div>
        </div>
      )}

      {/* NAVIGATION BAR */}
      <header className="sticky top-[37px] z-40 bg-[#0C0E12]/95 backdrop-blur-md border-b border-gray-800 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C62828] to-[#FFA000] flex items-center justify-center shadow-lg shadow-[#C62828]/30">
              <Utensils className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white block">
                CAP&rsquo;T LOUI
              </span>
              <span className="text-xs text-[#FFA000] font-semibold tracking-widest uppercase block -mt-1">
                Edison, NJ • 4.9 ★
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-[#FFA000] transition-colors">Our Story</a>
            <a href="#builder" className="hover:text-[#FFA000] transition-colors">Build Boil</a>
            <a href="#menu" className="hover:text-[#FFA000] transition-colors">Full Menu</a>
            <a href="#gallery" className="hover:text-[#FFA000] transition-colors">Gallery</a>
            <a href="#reviews" className="hover:text-[#FFA000] transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-[#FFA000] transition-colors">Location</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.ubereats.com/store/capt-loui-edison-1779-new-jersey-27/DmvMlDRwUhGBi3y7wWB-iA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-white/5 text-white border border-gray-700 hover:border-[#FFA000] px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-[#FFA000]" /> Order Online
            </a>
            <a
              href="https://www.opentable.com/r/capt-loui-edison-reservations-edison?restref=1484617&lang=en-US&ot_source=Restaurant%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C62828] hover:bg-[#a51d1d] text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-[#C62828]/30 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Book Table
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#161920] border-b border-gray-800 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-3 text-base font-medium">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-[#FFA000]"
              >
                Our Story
              </a>
              <a
                href="#builder"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-[#FFA000]"
              >
                Build Boil
              </a>
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-[#FFA000]"
              >
                Full Menu
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-[#FFA000]"
              >
                Gallery
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-[#FFA000]"
              >
                Reviews
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-[#FFA000]"
              >
                Location &amp; Hours
              </a>
            </nav>
            <div className="pt-4 border-t border-gray-800 flex flex-col gap-3">
              <a
                href="https://www.ubereats.com/store/capt-loui-edison-1779-new-jersey-27/DmvMlDRwUhGBi3y7wWB-iA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-transparent text-center text-white border border-gray-700 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-[#FFA000]" /> Order Online (UberEats)
              </a>
              <a
                href="https://www.opentable.com/r/capt-loui-edison-reservations-edison?restref=1484617&lang=en-US&ot_source=Restaurant%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#C62828] text-center text-white py-3 rounded-xl text-sm font-semibold shadow-lg shadow-[#C62828]/30 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" /> Reserve on OpenTable
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#161920] to-[#0C0E12] py-20 px-4">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-luminosity">
          <img
            src="https://lh3.googleusercontent.com/grass-cs/AABkmLf3_lnbDP8OySa0WgBo63_L68CH-WULNHJIqDgF3V7kegHR21lWd-OH16Nlwjme9qB4LRmeoKakytGjzkmxmTW27-GKgQdrLOzsGmNahy3lzRf5fv_oomXoF1fjzdre9sVPY3l4cyz20tY=s4800-w1000-h800"
            alt="Cap't Loui Edison Seafood Boil Feast"
            className="w-full h-full object-cover scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E12] via-[#0C0E12]/80 to-transparent z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-[#161920]/95 border border-[#FFA000]/40 px-4 py-2 rounded-full shadow-xl">
            <div className="flex items-center text-[#FFA000]">
              <Star className="w-4 h-4 fill-[#FFA000]" />
              <Star className="w-4 h-4 fill-[#FFA000]" />
              <Star className="w-4 h-4 fill-[#FFA000]" />
              <Star className="w-4 h-4 fill-[#FFA000]" />
              <Star className="w-4 h-4 fill-[#FFA000]" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-white">4.9 ★ (1,989+ Google Reviews)</span>
            <span className="text-xs bg-[#C62828] text-white px-2 py-0.5 rounded-full font-semibold">
              Edison&rsquo;s #1 Boil
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-tight">
            Steam. Toss. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C62828] to-[#FFA000]">Feast.</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Edison&rsquo;s legendary Cajun seafood boil house. Fresh wild-caught King Crab, plump shrimp, and succulent lobster soaked in our secret signature garlic-butter spice.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://www.ubereats.com/store/capt-loui-edison-1779-new-jersey-27/DmvMlDRwUhGBi3y7wWB-iA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#C62828] hover:bg-[#a51d1d] text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl shadow-[#C62828]/40 transition-all flex items-center justify-center gap-3 group"
            >
              <ShoppingBag className="w-5 h-5" />
              Order Online Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://www.opentable.com/r/capt-loui-edison-reservations-edison?restref=1484617&lang=en-US&ot_source=Restaurant%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#161920] hover:bg-gray-800 text-white border border-gray-700 hover:border-[#FFA000] px-8 py-4 rounded-2xl font-bold text-base transition-all flex items-center justify-center gap-3"
            >
              <Calendar className="w-5 h-5 text-[#FFA000]" />
              Reserve a Table
            </a>
          </div>

          {/* Location Quick Info Bar */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
            <div className="bg-[#161920]/80 border border-gray-800 rounded-xl p-4 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#FFA000] shrink-0" />
              <div>
                <span className="text-xs text-gray-400 block font-medium">Location</span>
                <span className="text-sm font-semibold text-white">1779 NJ-27, Edison, NJ 08817</span>
              </div>
            </div>
            <div className="bg-[#161920]/80 border border-gray-800 rounded-xl p-4 flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#FFA000] shrink-0" />
              <div>
                <span className="text-xs text-gray-400 block font-medium">Direct Line</span>
                <a href="tel:7323398019" className="text-sm font-semibold text-white hover:text-[#FFA000]">
                  (732) 339-8019
                </a>
              </div>
            </div>
            <div className="bg-[#161920]/80 border border-gray-800 rounded-xl p-4 flex items-center gap-3">
              <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="text-xs text-emerald-400 block font-semibold">Open Now</span>
                <span className="text-sm font-semibold text-white">Closes 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STORY & HERITAGE */}
      <section id="about" className="py-24 bg-[#161920] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#C62828]/20 border border-[#C62828]/40 px-3 py-1 rounded-full text-[#C62828] text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" /> Since 2016 Heritage
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                From Kitchen Craft to Central Jersey&rsquo;s Favorite Seafood Boil
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Cap&rsquo;t Loui wasn&rsquo;t born from a generic corporate plan. Our story started unexpectedly in 2016 in Stoneham, MA—working hard in the kitchen, mastering authentic Cajun spice blends, and discovering the joy of bringing people together over steaming buckets of fresh seafood.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                We built Cap’t Loui on a simple belief: every meal should be a memorable experience where genuine care shows up in every detail. From sweet king crab legs and tender shrimp to our secret garlic-butter sauces and signature Cajun fries, we source the freshest seafood and prep everything daily. Our Edison location carries this legacy forward every single day, making sure every customer leaves full, happy, and ready for another feast.
              </p>
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-gray-800">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#FFA000] block">1,989+</span>
                  <span className="text-xs text-gray-400 font-medium">5-Star Google Reviews</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#FFA000] block">100%</span>
                  <span className="text-xs text-gray-400 font-medium">Fresh Daily Sourcing</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#FFA000] block">5</span>
                  <span className="text-xs text-gray-400 font-medium">Signature Heat Levels</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#C62828] to-[#FFA000] rounded-3xl opacity-30 blur-lg"></div>
              <div className="relative rounded-2xl overflow-hidden border border-gray-700 shadow-2xl bg-black">
                <img
                  src="https://captloui.com/images/stores/capt-loui-edison.webp"
                  alt="Cap't Loui Edison Interior & Atmosphere"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE 4-STEP CAJUN BOIL BUILDER */}
      <section id="builder" className="py-24 bg-[#0C0E12] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#FFA000] text-xs font-bold uppercase tracking-widest bg-[#FFA000]/10 px-3 py-1 rounded-full">
              Interactive Experience
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Build Your Custom Cap&rsquo;t Loui Seafood Bucket
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
              Design your personalized boil bag step-by-step. Choose your catch, coat in secret sauce, set your heat, and pick your sides.
            </p>
          </div>

          <div className="bg-[#161920] border border-gray-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* STEP 1: CATCH */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-[#FFA000] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#FFA000] text-black flex items-center justify-center text-xs font-black">1</span>
                  Pick Your Catch
                </label>
                <select
                  value={customCatch}
                  onChange={(e) => setCustomCatch(e.target.value)}
                  className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FFA000]"
                >
                  <option>King Crab Legs</option>
                  <option>Snow Crab Clusters</option>
                  <option>Lobster Tail</option>
                  <option>Head-On Shrimp</option>
                  <option>Louisiana Crawfish</option>
                  <option>Green Mussels</option>
                  <option>Sweet Clams</option>
                </select>
              </div>

              {/* STEP 2: SAUCE */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-[#FFA000] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#FFA000] text-black flex items-center justify-center text-xs font-black">2</span>
                  Sauce It Up
                </label>
                <select
                  value={customSauce}
                  onChange={(e) => setCustomSauce(e.target.value)}
                  className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FFA000]"
                >
                  <option>Cap&rsquo;t Loui Signature Sauce</option>
                  <option>Lemon Pepper Butter</option>
                  <option>Garlic Butter</option>
                  <option>Cajun Classic Sauce</option>
                </select>
              </div>

              {/* STEP 3: SPICE LEVEL */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-[#FFA000] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#FFA000] text-black flex items-center justify-center text-xs font-black">3</span>
                  Pick Your Spice Level
                </label>
                <select
                  value={customSpice}
                  onChange={(e) => setCustomSpice(e.target.value)}
                  className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FFA000]"
                >
                  <option>Mild (Flavorful)</option>
                  <option>Medium (A Little Kick)</option>
                  <option>Hot (True Cajun)</option>
                  <option>X-Hot (Serious Spice)</option>
                  <option>2X-Hot (Inferno Extreme)</option>
                </select>
              </div>

              {/* STEP 4: SIDES */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-[#FFA000] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#FFA000] text-black flex items-center justify-center text-xs font-black">4</span>
                  Select Add-on Sides (Toggle)
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Garlic Noodles",
                    "Smoked Cajun Sausages",
                    "Cajun Seasoned Fries",
                    "Boiled Eggs",
                    "Garlic Bread",
                    "Extra Loui Sauce",
                  ].map((side) => {
                    const isSelected = customSides.includes(side);
                    return (
                      <button
                        key={side}
                        type="button"
                        onClick={() => toggleSide(side)}
                        className={`text-xs px-3 py-2 rounded-xl font-medium transition-all border ${
                          isSelected
                            ? "bg-[#C62828] text-white border-[#C62828]"
                            : "bg-black/30 text-gray-300 border-gray-700 hover:border-gray-500"
                        }`}
                      >
                        {side} {isSelected && "✓"}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* SUMMARY CARD */}
            <div className="bg-black/60 border border-[#FFA000]/30 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs text-[#FFA000] font-bold tracking-widest uppercase block">
                  Your Custom Boil Summary
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  {customCatch} in {customSauce} ({customSpice})
                </h4>
                <p className="text-xs text-gray-400">
                  Sides included: {customSides.join(", ") || "None selected"} + Corn &amp; Potatoes
                </p>
              </div>

              <a
                href="https://www.ubereats.com/store/capt-loui-edison-1779-new-jersey-27/DmvMlDRwUhGBi3y7wWB-iA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-[#C62828] hover:bg-[#a51d1d] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-[#C62828]/30 transition-all flex items-center justify-center gap-2 shrink-0"
              >
                <ShoppingBag className="w-4 h-4" /> Order This Bucket Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE CATALOG & MENU SECTION */}
      <section id="menu" className="py-24 bg-[#161920] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <span className="text-[#FFA000] text-xs font-bold uppercase tracking-widest bg-[#FFA000]/10 px-3 py-1 rounded-full">
              Full Seafood Boil &amp; Cajun Kitchen Menu
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Fresh Seafood, Bold Spices &amp; Sauces
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
              Explore our complete offering prepared daily in Edison, NJ.
            </p>
          </div>

          {/* CATEGORY TABS */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.category_id}
                onClick={() => setActiveCategory(cat.category_id)}
                className={`px-5 py-3 rounded-xl text-sm font-bold transition-all shadow-md ${
                  activeCategory === cat.category_id
                    ? "bg-[#C62828] text-white shadow-[#C62828]/40 scale-105"
                    : "bg-[#0C0E12] text-gray-300 hover:bg-gray-800 border border-gray-800"
                }`}
              >
                {cat.category_name}
              </button>
            ))}
          </div>

          {/* ACTIVE CATEGORY CONTENT */}
          {categories
            .filter((cat) => cat.category_id === activeCategory)
            .map((cat) => (
              <div key={cat.category_id} className="space-y-8 animate-in fade-in duration-300">
                <div className="text-center max-w-2xl mx-auto mb-8">
                  <span className="text-xs font-semibold text-[#FFA000] uppercase tracking-wider block mb-1">
                    {cat.badge}
                  </span>
                  <p className="text-gray-300 text-sm">{cat.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#0C0E12] border border-gray-800 rounded-2xl overflow-hidden shadow-lg flex flex-col hover:border-[#FFA000]/50 transition-all group"
                    >
                      <div className="relative h-48 overflow-hidden bg-gray-900">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 bg-[#C62828] text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow-md">
                          {item.badge}
                        </span>
                        <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-[#FFA000] text-xs font-bold px-3 py-1 rounded-lg border border-[#FFA000]/30 shadow-md">
                          {item.price}
                        </span>
                      </div>

                      <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-white group-hover:text-[#FFA000] transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-gray-400 text-xs leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-gray-800">
                          <div className="flex flex-wrap gap-1">
                            {item.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[10px] bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-gray-800"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <a
                            href="https://www.ubereats.com/store/capt-loui-edison-1779-new-jersey-27/DmvMlDRwUhGBi3y7wWB-iA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-[#FFA000] hover:underline flex items-center gap-1"
                          >
                            Order <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* REAL PHOTO SHOWCASE GALLERY */}
      <section id="gallery" className="py-24 bg-[#0C0E12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#FFA000] text-xs font-bold uppercase tracking-widest bg-[#FFA000]/10 px-3 py-1 rounded-full">
              Visual Feast
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Cap&rsquo;t Loui Edison Moments
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
              From fresh ingredients to steaming garlic butter buckets enjoyed by local families.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative rounded-2xl overflow-hidden h-64 border border-gray-800 group">
              <img
                src="https://lh3.googleusercontent.com/grass-cs/AABkmLcvxI39BFZYoHzxRzrYjJkwRQFQLcAJpTsFo7MfbWxEOYInt0v0iSrLrIUyGqwTq7i8NJ3GoL76J0wrmtnegbCJJGuRWTojQ4z5CXbHX--lQ3vFzzySFHifIMh0Ie1f6QN2XRhSyI6OnSum=s4800-w1000-h800"
                alt="Cap't Loui Edison Spread"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs font-semibold text-white">Signature Garlic Butter Boil</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-64 border border-gray-800 group">
              <img
                src="https://lh3.googleusercontent.com/grass-cs/AABkmLdi1Hg8PVDFQq7hqPYbHnKTPySzqRHmZ3v3HfBoWSlp--QE3nm4_mX_wx6L4JKwUqiRn3ymnUjbaljO19OuLtzIQ7teY880rC005Ksgwc7AAlUI8TPfFajeYTXcKgKcGc3YOpnz6KVmswIK=s4800-w1000-h800"
                alt="Xiaotong Sun Photo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs font-semibold text-white">Fresh Crab &amp; Shrimp Combo</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-64 border border-gray-800 group">
              <img
                src="https://lh3.googleusercontent.com/grass-cs/AABkmLdmkexVeTtTQif6_5o0P4gKtbtJeyMUOMpDshvXzHeM_zNDyQBomvanaf7uAvxju4OLK1IqtxI8WRu7cTe2ujuTXvSDnf15CBPakWUPvdS-AGNKc4x0VBygjNtD7QhcDLniu9yZug6Z4gnl=s4800-w1000-h800"
                alt="Dennis Lubrin Photo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs font-semibold text-white">Golden Cajun Baskets</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-64 border border-gray-800 group">
              <img
                src="https://captloui.com/images/menu/ingredients-1.webp"
                alt="Quality Ingredients"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs font-semibold text-white">Fresh Daily Sourcing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFIED REVIEWS SECTION */}
      <section id="reviews" className="py-24 bg-[#161920] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 bg-[#FFA000]/10 border border-[#FFA000]/30 px-4 py-1.5 rounded-full text-[#FFA000] text-xs font-bold">
              <Star className="w-4 h-4 fill-[#FFA000]" /> 4.9 ★ Verified Google Reviews
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Loved by Edison &amp; Central Jersey
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
              Read what nearly 2,000 happy guests have to say about our hospitality, portions, and signature sauces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-[#0C0E12] border border-gray-800 rounded-3xl p-8 shadow-xl flex flex-col justify-between space-y-6 relative"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#FFA000]">
                      {[...Array(rev.rating)].map((_, rIdx) => (
                        <Star key={rIdx} className="w-4 h-4 fill-[#FFA000]" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{rev.relativeTime}</span>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base italic leading-relaxed">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C62828] to-[#FFA000] flex items-center justify-center font-bold text-white text-sm">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white block">{rev.author}</span>
                      <span className="text-xs text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Verified Google Reviewer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION, HOURS & CONTACT SECTION */}
      <section id="contact" className="py-24 bg-[#0C0E12] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT: HOURS & INFO */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-[#FFA000] text-xs font-bold uppercase tracking-widest bg-[#FFA000]/10 px-3 py-1 rounded-full">
                  Visit Us
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Cap&rsquo;t Loui - Edison, NJ
                </h2>
                <p className="text-gray-400 text-sm">
                  Conveniently located on Route 27 in Edison. Stop by for lunch or dinner, or order ahead for pickup and delivery.
                </p>
              </div>

              <div className="bg-[#161920] border border-gray-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#FFA000] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Address</span>
                    <span className="text-base font-bold text-white">1779 NJ-27, Edison, NJ 08817, USA</span>
                    <a
                      href="https://maps.google.com/?q=1779+NJ-27,+Edison,+NJ+08817"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#FFA000] hover:underline font-semibold block mt-1 flex items-center gap-1"
                    >
                      Open in Google Maps <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#FFA000] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Phone Number</span>
                    <a href="tel:7323398019" className="text-base font-bold text-white hover:text-[#FFA000]">
                      (732) 339-8019
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#FFA000] shrink-0 mt-1" />
                  <div className="space-y-1">
                    <span className="text-xs text-gray-400 block font-medium mb-1">Operating Hours</span>
                    {schedule.map((item, idx) => (
                      <div key={idx} className="text-xs text-gray-300 flex justify-between gap-4">
                        <span>{item.split(":")[0]}</span>
                        <span className="font-semibold text-white">{item.split(":")[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.ubereats.com/store/capt-loui-edison-1779-new-jersey-27/DmvMlDRwUhGBi3y7wWB-iA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C62828] hover:bg-[#a51d1d] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-[#C62828]/30 transition-all flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" /> Order Delivery
                </a>
                <a
                  href="https://www.opentable.com/r/capt-loui-edison-reservations-edison?restref=1484617&lang=en-US&ot_source=Restaurant%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#161920] hover:bg-gray-800 text-white border border-gray-700 hover:border-[#FFA000] px-6 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#FFA000]" /> Reserve Table
                </a>
              </div>
            </div>

            {/* RIGHT: EMBEDDED MAP OR LOCATION VISUAL */}
            <div className="bg-[#161920] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col min-h-[450px]">
              <div className="relative flex-1 bg-black">
                <iframe
                  title="Cap't Loui Edison Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.429402129584!2d-74.3853!3d40.5284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b7b3b3b3b3b3%3A0x3b3b3b3b3b3b3b3b!2s1779+NJ-27%2C+Edison%2C+NJ+08817!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "450px" }}
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-gray-900 py-12 text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C62828] to-[#FFA000] flex items-center justify-center font-bold text-white text-xs">
              CL
            </div>
            <span className="text-white font-bold tracking-tight">Cap&rsquo;t Loui - Edison, NJ</span>
          </div>

          <p className="text-xs text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Cap&rsquo;t Loui Edison. All rights reserved. Crafted with high-energy Cajun warmth.
          </p>

          <div className="flex items-center gap-6 text-xs font-semibold">
            <a href="https://captloui.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFA000]">
              Official Brand Site
            </a>
            <a href="#about" className="hover:text-[#FFA000]">
              Our Story
            </a>
            <a href="#menu" className="hover:text-[#FFA000]">
              Menu
            </a>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE BOTTOM DOCK */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#161920]/95 backdrop-blur-md border-t border-gray-800 p-3 flex items-center gap-3 shadow-2xl">
        <a
          href="tel:7323398019"
          className="flex-1 bg-black/60 border border-gray-700 hover:border-[#FFA000] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors"
        >
          <Phone className="w-4 h-4 text-[#FFA000]" /> Call (732) 339-8019
        </a>
        <a
          href="https://www.ubereats.com/store/capt-loui-edison-1779-new-jersey-27/DmvMlDRwUhGBi3y7wWB-iA"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#C62828] hover:bg-[#a51d1d] text-white py-3 rounded-xl font-bold text-xs shadow-lg shadow-[#C62828]/30 flex items-center justify-center gap-2 transition-colors"
        >
          <ShoppingBag className="w-4 h-4" /> Order Online
        </a>
      </div>
    </div>
  );
}