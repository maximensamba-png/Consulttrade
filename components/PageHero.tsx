type Props = { eyebrow: string; title: string; description: string };
export default function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_18%),radial-gradient(circle_at_bottom_left,rgba(201,162,39,0.20),transparent_24%)]" />
      <div className="relative container-shell py-16 md:py-20">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur">{eyebrow}</div>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">{description}</p>
        </div>
      </div>
    </section>
  );
}
