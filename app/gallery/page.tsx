import PageHeader from "@/components/PageHeader";

const categories = [
  "Annual Function", "Sports Day", "Science Fair", "Independence Day",
  "Republic Day", "Art & Craft", "Dance", "Campus Tour"
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader eyebrow="Gallery" title="Life at School" />
      <div className="container-custom py-16">
        {categories.map((cat) => (
          <div key={cat} className="mb-14">
            <h2 className="font-display text-2xl text-navy font-semibold mb-5">{cat}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="aspect-square rounded-xl bg-mist flex items-center justify-center text-navy-ink/40 text-xs text-center px-3"
                >
                  [ {cat} photo {n} ]
                </div>
              ))}
            </div>
          </div>
        ))}
        <p className="text-navy-ink/50 text-sm">
          TODO: Replace placeholders with real photos/videos once the school shares them. Consider a lightbox component for full-screen viewing.
        </p>
      </div>
    </>
  );
}
