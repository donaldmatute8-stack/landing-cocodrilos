"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current].src}
          alt={images[current].alt}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30" />

      {/* Label */}
      <motion.div
        className="absolute bottom-6 left-6 right-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        key={`label-${current}`}
      >
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-sm font-medium text-teal-300">{images[current].label}</span>
        </div>
      </motion.div>

      {/* Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prev}
          className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-teal-500/80 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={next}
          className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-teal-500/80 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </motion.button>
      </div>

      {/* Thumbnail bar */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === current ? "bg-teal-400 w-6" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
