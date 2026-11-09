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
  Wine,
  Info,
  ChevronDown,
  Navigation,
  Check,
  Users,
  Send
} from "lucide-react";

// --- Types & Data ---

interface CatalogItem {
  name: string;
  price: string;
  description: string;
  image?: string;
  badge?: string;
  tags: string[];
}

interface Category {
  category_id: string;
  category_name: string;
  badge: string;
  description: string;
  items: CatalogItem[];
}

const REAL_ASSETS = [
  {
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLcyH5vwi3PU3royMhMeOCA27LEsdKfAxNGJv57lnvJ4r_cOrEcROvVR8bCnqqOCVtSkZiMRJ3JHUfAFDm_bQKi6hPZyNoFNusUDK5DFIdaX7yB46wWz-eAFOMHLdc1FhrzaqDfzbyxRLAc=s4800-w1000-h800",
    caption: "Atmospheric Dining Room & Warm Amber Glow",
    category: "Ambiance"
  },
  {
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLd-3cnvNPQIjQVSVQzKt9F8XIaQObz2JTNfdYo4KCoPI7Op825KSE4pJp3jgJGY5pjIp2njDjwZronT1I59TPu3Crt4GVqmOCkyluygYuv9eqmyWyOEVBe7Aoc_-l4yMY_VW6azbFD_R8c2=s4800-w1000-h800",
    caption: "Artisanal Culinary Presentation",
    category: "Signature"
  },
  {
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLfDv_mykHb5KAGDAjHCrX0i3lEx4HFz7lEUfzl6ef3st5P0sp5DQQSl2dp9g-7ef5s3--AyplKA-7-G9SUwYvOt94NXSt0L0Y56dnDg5cAE73oyksAMWe7VESCnFI5GUjOunSFl85gTkXQ=s4800-w1000-h800",
    caption: "Modern Indian Interior Elegance",
    category: "Ambiance"
  },
  {
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLewFLFW1bSifrWPklwNDpRiF3s0sZOufujAsmNl6ET-PV2tNJJsWMYGw_94Ejz_b8RPdviFCaggKRx4o5qvNTQuwFma-c0cga1cKv7bzOVjEkiKyvyzHHZjH9IOTaF1aOaTozn7heSiFywC=s4800-w1000-h800",
    caption: "Cocktail & Beverage Craft",
    category: "Bar"
  }
];

const REVIEWS = [
  {
    author: "Rajveer Sondarva",
    text: "Had such a great meal here everything we ordered was really flavorful and tasted amazing Kishan took great care of us and gave us really good service. He was friendly and attentive throughout. Definitely enjoyed the experience and would come back again!",
    rating: 5,
    relativeTime: "a month ago",
    verifiedGoogle: true,
    dish: "Burrata Fusion Chaat & Lamb Chops"
  },
  {
    author: "Manu B",
    text: "Honest review. First of all congratulations on your new opening. I ordered 4 items in total: Ghee Garlic Tadka dal ($18), Creamy Kofta Royale ($21), Emerald Leaf Chaat ($16), and Tandoori Roti ($4). Ambiance looked really nice inside and I love the bold flavor profiles.",
    rating: 4,
    relativeTime: "3 months ago",
    verifiedGoogle: true,
    dish: "Creamy Kofta Royale"
  },
  {
    author: "Puja Patel",
    text: "It was awesome food with great interior. And the customer service. All the employees serve food with great smile on their faces.",
    rating: 5,
    relativeTime: "3 months ago",
    verifiedGoogle: true,
    dish: "Truffle Paneer Royale"
  },
  {
    author: "Jack Rajpurohit",
    text: "Pleasantly surprised at the quality and service of Aura! Each dish had its own individual taste..Viha's smile is so infectious!",
    rating: 5,
    relativeTime: "a month ago",
    verifiedGoogle: true,
    dish: "Chicken Flame Tikka"
  }
];

