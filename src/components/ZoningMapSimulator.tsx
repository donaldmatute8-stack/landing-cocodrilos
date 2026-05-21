"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radar, Eye, ShieldAlert, Cpu, Navigation, RefreshCw } from "lucide-react";

type MapLayer = "gis" | "drones" | "corridors";

export function ZoningMapSimulator() {
  const [activeLayer, setActiveLayer] = useState<MapLayer>("gis");
  const [telemetryCount, setTelemetryCount] = useState(4);
  const [scanRotation, setScanRotation] = useState(0);

  // Rotate radar scan line
  useEffect(() => {
    const interval = setInterval(() => {
      setScanRotation((prev) => (prev + 2) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Simulate telemetry updating
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetryCount((prev) => {
        const diff = Math.random() > 0.5 ? 1 : -1;
        const next = prev + diff;
        return next >= 2 && next <= 6 ? next : prev;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full grid lg:grid-cols-12 gap-8 items-stretch">
      {/* MAP VIEWER (Left 7 Columns) */}
      <div className="lg:col-span-7 flex flex-col justify-between p-6 rounded-3xl bg-[#070e0b] border border-emerald-500/20 relative overflow-hidden min-h-[480px]">
        {/* Tech grid background */}
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

        {/* Outer UI Headers */}
        <div className="relative z-10 flex justify-between items-center text-xs uppercase tracking-widest text-emerald-400/70 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span>GIS-MONITOR // ACTIVE</span>
          </div>
          <div className="flex items-center gap-1 font-accent">
            <span>ZOOM: 14.5x</span>
          </div>
        </div>

        {/* SVG Interactive Map */}
        <div className="relative z-10 my-6 flex-grow flex items-center justify-center">
          <svg
            viewBox="0 0 800 500"
            className="w-full h-auto max-h-[380px] drop-shadow-[0_10px_30px_rgba(4,13,10,0.5)]"
          >
            {/* Base Geography: Sea, Lagoon, Islands, Beaches */}
            {/* Sea */}
            <path
              d="M 0 0 L 250 0 C 230 150, 280 320, 200 500 L 0 500 Z"
              fill="#020907"
              stroke="#042218"
              strokeWidth="2"
            />
            {/* Coastline Beach */}
            <path
              d="M 250 0 C 230 150, 280 320, 200 500"
              fill="none"
              stroke="#10b981"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              className="opacity-40"
            />

            {/* Land Area */}
            <rect x="250" y="0" width="550" height="500" fill="#040b08" />

            {/* Internal Lagoon System */}
            <path
              d="M 450 100 C 500 80, 600 120, 680 180 C 720 220, 750 350, 650 420 C 550 490, 480 380, 420 320 C 370 270, 390 120, 450 100 Z"
              fill="#061611"
              stroke="#10b981"
              strokeWidth="2.5"
            />

            {/* Connecting Channels */}
            <path
              d="M 420 320 C 320 340, 300 390, 230 420"
              fill="none"
              stroke="#10b981"
              strokeWidth="12"
              className="opacity-70"
            />
            <path
              d="M 520 100 C 480 50, 350 40, 245 60"
              fill="none"
              stroke="#10b981"
              strokeWidth="8"
              className="opacity-70"
            />

            {/* Developer/Urban Blocks (Hotel Zone) */}
            <rect x="270" y="120" width="90" height="70" rx="6" fill="#0c1613" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
            <rect x="300" y="220" width="80" height="80" rx="6" fill="#0c1613" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
            <rect x="680" y="40" width="100" height="80" rx="6" fill="#0c1613" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />

            {/* ======================================================== */}
            {/* LAYER 1: GIS ZONIFICATION */}
            {/* ======================================================== */}
            {activeLayer === "gis" && (
              <g>
                {/* Red Zone (Strict Ecological Conservation - Lagoon Center) */}
                <path
                  d="M 460 120 C 520 90, 580 130, 650 180 C 690 220, 710 330, 630 380 C 560 440, 500 360, 440 310 C 400 260, 410 140, 460 120 Z"
                  fill="#dc2626"
                  fillOpacity="0.15"
                  stroke="#ef4444"
                  strokeWidth="2"
                  className="animate-pulse"
                />
                {/* Yellow Zone (Amortiguamiento / Buffer - Channels & Slopes) */}
                <path
                  d="M 400 320 C 310 340, 290 390, 220 420"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="20"
                  strokeOpacity="0.2"
                />
                <path
                  d="M 520 100 C 480 50, 350 40, 245 60"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="16"
                  strokeOpacity="0.2"
                />
                {/* Green Zone (Permitted Development Area) */}
                <rect x="260" y="110" width="110" height="210" fill="#10b981" fillOpacity="0.08" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
                <rect x="670" y="30" width="120" height="110" fill="#10b981" fillOpacity="0.08" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Legend labels in Map */}
                <text x="500" y="240" fill="#fca5a5" fontSize="11" fontWeight="bold" fontFamily="monospace">ZONA ROJA (CONSERVACIÓN)</text>
                <text x="270" y="375" fill="#fcd34d" fontSize="10" fontWeight="bold" fontFamily="monospace">ZONA AMARILLA (FLUJO)</text>
                <text x="275" y="145" fill="#6ee7b7" fontSize="10" fontWeight="bold" fontFamily="monospace">ZONA VERDE (TURISMO)</text>
              </g>
            )}

            {/* ======================================================== */}
            {/* LAYER 2: DRONES & THERMAL SCANNING */}
            {/* ======================================================== */}
            {activeLayer === "drones" && (
              <g>
                {/* Radar Grid overlay lines */}
                <circle cx="550" cy="250" r="120" fill="none" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.2" />
                <circle cx="550" cy="250" r="180" fill="none" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.1" />

                {/* Sweeping Radar Line */}
                <line
                  x1="550"
                  y1="250"
                  x2={550 + 220 * Math.cos((scanRotation * Math.PI) / 180)}
                  y2={250 + 220 * Math.sin((scanRotation * Math.PI) / 180)}
                  stroke="#34d399"
                  strokeWidth="2"
                  strokeOpacity="0.7"
                />

                {/* Thermal Hotspots (Crocodiles spotted) */}
                <g className="thermal-spot">
                  {/* Spot 1 */}
                  <circle cx="480" cy="180" r="12" fill="#ef4444" fillOpacity="0.3" />
                  <circle cx="480" cy="180" r="4" fill="#f87171" />
                  <text x="495" y="184" fill="#ef4444" fontSize="9" fontFamily="monospace" fontWeight="bold">CROC_ID: 102 [A]</text>
                </g>

                <g className="thermal-spot">
                  {/* Spot 2 */}
                  <circle cx="590" cy="300" r="15" fill="#ef4444" fillOpacity="0.25" />
                  <circle cx="590" cy="300" r="5" fill="#f87171" />
                  <text x="610" y="304" fill="#ef4444" fontSize="9" fontFamily="monospace" fontWeight="bold">CROC_ID: 088 [A]</text>
                </g>

                <g className="thermal-spot">
                  {/* Spot 3 (Moving through channel) */}
                  <circle cx="360" cy="350" r="10" fill="#f59e0b" fillOpacity="0.3" />
                  <circle cx="360" cy="350" r="4" fill="#fbbf24" />
                  <text x="375" y="354" fill="#f59e0b" fontSize="9" fontFamily="monospace" fontWeight="bold">CROC_ID: 114 [J]</text>
                </g>

                {/* Drone Flight Path */}
                <path
                  d="M 280 80 Q 420 50, 520 140 T 680 320"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                />
                {/* Flying Drone representation */}
                <circle cx="520" cy="140" r="6" fill="#22d3ee" className="animate-ping" />
                <polygon points="515,137 525,137 520,147" fill="#22d3ee" />
                <text x="530" y="135" fill="#22d3ee" fontSize="9" fontFamily="monospace" fontWeight="bold">UAV-04 [TÉRMICO]</text>
              </g>
            )}

            {/* ======================================================== */}
            {/* LAYER 3: WILDLIFE CORRIDORS */}
            {/* ======================================================== */}
            {activeLayer === "corridors" && (
              <g>
                {/* Highlighted Bio-tunnels & Ecoconnections */}
                {/* Connecting corridor 1 */}
                <path
                  d="M 520 100 C 480 50, 350 40, 245 60"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="8"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
                <path
                  d="M 520 100 C 480 50, 350 40, 245 60"
                  fill="none"
                  stroke="#059669"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Connecting corridor 2 */}
                <path
                  d="M 420 320 C 320 340, 300 390, 230 420"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="12"
                  strokeLinecap="round"
                  className="animate-pulse"
                />

                {/* Flow Direction Arrows */}
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
                </marker>

                {/* Flow Indicators */}
                <path d="M 480 68 Q 380 48, 280 55" fill="none" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
                <path d="M 390 330 Q 330 350, 250 400" fill="none" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* Safe Overpasses / Underpasses Icons */}
                <g transform="translate(320, 33)">
                  <rect x="0" y="0" width="35" height="15" rx="3" fill="#040b08" stroke="#10b981" strokeWidth="1" />
                  <text x="6" y="11" fill="#10b981" fontSize="7" fontWeight="bold" fontFamily="monospace">TÚNEL</text>
                </g>

                <g transform="translate(320, 375)">
                  <rect x="0" y="0" width="35" height="15" rx="3" fill="#040b08" stroke="#10b981" strokeWidth="1" />
                  <text x="6" y="11" fill="#10b981" fontSize="7" fontWeight="bold" fontFamily="monospace">PASO</text>
                </g>

                <text x="240" y="30" fill="#34d399" fontSize="10" fontWeight="bold" fontFamily="monospace">ECOLAGO CONECTOR</text>
                <text x="200" y="450" fill="#34d399" fontSize="10" fontWeight="bold" fontFamily="monospace">COMPUERTA DE FLUJO</text>
              </g>
            )}
          </svg>
        </div>

        {/* Real-time telemetry log at the bottom */}
        <div className="relative z-10 p-4 rounded-xl bg-[#030605] border border-emerald-500/10 flex justify-between items-center text-xs font-mono">
          <div className="flex gap-4">
            <span className="text-stone-500">UAVS: <strong className="text-cyan-400">1 ACTIVO</strong></span>
            <span className="text-stone-500">SENS_ARRAY: <strong className="text-emerald-400">OK</strong></span>
            <span className="text-stone-500">CONEO_ALERT: <strong className="text-stone-300">0</strong></span>
          </div>
          <span className="text-emerald-500/80 animate-pulse">● TELEMETRY ONLINE</span>
        </div>
      </div>

      {/* CONTROL & DETAIL PANEL (Right 5 Columns) */}
      <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-[#08120e] border border-emerald-500/20">
        <div>
          <span className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" /> Simulador de Monitoreo
          </span>
          <h3 className="text-3xl font-bold mb-3">Red de Control Ambiental</h3>
          <p className="text-stone-400 text-sm mb-6 leading-relaxed">
            Nuestra propuesta no depende de la especulación. Empleamos tecnología de punta para segregar
            las interacciones y proteger el desarrollo turístico sin sacrificar la fauna local.
          </p>

          {/* Interactive Layer Switches */}
          <div className="space-y-3 mb-8">
            {[
              {
                id: "gis",
                title: "Zonificación Ecológica (GIS)",
                desc: "Separa el humedal en 3 franjas de riesgo específicas.",
                icon: Radar,
                color: "text-emerald-400",
                borderColor: "border-emerald-500/30",
              },
              {
                id: "drones",
                title: "Monitoreo por Drones Térmicos",
                desc: "Localización satelital y conteo de individuos.",
                icon: Eye,
                color: "text-cyan-400",
                borderColor: "border-cyan-500/30",
              },
              {
                id: "corridors",
                title: "Corredores Biológicos Fluviales",
                desc: "Pistas acuáticas y túneles bajo el cemento.",
                icon: ShieldAlert,
                color: "text-emerald-400",
                borderColor: "border-emerald-500/30",
              },
            ].map((layer) => {
              const isActive = activeLayer === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id as MapLayer)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? "bg-[#0c2219] border-emerald-500/50 shadow-[0_4px_20px_rgba(16,185,129,0.15)]"
                      : "bg-[#040a08] border-stone-800 hover:border-emerald-500/20"
                  }`}
                >
                  <div className="flex gap-4 items-start">
                    <div
                      className={`p-2 rounded-lg ${
                        isActive ? "bg-emerald-500/20" : "bg-stone-900"
                      }`}
                    >
                      <layer.icon className={`w-5 h-5 ${isActive ? layer.color : "text-stone-500"}`} />
                    </div>
                    <div>
                      <h4
                        className={`font-semibold text-sm ${
                          isActive ? "text-white" : "text-stone-300"
                        }`}
                      >
                        {layer.title}
                      </h4>
                      <p className="text-xs text-stone-500 mt-1">{layer.desc}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic description footer depending on layer */}
        <div className="p-4 rounded-xl bg-[#040a08] border border-stone-800">
          <AnimatePresence mode="wait">
            {activeLayer === "gis" && (
              <motion.div
                key="gis-desc"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-xs space-y-2"
              >
                <div className="flex justify-between items-center font-bold text-stone-300 border-b border-stone-800 pb-1.5 mb-1.5">
                  <span>CAPA: MAPEO GIS & ANP</span>
                  <span className="text-emerald-400">PRECISIÓN 99.4%</span>
                </div>
                <p className="text-stone-500 leading-relaxed">
                  Establece un polígono blindado legalmente como Área Natural Protegida. Las zonas de construcción quedan estrictamente delimitadas fuera de los nidos de manglares catalogados por satélite.
                </p>
              </motion.div>
            )}
            {activeLayer === "drones" && (
              <motion.div
                key="drones-desc"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-xs space-y-2"
              >
                <div className="flex justify-between items-center font-bold text-stone-300 border-b border-stone-800 pb-1.5 mb-1.5">
                  <span>CAPA: TELEMETRÍA TÉRMICA FLIR</span>
                  <span className="text-cyan-400">3 AVISTAMIENTOS</span>
                </div>
                <p className="text-stone-500 leading-relaxed">
                  Cámaras FLIR térmicas en drones rastrean el calor corporal. Identifican automáticamente la especie, tamaño y trayectoria de cocodrilos en canales urbanos para despachar equipos si se acercan a zonas de riesgo.
                </p>
              </motion.div>
            )}
            {activeLayer === "corridors" && (
              <motion.div
                key="corridors-desc"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-xs space-y-2"
              >
                <div className="flex justify-between items-center font-bold text-stone-300 border-b border-stone-800 pb-1.5 mb-1.5">
                  <span>CAPA: CORREDORES & TÚNELES</span>
                  <span className="text-emerald-400">FLUJO CONTINUO</span>
                </div>
                <p className="text-stone-500 leading-relaxed">
                  Conexión ecológica garantizada mediante alcantarillado adaptado, puentes secos y esclusas hidráulicas. Permiten que los cocodrilos sigan sus patrones de migración sin interferir en la superficie humana.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
