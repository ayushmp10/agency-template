import { ClientConfig } from "@/types/clientConfig";

export function TradesLayout({ config }: { config: ClientConfig }) {
  const { theme } = config;
  const isDark = theme.mode === "dark";

  return (
    <div className="font-modern">
      {/* Trust & Dispatch Top Ribbon */}
      <div
        style={{ backgroundColor: theme.primaryColor }}
        className="py-2 px-4 text-center text-xs font-bold uppercase tracking-wider text-black"
      >
        ⚡ Fast Local Response Across {config.neighborhood} • Licensed & Insured
      </div>

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available Now • Local Dispatch</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-none">
              {config.businessName}
            </h1>

            <p className="text-lg sm:text-xl opacity-80 max-w-xl font-normal leading-relaxed">
              {config.tagline}
            </p>

            {/* Direct Action Box */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={`tel:${config.phone}`}
                style={{
                  backgroundColor: theme.primaryColor,
                  color: isDark ? "#09090b" : "#ffffff",
                }}
                className="px-8 py-4 rounded-xl font-black text-sm tracking-wide text-center shadow-lg hover:brightness-110 transition flex items-center justify-center gap-3"
              >
                <span>📞</span>
                <span>Call Now: {config.phone}</span>
              </a>

              <a
                href="#services"
                className="px-6 py-4 rounded-xl border border-white/20 font-bold text-sm text-center hover:bg-white/10 transition"
              >
                View Services & Pricing
              </a>
            </div>

            {/* Trust Highlights */}
            {config.highlights && config.highlights.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10">
                {config.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <div>
                      <span className="opacity-60 block text-[10px] uppercase font-semibold">
                        {h.label}
                      </span>
                      <span className="font-bold">{h.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Quote / Emergency Dispatch Card */}
          <div className="lg:col-span-5">
            <div
              style={{
                backgroundColor: theme.surfaceColor || (isDark ? "#18181b" : "#ffffff"),
              }}
              className="p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />

              <div className="relative space-y-5">
                <span className="text-xs uppercase tracking-widest font-bold opacity-60">
                  Priority Service
                </span>
                <h3 className="text-2xl font-black tracking-tight">
                  Need Fast Assistance?
                </h3>
                <p className="text-xs opacity-70 leading-relaxed">
                  Connect directly with {config.businessName}&apos;s team in {config.neighborhood}. No waiting, no hidden call-out fees.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-3 rounded-xl bg-black/20 border border-white/5 flex items-center justify-between text-xs">
                    <span className="opacity-70">Direct Phone:</span>
                    <strong className="font-mono">{config.phone}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-black/20 border border-white/5 flex items-center justify-between text-xs">
                    <span className="opacity-70">Service Area:</span>
                    <strong>{config.neighborhood}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-black/20 border border-white/5 flex items-center justify-between text-xs">
                    <span className="opacity-70">Google Rating:</span>
                    <strong className="text-amber-400 font-bold">{config.rating} ★★★★★</strong>
                  </div>
                </div>

                <a
                  href={`tel:${config.phone}`}
                  style={{ backgroundColor: theme.primaryColor }}
                  className="w-full py-4 rounded-xl text-black font-black text-center text-sm block shadow-md hover:brightness-110 transition"
                >
                  ⚡ Direct Dispatch: {config.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      {config.services && config.services.length > 0 && (
        <section id="services" className="py-20 px-6 max-w-6xl mx-auto border-t border-white/10">
          <div className="mb-12">
            <span
              style={{ color: theme.primaryColor }}
              className="text-xs font-black uppercase tracking-widest block mb-2"
            >
              Capabilities & Pricing
            </span>
            <h2 className="text-3xl font-black tracking-tight">
              Professional Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.services.map((svc, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: theme.surfaceColor || (isDark ? "#18181b" : "#ffffff"),
                }}
                className="p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-white/30 transition duration-200"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold">{svc.name}</h3>
                    {svc.price && (
                      <span
                        style={{ color: theme.primaryColor }}
                        className="font-mono text-sm font-bold"
                      >
                        {svc.price}
                      </span>
                    )}
                  </div>
                  {svc.badge && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 mb-3">
                      {svc.badge}
                    </span>
                  )}
                  <p className="text-xs opacity-75 leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                <a
                  href={`tel:${config.phone}`}
                  className="w-full py-2.5 rounded-lg border border-white/20 hover:bg-white/10 text-center text-xs font-bold transition block"
                >
                  Request Service →
                </a>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