const MENU_CATEGORIES: Category[] = [
  {
    category_id: "signature-broths",
    category_name: "Signature Broths",
    badge: "Warm Starters",
    description: "Fragrant and comforting broths slow-simmered with aromatic herbs and coastal spices",
    items: [
      {
        name: "Sweet Corn Velvet Soup",
        price: "$11.00",
        description: "A silky blend of sweet corn, fresh vegetables, and aromatic herbs finished with cracked black pepper.",
        badge: "House Favorite",
        tags: ["Dairy", "Vegetarian"]
      },
      {
        name: "Roasted Tomato Basil Shorba",
        price: "$10.00",
        description: "Slow-roasted vine tomatoes simmered with Indian spices, fresh basil, and a touch of organic cream.",
        badge: "Comfort Classic",
        tags: ["Dairy", "Vegetarian"]
      },
      {
        name: "Temple Garden Broth",
        price: "$10.00",
        description: "A delicate tomato and herb-infused broth with seasonal crisp vegetables and subtle Indian aromatics.",
        badge: "Light & Herbal",
        tags: ["Vegan", "Gluten-Free"]
      },
      {
        name: "Silken Indo Noodle Broth",
        price: "$11.00",
        description: "Light vegetable broth with silky noodles, Asian greens, scallions, and fragrant crushed spices.",
        badge: "Fusion",
        tags: ["Wheat", "Soy"]
      },
      {
        name: "Wild Forest Mushroom Soup",
        price: "$11.00",
        description: "Creamy roasted mushroom soup enriched with mountain herbs, coarse pepper, and a drizzle of white truffle oil.",
        badge: "Chef Pick",
        tags: ["Dairy", "Vegetarian"]
      },
      {
        name: "Chicken Egg Broth",
        price: "$11.00",
        description: "Comforting bone-simmered chicken broth with delicate egg ribbons, scallions, and freshly cracked pepper.",
        badge: "Savory",
        tags: ["Egg", "Non-Veg"]
      }
    ]
  },
  {
    category_id: "aura-chaat-atelier",
    category_name: "Aura Chaat Atelier",
    badge: "Artisanal Chaat",
    description: "Crispy, sweet, tangy, and savory street-food inspirations redefined for progressive palates",
    items: [
      {
        name: "Aura Emerald Leaf Chaat",
        price: "$18.00",
        description: "Crispy flash-fried baby spinach leaves layered with sweetened hung yogurt, tamarind chutney, mint, pomegranate, and sev.",
        badge: "Guest Favorite",
        tags: ["Dairy", "Wheat", "Vegetarian"]
      },
      {
        name: "Burrata Fusion Chaat",
        price: "$20.00",
        description: "Creamy imported Italian burrata paired with spiced chickpeas, micro-herbs, house tamarind glaze, and crisp wafers.",
        badge: "Chef's Special",
        tags: ["Dairy", "Vegetarian", "Signature"]
      },
      {
        name: "Chatpatta Samosa Chaat",
        price: "$17.00",
        description: "Crispy potato samosa crushed and topped with slow-cooked chickpea masala, spiced yogurt, tamarind, mint, and crisp sev.",
        badge: "Street Classic",
        tags: ["Dairy", "Wheat", "Vegetarian"]
      }
    ]
  },
  {
    category_id: "veg-appetizers",
    category_name: "Vegetarian Appetizers",
    badge: "Small Plates",
    description: "Inventive small plates cooked over charcoal griddles and high-flame wok stations",
    items: [
      {
        name: "Truffle Paneer Royale",
        price: "$24.00",
        description: "Char-grilled cottage cheese cubes finished with brown butter, shaved parmesan, black truffle oil, and crushed fenugreek.",
        badge: "Chef's Special",
        tags: ["Dairy", "Vegetarian"]
      },
      {
        name: "Spicy Cauliflower Tempura",
        price: "$19.00",
        description: "Crispy tempura cauliflower florets tossed in a bold garlic-chili glaze with toasted sesame and scallions.",
        badge: "Spicy",
        tags: ["Wheat", "Soy", "Sesame", "Vegan"]
      },
      {
        name: "Crispy Cheese Arancini",
        price: "$20.00",
        description: "Golden rice spheres stuffed with aged cheeses and Indian herbs, served alongside smoky garlic-chili aioli.",
        badge: "Fusion",
        tags: ["Dairy", "Egg", "Wheat"]
      },
      {
        name: "Heritage Punjabi Samosa",
        price: "$14.00",
        description: "Handcrafted pastry stuffed with spiced spiced potatoes, green peas, and whole coriander seeds. Served with chutneys.",
        badge: "Classic",
        tags: ["Wheat", "Vegan"]
      },
      {
        name: "Jackfruit Street Tacos",
        price: "$18.00",
        description: "Warm flour tortillas filled with spiced pulled jackfruit, pickled red onions, fresh cilantro, and smoky chipotle cream.",
        badge: "Trendy",
        tags: ["Wheat", "Dairy"]
      },
      {
        name: "Szechuan Baby Corn",
        price: "$18.00",
        description: "Crispy tender baby corn wok-tossed with fresh garlic, bell peppers, and signature crushed Szechuan pepper.",
        badge: "Spicy",
        tags: ["Wheat", "Soy"]
      },
      {
        name: "Chilli Paneer Stir-Fry",
        price: "$19.00",
        description: "Crispy paneer cubes tossed with peppers, onions, ginger, green chilies, and soy chili glaze.",
        badge: "Indo-Chinese",
        tags: ["Dairy", "Soy"]
      },
      {
        name: "Gobi Manchurian",
        price: "$18.00",
        description: "Crispy cauliflower tossed in a rich dark garlic-soy sauce with spring onions and coriander.",
        badge: "Popular",
        tags: ["Wheat", "Soy"]
      }
    ]
  },
  {
    category_id: "non-veg-appetizers",
    category_name: "Non-Veg Appetizers",
    badge: "Fire & Sear",
    description: "Boldly spiced poultry, grass-fed meats, and coastal seafood delicacies",
    items: [
      {
        name: "Inferno Chicken Bites",
        price: "$22.00",
        description: "Crispy chicken tenders tossed in a fiery house chili-garlic spice reduction with roasted garlic and coriander.",
        badge: "Chef's Special",
        tags: ["Spicy", "Wheat", "Egg"]
      },
      {
        name: "Desi Masala Wings",
        price: "$20.00",
        description: "Juicy jumbo wings marinated overnight in bold Indian spices and finished with a smoky tandoori glaze.",
        badge: "Crowd Pleaser",
        tags: ["Spicy"]
      },
      {
        name: "Royal Nadan Spice Fry (Chicken or Goat)",
        price: "$22.00",
        description: "Kerala-inspired slow roast prepared with roasted coconut flakes, cracked black pepper, fresh curry leaves, and spices.",
        badge: "Chef's Special",
        tags: ["Coconut", "South Indian"]
      },
      {
        name: "Coastal Desi Fry Fish",
        price: "$22.00",
        description: "Crispy wild-caught fish fillets coated in coastal spices and fried with curry leaves and mustard seeds.",
        badge: "Seafood Special",
        tags: ["Fish", "Wheat"]
      },
      {
        name: "Tawa Garlic Shrimp",
        price: "$20.00",
        description: "Succulent shrimp seared on a red-hot iron griddle with garlic butter, crushed chilies, and cilantro.",
        badge: "Spicy",
        tags: ["Shellfish", "Dairy"]
      },
      {
        name: "Tandoori Chicken Tacos",
        price: "$22.00",
        description: "Soft warm tacos filled with smoky tandoori chicken ribbons, fresh crunch slaw, cilantro, and mint yogurt.",
        badge: "Fusion Signature",
        tags: ["Wheat", "Dairy"]
      }
    ]
  },
  {
    category_id: "fresh-from-tandoor",
    category_name: "Fresh From Tandoor",
    badge: "Clay Oven & Charcoal",
    description: "Smoky delicacies marinated in spiced yogurt and grilled over live embers in our clay tandoor",
    items: [
      {
        name: "Charcoal Lamb Chops",
        price: "$34.00",
        description: "Prime double-cut lamb chops marinated overnight in raw papaya, ginger, garlic, and garams, grilled over open coals.",
        badge: "Chef's Special",
        tags: ["Dairy", "Gluten-Free"]
      },
      {
        name: "Chicken Flame Tikka",
        price: "$23.00",
        description: "Boneless chicken marinated in tandoori spices, topped with a molten artisan cheese crust, and torch-finished.",
        badge: "Chef's Special",
        tags: ["Dairy", "Spicy"]
      },
      {
        name: "Paneer Tandoorwala",
        price: "$20.00",
        description: "Thick blocks of fresh house paneer steeped in mustard-spiced curd, bell peppers, and roasted onion petals.",
        badge: "Chef's Special",
        tags: ["Dairy", "Vegetarian"]
      },
      {
        name: "Classic Chicken Tandoori",
        price: "$24.00",
        description: "Bone-in half chicken steeped in hung curd, Kashmiri red chili, and mustard oil, roasted to smoky perfection.",
        badge: "Classic",
        tags: ["Dairy"]
      },
      {
        name: "Tandoori Jhinga (Prawns)",
        price: "$28.00",
        description: "Jumbo ocean prawns marinated in carom seeds, yellow chili powder, and lemon oil, grilled until tender.",
        badge: "Chef's Special",
        tags: ["Shellfish", "Spicy"]
      }
    ]
  },
  {
    category_id: "vegetarian-mains",
    category_name: "Vegetarian Mains",
    badge: "Curry Classics",
    description: "Rich, fragrant vegetarian curries simmered slowly in traditional heavy copper handis",
    items: [
      {
        name: "Velvet Dal Aura",
        price: "$21.00",
        description: "Black lentils slow-simmered for 36 hours over gentle embers with churned butter, cream, and delicate spices.",
        badge: "Signature Main",
        tags: ["Dairy", "Vegetarian"]
      },
      {
        name: "Ghee Garlic Tadka Dal",
        price: "$18.00",
        description: "Yellow lentils tempered in organic cow ghee with crispy garlic, toasted cumin, and whole dried red chilies.",
        badge: "Comfort Food",
        tags: ["Dairy", "Vegetarian"]
      },
      {
        name: "Creamy Kofta Royale",
        price: "$21.00",
        description: "Melt-in-mouth cottage cheese and cashew dumplings floating in an opulent saffron-infused yellow gravy.",
        badge: "Royal Dish",
        tags: ["Dairy", "Tree Nut", "Vegetarian"]
      }
    ]
  }
];

