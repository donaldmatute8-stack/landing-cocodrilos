"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

const images = [
  { src: "/images/croc1.jpg", alt: "Cocodrilo en hábitat natural", label: "Vida Silvestre" },
  { src: "/images/croc2.jpg", alt: "Manglar y humedales", label: "Ecosistema" },
  { src: "/images/croc3.jpg", alt: "Conservación", label: "Protección" },
  { src: "/images/croc4.jpg", alt: "Fauna", label: "Diversidad" },
  { src: "/images/croc5.jpg", alt: "Hábitat", label: "Preservación" },
  { src: "/images/croc6.jpg", alt: "Naturaleza", label: "Restauración" },
  { src: "/images/croc7.jpg", alt: "Ecosistema", label: "Coexistencia" },
  { src: "/images/croc8.jpg", alt: "Biodiversidad", label: "Futuro" },
];

export function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl border border-emerald-500/20">
      {/* Background Cinematic Image (Ken Burns transition) */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current].src}
          alt={images[current].alt}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1.02 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />
      </AnimatePresence>

      {/* Solid deep gradient overlays (absolutely NO glassmorphism) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020504] via-[#020504]/20 to-[#020504]/50 pointer-events-none" />

      {/* Caption overlay in the bottom left */}
      <div className="absolute bottom-8 left-8 right-8 z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          key={`caption-${current}`}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-1.5"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 font-mono">
              CAPA: {images[current].label}
            </span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
            {images[current].alt}
          </h4>
        </motion.div>

        {/* Indicator badges */}
        <div className="flex items-center gap-2 font-mono text-[10px] text-stone-400 bg-[#030605] border border-emerald-500/10 px-3.5 py-2 rounded-lg pointer-events-auto">
          <Eye className="w-3.5 h-3.5 text-emerald-400" />
          <span>FOTO 0{current + 1} / 0{images.length}</span>
        </div>
      </div>

      {/* Solid Dark Controls (NO glassmorphism) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-6 right-6 flex justify-between z-10 pointer-events-none">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={prev}
          className="w-12 h-12 rounded-xl bg-[#030605] border border-emerald-500/20 flex items-center justify-center hover:bg-[#07130f] hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 transition-all pointer-events-auto shadow-[0_4px_12px_rgba(4,13,10,0.5)]"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={next}
          className="w-12 h-12 rounded-xl bg-[#030605] border border-emerald-500/20 flex items-center justify-center hover:bg-[#07130f] hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 transition-all pointer-events-auto shadow-[0_4px_12px_rgba(4,13,10,0.5)]"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Thumbnail Progress dots */}
      <div className="absolute bottom-28 left-8 flex gap-2 z-10 pointer-events-auto">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === current ? "bg-emerald-400 w-8" : "bg-stone-600 hover:bg-stone-500 w-2"
            }`}
            aria-label={`Ir a foto ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
