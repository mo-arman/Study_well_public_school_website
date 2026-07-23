export default function PageHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-navy py-16 lg:py-20">
      <div className="container-custom">
        <p className="text-gold font-semibold uppercase tracking-[0.2em] text-xs mb-4">
          {eyebrow}
        </p>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mb-4">
          {title}
        </h1>
        <div className="golden-thread w-24 mb-4" />
        {description && (
          <p className="text-white/70 max-w-2xl leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}
