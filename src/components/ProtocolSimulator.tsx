"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Users, Scale, AlertOctagon, ArrowRight, ShieldCheck, Timer } from "lucide-react";

interface ProtocolStep {
  title: string;
  actor: string;
  details: string;
}

interface Scenario {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  responseTime: string;
  riskLevel: "CRÍTICO" | "MODERADO" | "LEGAL";
  colorClass: string;
  badgeBg: string;
  steps: ProtocolStep[];
}

const scenarios: Scenario[] = [
  {
    id: "beach-sighting",
    title: "Avistamiento Crítico en Playa",
    description: "Un ejemplar de 3.2 metros es reportado en la playa frente a camastros turísticos al amanecer.",
    icon: ShieldAlert,
    responseTime: "14 minutos",
    riskLevel: "CRÍTICO",
    colorClass: "text-red-400 border-red-500/30",
    badgeBg: "bg-red-950 text-red-400 border-red-500/40",
    steps: [
      {
        title: "Perímetro Físico y Evacuación",
        actor: "Seguridad Privada + Protección Civil",
        details: "Cierre de la playa de manera discreta. Establecimiento de perímetro temporal de 50m sin generar pánico en huéspedes.",
      },
      {
        title: "Evaluación y Captura Selectiva",
        actor: "Biólogos del Programa Cocodrilos",
        details: "Llegada al sitio con equipo de sujeción especializado. Se evalúa el sexo, marcas de identificación y estado de salud.",
      },
      {
        title: "Reubicación Satelital Inmediata",
        actor: "Unidad Ecológica Móvil",
        details: "Mapeo del ejemplar, fijación de chip de rastreo GPS y liberación en la Zona Roja de conservación a 12km de distancia.",
      },
      {
        title: "Certificación y Reapertura",
        actor: "Coordinación de Ecología del Hotel",
        details: "Firma de bitácora científica, confirmación de playa segura mediante dron FLIR y levantamiento de la restricción.",
      },
    ],
  },
  {
    id: "developer-pressure",
    title: "Presión Inmobiliaria Extrema",
    description: "Una constructora inicia la nivelación con maquinaria en el límite de un manglar protegido sin permisos.",
    icon: Scale,
    responseTime: "Inmediato (Legal)",
    riskLevel: "LEGAL",
    colorClass: "text-amber-400 border-amber-500/30",
    badgeBg: "bg-amber-950 text-amber-400 border-amber-500/40",
    steps: [
      {
        title: "Evidencia Satelital y Dron",
        actor: "Auditor Ambiental del Programa",
        details: "Vuelo de dron con GPS para registrar coordenadas del desmonte e ingresar datos a la plataforma legal con marca de tiempo.",
      },
      {
        title: "Denuncia Federal y Suspensión",
        actor: "Gabinete Jurídico PROFEPA/SEMARNAT",
        details: "Interposición inmediata de suspensión provisional. Agentes federales acuden para la colocación de sellos de CLAUSURA.",
      },
      {
        title: "Medidas de Compensación Forzada",
        actor: "Tribunal Ambiental Federal",
        details: "Condena a la constructora a restaurar 3x el área dañada, plantar mangle rojo y construir el bio-túnel conector planificado.",
      },
    ],
  },
  {
    id: "feeding-guests",
    title: "Turistas Alimentando Fauna",
    description: "Huéspedes de una marina son filmados arrojando comida a cocodrilos para tomar fotografías desde muelles.",
    icon: Users,
    responseTime: "22 minutos",
    riskLevel: "MODERADO",
    colorClass: "text-emerald-400 border-emerald-500/30",
    badgeBg: "bg-emerald-950 text-emerald-400 border-emerald-500/40",
    steps: [
      {
        title: "Retiro y Apercibimiento",
        actor: "Oficiales de Seguridad Turística",
        details: "Intervención de cortesía, detención de la actividad y explicación de los riesgos de la habituación alimentaria.",
      },
      {
        title: "Multa Administrativa Hotelera",
        actor: "Administración de la Marina",
        details: "Cargo directo a la cuenta de la habitación por infracción al reglamento interno de coexistencia de fauna silvestre.",
      },
      {
        title: "Instalación de Barrera Física y Señalética",
        actor: "Mantenimiento Técnico",
        details: "Instalación de rejas perimetrales anti-contacto en muelles flotantes y colocación de carteles informativos en 3 idiomas.",
      },
    ],
  },
];

