import DepartmentGrid from "@/components/DepartmentGrid";
import PageHero from "@/components/PageHero";
export default function DepartmentsPage() {
  return (
    <>
      <PageHero eyebrow="Départements" title="Des expertises organisées autour des besoins critiques des institutions, des infrastructures et des marchés stratégiques." description="Une lecture claire de chaque pôle d’intervention, enrichie par des cas d’usage, des références concrètes et une logique d’impact opérationnel." />
      <section className="container-shell py-20"><DepartmentGrid /></section>
    </>
  );
}
