"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
} from "lucide-react";

const pillars = [
  {
    icon: Map,
    title: "Zonificación Ecológica Obligatoria",
    desc: "Mapeo con drones térmicos, GIS y sensores para separar zonas rojas (fauna exclusiva), amarillas (acceso restringido) y verdes (convivencia controlada).",
    color: "from-red-500/20 to-orange-500/10",
    borderColor: "border-red-500/30",
    iconColor: "text-red-400",
    bgIcon: "bg-red-500/10",
  },
  {
    icon: TreePine,
    title: "Corredores Biológicos Artificiales",
    desc: "Canales ecológicos, pasos hidráulicos, lagunas conectadas y túneles biológicos que permiten movimiento, caza y reproducción sin cruzar zonas urbanas.",
    color: "from-green-500/20 to-emerald-500/10",
    borderColor: "border-green-500/30",
    iconColor: "text-green-400",
    bgIcon: "bg-green-500/10",
  },
  {
    icon: Shield,
    title: "Reubicación Inteligente",
    desc: "Clasificación por edad, sexo y comportamiento. Solo se mueven ejemplares peligrosos, enfermos o atrapados en zonas urbanas irreversibles.",
    color: "from-blue-500/20 to-cyan-500/10",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
    bgIcon: "bg-blue-500/10",
  },
  {
    icon: Building2,
    title: "Obligaciones para Desarrollos Turísticos",
    desc: "Porcentaje mínimo de humedal conservado, barreras ecológicas, iluminación amigable e impuesto de compensación ecológica.",
    color: "from-amber-500/20 to-yellow-500/10",
    borderColor: "border-amber-500/30",
    iconColor: "text-amber-400",
    bgIcon: "bg-amber-500/10",
  },
  {
    icon: GraduationCap,
    title: "Educación Pública y Protocolos",
    desc: "Señalética obligatoria, QR educativos, simulacros, capacitación hotelera y certificación 'Zona de coexistencia responsable'.",
    color: "from-purple-500/20 to-violet-500/10",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
    bgIcon: "bg-purple-500/10",
  },
  {
    icon: Landmark,
    title: "Santuario + Ecoturismo Controlado",
    desc: "Centro Integral de Conservación con rescate, investigación, incubación y ecoturismo: recorridos seguros, observación nocturna y tours científicos.",
    color: "from-teal-500/20 to-cyan-500/10",
    borderColor: "border-teal-500/30",
    iconColor: "text-teal-400",
    bgIcon: "bg-teal-500/10",
  },
  {
    icon: Scale,
    title: "Marco Legal y Presión Institucional",
    desc: "Área Natural Protegida, Sitio Ramsar, corredor biológico estatal, auditorías ambientales y revisión de MIAs con análisis de impacto acumulativo.",
    color: "from-indigo-500/20 to-blue-500/10",
    borderColor: "border-indigo-500/30",
    iconColor: "text-indigo-400",
    bgIcon: "bg-indigo-500/10",
  },
];

const scenarios = [
  {
    title: "El gobierno protege al turismo",
    solution:
      "Hablar en términos económicos: prevención de ataques, reputación internacional, resiliencia climática y turismo sostenible.",
    icon: TrendingUp,
  },
  {
    title: "Hay ataques humanos",
    solution:
      "Protocolo de emergencia, captura selectiva, investigación forense ambiental y análisis de las causas raíz.",
    icon: Shield,
  },
  {
    title: "Desarrolladores presionan políticamente",
    solution:
      "Aliarse con universidades, biólogos, ONGs, evidencia científica, prensa, comunidad local y pescadores.",
    icon: Scale,
  },
  {
    title: "Ya destruyeron gran parte del hábitat",
    solution:
      "Restauración ecológica progresiva: humedales artificiales, reforestación de manglar, reproducción controlada y recuperación hídrica.",
    icon: TreePine,
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Valor Inmobiliario",
    desc: "Las zonas con humedales protegidos tienen mayor valor a largo plazo y menor riesgo de inundaciones.",
  },
  {
    icon: Shield,
    title: "Seguridad Turística",
    desc: "Protocolos claros reducen incidentes y mejoran la reputación del destino.",
  },
  {
    icon: Waves,
    title: "Resiliencia Climática",
    desc: "Los humedales previenen inundaciones, filtran agua, estabilizan costas y reducen erosión.",
  },
  {
    icon: Landmark,
    title: "Patrimonio Ecológico",
    desc: "El cocodrilo se convierte en atractivo turístico y fuente de ingresos sostenibles.",
  },
];

