import Link from "next/link";
import HeaderBrand from "@/components/HeaderBrand";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/departments", label: "Départements" },
  { href: "/projects", label: "Réalisations" },
  { href: "/partners", label: "Partenaires" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="rounded-[22px] border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:shadow-md">
          <HeaderBrand />
        </Link>
        <nav className="hidden gap-3 text-sm font-medium text-slate-600 md:flex">
          {links.map((link) => <Link key={link.href} href={link.href} className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-[#0B3C6D]">{link.label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
