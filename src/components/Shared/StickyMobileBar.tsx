import { ClientTheme } from "@/types/clientConfig";

export function StickyMobileBar({
  phone,
  ctaText,
  theme,
}: {
  phone: string;
  ctaText: string;
  theme: ClientTheme;
}) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-800 p-3 flex gap-3 shadow-2xl">
      <a
        href={`tel:${phone}`}
        className="flex-1 py-3 px-4 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition active:scale-95"
      >
        <span>📞</span>
        <span>Call Now</span>
      </a>

      <a
        href={`tel:${phone}`}
        style={{
          backgroundColor: theme.primaryColor || "#f59e0b",
          color: theme.mode === "dark" ? "#09090b" : "#ffffff",
        }}
        className="flex-[1.5] py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition active:scale-95"
      >
        <span>⚡</span>
        <span className="truncate">{ctaText || "Get in Touch"}</span>
      </a>
    </div>
  );
}
