import { ClientHours, ClientTheme } from "@/types/clientConfig";

export function HoursLocationSection({
  hours,
  address,
  phone,
  businessName,
  theme,
}: {
  hours?: ClientHours;
  address: string;
  phone: string;
  businessName: string;
  theme: ClientTheme;
}) {
  const isDark = theme.mode === "dark";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${businessName} ${address}`
  )}`;

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-t border-black/5 dark:border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Hours Column */}
        <div
          style={{
            backgroundColor: theme.surfaceColor || (isDark ? "#18181b" : "#ffffff"),
          }}
          className="p-8 rounded-3xl border border-black/5 dark:border-white/10 shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold tracking-tight">Hours of Operation</h3>
            {hours?.openNow !== undefined && (
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                  hours.openNow
                    ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                    : "bg-zinc-500/10 text-zinc-400 border border-zinc-500/20"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    hours.openNow ? "bg-emerald-500 animate-pulse" : "bg-zinc-400"
                  }`}
                />
                {hours.openNow ? "Open Today" : "Closed Right Now"}
              </span>
            )}
          </div>

          {hours?.schedule && hours.schedule.length > 0 ? (
            <div className="space-y-2.5 text-sm">
              {hours.schedule.map((item, i) => {
                const parts = item.split(": ");
                const day = parts[0];
                const timeStr = parts.slice(1).join(": ");
                return (
                  <div
                    key={i}
                    className="flex justify-between py-1.5 border-b border-black/5 dark:border-white/5 last:border-0"
                  >
                    <span className="font-medium opacity-80">{day}</span>
                    <span className="font-mono text-xs opacity-90">{timeStr}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm opacity-70">
              Open daily. Call {phone} for holiday hours or special event bookings.
            </p>
          )}
        </div>

        {/* Location & Contact Column */}
        <div
          style={{
            backgroundColor: theme.surfaceColor || (isDark ? "#18181b" : "#ffffff"),
          }}
          className="p-8 rounded-3xl border border-black/5 dark:border-white/10 shadow-sm space-y-6"
        >
          <div>
            <span
              style={{ color: theme.primaryColor }}
              className="text-xs uppercase tracking-widest font-semibold block mb-2"
            >
              Visit & Contact
            </span>
            <h3 className="text-xl font-bold tracking-tight mb-2">
              Find Us in the Neighborhood
            </h3>
            <p className="text-sm opacity-80 leading-relaxed">{address}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: theme.primaryColor,
                color: theme.mode === "dark" ? "#09090b" : "#ffffff",
              }}
              className="px-5 py-3 rounded-xl font-semibold text-xs tracking-wide shadow-sm hover:opacity-90 transition flex items-center gap-2"
            >
              <span>📍</span>
              <span>Open in Google Maps ↗</span>
            </a>

            <a
              href={`tel:${phone}`}
              className="px-5 py-3 rounded-xl border border-black/10 dark:border-white/15 font-semibold text-xs tracking-wide hover:bg-black/5 dark:hover:bg-white/5 transition flex items-center gap-2"
            >
              <span>📞</span>
              <span>Direct: {phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
