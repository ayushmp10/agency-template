import { ClientStoryBlock, ClientTheme } from "@/types/clientConfig";

export function StorySection({
  story,
  businessName,
  theme,
}: {
  story?: ClientStoryBlock;
  businessName: string;
  theme: ClientTheme;
}) {
  if (!story || !story.headline) {
    return null;
  }

  const isDark = theme.mode === "dark";

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto border-t border-black/5 dark:border-white/10">
      <div
        style={{
          backgroundColor: theme.surfaceColor || (isDark ? "#18181b" : "#ffffff"),
        }}
        className="p-8 sm:p-12 rounded-3xl border border-black/5 dark:border-white/10 shadow-sm relative overflow-hidden"
      >
        <div className="max-w-2xl space-y-6">
          {story.badge && (
            <span
              style={{ color: theme.primaryColor }}
              className="text-xs font-bold uppercase tracking-widest block"
            >
              {story.badge}
            </span>
          )}

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight leading-tight">
            {story.headline}
          </h2>

          <p className="text-base sm:text-lg opacity-80 leading-relaxed font-normal">
            {story.narrative}
          </p>

          {(story.statNumber || story.statLabel) && (
            <div className="pt-4 flex items-baseline gap-3 border-t border-black/5 dark:border-white/10">
              {story.statNumber && (
                <span
                  style={{ color: theme.primaryColor }}
                  className="text-3xl sm:text-4xl font-black font-mono"
                >
                  {story.statNumber}
                </span>
              )}
              {story.statLabel && (
                <span className="text-xs uppercase tracking-wider opacity-70 font-semibold">
                  {story.statLabel}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
