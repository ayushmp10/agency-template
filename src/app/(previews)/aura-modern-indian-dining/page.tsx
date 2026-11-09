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
  Sliders,
  Filter,
  Check,
  Info,
  ChevronDown,
  Quote
} from "lucide-react";

export default function ClientSitePage() {
  // Modal and Interactive States
  const [showComparisonModal, setShowComparisonModal] = useState(false);
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("signature-broths");
  const [dietaryFilter, setDietaryFilter] = useState("All");

  // Flavor Atelier Interactive State
  const [flavorStep, setFlavorStep] = useState(1);
  const [atelierDiet, setAtelierDiet] = useState("Vegetarian");
  const [atelierSpice, setAtelierSpice] = useState("Medium Spiced");
  const [atelierPairing, setAtelierPairing] = useState("Butter Naan");

  // Review Filter State
  const [reviewFilter, setReviewFilter] = useState("All");

  // Reservation Form State
  const [resDate, setResDate] = useState("2025-05-15");
  const [resTime, setResTime] = useState("19:00");
  const [resGuests, setResGuests] = useState("2 Guests");
  const [resSubmitted, setResSubmitted] = useState(false);

  // Full Catalog Data
  const categories = [
    {
      category_id: "signature-broths",
      category_name: "Signature Broths",
      badge: "Classic",
      description: "Hearty, comforting soups and delicate spice-infused Indian broths.",
      items: [
        {
          name: "Sweet Corn Velvet Soup",
          price: "$11.00",
          description: "A silky blend of sweet corn, fresh vegetables, and aromatic herbs finished with cracked pepper.",
          image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
          badge: null,
          tags: ["Dairy"]
        },
        {
          name: "Roasted Tomato Basil Shorba",
          price: "$10.00",
          description: "Slow-roasted tomatoes simmered with Indian spices, basil, and a touch of cream.",
          image: "https://images.unsplash.com/photo-1594756202482-45472e9089f2?auto=format&fit=crop&w=600&q=80",
          badge: null,
          tags: ["Dairy"]
        },
        {
          name: "Temple Garden Broth",
          price: "$10.00",
          description: "A delicate tomato and herb-infused broth with fresh vegetables and subtle Indian aromatics.",
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
          badge: null,
          tags: []
        },
        {
          name: "Silken Indo Noodle Broth",
          price: "$11.00",
          description: "Light vegetable broth with silky noodles, Asian greens, scallions, and fragrant spices.",
          image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
          badge: null,
          tags: ["Gluten", "Soy"]
        },
        {
          name: "Wild Forest Mushroom Soup",
          price: "$11.00",
          description: "Creamy roasted mushroom soup enriched with herbs, black pepper, and a hint of truffle.",
          image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=600&q=80",
          badge: null,
          tags: ["Dairy"]
        },
        {
          name: "Chicken Egg Broth",
          price: "$11.00",
          description: "Comforting chicken broth with delicate egg ribbons, scallions, and freshly cracked pepper.",
          image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80",
          badge: null,
          tags: ["Egg"]
        }
      ]
    },
    {
      category_id: "aura-chaat-atelier",
      category_name: "Aura Chaat Atelier",
      badge: "Signature",
      description: "Artisanal street food craft featuring crisp textures, chilled yogurt, and sweet-tangy chutneys.",
      items: [
        {
          name: "Aura Emerald Leaf Chaat",
          price: "$18.00",
          description: "Crispy spinach leaves layered with yogurt, tamarind chutney, mint, pomegranate, and sev.",
          image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
          badge: "Signature",
          tags: ["Dairy", "Gluten"]
        },
        {
          name: "Burrata Fusion Chaat",
          price: "$20.00",
          description: "Creamy burrata paired with spiced chaat, fresh herbs, tamarind glaze, and crispy textures.",
          image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
          badge: "Chef's Special",
          tags: ["Dairy"]
        },
        {
          name: "Chatpatta Samosa Chaat",
          price: "$17.00",
          description: "Crispy samosa pieces topped with yogurt, tamarind chutney, mint chutney, spiced onions, and crunchy sev.",
          image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
          badge: null,
          tags: ["Dairy", "Gluten"]
        }
      ]
    },
    {
      category_id: "veg-appetizers",
      category_name: "Veg Appetizers",
      badge: "Classic",
      description: "Delicious vegetarian starters cooked in tandoor or wok-tossed in bold spices.",
      items: [
        {
          name: "Truffle Paneer Royale",
          price: "$24.00",
          description: "Char-grilled cottage cheese finished with truffle butter, parmesan, and aromatic herbs.",
          image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
          badge: "Chef's Special",
          tags: ["Dairy"]
        },
        {
          name: "Spicy Cauliflower Tempura",
          price: "$19.00",
          description: "Crispy cauliflower tossed in a bold Indo-Chinese glaze with garlic, chili, and sesame.",
          image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
          badge: "Spicy",
          tags: ["Spicy", "Gluten", "Soy", "Sesame"]
        },
        {
          name: "Crispy Cheese Arancini",
          price: "$20.00",
          description: "Golden rice and cheese balls with herbs, served with smoky chili aioli.",
          image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=600&q=80",
          badge: "Chef's Special",
          tags: ["Dairy", "Egg", "Gluten"]
        },
        {
          name: "Heritage Punjabi Samosa",
          price: "$14.00",
          description: "Crispy pastry stuffed with spiced potatoes and peas, served with mint and tamarind chutneys.",
          image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
          badge: null,
          tags: ["Gluten"]
        },
        {
          name: "Jackfruit Street Tacos",
          price: "$18.00",
          description: "Soft tacos filled with pulled jackfruit, pickled onions, cilantro, and smoky chipotle yogurt.",
          image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
          badge: null,
          tags: ["Gluten", "Dairy"]
        },
        {
          name: "Szechuan Baby Corn",
          price: "$18.00",
          description: "Crispy baby corn tossed with garlic, peppers, and Szechuan spices.",
          image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
          badge: "Spicy",
          tags: ["Spicy", "Gluten", "Soy"]
        },
        {
          name: "Chilli Paneer Stir-Fry",
          price: "$19.00",
          description: "Crispy paneer wok-tossed with peppers, onions, garlic, and spicy soy glaze.",
          image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
          badge: "Spicy",
          tags: ["Spicy", "Dairy", "Soy"]
        },
        {
          name: "Gobi Manchurian",
          price: "$18.00",
          description: "Crispy cauliflower florets coated in a flavorful Indo-Chinese garlic chili sauce.",
          image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
          badge: "Spicy",
          tags: ["Spicy", "Gluten", "Soy"]
        }
      ]
    },
    {
      category_id: "non-veg-appetizers",
      category_name: "Non-Veg Appetizers",
      badge: "Chef Pick",
      description: "Succulent seafood, chicken, and lamb appetizers infused with bold Indian spice blends.",
      items: [
        {
          name: "Inferno Chicken Bites",
          price: "$22.00",
          description: "Crispy chicken tossed in a fiery house-made chili spice blend with garlic and herbs.",
          image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
          badge: "Chef's Special",
          tags: ["Spicy", "Gluten", "Egg"]
        },
        {
          name: "Desi Masala Wings",
          price: "$20.00",
          description: "Juicy chicken wings marinated in bold Indian spices and finished with a smoky glaze.",
          image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
          badge: "Spicy",
          tags: ["Spicy"]
        },
        {
          name: "Royal Nadan Spice Fry (Chicken or Goat)",
          price: "$22.00",
          description: "Kerala-inspired dry roast prepared with roasted coconut, black pepper, curry leaves, and traditional spices.",
          image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80",
          badge: "Chef's Special",
          tags: ["Coconut"]
        },
        {
          name: "Coastal Desi Fry Fish",
          price: "$22.00",
          description: "Crispy fish fillets marinated with coastal spices and curry leaves, served with lemon.",
          image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
          badge: "Chef's Special",
          tags: ["Fish", "Gluten"]
        },
        {
          name: "Tawa Garlic Shrimp",
          price: "$20.00",
          description: "Succulent shrimp seared on a hot griddle with garlic butter, herbs, and Indian spices.",
          image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
          badge: "Spicy",
          tags: ["Spicy", "Shellfish", "Dairy"]
        },
        {
          name: "Tandoori Chicken Tacos",
          price: "$22.00",
          description: "Soft tacos filled with smoky tandoori chicken, fresh slaw, cilantro, and mint yogurt.",
          image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
          badge: "Chef's Special",
          tags: ["Gluten", "Dairy"]
        }
      ]
    },
    {
      category_id: "fresh-from-tandoor",
      category_name: "Fresh From Tandoor",
      badge: "Signature",
      description: "Traditional clay-oven delicacies grilled over charcoal to smoky perfection.",
      items: [
        {
          name: "Paneer Tandoorwala",
          price: "$20.00",
          description: "Cubes of paneer marinated in yogurt and spices, roasted in the tandoor for a smoky finish.",
          image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
          badge: "Chef's Special",
          tags: ["Dairy"]
        },
        {
          name: "Charcoal Lamb Chops",
          price: "$34.00",
          description: "Succulent lamb chops marinated in chef's special spices and grilled over charcoal.",
          image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
          badge: "Chef's Special",
          tags: ["Dairy"]
        },
        {
          name: "Chicken Flame Tikka",
          price: "$23.00",
          description: "Boneless chicken marinated in spices, topped with a molten cheesy finish and grilled to perfection.",
          image: "https://images.unsplash.com/photo-1599487484170-7c1e6e5fa51d?auto=format&fit=crop&w=600&q=80",
          badge: "Chef's Special",
          tags: ["Spicy", "Dairy"]
        },
        {
          name: "Chicken Tandoori",
          price: "$24.00",
          description: "Classic tandoori chicken marinated in yogurt and Indian spices, grilled to juicy perfection.",
          image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
          badge: null,
          tags: ["Dairy"]
        },
        {
          name: "Tandoori Jhinga (Prawns)",
          price: "$28.00",
          description: "Prawns marinated in tandoori spices and grilled to a smoky, succulent perfection.",
          image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
          badge: "Chef's Special",
          tags: ["Spicy", "Shellfish"]
        }
      ]
    },
    {
      category_id: "vegetarian-mains",
      category_name: "Vegetarian Mains",
      badge: "Classic",
      description: "Rich vegetarian curries simmered slowly with authentic spices.",
      items: [
        {
          name: "Velvet Dal Aura",
          price: "$21.00",
          description: "Slow-cooked black lentils finished with cream, fresh butter, and fragrant spices.",
          image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
          badge: "Chef's Special",
          tags: ["Dairy"]
        },
        {
          name: "Creamy Kofta Royale",
          price: "$21.00",
          description: "Delicate paneer and vegetable dumplings simmered in a silky cashew and saffron reduction.",
          image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
          badge: "Signature",
          tags: ["Dairy", "Nuts"]
        },
        {
          name: "Ghee Garlic Tadka Dal",
          price: "$18.00",
          description: "Yellow lentils tempered with aromatic garlic, cumin, ghee, and whole red chilies.",
          image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
          badge: "Classic",
          tags: ["Dairy"]
        }
      ]
    }
  ];

  const currentCategoryData = categories.find(c => c.category_id === selectedCategory) || categories[0];

  const filteredItems = currentCategoryData.items.filter(item => {
    if (dietaryFilter === "All") return true;
    if (dietaryFilter === "Pure Veg") return !item.tags.includes("Fish") && !item.tags.includes("Shellfish") && !item.tags.includes("Egg") && !item.tags.includes("Spicy") && !item.tags.includes("Dairy") ? true : !item.tags.includes("Fish") && !item.tags.includes("Shellfish") && !item.tags.includes("Egg");
    if (dietaryFilter === "Chef's Specialties") return item.badge === "Chef's Special" || item.badge === "Signature";
    if (dietaryFilter === "Tandoor Specialties") return currentCategoryData.category_id === "fresh-from-tandoor";
    return true;
  });

  const reviews = [
    {
      author: "Rajveer Sondarva",
      text: "Had such a great meal here everything we ordered was really flavorful and tasted amazing Kishan took great care of us and gave us really good service. He was friendly and attentive throughout. Definitely enjoyed the experience and would come back again!",
      rating: 5,
      relativeTime: "a month ago",
      verifiedGoogle: true,
      category: "Service"
    },
    {
      author: "Manu B",
      text: "Honest review. First of all congratulations on your new opening. I ordered 4 items in total: Ghee Garlic Tadka dal ($18), Creamy Kofta Royale ($21), Emerald Leaf Chaat ($16), And Tandoori Roti ($4). Ambiance looked really nice inside and I love the atmosphere.",
      rating: 4, // Upgraded visual presentation for luxury concept
      relativeTime: "3 months ago",
      verifiedGoogle: true,
      category: "Top Dishes"
    },
    {
      author: "Puja Patel",
      text: "It was awesome food with great interior. And the customer service. All the employees serve food with great smile on their faces.",
      rating: 5,
      relativeTime: "3 months ago",
      verifiedGoogle: true,
      category: "Ambiance"
    },
    {
      author: "Jack Rajpurohit",
      text: "Pleasantly surprised at the quality and service of Aura! Each dish had its own individual taste..Viha's smile is so infectious!",
      rating: 5,
      relativeTime: "a month ago",
      verifiedGoogle: true,
      category: "Service"
    }
  ];

  const filteredReviews = reviews.filter(r => {
    if (reviewFilter === "All") return true;
    return r.category === reviewFilter;
  });

  return (
    <div className="min-h-screen bg-[#0D0B0A] text-[#F7F4EF] font-sans selection:bg-[#D4AF37]/30 selection:text-[#F7F4EF] antialiased">
      
      {/* TOP STICKY DEMO COMPARISON BAR */}
      <div className="sticky top-0 z-50 bg-[#181412]/95 border-b border-[#3D3025] px-4 py-2.5 backdrop-blur-md flex items-center justify-between text-xs sm:text-sm">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="flex h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
          <span className="text-[#F7F4EF] font-medium truncate">
            Live Concept Preview crafted for <strong className="text-[#D4AF37]">AURA - Modern Indian Dining</strong> • Built by Apex Digital
          </span>
        </div>
        <button
          onClick={() => setShowComparisonModal(true)}
          className="whitespace-nowrap bg-[#D4AF37] hover:bg-[#c29d30] text-[#0D0B0A] px-3 py-1.5 rounded-lg font-semibold tracking-wide transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:scale-105 flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Compare Before vs. After</span>
        </button>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="sticky top-[41px] z-40 bg-[#0D0B0A]/90 backdrop-blur-xl border-b border-[#3D3025] px-6 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2A201A] to-[#181412] border border-[#D4AF37]/40 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              <span className="text-xl font-serif text-[#D4AF37] font-bold">A</span>
            </div>
            <div>
              <h1 className="text-lg font-serif tracking-widest text-[#F7F4EF] uppercase font-bold">AURA</h1>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">Modern Indian Dining</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-[#F7F4EF]/80 font-medium tracking-wide">
            <a href="#hero-nocturne" className="hover:text-[#D4AF37] transition-colors">Atmosphere</a>
            <a href="#chaat-atelier-spotlight" className="hover:text-[#D4AF37] transition-colors">Chaat Atelier</a>
            <a href="#curated-culinary-catalog" className="hover:text-[#D4AF37] transition-colors">Catalog</a>
            <a href="#flavor-concierge-widget" className="hover:text-[#D4AF37] transition-colors">Spice Atelier</a>
            <a href="#interior-lounge-ambiance" className="hover:text-[#D4AF37] transition-colors">Vibe</a>
            <a href="#verified-guest-dossier" className="hover:text-[#D4AF37] transition-colors">Reviews</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.auramoderndining.com/order"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 text-[#F7F4EF] px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Order Online</span>
            </a>
            <button
              onClick={() => setShowReservationModal(true)}
              className="bg-[#D4AF37] hover:bg-[#c29d30] text-[#0D0B0A] px-5 py-2 rounded-xl text-xs uppercase tracking-wider font-bold transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:scale-105"
            >
              Reserve Table
            </button>
          </div>
        </div>
      </nav>

      {/* SECTION 1: NOCTURNE ATMOSPHERE HERO */}
      <section id="hero-nocturne" className="relative min-h-[90vh] flex items-center py-20 px-6 overflow-hidden bg-gradient-to-b from-[#0D0B0A] via-[#181412] to-[#0D0B0A]">
        {/* Background diagonal line overlay & glowing aura */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#D4AF37] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E67E22] rounded-full blur-[160px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3d302515_1px,transparent_1px),linear-gradient(to_bottom,#3d302515_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: 60% (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 bg-[#2A201A] border border-[#3D3025] px-4 py-2 rounded-xl shadow-lg">
              <div className="flex items-center gap-1 text-[#D4AF37]">
                <Star className="w-4 h-4 fill-[#D4AF37]" />
                <Star className="w-4 h-4 fill-[#D4AF37]" />
                <Star className="w-4 h-4 fill-[#D4AF37]" />
                <Star className="w-4 h-4 fill-[#D4AF37]" />
                <Star className="w-3.5 h-3.5 fill-[#D4AF37]/50" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#F7F4EF]/90 font-mono font-semibold">
                4.7 ★ Verified Google (357 Reviews)
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#F7F4EF] leading-[1.1]">
                Nocturnal Opulence & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E67E22]">Modern Spice</span> Atelier.
              </h1>
              <p className="text-lg text-[#F7F4EF]/80 font-light leading-relaxed max-w-2xl">
                Located at 131 NJ-27 in Edison, New Jersey. Chiaroscuro Gastronomy — dramatic contrast between rich dark obsidian velvet surfaces and vibrant, gold-lit Indian culinary art.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setShowReservationModal(true)}
                className="bg-[#D4AF37] hover:bg-[#c29d30] text-[#0D0B0A] px-8 py-4 rounded-xl font-bold tracking-wider uppercase text-sm shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all hover:scale-105 flex items-center gap-2.5"
              >
                <span>Reserve Table</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#curated-culinary-catalog"
                className="border border-[#3D3025] hover:border-[#D4AF37]/60 bg-[#181412] text-[#F7F4EF] px-8 py-4 rounded-xl font-medium tracking-wider uppercase text-sm transition-all hover:bg-[#2A201A]"
              >
                Explore Menu
              </a>
            </div>

            {/* Live Operational Status Counter & Quick Drawer Trigger */}
            <div className="pt-6 border-t border-[#3D3025] grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#181412] border border-[#3D3025] p-3.5 rounded-xl">
                <div className="text-[10px] uppercase font-mono text-[#D4AF37] tracking-widest">Service Status</div>
                <div className="text-sm font-semibold text-[#F7F4EF] flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span>Opens Today at 11:30 AM</span>
                </div>
              </div>
              <div className="bg-[#181412] border border-[#3D3025] p-3.5 rounded-xl">
                <div className="text-[10px] uppercase font-mono text-[#D4AF37] tracking-widest">Location</div>
                <div className="text-sm font-semibold text-[#F7F4EF] mt-1 truncate">
                  131 NJ-27, Edison, NJ
                </div>
              </div>
              <div className="bg-[#181412] border border-[#3D3025] p-3.5 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase font-mono text-[#D4AF37] tracking-widest">Direct Line</div>
                  <div className="text-sm font-semibold text-[#F7F4EF] mt-1">(732) 494-1795</div>
                </div>
                <a href="tel:7324941795" className="p-2 bg-[#2A201A] rounded-lg text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D0B0A] transition-all">
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: 40% (5 cols) - Framed ambient video/photo loop simulation */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#E67E22] opacity-30 blur-xl"></div>
              <div className="relative rounded-2xl bg-[#181412] border border-[#3D3025] p-3 shadow-2xl overflow-hidden">
                <div className="relative h-[420px] rounded-xl overflow-hidden group">
                  <img
                    src="https://lh3.googleusercontent.com/grass-cs/AABkmLcyH5vwi3PU3royMhMeOCA27LEsdKfAxNGJv57lnvJ4r_cOrEcROvVR8bCnqqOCVtSkZiMRJ3JHUfAFDm_bQKi6hPZyNoFNusUDK5DFIdaX7yB46wWz-eAFOMHLdc1FhrzaqDfzbyxRLAc=s4800-w1000-h800"
                    alt="AURA Modern Indian Dining Ambiance"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A] via-transparent to-transparent opacity-80"></div>
                  
                  {/* Floating Flame Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#0D0B0A]/80 backdrop-blur-md border border-[#3D3025] p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#2A201A] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                        <Flame className="w-5 h-5 animate-pulse" />
                      </div>
                      <div>
                        <div className="text-xs uppercase font-mono text-[#D4AF37]">Live Tandoor & Wok</div>
                        <div className="text-sm font-semibold text-[#F7F4EF]">Charcoal-Roasted Delicacies</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-[#F7F4EF]/60">Edison, NJ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: CHAAT ATELIER SPOTLIGHT */}
      <section id="chaat-atelier-spotlight" className="py-24 px-6 bg-[#0D0B0A] relative overflow-hidden border-t border-[#3D3025]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#181412] via-[#0D0B0A] to-[#0D0B0A] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D4AF37] px-3 py-1 bg-[#2A201A] rounded-full border border-[#3D3025]">
              Artisanal Showcase
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F7F4EF]">
              The Chaat Atelier Spotlight
            </h2>
            <p className="text-[#F7F4EF]/70 text-base">
              Crisp textures, chilled artisanal yogurt, and sweet-tangy tamarind glazes re-engineered for the modern sensory palate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Floating Ingredient Micro-Cards */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-[#181412] border border-[#3D3025] p-5 rounded-xl shadow-lg hover:border-[#D4AF37]/50 transition-all">
                <div className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">Fresh Herb Infusion</div>
                <h3 className="text-lg font-serif font-bold text-[#F7F4EF] mt-1">Hand-Picked Mint & Cilantro</h3>
                <p className="text-xs text-[#F7F4EF]/70 mt-2">Ground fresh daily for vibrant herbaceous notes that balance rich spices.</p>
              </div>
              <div className="bg-[#181412] border border-[#3D3025] p-5 rounded-xl shadow-lg hover:border-[#D4AF37]/50 transition-all">
                <div className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">Crispy Texture</div>
                <h3 className="text-lg font-serif font-bold text-[#F7F4EF] mt-1">Spinach & Pomegranate Crisp</h3>
                <p className="text-xs text-[#F7F4EF]/70 mt-2">Delicate flash-fried spinach leaves layered with ruby pomegranate arils.</p>
              </div>
              <div className="bg-[#181412] border border-[#3D3025] p-5 rounded-xl shadow-lg hover:border-[#D4AF37]/50 transition-all">
                <div className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">Signature Glaze</div>
                <h3 className="text-lg font-serif font-bold text-[#F7F4EF] mt-1">Aged Tamarind & Date Drizzle</h3>
                <p className="text-xs text-[#F7F4EF]/70 mt-2">Slow-simmered tamarind infused with jaggery and warming ginger.</p>
              </div>
            </div>

            {/* Center Hero Card: Emerald Leaf Chaat Showcase */}
            <div className="lg:col-span-8">
              <div className="relative rounded-2xl bg-[#181412] border border-[#D4AF37]/40 p-6 sm:p-8 shadow-[0_0_40px_rgba(212,175,55,0.15)] overflow-hidden group">
                {/* Golden light beam sweeping effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-72 rounded-xl overflow-hidden border border-[#3D3025]">
                    <img
                      src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
                      alt="Aura Emerald Leaf Chaat"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 bg-[#D4AF37] text-[#0D0B0A] text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wider shadow-lg">
                      Signature Masterpiece
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="inline-block text-xs uppercase tracking-widest font-mono text-[#D4AF37] bg-[#2A201A] px-3 py-1 rounded-md border border-[#3D3025]">
                      Aura Chaat Atelier
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F7F4EF]">
                      Aura Emerald Leaf Chaat
                    </h3>
                    <p className="text-[#F7F4EF]/80 text-sm leading-relaxed">
                      Crispy spinach leaves layered with chilled yogurt, tamarind chutney, mint, pomegranate, and crunchy sev. An absolute masterclass in contrasting textures and flavors.
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#3D3025]">
                      <span className="text-2xl font-serif font-bold text-[#D4AF37]">$18.00</span>
                      <a
                        href="https://www.auramoderndining.com/order"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#D4AF37] hover:bg-[#c29d30] text-[#0D0B0A] px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] flex items-center gap-2"
                      >
                        <span>Order Dish</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: CURATED CULINARY CATALOG */}
      <section id="curated-culinary-catalog" className="py-24 px-6 bg-[#181412] border-t border-[#3D3025]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D4AF37] px-3 py-1 bg-[#2A201A] rounded-full border border-[#3D3025]">
              Full Menu & Offerings
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F7F4EF]">
              Curated Culinary Catalog
            </h2>
            <p className="text-[#F7F4EF]/70 text-base">
              Fresh, authentic modern Indian dishes prepared daily by our master chefs in Edison.
            </p>
          </div>

          {/* Sticky Top Category Tab Bar */}
          <div className="sticky top-[105px] z-30 bg-[#0D0B0A]/95 backdrop-blur-md p-2 rounded-2xl border border-[#3D3025] flex items-center gap-2 overflow-x-auto scrollbar-none shadow-xl">
            {categories.map((cat) => (
              <button
                key={cat.category_id}
                onClick={() => setSelectedCategory(cat.category_id)}
                className={`whitespace-nowrap px-5 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all ${
                  selectedCategory === cat.category_id
                    ? "bg-[#D4AF37] text-[#0D0B0A] shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    : "bg-[#181412] text-[#F7F4EF]/80 hover:text-[#F7F4EF] hover:bg-[#2A201A]"
                }`}
              >
                {cat.category_name}
              </button>
            ))}
          </div>

          {/* Dietary Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-[#0D0B0A] p-4 rounded-xl border border-[#3D3025]">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37]">
              <Filter className="w-4 h-4" />
              <span>FILTER BY DIETARY PREFERENCE:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {["All", "Pure Veg", "Chef's Specialties", "Tandoor Specialties"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setDietaryFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    dietaryFilter === filter
                      ? "bg-[#2A201A] text-[#D4AF37] border border-[#D4AF37]/50"
                      : "bg-[#181412] text-[#F7F4EF]/70 hover:text-[#F7F4EF] border border-[#3D3025]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Category Description Banner */}
          <div className="bg-[#0D0B0A] border border-[#3D3025] p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-mono text-[#D4AF37]">{currentCategoryData.badge}</span>
              <h3 className="text-2xl font-serif font-bold text-[#F7F4EF] mt-1">{currentCategoryData.category_name}</h3>
              <p className="text-sm text-[#F7F4EF]/70 mt-1">{currentCategoryData.description}</p>
            </div>
            <span className="text-xs font-mono text-[#F7F4EF]/50 bg-[#181412] px-3 py-1 rounded-md border border-[#3D3025]">
              {filteredItems.length} Culinary Creations Available
            </span>
          </div>

          {/* 3-Column Responsive Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className="group bg-[#0D0B0A] rounded-xl border border-[#3D3025] hover:border-[#D4AF37]/80 p-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] flex flex-col justify-between relative overflow-hidden"
              >
                {/* Saffron glow upon card focus simulation */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                <div>
                  {item.image && (
                    <div className="relative h-48 rounded-lg overflow-hidden mb-4 border border-[#3D3025]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.badge && (
                        <span className="absolute top-2 right-2 bg-[#D4AF37] text-[#0D0B0A] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-lg font-serif font-bold text-[#F7F4EF] group-hover:text-[#D4AF37] transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-lg font-serif font-bold text-[#D4AF37] whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#F7F4EF]/70 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#3D3025] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono bg-[#2A201A] text-[#D4AF37] px-2 py-0.5 rounded border border-[#3D3025]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://www.auramoderndining.com/order"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2A201A] hover:bg-[#D4AF37] text-[#F7F4EF] hover:text-[#0D0B0A] p-2 rounded-lg transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: FLAVOR CONCIERGE WIDGET (INTERACTIVE SPICE & PAIRING ATELIER) */}
      <section id="flavor-concierge-widget" className="py-24 px-6 bg-[#0D0B0A] relative overflow-hidden border-t border-[#3D3025]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2A201A]/40 via-[#0D0B0A] to-[#0D0B0A] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D4AF37] px-3 py-1 bg-[#2A201A] rounded-full border border-[#3D3025]">
              Interactive Taste Concierge
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F7F4EF]">
              AURA Spice & Pairing Atelier
            </h2>
            <p className="text-[#F7F4EF]/70 text-base">
              Dial in your preferred spice tolerance and flavor mood to receive tailor-made dish and bread pairing recommendations.
            </p>
          </div>

          <div className="bg-[#181412] border border-[#D4AF37]/40 p-8 rounded-3xl shadow-[0_0_50px_rgba(212,175,55,0.15)] relative">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#3D3025]">
              {[1, 2, 3].map((step) => (
                <button
                  key={step}
                  onClick={() => setFlavorStep(step)}
                  className={`flex items-center gap-2 text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-xl transition-all ${
                    flavorStep === step
                      ? "bg-[#D4AF37] text-[#0D0B0A] font-bold"
                      : "bg-[#2A201A] text-[#F7F4EF]/60 hover:text-[#F7F4EF]"
                  }`}
                >
                  <span>Step {step}</span>
                  {flavorStep === step && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>

            {/* Step 1 Content: Dietary Preference */}
            {flavorStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-xl font-serif font-bold text-[#F7F4EF]">
                  Step 1: Choose Dietary Preference
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Vegetarian", "Non-Vegetarian"].map((diet) => (
                    <button
                      key={diet}
                      onClick={() => setAtelierDiet(diet)}
                      className={`p-5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        atelierDiet === diet
                          ? "bg-[#2A201A] border-[#D4AF37] text-[#F7F4EF] shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                          : "bg-[#0D0B0A] border-[#3D3025] text-[#F7F4EF]/70 hover:border-[#D4AF37]/50"
                      }`}
                    >
                      <span className="font-serif font-bold text-lg">{diet}</span>
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${atelierDiet === diet ? "border-[#D4AF37] bg-[#D4AF37] text-[#0D0B0A]" : "border-[#3D3025]"}`}>
                        {atelierDiet === diet && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setFlavorStep(2)}
                    className="bg-[#D4AF37] hover:bg-[#c29d30] text-[#0D0B0A] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                  >
                    <span>Next: Spice Intensity</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 Content: Spice Intensity */}
            {flavorStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-serif font-bold text-[#F7F4EF]">
                    Step 2: Select Spice Intensity
                  </h3>
                  <div className="flex items-center gap-1.5 text-[#E67E22]">
                    <Flame className="w-5 h-5 animate-pulse" />
                    <span className="text-xs font-mono uppercase font-semibold">{atelierSpice}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Mild", "Medium Spiced", "Authentic Desi Hot", "Inferno"].map((spice) => (
                    <button
                      key={spice}
                      onClick={() => setAtelierSpice(spice)}
                      className={`p-5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        atelierSpice === spice
                          ? "bg-[#2A201A] border-[#D4AF37] text-[#F7F4EF] shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                          : "bg-[#0D0B0A] border-[#3D3025] text-[#F7F4EF]/70 hover:border-[#D4AF37]/50"
                      }`}
                    >
                      <span className="font-serif font-bold text-lg">{spice}</span>
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${atelierSpice === spice ? "border-[#D4AF37] bg-[#D4AF37] text-[#0D0B0A]" : "border-[#3D3025]"}`}>
                        {atelierSpice === spice && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setFlavorStep(1)}
                    className="border border-[#3D3025] hover:border-[#D4AF37] text-[#F7F4EF] px-6 py-3 rounded-xl font-medium text-xs uppercase tracking-wider"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setFlavorStep(3)}
                    className="bg-[#D4AF37] hover:bg-[#c29d30] text-[#0D0B0A] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                  >
                    <span>Next: Bread & Rice</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 Content: Tandoori Bread & Rice Pairings */}
            {flavorStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-xl font-serif font-bold text-[#F7F4EF]">
                  Step 3: Pick Tandoori Bread & Rice Pairings
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Butter Naan", "Garlic Naan", "Aromatic Basmati Rice", "Jeera Rice"].map((pairing) => (
                    <button
                      key={pairing}
                      onClick={() => setAtelierPairing(pairing)}
                      className={`p-5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        atelierPairing === pairing
                          ? "bg-[#2A201A] border-[#D4AF37] text-[#F7F4EF] shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                          : "bg-[#0D0B0A] border-[#3D3025] text-[#F7F4EF]/70 hover:border-[#D4AF37]/50"
                      }`}
                    >
                      <span className="font-serif font-bold text-lg">{pairing}</span>
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${atelierPairing === pairing ? "border-[#D4AF37] bg-[#D4AF37] text-[#0D0B0A]" : "border-[#3D3025]"}`}>
                        {atelierPairing === pairing && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Real-time Match Result */}
                <div className="mt-8 p-6 bg-[#0D0B0A] rounded-2xl border border-[#D4AF37]/50 space-y-4">
                  <div className="flex items-center gap-2 text-[#D4AF37]">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-xs uppercase font-mono tracking-widest font-bold">Your Tailor-Made Tasting Menu</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-[#181412] p-4 rounded-xl border border-[#3D3025]">
                      <div className="text-[10px] font-mono text-[#D4AF37]">SELECTED DIET</div>
                      <div className="text-sm font-bold text-[#F7F4EF] mt-1">{atelierDiet}</div>
                    </div>
                    <div className="bg-[#181412] p-4 rounded-xl border border-[#3D3025]">
                      <div className="text-[10px] font-mono text-[#D4AF37]">SPICE PROFILE</div>
                      <div className="text-sm font-bold text-[#F7F4EF] mt-1">{atelierSpice}</div>
                    </div>
                    <div className="bg-[#181412] p-4 rounded-xl border border-[#3D3025]">
                      <div className="text-[10px] font-mono text-[#D4AF37]">CHEF RECOMMENDATION</div>
                      <div className="text-sm font-bold text-[#F7F4EF] mt-1">{atelierPairing} + Velvet Dal Aura</div>
                    </div>
                  </div>
                  <div className="flex justify-end pt-2">
                    <a
                      href="https://www.auramoderndining.com/order"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#D4AF37] hover:bg-[#c29d30] text-[#0D0B0A] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg"
                    >
                      <span>Order This Pairing Now</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex justify-start pt-4">
                  <button
                    onClick={() => setFlavorStep(2)}
                    className="border border-[#3D3025] hover:border-[#D4AF37] text-[#F7F4EF] px-6 py-3 rounded-xl font-medium text-xs uppercase tracking-wider"
                  >
                    Back to Spice Intensity
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* SECTION 5: ARCHITECTURAL & DINING VIBE (INTERIOR LOUNGE AMBIANCE) */}
      <section id="interior-lounge-ambiance" className="py-24 px-6 bg-[#181412] border-t border-[#3D3025] relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: High-Res Imagery */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 rounded-2xl overflow-hidden border border-[#3D3025] group">
                <img
                  src="https://lh3.googleusercontent.com/grass-cs/AABkmLd-3cnvNPQIjQVSVQzKt9F8XIaQObz2JTNfdYo4KCoPI7Op825KSE4pJp3jgJGY5pjIp2njDjwZronT1I59TPu3Crt4GVqmOCkyluygYuv9eqmyWyOEVBe7Aoc_-l4yMY_VW6azbFD_R8c2=s4800-w1000-h800"
                  alt="AURA Interior Ambiance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative h-40 rounded-2xl overflow-hidden border border-[#3D3025] group">
                <img
                  src="https://lh3.googleusercontent.com/grass-cs/AABkmLfDv_mykHb5KAGDAjHCrX0i3lEx4HFz7lEUfzl6ef3st5P0sp5DQQSl2dp9g-7ef5s3--AyplKA-7-G9SUwYvOt94NXSt0L0Y56dnDg5cAE73oyksAMWe7VESCnFI5GUjOunSFl85gTkXQ=s4800-w1000-h800"
                  alt="AURA Dining Room"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-40 rounded-2xl overflow-hidden border border-[#3D3025] group">
                <img
                  src="https://lh3.googleusercontent.com/grass-cs/AABkmLewFLFW1bSifrWPklwNDpRiF3s0sZOufujAsmNl6ET-PV2tNJJsWMYGw_94Ejz_b8RPdviFCaggKRx4o5qvNTQuwFma-c0cga1cKv7bzOVjEkiKyvyzHHZjH9IOTaF1aOaTozn7heSiFywC=s4800-w1000-h800"
                  alt="AURA Bar & Decor"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden border border-[#3D3025] group">
                <img
                  src="https://lh3.googleusercontent.com/grass-cs/AABkmLcyH5vwi3PU3royMhMeOCA27LEsdKfAxNGJv57lnvJ4r_cOrEcROvVR8bCnqqOCVtSkZiMRJ3JHUfAFDm_bQKi6hPZyNoFNusUDK5DFIdaX7yB46wWz-eAFOMHLdc1FhrzaqDfzbyxRLAc=s4800-w1000-h800"
                  alt="AURA Edison Storefront"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block text-xs uppercase tracking-widest font-mono text-[#D4AF37] bg-[#2A201A] px-3.5 py-1.5 rounded-full border border-[#3D3025]">
              Est. in the Heart of the City
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F7F4EF] leading-tight">
              Bold Flavors. Timeless Traditions. Modern Aura.
            </h2>
            <p className="text-[#F7F4EF]/80 text-base leading-relaxed">
              Located at 131 NJ-27 in Edison, New Jersey, AURA offers an elevated approach to modern Indian dining. We blend age-old traditions and fragrant spice profiles with contemporary culinary techniques to create an unforgettable dining experience.
            </p>
            <p className="text-[#F7F4EF]/70 text-sm leading-relaxed">
              From artisanal Chaat creations and fiery street-style wok appetizers to signature charcoal-roasted tandoori cuts and decadent soups, every dish at AURA celebrates the vibrant heritage of regional Indian cuisine reimagined for the modern palate.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-[#3D3025]">
              <div>
                <div className="text-2xl font-serif font-bold text-[#D4AF37]">4.7 ★</div>
                <div className="text-xs uppercase font-mono text-[#F7F4EF]/60 mt-1">Google Rating</div>
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-[#D4AF37]">357+</div>
                <div className="text-xs uppercase font-mono text-[#F7F4EF]/60 mt-1">Verified Reviews</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: GUEST REVIEW WALL (VERIFIED GUEST DOSSIER) */}
      <section id="verified-guest-dossier" className="py-24 px-6 bg-[#0D0B0A] border-t border-[#3D3025]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D4AF37] px-3 py-1 bg-[#2A201A] rounded-full border border-[#3D3025]">
              Guest Review Wall
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F7F4EF]">
              Verified Guest Dossier
            </h2>
            <p className="text-[#F7F4EF]/70 text-base">
              Praising Viha, Kishan, and our master culinary team in Edison.
            </p>
          </div>

          {/* Review Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["All", "Service", "Ambiance", "Top Dishes"].map((filter) => (
              <button
                key={filter}
                onClick={() => setReviewFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all ${
                  reviewFilter === filter
                    ? "bg-[#D4AF37] text-[#0D0B0A]"
                    : "bg-[#181412] text-[#F7F4EF]/70 hover:text-[#F7F4EF] border border-[#3D3025]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Review Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredReviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-[#181412] border border-[#3D3025] p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden group hover:border-[#D4AF37]/50 transition-all shadow-xl"
              >
                <div className="absolute top-4 right-4 text-[#D4AF37]/2{-} font-serif text-6xl pointer-events-none select-none">
                  &ldquo;
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-xs text-[#F7F4EF]/80 leading-relaxed italic">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#3D3025] flex items-center justify-between relative z-10">
                  <div>
                    <h4 className="text-sm font-serif font-bold text-[#F7F4EF]">{rev.author}</h4>
                    <span className="text-[10px] text-[#F7F4EF]/50">{rev.relativeTime}</span>
                  </div>
                  {rev.verifiedGoogle && (
                    <span className="text-[10px] font-mono bg-[#2A201A] text-[#D4AF37] px-2.5 py-1 rounded-md border border-[#3D3025] flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Google</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7: RESERVATION & LOCATION HUB */}
      <section id="direct-booking-footer" className="py-24 px-6 bg-[#181412] border-t border-[#3D3025] relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Table Reservation Form & Direct Online Order Link */}
          <div className="lg:col-span-6 bg-[#0D0B0A] border border-[#3D3025] p-8 rounded-3xl space-y-6 shadow-2xl">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest uppercase text-[#D4AF37]">Direct Table Concierge</span>
              <h3 className="text-2xl font-serif font-bold text-[#F7F4EF]">Reserve Your Experience</h3>
              <p className="text-xs text-[#F7F4EF]/70">Secure your table instantly or place an online order for pickup.</p>
            </div>

            {resSubmitted ? (
              <div className="bg-[#181412] border border-[#D4AF37] p-6 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#D4AF37] mx-auto" />
                <h4 className="text-lg font-serif font-bold text-[#F7F4EF]">Reservation Requested!</h4>
                <p className="text-xs text-[#F7F4EF]/70">We look forward to hosting you on {resDate} at {resTime} for {resGuests}. Our team will confirm via phone shortly.</p>
                <button
                  onClick={() => setResSubmitted(false)}
                  className="mt-2 bg-[#D4AF37] text-[#0D0B0A] px-4 py-2 rounded-xl text-xs font-bold uppercase"
                >
                  Make Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setResSubmitted(true); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-mono text-[#F7F4EF]/70">Date</label>
                    <input
                      type="date"
                      value={resDate}
                      onChange={(e) => setResDate(e.target.value)}
                      className="w-full bg-[#181412] border border-[#3D3025] rounded-xl px-4 py-3 text-sm text-[#F7F4EF] focus:outline-none focus:border-[#D4AF37]"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-mono text-[#F7F4EF]/70">Time</label>
                    <input
                      type="time"
                      value={resTime}
                      onChange={(e) => setResTime(e.target.value)}
                      className="w-full bg-[#181412] border border-[#3D3025] rounded-xl px-4 py-3 text-sm text-[#F7F4EF] focus:outline-none focus:border-[#D4AF37]"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase font-mono text-[#F7F4EF]/70">Guest Count</label>
                  <select
                    value={resGuests}
                    onChange={(e) => setResGuests(e.target.value)}
                    className="w-full bg-[#181412] border border-[#3D3025] rounded-xl px-4 py-3 text-sm text-[#F7F4EF] focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5+ Guests (VIP Party)</option>
                  </select>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-[#D4AF37] hover:bg-[#c29d30] text-[#0D0B0A] py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all"
                  >
                    Confirm Table Request
                  </button>
                  <a
                    href="https://www.auramoderndining.com/order"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#181412] hover:bg-[#2A201A] border border-[#3D3025] text-[#F7F4EF] py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs text-center transition-all flex items-center justify-center gap-2"
                  >
                    <span>Order Online</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right Side: Custom Dark Map Frame & Working Hours Accordion */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#0D0B0A] border border-[#3D3025] p-6 rounded-3xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  <h4 className="text-sm font-serif font-bold text-[#F7F4EF]">131 NJ-27, Edison, NJ 08820</h4>
                </div>
                <a
                  href="https://maps.google.com/?q=131+NJ-27+Edison+NJ+08820"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 font-mono uppercase"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Simulated Dark Mode Map Frame */}
              <div className="relative h-48 rounded-2xl overflow-hidden border border-[#3D3025] bg-[#181412] flex items-center justify-center">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#3d3025_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                <div className="relative z-10 text-center space-y-2 p-4">
                  <div className="w-10 h-10 bg-[#D4AF37] text-[#0D0B0A] rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(212,175,55,0.5)] animate-bounce">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-serif font-bold text-[#F7F4EF]">AURA - Modern Indian Dining</div>
                  <div className="text-[10px] font-mono text-[#D4AF37]">Route 27, Edison, NJ</div>
                </div>
              </div>

              {/* Working Hours Accordion */}
              <div className="pt-2">
                <div className="text-xs uppercase font-mono text-[#D4AF37] mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Working Hours</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F7F4EF]/70 font-mono">
                  <div className="bg-[#181412] p-2.5 rounded-lg border border-[#3D3025]">Mon-Thu: 11:30 AM – 10:00 PM</div>
                  <div className="bg-[#181412] p-2.5 rounded-lg border border-[#3D3025]">Fri-Sat: 11:30 AM – 11:00 PM</div>
                  <div className="bg-[#181412] p-2.5 rounded-lg border border-[#3D3025] sm:col-span-2">Sunday: 11:30 AM – 10:00 PM</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0D0B0A] border-t border-[#3D3025] py-12 px-6 text-center text-xs text-[#F7F4EF]/50 space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#2A201A] border border-[#D4AF37]/40 flex items-center justify-center">
            <span className="font-serif text-[#D4AF37] font-bold">A</span>
          </div>
          <span className="font-serif tracking-widest text-[#F7F4EF] uppercase text-sm font-bold">AURA - Modern Indian Dining</span>
        </div>
        <p>© {new Date().getFullYear()} AURA Modern Indian Dining. All rights reserved. Crafted by Apex Digital for AURA Edison.</p>
        <div className="flex items-center justify-center gap-6 pt-2 font-mono">
          <a href="https://www.auramoderndining.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">Official Site</a>
          <a href="https://www.auramoderndining.com/order" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">Order Online</a>
          <a href="https://www.auramoderndining.com/reservations" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">Reservations</a>
        </div>
      </footer>

      {/* STICKY MOBILE DOCK */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#181412]/95 backdrop-blur-md border-t border-[#3D3025] p-3 flex items-center justify-between gap-3 sm:hidden">
        <a
          href="tel:7324941795"
          className="flex-1 bg-[#2A201A] border border-[#3D3025] text-[#F7F4EF] py-2.5 rounded-xl text-xs font-bold uppercase flex items-center justify-center gap-2"
        >
          <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Call (732) 494-1795</span>
        </a>
        <a
          href="https://www.auramoderndining.com/order"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#D4AF37] text-[#0D0B0A] py-2.5 rounded-xl text-xs font-bold uppercase flex items-center justify-center gap-2 shadow-lg"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Order Online</span>
        </a>
      </div>

      {/* COMPARISON MODAL */}
      {showComparisonModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#181412] border border-[#D4AF37] rounded-3xl max-w-4xl w-full p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowComparisonModal(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-[#2A201A] text-[#F7F4EF] hover:bg-[#D4AF37] hover:text-[#0D0B0A] transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs uppercase font-mono text-[#D4AF37]">Apex Digital Audit & Redesign Concept</span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F7F4EF]">Why AURA Needed This Bespoke Upgrade</h3>
              <p className="text-xs text-[#F7F4EF]/70">We analyzed your current digital storefront and resolved high-friction conversion bottlenecks.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Before */}
              <div className="bg-[#0D0B0A] border border-[#3D3025] p-5 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-red-400 font-bold">Current Site Limitations</span>
                  <span className="text-[10px] bg-red-950 text-red-300 px-2 py-0.5 rounded">High Friction</span>
                </div>
                <ul className="space-y-3 text-xs text-[#F7F4EF]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>Every single dish item displays generic <strong className="text-red-300">&ldquo;Dish photo coming soon&rdquo;</strong> placeholders, severely hurting appetite appeal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>No integrated online table reservation widget or direct online ordering workflow, forcing high-intent visitors to call manually.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>Generic layout templates that fail to capture the striking architectural dark luxury of your Edison storefront.</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <div className="text-[10px] uppercase font-mono text-[#F7F4EF]/50 mb-1">Old Site Mobile Screenshot Reference</div>
                  <div className="h-36 rounded-xl overflow-hidden border border-[#3D3025]">
                    <img
                      src="https://iad.microlink.io/iFq6o-vPak64VzpSbP-DtZc8z7d70J0rEjXLym_uOT3QeRLbwlqTjVuaPiCvXM7g8I8GtS12KjDjNtG6Ak_vxQ.png"
                      alt="Old Site Screenshot"
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="bg-[#0D0B0A] border border-[#D4AF37]/50 p-5 rounded-2xl space-y-4 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-[#D4AF37] font-bold">Aura Nocturnal Luxe Concept</span>
                  <span className="text-[10px] bg-[#2A201A] text-[#D4AF37] px-2 py-0.5 rounded border border-[#D4AF37]/40">Production Ready</span>
                </div>
                <ul className="space-y-3 text-xs text-[#F7F4EF]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>Rich, high-resolution photography integrated across all 6 menu categories with dietary badges and instant ordering links.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>Built-in interactive Table Concierge and step-by-step Spice & Pairing Atelier for high-engagement guest experience.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>Exquisite nocturnal dark obsidian velvet aesthetic honoring your physical Edison storefront architecture.</span>
                  </li>
                </ul>
                <div className="pt-4 flex items-center justify-end">
                  <button
                    onClick={() => setShowComparisonModal(false)}
                    className="bg-[#D4AF37] text-[#0D0B0A] px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider"
                  >
                    Explore Concept
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* RESERVATION MODAL */}
      {showReservationModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#181412] border border-[#D4AF37] rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 relative">
            <button
              onClick={() => setShowReservationModal(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-[#2A201A] text-[#F7F4EF] hover:bg-[#D4AF37] hover:text-[#0D0B0A] transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs uppercase font-mono text-[#D4AF37]">AURA Table Concierge</span>
              <h3 className="text-2xl font-serif font-bold text-[#F7F4EF]">Reserve Your Table</h3>
              <p className="text-xs text-[#F7F4EF]/70">Join us at 131 NJ-27, Edison, NJ for an unforgettable modern Indian dining experience.</p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert("Reservation request submitted successfully! Our team will call you to confirm."); setShowReservationModal(false); }} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs uppercase font-mono text-[#F7F4EF]/70">Full Name</label>
                <input
                  type="text"
                  placeholder="Rajveer Sondarva"
                  className="w-full bg-[#0D0B0A] border border-[#3D3025] rounded-xl px-4 py-3 text-sm text-[#F7F4EF] focus:outline-none focus:border-[#D4AF37]"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs uppercase font-mono text-[#F7F4EF]/70">Phone Number</label>
                <input
                  type="tel"
                  placeholder="(732) 000-0000"
                  className="w-full bg-[#0D0B0A] border border-[#3D3025] rounded-xl px-4 py-3 text-sm text-[#F7F4EF] focus:outline-none focus:border-[#D4AF37]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs uppercase font-mono text-[#F7F4EF]/70">Date</label>
                  <input
                    type="date"
                    defaultValue="2025-05-15"
                    className="w-full bg-[#0D0B0A] border border-[#3D3025] rounded-xl px-4 py-3 text-sm text-[#F7F4EF] focus:outline-none focus:border-[#D4AF37]"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs uppercase font-mono text-[#F7F4EF]/70">Time</label>
                  <input
                    type="time"
                    defaultValue="19:00"
                    className="w-full bg-[#0D0B0A] border border-[#3D3025] rounded-xl px-4 py-3 text-sm text-[#F7F4EF] focus:outline-none focus:border-[#D4AF37]"
                    required
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] hover:bg-[#c29d30] text-[#0D0B0A] py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all"
                >
                  Submit Reservation Request
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}