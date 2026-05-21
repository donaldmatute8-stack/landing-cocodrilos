"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Map,
  TreePine,
  Shield,
  Building2,
  GraduationCap,
  Landmark,
  Scale,
  AlertTriangle,
  TrendingUp,
  ChevronDown,
  Waves,
  Leaf,
  Eye,
  ArrowRight,
  CheckCircle,
  Hexagon,
  Circle,
  Droplets,
} from "lucide-react";

// ========== PARTICLE SYSTEM ==========
function Particles() {
  const [particles, setParticles] = useState<Array<{
    id: number; x: number; y: number; size: number; duration: number; delay: number;
  }>>([]);

  useEffect(() => {
    const p = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
    }));
    setParticles(p);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-teal-400/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -150, 0],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ========== MOUSE GLOW EFFECT ==========
function MouseGlow() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <motion.div
      className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-50 mix-blend-screen opacity-[0.03]"
      style={{
        background: "radial-gradient(circle, #2dd4bf 0%, transparent 70%)",
        left: mouse.x - 250,
        top: mouse.y - 250,
      }}
      animate={{
        left: mouse.x - 250,
        top: mouse.y - 250,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 200 }}
    />
  );
}

// ========== FLOATING ELEMENT ==========
function FloatingElement({ children, delay = 0, duration = 6 }: any) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0], rotate: [0, 1, -1, 0] }}
      transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

// ========== DATA ==========
const pillars = [
  {
    icon: Map,
    title: "Zonificación Ecológica Obligatoria",
    desc: "Mapeo con drones térmicos, GIS y sensores para separar zonas rojas (fauna exclusiva), amarillas (acceso restringido) y verdes (convivencia controlada).",
    accent: "#f87171",
    bg: "from-red-500/10 to-orange-500/5",
    border: "border-red-500/20 hover:border-red-400/40",
  },
  {
    icon: TreePine,
    title: "Corredores Biológicos Artificiales",
    desc: "Canales ecológicos, pasos hidráulicos, lagunas conectadas y túneles biológicos que permiten movimiento, caza y reproducción sin cruzar zonas urbanas.",
    accent: "#34d399",
    bg: "from-green-500/10 to-emerald-500/5",
    border: "border-green-500/20 hover:border-green-400/40",
  },
  {
    icon: Shield,
    title: "Reubicación Inteligente",
    desc: "Clasificación por edad, sexo y comportamiento. Solo se mueven ejemplares peligrosos, enfermos o atrapados en zonas urbanas irreversibles.",
    accent: "#60a5fa",
    bg: "from-blue-500/10 to-cyan-500/5",
    border: "border-blue-500/20 hover:border-blue-400/40",
  },
  {
    icon: Building2,
    title: "Obligaciones Turísticas",
    desc: "Porcentaje mínimo de humedal conservado, barreras ecológicas, iluminación amigable e impuesto de compensación ecológica.",
    accent: "#fbbf24",
    bg: "from-amber-500/10 to-yellow-500/5",
    border: "border-amber-500/20 hover:border-amber-400/40",
  },
  {
    icon: GraduationCap,
    title: "Educación Pública y Protocolos",
    desc: "Señalética obligatoria, QR educativos, simulacros, capacitación hotelera y certificación 'Zona de coexistencia responsable'.",
    accent: "#a78bfa",
    bg: "from-purple-500/10 to-violet-500/5",
    border: "border-purple-500/20 hover:border-purple-400/40",
  },
  {
    icon: Landmark,
    title: "Santuario + Ecoturismo Controlado",
    desc: "Centro Integral de Conservación con rescate, investigación, incubación y ecoturismo: recorridos seguros, observación nocturna y tours científicos.",
    accent: "#2dd4bf",
    bg: "from-teal-500/10 to-cyan-500/5",
    border: "border-teal-500/20 hover:border-teal-400/40",
  },
  {
    icon: Scale,
    title: "Marco Legal y Presión Institucional",
    desc: "Área Natural Protegida, Sitio Ramsar, corredor biológico estatal, auditorías ambientales y revisión de MIAs con análisis de impacto acumulativo.",
    accent: "#818cf8",
    bg: "from-indigo-500/10 to-blue-500/5",
    border: "border-indigo-500/20 hover:border-indigo-400/40",
  },
];

