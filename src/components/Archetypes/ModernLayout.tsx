import { ClientConfig } from "@/types/clientConfig";

export function ModernLayout({ config }: { config: ClientConfig }) {
  const { theme } = config;
  const isDark = theme.mode === "dark";

  return (
    <div className="font-modern">
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-24 md:pt-32 md:pb-36 max-w-5xl mx-auto">
        <div className="flex flex-col items-start space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-widest uppercase bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: theme.primaryColor }}
            />
            <span>{config.niche} • {config.neighborhood}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight max-w-4xl">
            <span className="font-bold">{config.businessName}</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl opacity-75 max-w-2xl font-light leading-relaxed">
            {config.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={`tel:${config.phone}`}
              style={{
                backgroundColor: theme.primaryColor,
                color: isDark ? "#09090b" : "#ffffff",
              }}
              className="px-8 py-4 rounded-xl font-semibold text-sm shadow-md hover:opacity-90 transition flex items-center gap-2"
            >
              <span>{config.heroCtaText}</span>
              <span>↗</span>
            </a>

            {config.secondaryCtaText && (
              <a
                href="#offerings"
                className="px-8 py-4 rounded-xl border border-black/15 dark:border-white/20 font-medium text-sm hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                {config.secondaryCtaText}
              </a>
            )}
          </div>
        </div>

        {/* Highlights Row */}
        {config.highlights && config.highlights.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-16 mt-16 border-t border-black/5 dark:border-white/10">
            {config.highlights.map((h, i) => (
              <div key={i} className="space-y-1">
                <div className="text-xs uppercase tracking-wider opacity-50 font-medium">
                  {h.label}
                </div>
                <div className="text-base sm:text-lg font-semibold">{h.value}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Services Section */}
      {config.services && config.services.length > 0 && (
        <section id="offerings" className="py-20 px-6 max-w-5xl mx-auto border-t border-black/5 dark:border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span
                style={{ color: theme.primaryColor }}
                className="text-xs uppercase tracking-widest font-semibold block mb-2"
              >
                Curated Offerings
              </span>
              <h2 className="text-3xl font-bold tracking-tight">Services & Experiences</h2>
            </div>
            <p className="text-xs opacity-60 max-w-xs">
              Every detail engineered for an exceptional client outcome.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.services.map((svc, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: theme.surfaceColor || (isDark ? "#18181b" : "#ffffff"),
                }}
                className="p-8 rounded-3xl border border-black/5 dark:border-white/10 flex flex-col justify-between hover:border-black/20 dark:hover:border-white/20 transition duration-300"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold">{svc.name}</h3>
                    {svc.price && (
                      <span
                        style={{ color: theme.primaryColor }}
                        className="font-medium text-sm whitespace-nowrap"
                      >
                        {svc.price}
                      </span>
                    )}
                  </div>
                  {svc.badge && (
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 mb-3">
                      {svc.badge}
                    </span>
                  )}
                  <p className="text-xs opacity-70 leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                <a
                  href={`tel:${config.phone}`}
                  style={{ color: theme.primaryColor }}
                  className="text-xs font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Book / Inquire ↗
                </a>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
