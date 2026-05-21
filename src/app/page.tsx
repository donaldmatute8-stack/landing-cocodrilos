"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Map, TreePine, Shield, Building2, GraduationCap, Landmark, Scale,
  AlertTriangle, ChevronDown, Leaf, Eye, ArrowRight,
  CheckCircle, Droplets, HelpCircle, TrendingUp, Award
} from "lucide-react";
import { ImageCarousel } from "@/components/ImageCarousel";
import { ZoningMapSimulator } from "@/components/ZoningMapSimulator";
import { ProtocolSimulator } from "@/components/ProtocolSimulator";
import { ROICalculator } from "@/components/ROICalculator";

// ========== DATA FOR THE 7 PILLARS ==========
const pillars = [
  { icon: Map, title: "Zonificación Ecológica", desc: "Mapeo de precisión con drones térmicos, GIS y sensores físicos para delimitar zonas rojas (conservación), amarillas (amortiguamiento) y verdes (desarrollo urbano).", color: "#34d399" },
  { icon: TreePine, title: "Corredores Biológicos", desc: "Canales fluviales y lagunas interconectadas mediante pasos de fauna y bio-túneles bajo calles, facilitando el libre movimiento sin cruzar áreas habitadas.", color: "#10b981" },
  { icon: Shield, title: "Reubicación Inteligente", desc: "Monitoreo y clasificación rigurosa por edad y comportamiento. Captura y reubicación únicamente de ejemplares catalogados como de alto riesgo.", color: "#22d3ee" },
  { icon: Building2, title: "Obligaciones Turísticas", desc: "Porcentaje mínimo obligatorio de humedal conservado por cada desarrollo, barreras físicas discretas anti-contacto y compensaciones ecológicas directas.", color: "#fbbf24" },
  { icon: GraduationCap, title: "Educación Pública", desc: "Señalética técnica de advertencia, códigos QR educativos integrados, capacitación obligatoria al personal hotelero y simulacros comunitarios.", color: "#a78bfa" },
  { icon: Landmark, title: "Santuario y Ecoturismo", desc: "Creación de un Centro Integral de Investigación, rescate, incubación científica y ecoturismo altamente controlado en la zona núcleo.", color: "#06b6d4" },
  { icon: Scale, title: "Marco Legal y Auditoría", desc: "Decreto estatal de Área Natural Protegida, registro Ramsar internacional, auditorías semestrales obligatorias y multas severas por rellenos ilegales.", color: "#818cf8" },
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.18], [0, -80]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#030605] text-stone-100 overflow-x-hidden relative grid-bg">
      
      {/* Dynamic Progress Bar at the top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* ======== HERO SECTION: FULLSCREEN HERO WITH MASSIVE EDITORIAL TYPOGRAPHY ======== */}
      <motion.section 
        style={{ opacity: heroOpacity, y: heroY }} 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Fullscreen background photo with dark/green deep solid overlays */}
        <div className="absolute inset-0">
          <img 
            src="/images/croc1.jpg" 
            alt="Cocodrilo en el manglar" 
            className="w-full h-full object-cover scale-105"
          />
          {/* Solid dark green-tinted gradients (NO glassmorphism) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030605]/95 via-[#030605]/65 to-[#030605]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(16,185,129,0.15)_0%,_transparent_75%)]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24">
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#05140f] border border-emerald-500/25 text-emerald-300 text-xs font-bold tracking-[0.25em] uppercase mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              Programa de Coexistencia Ambiental
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15 }}
            className="mt-4 mb-8"
          >
            <span className="block font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-white">
              RECUPERACIÓN
            </span>
            <span className="block font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-gradient mt-3">
              & COEXISTENCIA
            </span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.5 }} 
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg md:text-xl text-stone-400 leading-relaxed font-sans">
              Transformando conflictos entre el desarrollo turístico y la fauna silvestre en modelos de{" "}
              <span className="text-emerald-400 font-semibold">preservación ecológica</span>, legal y económicamente sostenibles.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.8 }} 
            className="mt-14 flex flex-col sm:flex-row gap-5 justify-center"
          >
            <a href="#pilares" className="btn-primary">
              Explorar Solución <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contacto" className="btn-secondary">
              Presentar Propuesta
            </a>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.4 }} 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3.5"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-stone-600 font-mono">Deslizar</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className="w-5 h-5 text-stone-600" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ======== SECTION 1: EDITORIAL METRICS (NÚMEROS GIGANTES Y DISEÑO EDITORIAL) ======== */}
      <section className="relative py-32 bg-[#020504] border-y border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-emerald-500/10">
            {[
              { num: "65%", label: "Pérdida de Humedales", desc: "Reducción histórica del hábitat costero original por rellenos." },
              { num: "3.2m", label: "Ejemplares Monitoreados", desc: "Talla promedio registrada mediante drones FLIR térmicos." },
              { num: "-80%", label: "Reducción de Incidentes", desc: "Tasa de mitigación estimada tras aplicar barreras de exclusión." },
              { num: "100%", label: "Marco Legal Ramsar", desc: "Protección internacional y validación jurídica federal." },
            ].map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="pt-8 sm:pt-0 lg:pl-8 first:pl-0 first:pt-0"
              >
                <span className="block text-6xl md:text-7xl font-black text-gradient font-accent">{s.num}</span>
                <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mt-4 mb-2 font-mono">{s.label}</h4>
                <p className="text-xs text-stone-500 leading-relaxed max-w-xs">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== SECTION 2: EDITORIAL 2-COLUMN PROBLEM (EL PROBLEMA REAL) ======== */}
      <section className="relative py-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Text (Editorial layout) */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 font-mono">
                <Eye className="w-4 h-4" /> Diagnóstico Crítico
              </span>

              <h2 className="font-display text-4xl sm:text-6xl font-black mb-10 leading-[1.05] text-white">
                Los cocodrilos <span className="text-gradient">no invaden</span>: <br />
                son <span className="text-stone-500 font-normal italic">desplazados</span> de su hábitat.
              </h2>

              <div className="space-y-8 text-stone-400 text-base leading-relaxed max-w-xl">
                <p className="pl-6 border-l-2 border-emerald-500/30">
                  El desarrollo turístico rellenó humedales y canales naturales. Los cocodrilos perdieron alimento y refugio, y ahora aparecen en playas, marinas y hoteles.
                </p>
                <p className="pl-6 border-l-2 border-amber-500/30">
                  Esto no es agresión: es desplazamiento ecológico. La solución no es eliminar a la fauna, es rediseñar el desarrollo con base científica.
                </p>
              </div>

              {/* Callout quote - Solid background (NO glassmorphism) */}
              <div className="mt-12 p-8 rounded-2xl bg-[#09140f] border border-emerald-500/20 max-w-xl">
                <p className="text-emerald-300 font-semibold text-lg leading-relaxed italic">
                  &ldquo;No es invasión: es consecuencia del desarrollo sin planificación ambiental.&rdquo;
                </p>
                <span className="block mt-4 text-xs font-mono uppercase tracking-wider text-stone-500">
                  — Comisión Científica de Manejo de Humedales
                </span>
              </div>
            </div>

            {/* Right Column: High Quality Graphic Image with stats (solid overlay) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 1 }} 
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-emerald-500/20 shadow-[0_20px_50px_rgba(2,5,4,0.8)]">
                <img 
                  src="/images/croc2.jpg" 
                  alt="Humedales fragmentados por vialidades" 
                  className="w-full h-[580px] object-cover"
                />
                {/* Dark gradient overlay covering the bottom details */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020504] via-transparent to-transparent pointer-events-none" />
                
                {/* Stats board inside image - Solid panel (NO glassmorphism) */}
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#030605] border border-emerald-500/25">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-stone-500 font-mono">Fraccionamiento</p>
                      <p className="text-2xl font-black text-emerald-400 font-mono">65%</p>
                    </div>
                    <div className="border-x border-stone-800">
                      <p className="text-[10px] uppercase tracking-wider text-stone-500 font-mono">Zonas Rojas</p>
                      <p className="text-2xl font-black text-red-400 font-mono">12</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-stone-500 font-mono">Sello Ramsar</p>
                      <p className="text-2xl font-black text-emerald-400 font-mono">Sitio 32</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ======== SECTION 3: INTERACTIVE ZONING MAP SIMULATOR (ZONIFICACIÓN Y DRONES) ======== */}
      <section className="relative py-40 bg-[#020504] border-y border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 font-mono">
              <Map className="w-4 h-4" /> Cartografía y Monitoreo FLIR
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-black mb-6 text-white leading-tight">
              Zonificación Ecológica <span className="text-gradient">Inteligente</span>
            </h2>
            <p className="text-stone-400 text-base leading-relaxed">
              Explora las capas cartográficas. Detecta cocodrilos con drones térmicos y diseña corredores biológicos para guiar la fauna de forma segura.
            </p>
          </div>

          <ZoningMapSimulator />
        </div>
      </section>

      {/* ======== SECTION 4: THE 7 PILLARS (DISEÑO EDITORIAL CON NÚMEROS GIGANTES) ======== */}
      <section id="pilares" className="relative py-40">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 font-mono">
                <CheckCircle className="w-4 h-4" /> La Solución Técnica
              </span>
              <h2 className="font-display text-4xl sm:text-6xl font-black text-white leading-tight">
                Los <span className="text-gradient">7 Pilares</span> de Coexistencia
              </h2>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <p className="text-stone-400 text-base leading-relaxed max-w-xl">
                Un plan integrado de ingeniería ambiental, control de fauna y derecho ecológico para garantizar la sustentabilidad a largo plazo en zonas turísticas.
              </p>
            </div>
          </div>

          {/* Pillars List - Editorial Timeline style with vertical glowing bar (No grids with borders) */}
          <div className="relative pl-6 sm:pl-12 border-l-2 border-emerald-500/20 max-w-5xl mx-auto space-y-16 py-4">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="relative flex flex-col sm:flex-row gap-6 sm:gap-12"
                >
                  {/* Circle indicator on the timeline */}
                  <div className="absolute -left-[33px] sm:-left-[57px] top-2 w-5 h-5 rounded-full bg-[#030605] border-2 border-emerald-400 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>

                  {/* Giant number */}
                  <div className="flex-shrink-0 select-none">
                    <span className="font-accent text-6xl sm:text-7xl font-black text-stone-800 leading-none">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Body details */}
                  <div>
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#08120e] border border-emerald-500/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-100 font-sans">
                        {p.title}
                      </h3>
                    </div>
                    <p className="text-stone-400 text-sm leading-relaxed max-w-3xl">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ======== SECTION 5: INTERACTIVE PROTOCOL SIMULATOR (ESCENARIOS DE CRISIS) ======== */}
      <section className="relative py-40 bg-[#020504] border-y border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 font-mono">
              <AlertTriangle className="w-4 h-4" /> Simulador de Contingencia
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-black mb-6 text-white leading-tight">
              Resolución de Escenarios <span className="text-gradient-gold">Críticos</span>
            </h2>
            <p className="text-stone-400 text-base leading-relaxed">
              Protocolos de respuesta ante emergencias: avistamientos, infracciones y desmontes ilegales.
            </p>
          </div>

          <ProtocolSimulator />
        </div>
      </section>

      {/* ======== SECTION 6: INTERACTIVE ROI CALCULATOR (BENEFICIOS ECONÓMICOS) ======== */}
      <section className="relative py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 font-mono">
              <TrendingUp className="w-4 h-4" /> Viabilidad e Inversión
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-black mb-6 text-white leading-tight">
              El Valor de la Coexistencia <span className="text-gradient">Ecológica</span>
            </h2>
            <p className="text-stone-400 text-base leading-relaxed">
              La sustentabilidad ambiental incrementa directamente el valor patrimonial inmobiliario. Calcula el retorno verde estimado y el ahorro en sanciones por desmonte ilegal de humedales.
            </p>
          </div>

          <ROICalculator />

          {/* Big Editorial Quote Block (Solid Dark Green Gradient, NO glassmorphism) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="mt-24 p-12 sm:p-20 rounded-3xl bg-gradient-to-br from-[#04120a] via-[#020504] to-[#04120a] border border-emerald-500/20 text-center"
          >
            <Droplets className="w-12 h-12 text-emerald-400/60 mx-auto mb-8 animate-pulse" />
            <blockquote className="font-display text-2xl sm:text-4xl font-bold leading-relaxed mb-8 text-white max-w-4xl mx-auto">
              &ldquo;Proteger el cocodrilo es proteger el manglar. Proteger el manglar es blindar la playa contra la erosión y asegurar la viabilidad del destino turístico a largo plazo.&rdquo;
            </blockquote>
            <div className="w-16 h-0.5 bg-emerald-500/40 mx-auto mb-6" />
            <p className="text-sm text-stone-500 max-w-2xl mx-auto leading-relaxed">
              Los humedales amortiguan tormentas tropicales, filtran sedimentos del agua y regulan el clima costero. Su conservación previene pérdidas millonarias en infraestructura hotelera por inundaciones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======== SECTION 7: FAUNA GALLERY & SLIDER ======== */}
      <section id="galeria" className="relative py-32 bg-[#020504] border-y border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 font-mono">
              <Eye className="w-4 h-4" /> Registro Visual
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-white leading-tight">
              Fauna en su <span className="text-gradient">Hábitat</span> Protegido
            </h2>
          </div>

          {/* Interactive Cinematic Slider */}
          <div className="h-[460px] md:h-[600px] mb-12">
            <ImageCarousel />
          </div>

          {/* 4 Small Grid Images showing documentation (Solid hover overlay effect) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: '/images/croc3.jpg', desc: 'Rastreo FLIR Térmico' },
              { src: '/images/croc4.jpg', desc: 'Nidos en Manglar Rojo' },
              { src: '/images/croc5.jpg', desc: 'Mapeo Topográfico GIS' },
              { src: '/images/croc6.jpg', desc: 'Monitoreo de Juveniles' }
            ].map((img, i) => (
              <motion.div 
                key={img.src} 
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: i * 0.08 }} 
                className="relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden group border border-emerald-500/10 hover:border-emerald-500/40 transition-colors"
              >
                <img 
                  src={img.src} 
                  alt={img.desc} 
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" 
                />
                {/* Hover cover (Solid dark gradient overlay) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020504] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 pointer-events-none">
                  <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-widest bg-[#020504] border border-emerald-500/25 px-2.5 py-1 rounded">
                    {img.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ======== SECTION 8: FINAL CTA BLOCK (SOLICITUD DE AUDITORÍA Y CONTACTO) ======== */}
      <section id="contacto" className="relative py-40 overflow-hidden">
        {/* Ambient background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-[#030605] to-emerald-950/10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.1)_0%,_transparent_60%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 font-mono">
              <Award className="w-4 h-4" /> Certificación Ambiental
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-black mb-8 text-white leading-tight">
              Adhiere tu Desarrollo al <br />
              <span className="text-gradient">Programa Cocodrilos</span>
            </h2>
            <p className="text-lg md:text-xl text-stone-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Solicita un análisis cartográfico preliminar y auditoría de viabilidad ecológica para certificar tus lagos, campos de golf o canales náuticos.
            </p>
            <a 
              href="mailto:contacto@programa-cocodrilos.org" 
              className="btn-primary text-lg"
            >
              Iniciar Auditoría Técnica <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ======== FOOTER SECTION (INFORMACIÓN INSTITUCIONAL COMPLETA) ======== */}
      <footer className="relative pt-24 pb-12 px-6 bg-[#010403] border-t border-emerald-500/10 text-stone-400">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Logo and desc */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/20 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="font-display text-xl font-bold text-white tracking-wide">
                  Programa Cocodrilos
                </span>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed max-w-sm">
                Iniciativa científica, legal y tecnológica para la coexistencia armónica de la fauna silvestre en destinos turísticos y residenciales de humedales.
              </p>
            </div>

            {/* Institutions */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold mb-4">
                Soporte Institucional
              </h4>
              <ul className="space-y-2 text-xs text-stone-500">
                <li className="hover:text-stone-300 transition-colors">SEMARNAT (Registro Ambiental)</li>
                <li className="hover:text-stone-300 transition-colors">PROFEPA (Vigilancia e Inspección)</li>
                <li className="hover:text-stone-300 transition-colors">CONANP (Áreas Protegidas)</li>
                <li className="hover:text-stone-300 transition-colors">Sitio Ramsar Internacional</li>
              </ul>
            </div>

            {/* Links / Map */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold mb-4">
                Ubicación de Campo
              </h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Estación Biológica Núcleo I<br />
                Reserva Ecológica Laguna de Cocodrilos<br />
                Quintana Roo, México
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold mb-4">
                Contacto Directo
              </h4>
              <p className="text-xs text-stone-300 font-mono">
                contacto@programa-cocodrilos.org
              </p>
              <p className="text-[10px] text-stone-600 leading-relaxed mt-4">
                Página técnica certificada para presentación gubernamental y comisiones ejidales/hoteleras.
              </p>
            </div>
          </div>

          {/* Bottom disclaimer */}
          <div className="pt-8 border-t border-emerald-500/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-stone-600">
            <span>© 2026 Programa Cocodrilos. Todos los derechos reservados.</span>
            <span>Diseño de Infraestructura y Coexistencia Sostenible en Humedales y Costas.</span>
          </div>

        </div>
      </footer>

    </main>
  );
}
