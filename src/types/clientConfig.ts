export interface ClientTheme {
  mode: "light" | "dark";
  primaryColor: string;
  accentColor: string;
  bgColor: string;
  surfaceColor: string;
  textColor: string;
  mutedColor?: string;
  borderColor?: string;
  fontPairing: "serif" | "sans";
}

export interface ClientService {
  name: string;
  description: string;
  price?: string;
  category?: string;
  badge?: string;
}

export interface ClientReview {
  author: string;
  text: string;
  rating?: number;
  relativeTime?: string;
  verifiedGoogle?: boolean;
}

export interface ClientPhoto {
  url: string;
  caption?: string;
}

export interface ClientHours {
  openNow?: boolean;
  currentStatus?: string;
  schedule?: string[];
}

export interface ClientHighlight {
  label: string;
  value: string;
}

export interface BeforeAfterConfig {
  hasOldSite: boolean;
  oldWebsiteUrl?: string;
  oldScreenshotUrl?: string;
  auditNotes?: string[];
}

export interface ClientConfig {
  businessName: string;
  niche: string;
  archetype: "warm-artisanal" | "bold-trades" | "clean-modern";
  tagline: string;
  neighborhood: string;
  phone: string;
  address: string;
  rating: number;
  reviewCount: number;
  priceLevel?: string;
  heroCtaText: string;
  secondaryCtaText?: string;
  theme: ClientTheme;
  beforeAfter?: BeforeAfterConfig;
  highlights?: ClientHighlight[];
  photos?: ClientPhoto[];
  services?: ClientService[];
  reviews?: ClientReview[];
  hours?: ClientHours;
}
