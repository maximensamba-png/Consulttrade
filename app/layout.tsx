import type { Metadata } from "next";
import "./globals.css";;
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Consult-Trade",
  description: "Consult-Trade, entreprise multisectorielle basée à Brazzaville : BTP, médical, sécurité, ingénierie, exploitation fluviale, digitalisation, intelligence artificielle et cybersécurité.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body className="min-h-screen bg-white text-slate-800"><SiteHeader />{children}<SiteFooter /></body></html>;
}
