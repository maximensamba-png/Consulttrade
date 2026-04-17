"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { slides } from "@/components/site-data";

export default function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setActiveSlide((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);
  const current = slides[activeSlide];
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
      <div className="container-shell py-8 md:py-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_80px_rgba(2,6,23,0.45)]">
          {slides.map((slide, index) => (
            <div key={slide.title} className={`absolute inset-0 transition-all duration-700 ${activeSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
              <img src={slide.image} alt={slide.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#071625]/95 via-[#0B3C6D]/78 to-slate-950/88" />
            </div>
          ))}
          <div className="relative grid min-h-[680px] gap-10 p-8 md:grid-cols-[1.08fr_0.92fr] md:items-center md:p-12">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-white/90 backdrop-blur">{current.badge}</div>
              <div className="mb-6 inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-1 text-sm uppercase tracking-[0.24em] text-white/80 backdrop-blur-sm">CONSULT-TRADE</div>
              <h1 className="max-w-2xl text-4xl font-black leading-tight md:text-6xl">{current.title}</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">{current.subtitle}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="rounded-2xl bg-white px-6 py-3 font-semibold text-[#0B3C6D] shadow-lg transition hover:-translate-y-0.5">{current.cta1}</Link>
                <Link href="/departments" className="rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">{current.cta2}</Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  {current.stats.map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-white/8 bg-white/10 p-5">
                      <div className="text-3xl font-black text-white">{value}</div>
                      <div className="mt-1 text-sm text-slate-200">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
