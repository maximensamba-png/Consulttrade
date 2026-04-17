import PageHero from "@/components/PageHero";
import { milestones } from "@/components/site-data";
export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Réalisations" title="Des réalisations concrètes qui témoignent d’une capacité réelle d’exécution et de confiance institutionnelle." description="Une page dédiée aux références majeures de CONSULT-TRADE, à ses missions structurantes et à son expérience sur des projets sensibles." />
      <section className="container-shell py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {milestones.map((item, idx) => <div key={item.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_20px_45px_rgba(15,23,42,0.08)]"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0B3C6D] text-lg font-black text-white">{idx+1}</div><div><div className="font-semibold text-slate-900">{item.title}</div><div className="mt-1 text-sm leading-6 text-slate-600">{item.text}</div></div></div>)}
        </div>
      </section>
    </>
  );
}
