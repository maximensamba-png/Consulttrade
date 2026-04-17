import { departments } from "@/components/site-data";
import Image from "next/image";
export default function DepartmentGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {departments.map((dept) => (
        <div key={dept.title} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-xl">
          <div className="relative h-56 overflow-hidden">
            <Image
  src={dept.image}
  alt={dept.title}
  fill
  className="object-cover"
  unoptimized
/>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white"><div className="mb-2 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] backdrop-blur">Consult-Trade</div><h3 className="text-xl font-bold">{dept.title}</h3></div>
          </div>
          <div className="p-6">
            <p className="text-sm leading-7 text-slate-600">{dept.desc}</p>
            <p className="mt-4 text-sm leading-7 text-slate-500">Chaque département traduit une volonté claire : proposer des solutions sérieuses, crédibles et applicables aux réalités du terrain, en tenant compte des contraintes opérationnelles, institutionnelles et budgétaires.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">{dept.items.map((item) => <li key={item} className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 rounded-full bg-[#0B3C6D]" /><span>{item}</span></li>)}</ul>
          </div>
        </div>
      ))}
    </div>
  );
}