const documentStructure = [
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

function FloatingElement({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#0a0f0e] text-[#e8ede9] overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* HERO */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1535068484670-2a9c7c31476e?q=80&w=2000&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0e]/80 via-[#0a0f0e]/50 to-[#0a0f0e]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,212,191,0.15)_0%,_transparent_70%)]" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingElement delay={0}>
            <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-teal-400/10 blur-3xl" />
          </FloatingElement>
          <FloatingElement delay={2}>
            <div className="absolute top-40 right-[15%] w-48 h-48 rounded-full bg-emerald-400/10 blur-3xl" />
          </FloatingElement>
          <FloatingElement delay={4}>
            <div className="absolute bottom-40 left-[20%] w-40 h-40 rounded-full bg-cyan-400/10 blur-3xl" />
          </FloatingElement>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-8 border border-teal-500/20 backdrop-blur-sm">
              <Leaf className="w-4 h-4" />
              Programa Integral Ambiental
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight"
          >
            Recuperación y{" "}
            <span className="text-gradient">Coexistencia</span>{" "}
            <br className="hidden md:block" />
            de Humedales y Cocodrilos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Transformando conflictos entre desarrollo humano y fauna silvestre en modelos de
            coexistencia ecológica, legal y económicamente sostenibles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#pilares"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-[#0a0f0e] font-bold rounded-xl hover:shadow-lg hover:shadow-teal-500/25 transition-shadow"
            >
              Explorar los 7 Pilares
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 border border-stone-600 text-stone-100 font-semibold rounded-xl hover:border-teal-400 hover:text-teal-400 transition-colors backdrop-blur-sm"
            >
              Presentar Propuesta
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-stone-400">Descubre más</span>
            <ChevronDown className="w-6 h-6 text-teal-400" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* PROBLEM SECTION */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/5 to-transparent" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 text-teal-400 text-sm font-semibold tracking-wider uppercase mb-6"
              >
                <Eye className="w-4 h-4" />
                El Problema Real
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
              >
                Los cocodrilos{" "}
                <span className="text-gradient">no invaden</span>: son desplazados
              </motion.h2>

              <div className="space-y-6 text-lg text-stone-300 leading-relaxed"
              >
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Existían manglares, lagunas y canales naturales. Llegaron desarrollos turísticos,
                  se rellenaron humedales y se redujeron zonas de anidación.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  El cocodrilo perdió alimento y refugio. Empezó a aparecer en marinas, playas,
                  hoteles y zonas urbanas. La gente entró en pánico.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="p-6 rounded-2xl bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20 mt-8"
                >
                  <p className="text-teal-300 font-semibold text-xl">
                    Eso es un desplazamiento ecológico inducido.
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden border border-stone-700/50 shadow-2xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1200&auto=format&fit=crop"
                    alt="Manglar"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0e] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-8 left-8 right-8"
                  >
                    <div className="glass-card glow-border rounded-xl p-4"
                    >
                      <div className="flex items-center gap-3"
                      >
                        <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse" />
                        <span className="text-sm font-medium text-stone-300">Hábitat perdido: 65%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PILARS */}
      <section id="pilares" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(45,212,191,0.08)_0%,_transparent_50%)]" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 text-teal-400 text-sm font-semibold tracking-wider uppercase mb-6"
            >
              <Shield className="w-4 h-4" />
              Estrategia Integral
            </span>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
            >
              Los{" "}<span className="text-gradient">7 Pilares</span>{" "}
              <br className="hidden md:block" />
              de la Solución
            </h2>

            <p className="text-xl text-stone-400 max-w-3xl mx-auto leading-relaxed"
            >
              Un programa integral que protege vidas humanas, inversión turística, biodiversidad y
              crea incentivos económicos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${pillar.color} border ${pillar.borderColor} backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                <div className="relative"
                >
                  <div className={`w-14 h-14 rounded-xl ${pillar.bgIcon} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <pillar.icon className={`w-7 h-7 ${pillar.iconColor}`} />
                  </div>

                  <div className="flex items-center gap-2 mb-4"
                  >
                    <span className="text-xs font-mono text-stone-500">0{index + 1}</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-stone-700 to-transparent" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 group-hover:text-teal-300 transition-colors"
                  >
                    {pillar.title}
                  </h3>

                  <p className="text-stone-400 leading-relaxed"
                  >
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCENARIOS */}
      <section className="py-32 px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/5 to-transparent" />
        <div className="max-w-5xl mx-auto relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold tracking-wider uppercase mb-6"
            >
              <AlertTriangle className="w-4 h-4" />
              Preparación
            </span>

            <h2 className="text-4xl md:text-6xl font-bold mb-8"
            >
              Escenarios{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Difíciles</span>
            </h2>

            <p className="text-xl text-stone-400 max-w-3xl mx-auto"
            >
              La mejor estrategia anticipa los obstáculos. Estas son las respuestas para cada
              escenario complejo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6"
          >
            {scenarios.map((scenario, index) => (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className="group p-8 rounded-2xl glass-card border border-stone-700/50 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-5 mb-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors"
                  >
                    <scenario.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-amber-300 transition-colors"
                  >
                    {scenario.title}
                  </h3>
                </div>

                <p className="text-stone-400 leading-relaxed pl-[68px]"
                >
                  {scenario.solution}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-32 px-6 relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(45,212,191,0.08)_0%,_transparent_50%)]" />
        <div className="max-w-5xl mx-auto relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 text-teal-400 text-sm font-semibold tracking-wider uppercase mb-6"
            >
              <TrendingUp className="w-4 h-4" />
              Impacto
            </span>

            <h2 className="text-4xl md:text-6xl font-bold mb-8"
            >
              Beneficios{" "}
              <span className="text-gradient">Económicos</span>{" "}
              <br className="hidden md:block" />
              y Ambientales
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-16"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex gap-6 p-6 rounded-2xl glass-card border border-stone-700/50 hover:border-teal-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                >
                  <benefit.icon className="w-8 h-8 text-teal-400" />
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-teal-300 transition-colors"
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-stone-400 leading-relaxed"
                  >
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-10 rounded-3xl bg-gradient-to-br from-teal-500/10 via-stone-900/50 to-emerald-500/10 border border-teal-500/20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative"
            >
              <Waves className="w-12 h-12 text-teal-400 mx-auto mb-6" />

              <h3 className="text-3xl font-bold mb-6"
              >La Solución Más Poderosa</h3>

              <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed"
              >
                Crear un modelo donde{" "}
                <span className="text-teal-400 font-semibold"
                >
                  proteger cocodrilos = proteger manglares = proteger turismo = proteger playas =
                  proteger valor inmobiliario
                </span>
                . Los humedales previenen inundaciones, filtran agua, estabilizan costas y reducen
                erosión. Sin ellos, eventualmente también colapsa el turismo.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="py-32 px-6 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-teal-400 text-sm font-semibold tracking-wider uppercase mb-6"
            >
              <CheckCircle className="w-4 h-4" />
              Acción
            </span>

            <h2 className="text-4xl md:text-6xl font-bold mb-8"
            >
              Presenta la Propuesta{" "}
              <span className="text-gradient">ante Autoridades</span>
            </h2>

            <p className="text-xl text-stone-300 mb-12 max-w-2xl mx-auto"
            >
              Estructura tu documento con diagnóstico, evidencia cartográfica, plan de mitigación,
              propuesta legal, presupuesto estimado y cronograma por fases.
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-left mb-12"
            >
              {documentStructure.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass-card border border-stone-700/50 hover:border-teal-500/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500/20 to-emerald-500/20 flex items-center justify-center text-teal-400 font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform"
                  >
                    {i + 1}
                  </div>
                  <span className="font-medium group-hover:text-teal-300 transition-colors"
                  >{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="mailto:contacto@programa-cocodrilos.org"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-teal-500 to-emerald-500 text-[#0a0f0e] font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-teal-500/25 transition-shadow"
            >
              Impulsar el Programa
              <ArrowRight className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 border-t border-stone-800/50 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/5 to-transparent" />
        <div className="max-w-5xl mx-auto text-center relative"
        >
          <div className="flex items-center justify-center gap-3 mb-6"
          >
            <Leaf className="w-8 h-8 text-teal-400" />
            <span className="text-2xl font-bold">Programa Cocodrilos</span>
          </div>

          <p className="text-stone-400 text-lg mb-2"
          >
            Programa Integral de Recuperación y Coexistencia de Humedales y Cocodrilos
          </p>

          <p className="text-stone-500"
          >
            Modelo de coexistencia ecológica, legal y económica sostenible.
          </p>

          <div className="mt-8 pt-8 border-t border-stone-800/50 text-sm text-stone-600"
          >
            © 2025 Programa Cocodrilos. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
