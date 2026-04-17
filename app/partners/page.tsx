import PageHero from "@/components/PageHero";
import { partners } from "@/components/site-data";

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partenaires"
        title="Un réseau de collaboration au service de projets ambitieux, multisectoriels et exigeants."
        description="Une page qui valorise la crédibilité, l’ouverture internationale et la capacité de CONSULT-TRADE à fédérer des partenaires de référence autour de projets structurants."
      />

      <section className="container-shell py-20">
        <div className="mb-10 max-w-4xl">
          <p className="text-lg leading-8 text-slate-600">
            La force de CONSULT-TRADE réside aussi dans sa capacité à travailler avec
            des partenaires de référence. Ces collaborations renforcent la crédibilité
            de l’entreprise, élargissent son champ d’action et lui permettent de
            répondre à des projets nécessitant à la fois expertise locale, capacité de
            déploiement et connexions internationales.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
            >
              <div className="text-lg font-semibold text-slate-900">
                {partner.name}
              </div>

              <div className="mt-2 text-sm leading-6 text-slate-500">
                {partner.desc}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}