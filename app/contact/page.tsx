import PageHero from "@/components/PageHero";
export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Une porte d’entrée claire pour initier une collaboration, une étude ou un projet stratégique." description="Une page professionnelle pour les demandes d’information, les consultations, les projets de digitalisation, les études et les partenariats." />
      <section className="container-shell py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div><h2 className="text-4xl font-black text-slate-900">Parlons de votre projet.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Une équipe disponible pour échanger sur vos besoins en ingénierie, fourniture, sécurité, équipements, digitalisation, intelligence artificielle, cybersécurité ou études stratégiques.</p></div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)]"><form className="space-y-4"><div><label className="mb-2 block text-sm font-medium text-slate-700">Nom complet</label><input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#0B3C6D]" placeholder="Votre nom" /></div><div><label className="mb-2 block text-sm font-medium text-slate-700">Email</label><input type="email" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#0B3C6D]" placeholder="Votre email" /></div><div><label className="mb-2 block text-sm font-medium text-slate-700">Sujet</label><input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#0B3C6D]" placeholder="Sujet de votre demande" /></div><div><label className="mb-2 block text-sm font-medium text-slate-700">Message</label><textarea rows={5} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#0B3C6D]" placeholder="Décrivez votre besoin" /></div><button type="button" className="w-full rounded-xl bg-[#0B3C6D] px-5 py-3 font-semibold text-white transition hover:bg-[#0a345f]">Envoyer la demande</button></form></div>
        </div>
      </section>
    </>
  );
}
