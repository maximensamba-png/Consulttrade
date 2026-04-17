import Image from "next/image";

type Props = { light?: boolean; large?: boolean };

export default function Logo({ light = false, large = false }: Props) {
  return (
    <div className="flex items-center">
      <Image
        src="/assets/logo.png"
        alt="Consult Trade"
        width={800}
        height={320}
        priority
        className={`${large ? "h-20 md:h-28" : "h-14 md:h-16"} w-auto object-contain drop-shadow-[0_10px_30px_rgba(15,23,42,0.18)] ${light ? "brightness-110 contrast-105" : ""}`}
      />
    </div>
  );
}