const scenarios = [
  {
    title: "El gobierno protege al turismo",
    solution: "Hablar en términos económicos: prevención de ataques, reputación internacional, resiliencia climática y turismo sostenible.",
    icon: TrendingUp,
  },
  {
    title: "Hay ataques humanos",
    solution: "Protocolo de emergencia, captura selectiva, investigación forense ambiental y análisis de las causas raíz.",
    icon: Shield,
  },
  {
    title: "Desarrolladores presionan políticamente",
    solution: "Aliarse con universidades, biólogos, ONGs, evidencia científica, prensa, comunidad local y pescadores.",
    icon: Scale,
  },
  {
    title: "Ya destruyeron gran parte del hábitat",
    solution: "Restauración ecológica progresiva: humedales artificiales, reforestación de manglar, reproducción controlada y recuperación hídrica.",
    icon: TreePine,
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Valor Inmobiliario",
    desc: "Las zonas con humedales protegidos tienen mayor valor a largo plazo y menor riesgo de inundaciones.",
    stat: "+45%",
    label: "valorización",
  },
  {
    icon: Shield,
    title: "Seguridad Turística",
    desc: "Protocolos claros reducen incidentes y mejoran la reputación del destino.",
    stat: "-80%",
    label: "incidentes",
  },
  {
    icon: Waves,
    title: "Resiliencia Climática",
    desc: "Los humedales previenen inundaciones, filtran agua, estabilizan costas y reducen erosión.",
    stat: "3x",
    label: "protección",
  },
  {
    icon: Landmark,
    title: "Patrimonio Ecológico",
    desc: "El cocodrilo se convierte en atractivo turístico y fuente de ingresos sostenibles.",
    stat: "$2.4M",
    label: "ingresos/año",
  },
];

const docItems = [
  "Diagnóstico del problema",
  "Evidencia fotográfica/cartográfica",
  "Impacto ambiental acumulado",
  "Riesgo humano-fauna",
  "Plan de mitigación inmediata",
  "Plan de restauración",
  "Propuesta legal",
  "Presupuesto estimado",
  "Beneficios económicos",
  "Cronograma por fases",
];

