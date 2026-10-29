import rawConfig from "@/data/clientConfig.json";
import { ClientConfig } from "@/types/clientConfig";
import { HeaderBanner } from "@/components/Shared/HeaderBanner";
import { PhotoGallery } from "@/components/Shared/PhotoGallery";
import { ReviewsSection } from "@/components/Shared/ReviewsSection";
import { HoursLocationSection } from "@/components/Shared/HoursLocationSection";
import { StickyMobileBar } from "@/components/Shared/StickyMobileBar";
import { ArtisanalLayout } from "@/components/Archetypes/ArtisanalLayout";
import { TradesLayout } from "@/components/Archetypes/TradesLayout";
import { ModernLayout } from "@/components/Archetypes/ModernLayout";

const config: ClientConfig = {
  businessName: rawConfig.businessName || "Local Business",
  niche: rawConfig.niche || "Professional Services",
  archetype: (rawConfig.archetype as any) || "clean-modern",
  tagline: rawConfig.tagline || "Trusted Local Craftsmanship & Dedicated Service",
  neighborhood: rawConfig.neighborhood || "Hudson County, NJ",
  phone: rawConfig.phone || "(201) 555-0100",
  address: rawConfig.address || "Local Downtown District",
  rating: rawConfig.rating ?? 4.9,
  reviewCount: rawConfig.reviewCount ?? 45,
  heroCtaText: rawConfig.heroCtaText || "Get in Touch",
  secondaryCtaText: (rawConfig as any).secondaryCtaText || "Explore Offerings",
  theme: {
    mode: (rawConfig.theme?.mode === "light" ? "light" : "dark") as "light" | "dark",
    primaryColor: rawConfig.theme?.primaryColor || (rawConfig as any).primaryHex || "#f59e0b",
    accentColor: rawConfig.theme?.accentColor || "#fbbf24",
    bgColor: rawConfig.theme?.bgColor || "#09090b",
    surfaceColor: rawConfig.theme?.surfaceColor || "#18181b",
    textColor: rawConfig.theme?.textColor || "#f4f4f5",
    fontPairing: (rawConfig.theme?.fontPairing === "serif" ? "serif" : "sans") as "serif" | "sans",
  },
  beforeAfter: rawConfig.beforeAfter || {
    hasOldSite: false,
    oldScreenshotUrl: "NONE",
  },
  highlights: rawConfig.highlights || [],
  photos: rawConfig.photos || [],
  services: rawConfig.services || [],
  reviews: (rawConfig.reviews as any) || [],
  hours: rawConfig.hours,
};

export default function ClientPreviewPage() {
  const { theme, archetype } = config;
  const isDark = theme.mode === "dark";

  return (
    <div
      style={{
        backgroundColor: theme.bgColor,
        color: theme.textColor,
      }}
      className={`min-h-screen flex flex-col transition-colors duration-300 pb-20 md:pb-0 ${
        isDark ? "dark" : "light"
      }`}
    >
      {/* Top Demo & Before/After Comparison Bar */}
      <HeaderBanner config={config} />

      {/* Main Archetype Layout */}
      <main className="flex-1">
        {archetype === "warm-artisanal" ? (
          <ArtisanalLayout config={config} />
        ) : archetype === "bold-trades" ? (
          <TradesLayout config={config} />
        ) : (
          <ModernLayout config={config} />
        )}

        {/* Real Storefront & Work Photo Gallery from Google Places */}
        {config.photos && config.photos.length > 0 && (
          <PhotoGallery
            photos={config.photos}
            businessName={config.businessName}
            theme={theme}
          />
        )}

        {/* Real Customer Reputation & Verified Reviews */}
        <ReviewsSection
          reviews={config.reviews}
          rating={config.rating}
          reviewCount={config.reviewCount}
          businessName={config.businessName}
          theme={theme}
        />

        {/* Live Operating Hours & Neighborhood Map */}
        <HoursLocationSection
          hours={config.hours}
          address={config.address}
          phone={config.phone}
          businessName={config.businessName}
          theme={theme}
        />
      </main>

      {/* Subtle Agency Footer */}
      <footer className="border-t border-black/5 dark:border-white/10 py-12 px-6 max-w-6xl mx-auto w-full text-xs opacity-60 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          © {new Date().getFullYear()} {config.businessName}. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
          <span>Digital uplift staged by</span>
          <span className="font-semibold text-amber-500">Argon Engine</span>
        </div>
      </footer>

      {/* Sticky Mobile Direct Call / Action Bar */}
      <StickyMobileBar
        phone={config.phone}
        ctaText={config.heroCtaText}
        theme={theme}
      />
    </div>
  );
}
