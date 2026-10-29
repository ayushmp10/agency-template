import { ClientConfig } from "@/types/clientConfig";

export function ArtisanalLayout({ config }: { config: ClientConfig }) {
  const { theme } = config;
  const isDark = theme.mode === "dark";

  return (
    <div className="font-editorial">
      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-24 md:pt-28 md:pb-32 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-wider uppercase font-sans font-medium mb-6 border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
          <span>🌿</span>
          <span>{config.niche} • {config.neighborhood}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          {config.businessName}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl opacity-80 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          {config.tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 font-sans text-sm">
          <a
            href={`tel:${config.phone}`}
            style={{
              backgroundColor: theme.primaryColor,
              color: isDark ? "#09090b" : "#ffffff",
            }}
            className="px-8 py-4 rounded-full font-semibold shadow-md hover:opacity-90 transition flex items-center gap-2"
          >
            <span>{config.heroCtaText}</span>
            <span>→</span>
          </a>

          {config.secondaryCtaText && (
            <a
              href="#menu"
              className="px-8 py-4 rounded-full border border-black/15 dark:border-white/20 font-medium hover:bg-black/5 dark:hover:bg-white/5 transition"
            >
              {config.secondaryCtaText}
            </a>
          )}
        </div>

        {/* Highlights Bar */}
        {config.highlights && config.highlights.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16 pt-12 border-t border-black/5 dark:border-white/10 font-sans text-left">
            {config.highlights.map((h, i) => (
              <div key={i} className="p-4 rounded-2xl bg-black/5 dark:bg-white/5">
                <div className="text-xs uppercase tracking-wider opacity-60 font-medium mb-1">
                  {h.label}
                </div>
                <div className="text-base font-bold">{h.value}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Menu / Signature Offerings Section */}
      {config.services && config.services.length > 0 && (
        <section id="menu" className="py-20 px-6 max-w-5xl mx-auto border-t border-black/5 dark:border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              style={{ color: theme.primaryColor }}
              className="text-xs uppercase tracking-widest font-sans font-bold block mb-2"
            >
              Handcrafted Menu
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Daily Offerings & Specialties
            </h2>
            <p className="text-sm opacity-70 font-sans">
              Prepared daily with fresh ingredients and authentic neighborhood hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.services.map((svc, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: theme.surfaceColor || (isDark ? "#18181b" : "#ffffff"),
                }}
                className="p-6 rounded-3xl border border-black/5 dark:border-white/10 shadow-sm flex flex-col justify-between transition hover:-translate-y-1 duration-200"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold">{svc.name}</h3>
                    {svc.price && (
                      <span
                        style={{ color: theme.primaryColor }}
                        className="font-sans font-bold text-base whitespace-nowrap"
                      >
                        {svc.price}
                      </span>
                    )}
                  </div>
                  {svc.badge && (
                    <span className="inline-block font-sans text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 mb-3">
                      {svc.badge}
                    </span>
                  )}
                  <p className="text-sm opacity-75 font-sans leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