// ========== MAIN PAGE ==========
export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-[#e8e6e3] overflow-x-hidden relative">
      <MouseGlow />

      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* ======== HERO ======== */}
      <motion.section
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1535068484670-2a9c7c31476e?q=80&w=2000&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,212,191,0.2)_0%,_transparent_60%)]" />
          <div className="absolute inset-0 noise-overlay" />
        </div>

        <Particles />

        {/* Floating Blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingElement delay={0} duration={8}>
            <div className="absolute top-[15%] left-[5%] w-72 h-72 rounded-full bg-teal-500/15 blur-[100px]" />
          </FloatingElement>
          <FloatingElement delay={3} duration={10}>
            <div className="absolute top-[25%] right-[10%] w-96 h-96 rounded-full bg-emerald-500/10 blur-[120px]" />
          </FloatingElement>
          <FloatingElement delay={6} duration={7}>
            <div className="absolute bottom-[20%] left-[20%] w-64 h-64 rounded-full bg-cyan-500/12 blur-[80px]" />
          </FloatingElement>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md text-teal-300 text-sm font-medium border border-teal-400/20 shadow-lg shadow-teal-500/10"
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="uppercase tracking-widest text-xs">Programa Integral Ambiental</span>
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-10 mb-8 leading-[0.95]"
          >
            <span className="block font-display text-5xl md:text-7xl lg:text-[7.5rem] font-black tracking-tight"
            >
              Recuperación
            </span>
            <span className="block font-display text-5xl md:text-7xl lg:text-[7.5rem] font-black tracking-tight text-gradient mt-2"
            >
              & Coexistencia
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-stone-400 leading-relaxed"
            >
              Transformando conflictos entre desarrollo humano y fauna silvestre en modelos de{" "}
              <span className="text-teal-400 font-semibold">coexistencia ecológica</span>, legal y económicamente sostenibles.
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto mt-12"
          />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#pilares"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(45,212,191,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-teal-400 to-emerald-400 text-[#0a0a0a] font-bold text-lg rounded-2xl transition-all"
            >
              Explorar los 7 Pilares
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold text-lg rounded-2xl hover:bg-white/10 hover:border-teal-400/30 transition-all"
            >
              Presentar Propuesta
              <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-stone-500">Scroll</span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-stone-600 flex items-start justify-center p-1"
            >
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-3 rounded-full bg-teal-400"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </motion.section>

      {/* ======== PROBLEM SECTION ======== */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center"
          >
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative"
              >
                {/* Glow behind image */}
                <div className="absolute -inset-8 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-[3rem] blur-3xl" />

                {/* Image Frame */}
                <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10"
                >
                  <img
                    src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1200&auto=format&fit=crop"
                    alt="Manglar"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />

                  {/* Stats Overlay */}
                  <div className="absolute bottom-8 left-8 right-8"
                  >
                    <div className="glass-card glow-teal rounded-2xl p-6"
                    >
                      <div className="flex items-center justify-between"
                      >
                        <div>
                          <p className="text-xs uppercase tracking-wider text-stone-500 mb-1">Hábitat Perdido</p>
                          <p className="text-4xl font-bold text-gradient">65%</p>
                        </div>
                        <div className="h-12 w-px bg-white/10" />
                        <div>
                          <p className="text-xs uppercase tracking-wider text-stone-500 mb-1">Especies en Riesgo</p>
                          <p className="text-4xl font-bold text-red-400">3</p>
                        </div>
                        <div className="h-12 w-px bg-white/10" />
                        <div>
                          <p className="text-xs uppercase tracking-wider text-stone-500 mb-1">Áreas Críticas</p>
                          <p className="text-4xl font-bold text-amber-400">12</p>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="mt-4"
                      >
                        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden"
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "65%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-teal-400/30 rounded-tl-3xl" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-teal-400/30 rounded-br-3xl" />
              </div>
            </motion.div>

            {/* Text Side */}
            <div className="order-2 lg:order-1"
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 text-teal-400 text-sm font-semibold tracking-[0.2em] uppercase mb-8"
              >
                <Eye className="w-4 h-4" />
                El Problema Real
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-[1.1]"
              >
                Los cocodrilos{" "}
                <span className="text-gradient">no invaden</span>:
                <br />
                son <span className="text-stone-500">desplazados</span>
              </motion.h2>

              <div className="space-y-8 text-lg text-stone-400 leading-relaxed"
              >
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/10 border border-teal-400/20 flex items-center justify-center text-teal-400 text-sm font-bold">1</span>
                  <span>Existían manglares, lagunas y canales naturales. Llegaron desarrollos turísticos, se rellenaron humedales y se redujeron zonas de anidación.</span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/10 border border-teal-400/20 flex items-center justify-center text-teal-400 text-sm font-bold">2</span>
                  <span>El cocodrilo perdió alimento y refugio. Empezó a aparecer en marinas, playas, hoteles y zonas urbanas. La gente entró en pánico.</span>
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-10 p-8 rounded-3xl bg-gradient-to-br from-teal-500/10 via-stone-900/50 to-emerald-500/10 border border-teal-400/20 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-teal-400/10 rounded-full blur-[60px]" />
                <p className="relative text-teal-300 font-semibold text-xl leading-relaxed"
                >
                  "Eso es un desplazamiento ecológico inducido. No es invasión: es consecuencia de nuestras decisiones de desarrollo."
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== PILARS ======== */}
      <section id="pilares" className="relative py-32 px-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(45,212,191,0.08)_0%,_transparent_50%)]" />
        <div className="max-w-7xl mx-auto relative"
      >
          <div className="text-center mb-24"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-teal-400 text-sm font-semibold tracking-[0.2em] uppercase mb-8"
            >
              <Shield className="w-4 h-4" />
              Estrategia Integral
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]"
            >
              Los{" "}<span className="text-gradient">7 Pilares</span>{" "}
              <br className="hidden md:block" />
              de la Solución
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-stone-500 max-w-3xl mx-auto"
            >
              Un programa integral que protege vidas humanas, inversión turística, biodiversidad y crea incentivos económicos.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${pillar.bg} ${pillar.border} border backdrop-blur-sm transition-all duration-500 hover:shadow-2xl shine-effect`}
                style={{ boxShadow: `0 0 0 1px ${pillar.accent}10` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />
                <div className="relative"
                >
                  <div className="flex items-center justify-between mb-6"
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${pillar.accent}15` }}
                    >
                      <pillar.icon className="w-7 h-7" style={{ color: pillar.accent }} />
                    </div>
                    <span className="font-mono text-xs text-stone-600"
                    >0{index + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors"
                  >
                    {pillar.title}
                  </h3>

                  <p className="text-stone-400 leading-relaxed"
                  >
                    {pillar.desc}
                  </p>

                  <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span style={{ color: pillar.accent }} className="font-medium">Ver más</span>
                    <ArrowRight className="w-4 h-4" style={{ color: pillar.accent }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== SCENARIOS ======== */}
      <section className="relative py-32 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/[0.03] to-transparent" />
        <div className="max-w-6xl mx-auto relative"
      >
          <div className="text-center mb-24"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold tracking-[0.2em] uppercase mb-8"
            >
              <AlertTriangle className="w-4 h-4" />
              Preparación
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
            >
              Escenarios{" "}
              <span className="text-gradient-gold">Difíciles</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-stone-500 max-w-3xl mx-auto"
            >
              La mejor estrategia anticipa los obstáculos. Estas son las respuestas para cada escenario complejo.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6"
          >
            {scenarios.map((scenario, index) => (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className="group p-8 rounded-3xl bg-gradient-to-br from-stone-900/80 to-stone-900/40 border border-white/[0.06] backdrop-blur-sm hover:border-amber-400/30 transition-all duration-500"
              >
                <div className="flex items-start gap-5 mb-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-400/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors"
                  >
                    <scenario.icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-amber-300 transition-colors pt-2"
                  >
                    {scenario.title}
                  </h3>
                </div>

                <p className="text-stone-400 leading-relaxed text-lg pl-[76px]"
                >
                  {scenario.solution}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== BENEFITS ======== */}
      <section className="relative py-32 px-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(45,212,191,0.08)_0%,_transparent_50%)]" />
        <div className="max-w-6xl mx-auto relative"
      >
          <div className="text-center mb-24"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-teal-400 text-sm font-semibold tracking-[0.2em] uppercase mb-8"
            >
              <TrendingUp className="w-4 h-4" />
              Impacto
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
            >
              Beneficios{" "}
              <span className="text-gradient">Económicos</span>{" "}
              <br className="hidden md:block" />
              y Ambientales
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group p-8 rounded-3xl glass-card border border-white/[0.06] hover:border-teal-400/30 transition-all duration-500"
              >
                <div className="flex items-center gap-6"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 border border-teal-400/20 flex flex-col items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  >
                    <span className="text-2xl font-black text-gradient">{benefit.stat}</span>
                  </div>

                  <div className="flex-1"
                  >
                    <div className="flex items-center gap-3 mb-2"
                    >
                      <benefit.icon className="w-5 h-5 text-teal-400" />
                      <h3 className="text-xl font-bold">{benefit.title}</h3>
                    </div>
                    <p className="text-stone-400">{benefit.desc}</p>
                    <span className="inline-block mt-3 text-xs uppercase tracking-wider text-teal-400/60">{benefit.label}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Big Quote */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative p-16 rounded-[3rem] bg-gradient-to-br from-teal-500/[0.08] via-stone-900/50 to-emerald-500/[0.08] border border-teal-400/20 text-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-400/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-400/10 rounded-full blur-[80px]" />

            <Droplets className="w-16 h-16 text-teal-400/50 mx-auto mb-8" />

            <blockquote className="relative"
            >
              <p className="font-display text-3xl md:text-4xl font-bold leading-relaxed mb-8"
              >
                "Proteger cocodrilos = proteger manglares ={" "}
                <span className="text-gradient">proteger turismo</span>{" "}
                = proteger playas = proteger valor inmobiliario"
              </p>

              <p className="text-xl text-stone-400 max-w-3xl mx-auto"
              >
                Los humedales previenen inundaciones, filtran agua, estabilizan costas y reducen erosión. Sin ellos, eventualmente también colapsa el turismo.
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ======== CTA ======== */}
      <section id="contacto" className="relative py-32 px-6"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/[0.05] via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto relative"
      >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 text-teal-400 text-sm font-semibold tracking-[0.2em] uppercase mb-8"
            >
              <CheckCircle className="w-4 h-4" />
              Acción
            </span>

            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
            >
              Presenta la Propuesta{" "}
              <span className="text-gradient">ante Autoridades</span>
            </h2>

            <p className="text-xl text-stone-400 mb-16 max-w-2xl mx-auto"
            >
              Estructura tu documento con diagnóstico, evidencia cartográfica, plan de mitigación, propuesta legal, presupuesto estimado y cronograma por fases.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-16 text-left"
            >
              {docItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex items-center gap-5 p-5 rounded-2xl glass-card border border-white/[0.06] hover:border-teal-400/30 hover:bg-white/[0.03] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 border border-teal-400/20 flex items-center justify-center text-teal-400 font-bold flex-shrink-0 group-hover:scale-110 transition-transform"
                  >
                    {i + 1}
                  </div>
                  <span className="font-medium text-lg group-hover:text-teal-300 transition-colors"
                  >{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="mailto:contacto@programa-cocodrilos.org"
              whileHover={{ scale: 1.05, boxShadow: "0 30px 80px rgba(45,212,191,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-teal-400 to-emerald-400 text-[#0a0a0a] font-black text-xl rounded-2xl"
            >
              Impulsar el Programa
              <ArrowRight className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ======== FOOTER ======== */}
      <footer className="relative py-20 px-6 border-t border-white/[0.06]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/[0.03] to-transparent" />
        <div className="max-w-5xl mx-auto text-center relative"
      >
          <div className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 border border-teal-400/20 flex items-center justify-center"
            >
              <Leaf className="w-6 h-6 text-teal-400" />
            </div>
            <span className="font-display text-3xl font-bold">Programa Cocodrilos</span>
          </div>

          <p className="text-stone-500 text-lg mb-2"
          >
            Programa Integral de Recuperación y Coexistencia de Humedales y Cocodrilos
          </p>

          <p className="text-stone-600 mb-10"
          >
            Modelo de coexistencia ecológica, legal y económica sostenible.
          </p>

          <div className="flex items-center justify-center gap-8 text-sm text-stone-600"
          >
            <span>SEMARNAT</span>
            <span className="w-1 h-1 rounded-full bg-stone-700" />
            <span>PROFEPA</span>
            <span className="w-1 h-1 rounded-full bg-stone-700" />
            <span>CONANP</span>
          </div>

          <div className="mt-16 pt-8 border-t border-white/[0.04] text-sm text-stone-700"
          >
            © 2025 Programa Cocodrilos. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
