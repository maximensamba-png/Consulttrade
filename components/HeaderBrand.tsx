export default function HeaderBrand() {
  return (
    <div className="flex items-center gap-3">
      <img src="/assets/logo.png" alt="Consult-Trade" className="h-14 w-auto object-contain drop-shadow-[0_10px_30px_rgba(15,23,42,0.18)] md:h-16" />
      <div>
        <div className="text-lg font-extrabold tracking-[0.14em] text-[#0B3C6D]">CONSULT-TRADE</div>
        <div className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Engineering • Solutions • Innovation</div>
      </div>
    </div>
  );
}
