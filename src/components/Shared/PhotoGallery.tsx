import { ClientPhoto, ClientTheme } from "@/types/clientConfig";

export function PhotoGallery({
  photos,
  businessName,
  theme,
}: {
  photos?: ClientPhoto[];
  businessName: string;
  theme: ClientTheme;
}) {
  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span
            style={{ color: theme.primaryColor }}
            className="text-xs uppercase tracking-widest font-semibold block mb-2"
          >
            Storefront & Craft
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Inside {businessName}
          </h2>
        </div>
        <p className="text-sm opacity-70 max-w-md">
          Authentic moments, daily craft, and service captured on location.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, i) => (
          <div
            key={i}
            className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
              i === 0 ? "sm:col-span-2 sm:row-span-2 aspect-[4/3]" : "aspect-square"
            }`}
          >
            <img
              src={photo.url}
              alt={photo.caption || `${businessName} photo ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-white text-xs font-medium drop-shadow-sm">
                {photo.caption || businessName}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