export function ProtocolSimulator() {
  const [selectedId, setSelectedId] = useState<string>("beach-sighting");
  const activeScenario = scenarios.find((s) => s.id === selectedId) || scenarios[0];

  return (
    <div className="w-full grid lg:grid-cols-12 gap-8 items-stretch">
      {/* SCENARIOS LIST (Left 4 Columns) */}
      <div className="lg:col-span-4 flex flex-col gap-3">
        {scenarios.map((sc) => {
          const isActive = sc.id === selectedId;
          const Icon = sc.icon;
          return (
            <button
              key={sc.id}
              onClick={() => setSelectedId(sc.id)}
              className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                isActive
                  ? "bg-[#091a13] border-emerald-500/40 shadow-[0_4px_25px_rgba(16,185,129,0.15)]"
                  : "bg-[#08120e] border-emerald-500/10 hover:border-emerald-500/25"
              }`}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className={`p-2.5 rounded-xl ${isActive ? "bg-emerald-500/20" : "bg-stone-900/50"}`}>
                  <Icon className={`w-5 h-5 ${isActive ? "text-emerald-400" : "text-stone-500"}`} />
                </div>
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${sc.badgeBg}`}>
                  {sc.riskLevel}
                </span>
              </div>
              <h4 className={`font-bold text-base mb-1.5 ${isActive ? "text-white" : "text-stone-300"}`}>
                {sc.title}
              </h4>
              <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                {sc.description}
              </p>
            </button>
          );
        })}

        {/* Informative alert box */}
        <div className="mt-4 p-5 rounded-2xl bg-[#090b0a] border border-red-500/20 flex gap-3.5 items-start">
          <AlertOctagon className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div className="text-xs">
            <h5 className="font-bold text-red-400 mb-1">PROTOCOLO NACIONAL</h5>
            <p className="text-stone-500 leading-relaxed">
              Todos los protocolos cumplen con el Plan de Manejo de la SEMARNAT y las directrices internacionales del Grupo de Especialistas en Cocodrilos (IUCN).
            </p>
          </div>
        </div>
      </div>

      {/* PROTOCOL STEPS FLOW (Right 8 Columns) */}
      <div className="lg:col-span-8 p-8 rounded-3xl bg-[#08120e] border border-emerald-500/20 flex flex-col justify-between">
        <div>
          {/* Header of details */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-500/10 pb-5 mb-6">
            <div>
              <span className="text-xs text-stone-500 uppercase tracking-widest block mb-1">Escenario Operativo</span>
              <h3 className="text-2xl font-bold text-white">{activeScenario.title}</h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-stone-400 bg-[#050c0a] border border-stone-800 px-3 py-1.5 rounded-lg">
                <Timer className="w-4 h-4 text-emerald-400" />
                <span>Tiempo: <strong>{activeScenario.responseTime}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-stone-400 bg-[#050c0a] border border-stone-800 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Estado: <strong className="text-emerald-400">Certificado</strong></span>
              </div>
            </div>
          </div>

          {/* Steps Timeline Grid */}
          <div className="relative pl-6 space-y-6 border-l-2 border-emerald-500/20 my-2">
            <AnimatePresence mode="popLayout">
              {activeScenario.steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Glowing Node on Line */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#08120e] border-2 border-emerald-400 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                    <div className="sm:w-1/3">
                      <span className="text-xs font-mono text-emerald-500 font-bold block mb-0.5">PASO 0{index + 1}</span>
                      <h4 className="font-bold text-sm text-stone-200">{step.title}</h4>
                    </div>
                    <div className="sm:w-2/3">
                      <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-stone-500 bg-[#040b08] px-2 py-0.5 rounded mb-2">
                        Responsable: {step.actor}
                      </span>
                      <p className="text-xs text-stone-400 leading-relaxed">{step.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Action Call to action footer */}
        <div className="mt-8 pt-5 border-t border-emerald-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500 max-w-lg leading-relaxed">
            Nuestros planes de respuesta rápida están entrenados, registrados ante Semarnat y listos para implementarse en hoteles, clubes de golf y marinas residenciales.
          </p>
          <a
            href="#contacto"
            className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 group font-mono"
          >
            SOLICITAR PLAN DE EMERGENCIA <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
