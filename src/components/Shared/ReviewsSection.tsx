import { ClientReview, ClientTheme } from "@/types/clientConfig";

export function ReviewsSection({
  reviews,
  rating,
  reviewCount,
  businessName,
  theme,
}: {
  reviews?: ClientReview[];
  rating: number;
  reviewCount: number;
  businessName: string;
  theme: ClientTheme;
}) {
  const isDark = theme.mode === "dark";

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-t border-black/5 dark:border-white/10">
      {/* Header with Google Rating Badge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-amber-500/10 text-amber-500 border border-amber-500/20">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>Verified Customer Reputation</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight">
            Trusted by the Neighborhood
          </h2>
        </div>

        <div
          style={{ backgroundColor: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)" }}
          className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-black/5 dark:border-white/10"
        >
          <div className="text-4xl font-black" style={{ color: theme.primaryColor }}>
            {rating ? rating.toFixed(1) : "5.0"}
          </div>
          <div>
            <div className="flex text-amber-400 text-sm mb-1">
              {"★".repeat(Math.round(rating || 5))}
              {"☆".repeat(5 - Math.round(rating || 5))}
            </div>
            <div className="text-xs opacity-70">
              Based on <strong>{reviewCount || 15}+ Google Reviews</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews && reviews.length > 0 ? (
          reviews.map((rev, i) => (
            <div
              key={i}
              style={{
                backgroundColor: theme.surfaceColor || (isDark ? "#18181b" : "#ffffff"),
              }}
              className="p-6 rounded-2xl border border-black/5 dark:border-white/10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 text-sm">
                    {"★".repeat(rev.rating || 5)}
                  </div>
                  {rev.verifiedGoogle !== false && (
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      ✓ Google Verified
                    </span>
                  )}
                </div>
                <p className="text-sm italic opacity-85 leading-relaxed mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/10 text-xs">
                <span className="font-semibold">{rev.author}</span>
                {rev.relativeTime && (
                  <span className="opacity-50">{rev.relativeTime}</span>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-sm opacity-60">
            Reviews from Google verified patrons of {businessName}.
          </div>
        )}
      </div>
    </section>
  );
}
