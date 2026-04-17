import Logo from "@/components/Logo";
import { footerLinks } from "@/components/site-data";

export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/10">
      <div className="container-shell py-14">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="mb-5 inline-flex rounded-[24px] border border-white/10 bg-white/5 px-4 py-3 shadow-lg backdrop-blur-sm">
              <Logo light />
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-300">
              Entreprise multisectorielle spécialisée dans le BTP, le négoce, la représentation, la distribution de dispositifs médicaux, l'ingénierie, l'exploitation fluviale, les nouvelles technologies, la digitalisation, l’intelligence artificielle et la cybersécurité.
            </p>
          </div>
          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/55">Entreprise</div>
            <div className="space-y-3 text-sm text-slate-300">
              {footerLinks.entreprise.map((link) => <div key={link}>{link}</div>)}
            </div>
          </div>
          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/55">Expertises</div>
            <div className="space-y-3 text-sm text-slate-300">
              {footerLinks.expertises.map((link) => <div key={link}>{link}</div>)}
            </div>
          </div>
          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/55">Coordonnées</div>
            <div className="space-y-3 text-sm text-slate-300">
              <div>+242 05 615 34 99</div>
              <div>ctbzv2005@gmail.com</div>
              <div>Brazzaville, République du Congo</div>
              <div className="pt-2 text-white/55">RCCM • NIU • Présentation société disponible sur demande</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} CONSULT-TRADE — Tous droits réservés.</div>
          <div className="flex flex-wrap gap-4">
            {footerLinks.institutionnel.map((link) => <span key={link}>{link}</span>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