const OPERATING_SCHEDULE = [
  { day: "Monday", time: "11:30 AM – 10:00 PM" },
  { day: "Tuesday", time: "11:30 AM – 10:00 PM" },
  { day: "Wednesday", time: "11:30 AM – 10:00 PM" },
  { day: "Thursday", time: "11:30 AM – 10:00 PM" },
  { day: "Friday", time: "11:30 AM – 11:00 PM" },
  { day: "Saturday", time: "11:00 AM – 11:00 PM" },
  { day: "Sunday", time: "11:30 AM – 10:00 PM" }
];

export default function ClientSitePage() {
  // State variables
  const [activeCategory, setActiveCategory] = useState<string>("aura-chaat-atelier");
  const [showAuditModal, setShowAuditModal] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Customizer state
  const [customProtein, setCustomProtein] = useState("Charcoal Lamb Chops");
  const [customSpice, setCustomSpice] = useState("Medium Spice");
  const [customPairing, setCustomPairing] = useState("Garlic Butter Naan");

  // Reservation form state
  const [resGuests, setResGuests] = useState("2 Guests");
  const [resDate, setResDate] = useState("Today");
  const [resTime, setResTime] = useState("7:00 PM");
  const [resBooked, setResBooked] = useState(false);

  const selectedCategoryObj = MENU_CATEGORIES.find(c => c.category_id === activeCategory) || MENU_CATEGORIES[0];

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResBooked(true);
    setTimeout(() => {
      setResBooked(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[#0D0B0A] text-[#F4EFEA] font-sans selection:bg-[#D4A359] selection:text-[#0D0B0A] relative pb-20 md:pb-0">

      {/* TOP APEX DIGITAL AUDIT DEMO BAR */}
      <div className="bg-gradient-to-r from-[#181412] via-[#241C16] to-[#181412] border-b border-[#D4A359]/30 text-xs py-2 px-4 text-[#F4EFEA] sticky top-0 z-50 shadow-xl backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#D4A359]/20 text-[#E2B767] border border-[#D4A359]/40">
              <Sparkles className="w-3 h-3 mr-1 animate-pulse text-[#D4A359]" />
              BESPOKE CONCEPT DEMO
            </span>
            <span className="hidden sm:inline text-neutral-300">
              Prepared for <strong className="text-white">AURA - Modern Indian Dining</strong> (Edison, NJ)
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowAuditModal(true)}
              className="inline-flex items-center space-x-1.5 bg-[#D4A359] hover:bg-[#E2B767] text-[#0D0B0A] font-bold px-3 py-1 rounded transition-all text-xs shadow-md"
            >
              <Info className="w-3.5 h-3.5" />
              <span>⚡ Compare Before vs. After</span>
            </button>
            <a
              href="https://www.auramoderndining.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[#E2B767] hover:underline flex items-center text-[11px] hidden md:flex"
            >
              <span>Current Website</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* BEFORE / AFTER AUDIT MODAL */}
      {showAuditModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4">
          <div className="bg-[#181412] border border-[#D4A359]/40 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative text-[#F4EFEA]">
            <button
              onClick={() => setShowAuditModal(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2 rounded-full hover:bg-neutral-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="inline-flex items-center space-x-2 text-[#D4A359] text-xs font-semibold tracking-wider uppercase mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Website Architecture Audit & ROI Upgrade</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-[#F4EFEA] mb-4">
              Why AURA Deserves This Bespoke Experience
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Old Site Friction */}
              <div className="bg-[#0D0B0A] border border-red-500/20 rounded-xl p-5">
                <div className="flex items-center justify-between border-b border-red-500/20 pb-3 mb-3">
                  <h3 className="font-semibold text-red-400 text-sm flex items-center">
                    <X className="w-4 h-4 mr-1.5" /> Previous Friction Points
                  </h3>
                  <span className="text-[10px] bg-red-950/60 text-red-300 px-2 py-0.5 rounded border border-red-800/40">
                    Old Website
                  </span>
                </div>
                <div className="mb-4 overflow-hidden rounded border border-neutral-800">
                  <img
                    src="https://iad.microlink.io/iFq6o-vPak64VzpSbP-DtZc8z7d70J0rEjXLym_uOT3QeRLbwlqTjVuaPiCvXM7g8I8GtS12KjDjNtG6Ak_vxQ.png"
                    alt="Old Website Mobile Screenshot"
                    className="w-full object-cover max-h-48 opacity-80"
                  />
                </div>
                <ul className="space-y-2 text-xs text-neutral-300">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Every single dish displays a generic <em>"Dish photo coming soon"</em> placeholder, diminishing appetite appeal.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>No direct inline table booking engine—losing high-intent dinner guests to friction.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>Misses the high-end luxury dark amber aesthetic matching AURA&apos;s physical interior.</span>
                  </li>
                </ul>
              </div>

              {/* New Prototype Solution */}
              <div className="bg-[#241C16]/80 border border-[#D4A359]/40 rounded-xl p-5">
                <div className="flex items-center justify-between border-b border-[#D4A359]/30 pb-3 mb-3">
                  <h3 className="font-semibold text-[#E2B767] text-sm flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-1.5" /> Bespoke Uplift Blueprint
                  </h3>
                  <span className="text-[10px] bg-[#D4A359]/20 text-[#E2B767] px-2 py-0.5 rounded border border-[#D4A359]/40">
                    Live New Prototype
                  </span>
                </div>
                <ul className="space-y-3 text-xs text-neutral-200 mb-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A359] mr-2 shrink-0 mt-0.5" />
                    <span><strong>Atmospheric Dark Luxury:</strong> Warm amber accents, gold serifs, and high-contrast dark surfaces reflecting your Edison dining room.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A359] mr-2 shrink-0 mt-0.5" />
                    <span><strong>Comprehensive Menu Engine:</strong> Full item listings with dietary badges, prices, and clear dish highlights.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A359] mr-2 shrink-0 mt-0.5" />
                    <span><strong>Interactive Meal Customizer & Direct Table Reservation:</strong> Converts website traffic straight into booked tables.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A359] mr-2 shrink-0 mt-0.5" />
                    <span><strong>Verified 4.7★ Review Wall:</strong> Highlights real customer reviews for items like Burrata Chaat and Viha&apos;s hospitality.</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <button
                    onClick={() => setShowAuditModal(false)}
                    className="w-full bg-[#D4A359] hover:bg-[#E2B767] text-[#0D0B0A] font-bold py-2.5 rounded-lg text-xs transition-colors shadow-lg"
                  >
                    Explore Live Prototype Below
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HEADER / NAVIGATION */}
      <header className="bg-[#0D0B0A]/90 backdrop-blur-md border-b border-[#D4A359]/20 sticky top-9 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A359] to-[#8C6428] p-0.5 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0D0B0A] rounded-full flex items-center justify-center">
                <Flame className="w-5 h-5 text-[#E2B767]" />
              </div>
            </div>
            <div>
              <span className="font-serif text-2xl tracking-widest text-[#F4EFEA] font-bold block leading-none">
                AURA
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4A359] font-medium block mt-1">
                Modern Indian Dining
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-medium tracking-wider uppercase text-neutral-300">
            <a href="#about" className="hover:text-[#D4A359] transition-colors">Our Story</a>
            <a href="#customizer" className="hover:text-[#D4A359] transition-colors flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-1 text-[#E2B767]" />
              Meal Builder
            </a>
            <a href="#offerings" className="hover:text-[#D4A359] transition-colors">Culinary Catalog</a>
            <a href="#gallery" className="hover:text-[#D4A359] transition-colors">Gallery</a>
            <a href="#reviews" className="hover:text-[#D4A359] transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-[#D4A359] transition-colors">Location & Hours</a>
          </nav>

          {/* Right Action & Status */}
          <div className="hidden sm:flex items-center space-x-4">
            <div className="hidden xl:flex items-center space-x-2 bg-[#181412] px-3 py-1.5 rounded-full border border-[#D4A359]/20 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-neutral-300">Open Now • Edison, NJ</span>
            </div>
            <a
              href="https://www.auramoderndining.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#181412] hover:bg-[#241C16] text-[#E2B767] border border-[#D4A359]/40 font-semibold px-4 py-2 rounded-lg text-xs transition-all flex items-center space-x-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Order Online</span>
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#D4A359] to-[#B8873D] hover:from-[#E2B767] hover:to-[#D4A359] text-[#0D0B0A] font-bold px-5 py-2 rounded-lg text-xs transition-all shadow-md flex items-center space-x-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Table</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#181412] border-b border-[#D4A359]/20 px-6 py-5 space-y-4 text-sm uppercase tracking-wider">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-300 hover:text-[#D4A359]"
            >
              Our Story
            </a>
            <a
              href="#customizer"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-300 hover:text-[#D4A359]"
            >
              Interactive Meal Builder
            </a>
            <a
              href="#offerings"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-300 hover:text-[#D4A359]"
            >
              Full Menu Catalog
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-300 hover:text-[#D4A359]"
            >
              Gallery & Atmosphere
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-300 hover:text-[#D4A359]"
            >
              Guest Reviews
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-300 hover:text-[#D4A359]"
            >
              Reservations & Hours
            </a>
            <div className="pt-2 flex flex-col space-y-2">
              <a
                href="https://www.auramoderndining.com/"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center bg-[#241C16] border border-[#D4A359]/40 text-[#E2B767] font-bold py-2.5 rounded-lg text-xs"
              >
                Order Delivery / Takeout
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#D4A359] text-[#0D0B0A] font-bold py-2.5 rounded-lg text-xs"
              >
                Reserve a Table
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
        {/* Background Image Layer with Dark Amber Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={REAL_ASSETS[0].url}
            alt="AURA Dining Room Atmosphere"
            className="w-full h-full object-cover object-center scale-105 opacity-30 transform filter blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A] via-[#0D0B0A]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0B0A] via-transparent to-[#0D0B0A]"></div>
        </div>

        {/* Ambient Decorative Lighting Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4A359]/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#181412]/90 border border-[#D4A359]/40 backdrop-blur-md text-[#E2B767] text-xs font-semibold tracking-widest uppercase shadow-lg">
            <Award className="w-4 h-4 text-[#D4A359]" />
            <span>Top-Rated Indian Fine Dining in Edison, NJ</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-[#F4EFEA] leading-[1.15]">
            Bold Flavors. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A359] via-[#E2B767] to-[#F4EFEA]">
              Timeless Traditions.
            </span> <br />
            Modern Aura.
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Situated on NJ-27 in Edison, AURA redefines North &amp; South Indian cuisine. Experience charcoal-sear tandoori cuts, progressive street chaats, and truffle-infused pairings in an intimate amber-lit setting.
          </p>

          {/* Hero CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4A359] via-[#E2B767] to-[#D4A359] text-[#0D0B0A] font-bold text-sm uppercase tracking-wider hover:opacity-95 shadow-xl hover:shadow-[#D4A359]/20 transition-all flex items-center justify-center space-x-2 group"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Your Table</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#offerings"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#181412] hover:bg-[#241C16] border border-[#D4A359]/40 text-[#F4EFEA] font-semibold text-sm uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
            >
              <Utensils className="w-4 h-4 text-[#D4A359]" />
              <span>Explore Culinary Catalog</span>
            </a>
          </div>

          {/* Trust Metrics Pill */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-[#181412]/80 backdrop-blur-md border border-[#D4A359]/20 p-3.5 rounded-xl text-center">
              <div className="flex items-center justify-center text-[#D4A359] mb-1">
                <Star className="w-4 h-4 fill-[#D4A359]" />
                <span className="font-bold text-lg text-white ml-1">4.7</span>
              </div>
              <span className="text-[11px] text-neutral-400 uppercase tracking-wider">357+ Google Reviews</span>
            </div>

            <div className="bg-[#181412]/80 backdrop-blur-md border border-[#D4A359]/20 p-3.5 rounded-xl text-center">
              <div className="text-lg font-bold text-[#E2B767] mb-1">Authentic</div>
              <span className="text-[11px] text-neutral-400 uppercase tracking-wider">Heritage Spices</span>
            </div>

            <div className="bg-[#181412]/80 backdrop-blur-md border border-[#D4A359]/20 p-3.5 rounded-xl text-center">
              <div className="text-lg font-bold text-[#E2B767] mb-1">Live Fire</div>
              <span className="text-[11px] text-neutral-400 uppercase tracking-wider">Clay Oven Tandoor</span>
            </div>

            <div className="bg-[#181412]/80 backdrop-blur-md border border-[#D4A359]/20 p-3.5 rounded-xl text-center">
              <div className="text-lg font-bold text-white mb-1">131 NJ-27</div>
              <span className="text-[11px] text-neutral-400 uppercase tracking-wider">Edison, NJ 08820</span>
            </div>
          </div>

        </div>
      </section>

      {/* BRAND STORY & HERITAGE SECTION */}
      <section id="about" className="py-20 bg-[#181412] border-y border-[#D4A359]/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Image Cluster */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden border border-[#D4A359]/30 shadow-2xl">
                <img
                  src={REAL_ASSETS[1].url}
                  alt="AURA Culinary Artistry"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-3/4 rounded-xl overflow-hidden border border-[#D4A359]/40 shadow-2xl hidden sm:block">
                <img
                  src={REAL_ASSETS[2].url}
                  alt="AURA Dining Interior"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D4A359]/10 rounded-full blur-2xl"></div>
            </div>

            {/* Right Narrative Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-[#D4A359] text-xs font-semibold tracking-widest uppercase">
                <Flame className="w-4 h-4" />
                <span>Modern Indian Dining • Authentic Story</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#F4EFEA] leading-tight">
                Redefining Heritage Recipes with <span className="text-[#D4A359]">Modern Artistry</span>
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Situated in the heart of Edison on NJ-27, <strong>AURA</strong> redefines North and South Indian dining by fusing centuries-old heritage recipes with modern culinary craft. From slow-simmered artisanal curries to charcoal-seared tandoori cuts and innovative chaat reinvented for the contemporary palate, every dish celebrates depth, aroma, and vibrant presentation.
              </p>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Our kitchen honors time-tested spice blending techniques while embracing adventurous pairings like creamy burrata chaats and truffle-infused paneer. Paired with a warm, intimate atmosphere and attentive hospitality, AURA offers an unforgettable feast for all senses.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#0D0B0A] border border-[#D4A359]/20 p-4 rounded-xl">
                  <h4 className="font-serif text-[#E2B767] font-semibold text-sm mb-1">Slow Simmered Curries</h4>
                  <p className="text-neutral-400 text-xs">Our Velvet Dal Aura is simmered overnight over slow embers for 36 hours.</p>
                </div>

                <div className="bg-[#0D0B0A] border border-[#D4A359]/20 p-4 rounded-xl">
                  <h4 className="font-serif text-[#E2B767] font-semibold text-sm mb-1">Artisanal Chaat Atelier</h4>
                  <p className="text-neutral-400 text-xs">Crispy spinach, burrata, and tamrind glaze redefined with sweet &amp; savory harmony.</p>
                </div>
              </div>

              <div className="pt-4 flex items-center space-x-4">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-[#D4A359] hover:text-[#E2B767] font-bold text-xs uppercase tracking-widest"
                >
                  <span>Experience AURA Hospitality</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE CUSTOMIZER SECTION */}
      <section id="customizer" className="py-20 bg-[#0D0B0A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-[#D4A359] text-xs font-semibold tracking-widest uppercase inline-flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              Custom Dining Craft
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F4EFEA]">
              Build Your Custom Tandoori &amp; Curry Meal
            </h2>
            <p className="text-neutral-400 text-sm">
              Personalize your dining experience. Select your signature protein, tailor the spice warmth, and pair with our handcrafted breads or aromatic rice.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Customizer Selector Options */}
            <div className="lg:col-span-8 bg-[#181412] border border-[#D4A359]/30 rounded-2xl p-6 md:p-8 space-y-8 shadow-xl">

              {/* Step 1: Main Protein */}
              <div className="space-y-3">
                <label className="block font-serif text-sm text-[#E2B767] uppercase tracking-wider font-semibold">
                  Step 1: Choose Your Main Protein or Veggie
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    "Charcoal Lamb Chops",
                    "Truffle Paneer",
                    "Chicken Flame Tikka",
                    "Tandoori Prawns",
                    "Jackfruit"
                  ].map((item) => (
                    <button
                      key={item}
                      onClick={() => setCustomProtein(item)}
                      className={`p-3 rounded-xl text-left border text-xs font-medium transition-all ${
                        customProtein === item
                          ? "bg-[#D4A359] text-[#0D0B0A] border-[#D4A359] font-bold shadow-lg"
                          : "bg-[#0D0B0A] text-neutral-300 border-neutral-800 hover:border-[#D4A359]/50"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Spice Level */}
              <div className="space-y-3">
                <label className="block font-serif text-sm text-[#E2B767] uppercase tracking-wider font-semibold">
                  Step 2: Select Your Spice Level
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    "Mild & Creamy",
                    "Medium Spice",
                    "Authentic Indian Hot",
                    "Inferno Extra Hot"
                  ].map((spice) => (
                    <button
                      key={spice}
                      onClick={() => setCustomSpice(spice)}
                      className={`p-3 rounded-xl text-center border text-xs font-medium transition-all ${
                        customSpice === spice
                          ? "bg-[#D4A359] text-[#0D0B0A] border-[#D4A359] font-bold shadow-lg"
                          : "bg-[#0D0B0A] text-neutral-300 border-neutral-800 hover:border-[#D4A359]/50"
                      }`}
                    >
                      {spice}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Breads & Rice */}
              <div className="space-y-3">
                <label className="block font-serif text-sm text-[#E2B767] uppercase tracking-wider font-semibold">
                  Step 3: Pair with Artisanal Breads &amp; Rice
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    "Garlic Butter Naan",
                    "Tandoori Roti",
                    "Truffle Cheese Naan",
                    "Aromatic Basmati Rice",
                    "Jeera Rice"
                  ].map((pairing) => (
                    <button
                      key={pairing}
                      onClick={() => setCustomPairing(pairing)}
                      className={`p-3 rounded-xl text-left border text-xs font-medium transition-all ${
                        customPairing === pairing
                          ? "bg-[#D4A359] text-[#0D0B0A] border-[#D4A359] font-bold shadow-lg"
                          : "bg-[#0D0B0A] text-neutral-300 border-neutral-800 hover:border-[#D4A359]/50"
                      }`}
                    >
                      {pairing}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Live Customizer Preview Card */}
            <div className="lg:col-span-4 bg-gradient-to-b from-[#241C16] to-[#181412] border border-[#D4A359]/40 rounded-2xl p-6 shadow-2xl relative">
              <div className="text-xs uppercase tracking-widest text-[#D4A359] font-bold mb-4 flex items-center justify-between">
                <span>Meal Summary</span>
                <Sparkles className="w-4 h-4 text-[#E2B767]" />
              </div>

              <div className="space-y-4 border-b border-[#D4A359]/20 pb-6 mb-6">
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase block">Selected Cut / Protein</span>
                  <p className="font-serif text-lg text-white font-semibold">{customProtein}</p>
                </div>

                <div>
                  <span className="text-[11px] text-neutral-400 uppercase block">Heat Profile</span>
                  <p className="font-serif text-base text-[#E2B767] flex items-center">
                    <Flame className="w-4 h-4 mr-1 text-[#D4A359]" />
                    {customSpice}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] text-neutral-400 uppercase block">Artisanal Pairing</span>
                  <p className="font-serif text-base text-white">{customPairing}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs text-neutral-300">
                  <span>Preparation Method:</span>
                  <span className="text-[#D4A359] font-medium">Clay Tandoor &amp; Copper Handi</span>
                </div>
                <div className="flex justify-between text-xs text-neutral-300">
                  <span>Serving Style:</span>
                  <span className="text-white">Hot Table Sizzle</span>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#contact"
                  className="w-full bg-[#D4A359] hover:bg-[#E2B767] text-[#0D0B0A] font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve This Experience</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CHAAT & TANDOOR HIGHLIGHT SPOTLIGHTS */}
      <section className="py-16 bg-[#181412] border-y border-[#D4A359]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Spotlight 1 */}
            <div className="bg-[#0D0B0A] border border-[#D4A359]/30 rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4A359]/10 rounded-bl-full pointer-events-none"></div>
              <div className="w-12 h-12 rounded-xl bg-[#241C16] border border-[#D4A359]/40 flex items-center justify-center text-[#E2B767] mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-[10px] text-[#D4A359] uppercase tracking-widest font-bold">Signature Atelier</span>
              <h3 className="font-serif text-xl text-white font-semibold mt-1 mb-2">Burrata Fusion Chaat</h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                Creamy imported Italian burrata paired with crisp spiced chaat wafers, tamarind glaze, and micro-herbs. A modern masterpiece.
              </p>
              <span className="text-[#E2B767] font-bold text-sm">$20.00</span>
            </div>

            {/* Spotlight 2 */}
            <div className="bg-[#0D0B0A] border border-[#D4A359]/30 rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4A359]/10 rounded-bl-full pointer-events-none"></div>
              <div className="w-12 h-12 rounded-xl bg-[#241C16] border border-[#D4A359]/40 flex items-center justify-center text-[#E2B767] mb-4">
                <Flame className="w-6 h-6" />
              </div>
              <span className="text-[10px] text-[#D4A359] uppercase tracking-widest font-bold">Charcoal Flame</span>
              <h3 className="font-serif text-xl text-white font-semibold mt-1 mb-2">Truffle Paneer Royale</h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                Char-grilled house cottage cheese finished with truffle butter, shaved parmesan, and aromatic herbs.
              </p>
              <span className="text-[#E2B767] font-bold text-sm">$24.00</span>
            </div>

            {/* Spotlight 3 */}
            <div className="bg-[#0D0B0A] border border-[#D4A359]/30 rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4A359]/10 rounded-bl-full pointer-events-none"></div>
              <div className="w-12 h-12 rounded-xl bg-[#241C16] border border-[#D4A359]/40 flex items-center justify-center text-[#E2B767] mb-4">
                <Wine className="w-6 h-6" />
              </div>
              <span className="text-[10px] text-[#D4A359] uppercase tracking-widest font-bold">Craft Beverage</span>
              <h3 className="font-serif text-xl text-white font-semibold mt-1 mb-2">Curated Wine &amp; Cocktail Pairing</h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                Handcrafted spice-infused cocktails, single malts, and sommelier-selected wines balanced for Indian aromatics.
              </p>
              <span className="text-[#E2B767] font-bold text-sm">Custom Pairing</span>
            </div>

          </div>
        </div>
      </section>

      {/* COMPREHENSIVE CULINARY CATALOG MENU */}
      <section id="offerings" className="py-20 bg-[#0D0B0A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-[#D4A359] text-xs font-semibold tracking-widest uppercase inline-flex items-center">
              <Utensils className="w-3.5 h-3.5 mr-1" />
              Culinary Menu
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F4EFEA]">
              Explore Our Full Catalog
            </h2>
            <p className="text-neutral-400 text-sm">
              Progressive Indian specialties crafted with signature spices, fresh local ingredients, and charcoal fire artistry.
            </p>
          </div>

          {/* Category Selector Tabs */}
          <div className="flex items-center justify-start sm:justify-center space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.category_id}
                onClick={() => setActiveCategory(cat.category_id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all border ${
                  activeCategory === cat.category_id
                    ? "bg-[#D4A359] text-[#0D0B0A] border-[#D4A359] shadow-lg scale-105"
                    : "bg-[#181412] text-neutral-300 border-neutral-800 hover:border-[#D4A359]/40"
                }`}
              >
                {cat.category_name}
              </button>
            ))}
          </div>

          {/* Active Category Header Info */}
          <div className="bg-[#181412] border-l-4 border-[#D4A359] p-6 rounded-r-xl mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#E2B767] font-semibold">
                {selectedCategoryObj.badge}
              </span>
              <h3 className="font-serif text-2xl text-white font-bold">{selectedCategoryObj.category_name}</h3>
              <p className="text-neutral-400 text-xs mt-1">{selectedCategoryObj.description}</p>
            </div>
            <span className="text-xs text-neutral-400 bg-[#0D0B0A] px-3 py-1.5 rounded-full border border-neutral-800 self-start sm:self-auto">
              {selectedCategoryObj.items.length} Items Available
            </span>
          </div>

          {/* Dish Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedCategoryObj.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#181412] border border-[#D4A359]/20 hover:border-[#D4A359]/60 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-[#D4A359]/5"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-serif text-lg text-white font-semibold group-hover:text-[#E2B767] transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-base font-bold text-[#D4A359] shrink-0 font-mono">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] bg-[#0D0B0A] text-neutral-300 px-2 py-0.5 rounded border border-neutral-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {item.badge && (
                    <span className="text-[10px] bg-[#D4A359]/15 text-[#E2B767] px-2 py-0.5 rounded border border-[#D4A359]/30 font-medium">
                      {item.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* REAL PHOTO GALLERY SHOWCASE */}
      <section id="gallery" className="py-20 bg-[#181412] border-t border-[#D4A359]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-[#D4A359] text-xs font-semibold tracking-widest uppercase">
              Atmosphere &amp; Craft
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F4EFEA]">
              Inside AURA Modern Dining
            </h2>
            <p className="text-neutral-400 text-sm">
              An intimate visual look into our Edison restaurant space, open flame preparations, and artisanal dish presentations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REAL_ASSETS.map((asset, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden border border-[#D4A359]/30 bg-[#0D0B0A] h-72 shadow-lg"
              >
                <img
                  src={asset.url}
                  alt={asset.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[9px] uppercase tracking-widest text-[#D4A359] font-bold block mb-1">
                    {asset.category}
                  </span>
                  <p className="text-xs font-serif text-white font-medium">{asset.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERIFIED GUEST REVIEWS */}
      <section id="reviews" className="py-20 bg-[#0D0B0A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center space-x-1.5 text-[#D4A359] text-xs font-semibold tracking-widest uppercase">
              <Star className="w-4 h-4 fill-[#D4A359]" />
              <span>Verified Google Reviews (4.7★ Rating)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F4EFEA]">
              What Our Guests Experience
            </h2>
            <p className="text-neutral-400 text-sm">
              Real testimonials from diners celebrating family dinners, modern spice cravings, and exceptional service in Edison.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className="bg-[#181412] border border-[#D4A359]/25 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-xl relative"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-[#D4A359]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D4A359]" />
                      ))}
                    </div>
                    {rev.verifiedGoogle && (
                      <span className="text-[10px] bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 px-2 py-0.5 rounded-full flex items-center">
                        <ShieldCheck className="w-3 h-3 mr-1" />
                        Verified Google Diner
                      </span>
                    )}
                  </div>

                  <p className="text-neutral-300 text-xs sm:text-sm italic leading-relaxed">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                  <div>
                    <h5 className="font-serif text-white text-sm font-semibold">{rev.author}</h5>
                    <span className="text-[10px] text-neutral-400">{rev.relativeTime}</span>
                  </div>
                  {rev.dish && (
                    <span className="text-[10px] bg-[#241C16] text-[#E2B767] px-2.5 py-1 rounded-lg border border-[#D4A359]/20">
                      Fav: {rev.dish}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HOURS & LOCATION / TABLE RESERVATIONS */}
      <section id="contact" className="py-20 bg-[#181412] border-t border-[#D4A359]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left Column: Hours & Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[#D4A359] text-xs font-semibold tracking-widest uppercase block mb-1">
                  Visit &amp; Contact Us
                </span>
                <h2 className="text-3xl font-serif text-[#F4EFEA] font-bold">
                  Location &amp; Hours
                </h2>
                <p className="text-neutral-400 text-xs mt-2">
                  Conveniently situated on Route 27 in Edison, New Jersey with parking directly on site.
                </p>
              </div>

              {/* Direct Info */}
              <div className="space-y-3 text-xs">
                <div className="flex items-start space-x-3 bg-[#0D0B0A] border border-[#D4A359]/20 p-3.5 rounded-xl">
                  <MapPin className="w-5 h-5 text-[#D4A359] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">AURA - Modern Indian Dining</span>
                    <span className="text-neutral-400">131 NJ-27, Edison, NJ 08820, USA</span>
                    <a
                      href="https://maps.google.com/?q=131+NJ-27,+Edison,+NJ+08820"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#E2B767] hover:underline flex items-center text-[11px] mt-1"
                    >
                      <Navigation className="w-3 h-3 mr-1" /> Open in Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-[#0D0B0A] border border-[#D4A359]/20 p-3.5 rounded-xl">
                  <Phone className="w-5 h-5 text-[#D4A359] shrink-0" />
                  <div>
                    <span className="text-neutral-400 block text-[10px] uppercase">Reservations &amp; Inquiries</span>
                    <a href="tel:7324941795" className="font-bold text-white hover:text-[#D4A359] text-sm">
                      (732) 494-1795
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Schedule */}
              <div className="bg-[#0D0B0A] border border-[#D4A359]/20 p-5 rounded-xl">
                <h4 className="font-serif text-white font-semibold text-sm mb-3 flex items-center">
                  <Clock className="w-4 h-4 text-[#D4A359] mr-2" /> Weekly Dining Hours
                </h4>
                <div className="space-y-2 text-xs">
                  {OPERATING_SCHEDULE.map((sch, i) => (
                    <div key={i} className="flex justify-between border-b border-neutral-900 pb-1.5 last:border-none">
                      <span className="text-neutral-300 font-medium">{sch.day}</span>
                      <span className="text-[#E2B767]">{sch.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Direct Table Booking Form */}
            <div className="lg:col-span-7 bg-[#0D0B0A] border border-[#D4A359]/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-[#D4A359] font-bold block mb-1">
                  Instant Table Reservation
                </span>
                <h3 className="font-serif text-2xl text-white font-bold">
                  Book Your Dining Table
                </h3>
                <p className="text-neutral-400 text-xs mt-1">
                  Ensure seamless seating for intimate dinners, family gatherings, or corporate celebrations.
                </p>
              </div>

              {resBooked ? (
                <div className="bg-[#241C16] border border-[#D4A359] p-6 rounded-xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#D4A359] mx-auto animate-bounce" />
                  <h4 className="font-serif text-xl text-white font-bold">Reservation Requested!</h4>
                  <p className="text-neutral-300 text-xs">
                    Thank you! Your table request for <strong>{resGuests}</strong> on <strong>{resDate}</strong> at <strong>{resTime}</strong> has been received by AURA.
                  </p>
                  <button
                    onClick={() => setResBooked(false)}
                    className="text-xs text-[#E2B767] underline pt-2"
                  >
                    Book another table
                  </button>
                </div>
              ) : (
                <form onSubmit={handleReservationSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] text-neutral-400 uppercase mb-1">Party Size</label>
                      <select
                        value={resGuests}
                        onChange={(e) => setResGuests(e.target.value)}
                        className="w-full bg-[#181412] border border-[#D4A359]/30 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#D4A359]"
                      >
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>4 Guests</option>
                        <option>6 Guests</option>
                        <option>8+ Guests (VIP)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] text-neutral-400 uppercase mb-1">Date</label>
                      <select
                        value={resDate}
                        onChange={(e) => setResDate(e.target.value)}
                        className="w-full bg-[#181412] border border-[#D4A359]/30 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#D4A359]"
                      >
                        <option>Today</option>
                        <option>Tomorrow</option>
                        <option>This Friday</option>
                        <option>This Saturday</option>
                        <option>This Sunday</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] text-neutral-400 uppercase mb-1">Preferred Time</label>
                      <select
                        value={resTime}
                        onChange={(e) => setResTime(e.target.value)}
                        className="w-full bg-[#181412] border border-[#D4A359]/30 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#D4A359]"
                      >
                        <option>5:30 PM</option>
                        <option>6:30 PM</option>
                        <option>7:00 PM</option>
                        <option>7:30 PM</option>
                        <option>8:30 PM</option>
                        <option>9:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] text-neutral-400 uppercase mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anish Patel"
                        className="w-full bg-[#181412] border border-[#D4A359]/30 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#D4A359]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-neutral-400 uppercase mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="(732) 000-0000"
                        className="w-full bg-[#181412] border border-[#D4A359]/30 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#D4A359]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-neutral-400 uppercase mb-1">Special Requests (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Dietary allergies, birthday celebration, high chair request..."
                      className="w-full bg-[#181412] border border-[#D4A359]/30 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#D4A359]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#D4A359] to-[#B8873D] hover:from-[#E2B767] hover:to-[#D4A359] text-[#0D0B0A] font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-xl flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirm Table Request</span>
                  </button>
                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0D0B0A] border-t border-[#D4A359]/20 py-12 text-xs text-neutral-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#D4A359] flex items-center justify-center text-[#0D0B0A] font-bold font-serif text-sm">
                A
              </div>
              <div>
                <span className="font-serif text-base text-white font-bold block">AURA Modern Indian Dining</span>
                <span className="text-[10px] text-neutral-500">131 NJ-27, Edison, NJ 08820 • (732) 494-1795</span>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-[11px]">
              <a href="#about" className="hover:text-[#D4A359]">Story</a>
              <a href="#offerings" className="hover:text-[#D4A359]">Menu</a>
              <a href="#customizer" className="hover:text-[#D4A359]">Customizer</a>
              <a href="#contact" className="hover:text-[#D4A359]">Reservations</a>
            </div>

            <div className="text-center md:text-right text-[10px] text-neutral-500">
              <p>© {new Date().getFullYear()} AURA Modern Dining. All rights reserved.</p>
              <p className="text-[#D4A359]/60 mt-0.5">Crafted with Apex Digital Performance Engine</p>
            </div>

          </div>
        </div>
      </footer>

      {/* STICKY MOBILE DOCK FOR HIGH CONVERSION */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#181412]/95 backdrop-blur-md border-t border-[#D4A359]/40 p-3 z-50 md:hidden flex items-center justify-between gap-3 shadow-2xl">
        <a
          href="tel:7324941795"
          className="flex-1 bg-[#241C16] border border-[#D4A359]/40 text-[#E2B767] font-bold py-2.5 rounded-xl text-xs flex items-center justify-center space-x-1.5"
        >
          <Phone className="w-4 h-4" />
          <span>Call (732) 494-1795</span>
        </a>
        <a
          href="#contact"
          className="flex-1 bg-gradient-to-r from-[#D4A359] to-[#E2B767] text-[#0D0B0A] font-bold py-2.5 rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-lg"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Table</span>
        </a>
      </div>

    </div>
  );
}