import PageHero from "@/components/PageHero";
export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="À propos" title="Une structure expérimentée, crédible et tournée vers l’exécution de projets à fort impact." description="Une présentation claire de l'histoire, du positionnement, des références et de la proposition de valeur de CONSULT-TRADE au service des projets publics et privés." />
      <section className="container-shell py-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <h2 className="text-4xl font-black text-slate-900">Une entreprise bâtie sur la confiance, l’exécution et la capacité à répondre à des enjeux complexes.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">Créée en 2002 à Brazzaville, CONSULT-TRADE s’est progressivement imposée comme une société multisectorielle capable d’intervenir là où les projets exigent à la fois de la rigueur, de la coordination, de la fourniture spécialisée et une exécution fiable.</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">Son histoire est celle d’une entreprise qui a su se rendre utile sur des chantiers, des projets sanitaires, des dispositifs sécurisés, des missions d’études et des opérations à caractère stratégique.</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">Au-delà de la diversité de ses départements, CONSULT-TRADE poursuit une logique claire : aider les institutions et les organisations à transformer leurs besoins en réalisations concrètes, durables et structurées.</p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80" alt="Réunion stratégique d'équipe" className="h-72 w-full object-cover" />
            <div className="p-8"><div className="text-xl font-extrabold tracking-[0.14em] text-[#0B3C6D]">CONSULT-TRADE</div><div className="mt-6 space-y-4 text-sm leading-7 text-slate-600"><p>CONSULT-TRADE agit comme un partenaire d’exécution capable d’intervenir sur toute la chaîne de valeur.</p><p>Cette approche a permis à l’entreprise de se positionner sur des réalisations concrètes dans le BTP, la santé, la sécurité documentaire, l’exploitation fluviale, la connectivité et les nouvelles technologies.</p></div></div>
          </div>
        </div>
      </section>
    </>
  );
}
