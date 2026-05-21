"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";

const pillars = [
  {
    icon: Map,
    title: "Zonificación Ecológica Obligatoria",
    desc: "Mapeo con drones térmicos, GIS y sensores para separar zonas rojas (fauna exclusiva), amarillas (acceso restringido) y verdes (convivencia controlada).",
    color: "from-red-900/40 to-red-800/20",
  },
  {
    icon: TreePine,
    title: "Corredores Biológicos Artificiales",
    desc: "Canales ecológicos, pasos hidráulicos, lagunas conectadas y túneles biológicos que permiten movimiento, caza y reproducción sin cruzar zonas urbanas.",
    color: "from-green-900/40 to-green-800/20",
  },
  {
    icon: Shield,
    title: "Reubicación Inteligente",
    desc: "Clasificación por edad, sexo y comportamiento. Solo se mueven ejemplares peligrosos, enfermos o atrapados en zonas urbanas irreversibles.",
    color: "from-blue-900/40 to-blue-800/20",
  },
  {
    icon: Building2,
    title: "Obligaciones para Desarrollos Turísticos",
    desc: "Porcentaje mínimo de humedal conservado, barreras ecológicas, iluminación amigable e impuesto de compensación ecológica.",
    color: "from-amber-900/40 to-amber-800/20",
  },
  {
    icon: GraduationCap,
    title: "Educación Pública y Protocolos",
    desc: "Señalética obligatoria, QR educativos, simulacros, capacitación hotelera y certificación 'Zona de coexistencia responsable'.",
    color: "from-purple-900/40 to-purple-800/20",
  },
  {
    icon: Landmark,
    title: "Santuario + Ecoturismo Controlado",
    desc: "Centro Integral de Conservación con rescate, investigación, incubación y ecoturismo: recorridos seguros, observación nocturna y tours científicos.",
    color: "from-teal-900/40 to-teal-800/20",
  },
  {
    icon: Scale,
    title: "Marco Legal y Presión Institucional",
    desc: "Área Natural Protegida, Sitio Ramsar, corredor biológico estatal, auditorías ambientales y revisión de MIAs con análisis de impacto acumulativo.",
    color: "from-indigo-900/40 to-indigo-800/20",
  },
];

const scenarios = [
  {
    title: "El gobierno protege al turismo",
    solution:
      "Hablar en términos económicos: prevención de ataques, reputación internacional, resiliencia climática y turismo sostenible.",
  },
  {
    title: "Hay ataques humanos",
    solution:
      "Protocolo de emergencia, captura selectiva, investigación forense ambiental y análisis de las causas raíz.",
  },
  {
    title: "Desarrolladores presionan políticamente",
    solution:
      "Aliarse con universidades, biólogos, ONGs, evidencia científica, prensa, comunidad local y pescadores.",
  },
  {
    title: "Ya destruyeron gran parte del hábitat",
    solution:
      "Restauración ecológica progresiva: humedales artificiales, reforestación de manglar, reproducción controlada y recuperación hídrica.",
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
    icon: TreePine,
    title: "Resiliencia Climática",
    desc: "Los humedales previenen inundaciones, filtran agua, estabilizan costas y reducen erosión.",
  },
  {
    icon: Landmark,
    title: "Patrimonio Ecológico",
    desc: "El cocodrilo se convierte en atractivo turístico y fuente de ingresos sostenibles.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1535068484670-2a9c7c31476e?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/40 to-stone-950" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-6 border border-teal-500/20">
              Programa Integral Ambiental
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Recuperación y Coexistencia de{" "}
            <span className="text-teal-400">Humedales y Cocodrilos</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto mb-10"
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
            <a
              href="#pilares"
              className="px-8 py-4 bg-teal-500 text-stone-950 font-semibold rounded-lg hover:bg-teal-400 transition-colors"
            >
              Explorar los 7 Pilares
            </a>
            <a
              href="#contacto"
              className="px-8 py-4 border border-stone-600 text-stone-100 font-semibold rounded-lg hover:border-stone-400 transition-colors"
            >
              Presentar Propuesta
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-stone-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="text-teal-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                El Problema Real
              </span>
              <h2 className="text-4xl font-bold mb-6">
                Los cocodrilos no invaden: son{" "}
                <span className="text-teal-400">desplazados</span>
              </h2>
              <div className="space-y-4 text-stone-300">
                <p>
                  Existían manglares, lagunas y canales naturales. Llegaron desarrollos turísticos, se
                  rellenaron humedales y se redujeron zonas de anidación.
                </p>
                <p>
                  El cocodrilo perdió alimento y refugio. Empezó a aparecer en marinas, playas,
                  hoteles y zonas urbanas. La gente entró en pánico.
                </p>
                <p className="text-teal-400 font-semibold">
                  Eso es un desplazamiento ecológico inducido.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1200&auto=format&fit=crop"
                alt="Manglar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pilares" className="py-24 px-6 bg-stone-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-teal-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Estrategia
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Los <span className="text-teal-400">7 Pilares</span> de la Solución
            </h2>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Un programa integral que protege vidas humanas, inversión turística, biodiversidad y
              crea incentivos económicos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-2xl bg-gradient-to-br ${pillar.color} border border-stone-800 hover:border-stone-600 transition-colors`}
              >
                <div className="w-12 h-12 rounded-xl bg-stone-800 flex items-center justify-center mb-6">
                  <pillar.icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-stone-300 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCENARIOS */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Preparación
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Escenarios <span className="text-amber-400">Difíciles</span>
            </h2>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              La mejor estrategia anticipa los obstáculos. Estas son las respuestas para cada
              escenario complejo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-stone-900/50 border border-stone-800 hover:border-amber-500/30 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold">{scenario.title}</h3>
                </div>
                <p className="text-stone-300 leading-relaxed">{scenario.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 px-6 bg-gradient-to-b from-stone-900/50 to-stone-950">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-teal-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Impacto
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Beneficios <span className="text-teal-400">Económicos</span> y Ambientales
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 p-6 rounded-2xl bg-stone-900/30 border border-stone-800"
              >
                <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-stone-300">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-teal-900/30 to-stone-900 border border-teal-500/20 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">La Solución Más Poderosa</h3>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Crear un modelo donde{" "}
              <span className="text-teal-400 font-semibold">proteger cocodrilos = proteger manglares = proteger turismo = proteger playas = proteger valor inmobiliario</span>. Los humedales previenen inundaciones, filtran agua, estabilizan costas y reducen erosión. Sin ellos, eventualmente también colapsa el turismo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Presenta la Propuesta ante{" "}
              <span className="text-teal-400">Autoridades</span>
            </h2>
            <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto">
              Estructura tu documento con diagnóstico, evidencia cartográfica, plan de mitigación,
              propuesta legal, presupuesto estimado y cronograma por fases.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
              {[
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
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-stone-900/50 border border-stone-800"
                >
                  <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold text-sm">
                    {i + 1}
                  </div>
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="mailto:contacto@programa-cocodrilos.org"
              className="inline-block px-10 py-5 bg-teal-500 text-stone-950 font-bold text-lg rounded-lg hover:bg-teal-400 transition-colors"
            >
              Impulsar el Programa
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-stone-800">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-stone-400">
            Programa Integral de Recuperación y Coexistencia de Humedales y Cocodrilos
          </p>
          <p className="text-stone-500 text-sm mt-2">
            Modelo de coexistencia ecológica, legal y económica sostenible.
          </p>
        </div>
      </footer>
    </main>
  );
}
