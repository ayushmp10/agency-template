import config from "@/data/clientConfig.json";

export default function ClientPreviewPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500 selection:text-zinc-950">
      {/* Top Demo Banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/30 px-4 py-2 text-center text-xs text-amber-300">
        Live Concept Preview custom-built for <strong>{config.businessName}</strong> • Fully Mobile Optimized
      </div>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-widest bg-zinc-900 border border-zinc-800 text-amber-400 mb-4">
          {config.niche} • {config.neighborhood}
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          {config.businessName}
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mb-10">{config.tagline}</p>
        <div className="flex flex-wrap gap-4">
          <a href={`tel:${config.phone}`} className="px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold transition">
            {config.heroCtaText} ({config.phone})
          </a>
          <a href="#services" className="px-6 py-3.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-medium transition">
            Explore Offerings
          </a>
        </div>
      </section>

      {/* Services / Menu Grid */}
      <section id="services" className="max-w-5xl mx-auto px-6 py-16 border-t border-zinc-900">
        <h2 className="text-2xl font-semibold text-white mb-8">Featured Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.services?.map((item, i) => (
            <div key={i} className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                <p className="text-sm text-zinc-400 mb-4">{item.description}</p>
              </div>
              {item.price && <span className="text-amber-400 font-mono text-sm font-semibold">{item.price}</span>}
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-zinc-900">
        <h2 className="text-2xl font-semibold text-white mb-8">What Neighbors Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.reviews?.map((r, i) => (
            <blockquote key={i} className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-6">
              <p className="text-zinc-300 italic mb-4">&ldquo;{r.text}&rdquo;</p>
              <footer className="text-xs text-amber-400 font-medium">— {r.author} (Verified Local Review)</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-zinc-900 text-sm text-zinc-500 flex flex-col md:flex-row justify-between gap-4">
        <div>{config.businessName} • {config.address}</div>
        <div>Call: {config.phone}</div>
      </footer>
    </main>
  );
}
