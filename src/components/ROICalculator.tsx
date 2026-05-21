"use client";

import React, { useState } from "react";
import { TrendingUp, ShieldAlert, Award, AlertTriangle, RefreshCw } from "lucide-react";

export function ROICalculator() {
  const [rooms, setRooms] = useState<number>(200);
  const [wetlands, setWetlands] = useState<number>(10);

  // Math variables
  // Standard base value of a high-end resort room in tourist zones is ~$200k USD
  const basePropertyVal = rooms * 180000;
  // Plusvalia of +45% on the preserved ecological premium segment
  const plusvaliaPremium = basePropertyVal * 0.45;
  
  // Standard PROFEPA/SEMARNAT wetland destruction fines are massive, up to $350k USD including legal defense
  const potentialFinesSaved = wetlands * 25000 + 120000;

  // Safety rating calculation (more wetlands + correct zoning = much higher safety index)
  // Safety index starts at 20% and goes up to 98% based on rooms-to-wetland ratio
  const ratio = (wetlands / rooms) * 100;
  const safetyPercentage = Math.min(98, Math.round(40 + ratio * 15));

  // Format currency
  const formatUSD = (val: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="w-full grid lg:grid-cols-12 gap-8 items-stretch">
      {/* INPUT SLIDERS PANEL (Left 5 Columns) */}
      <div className="lg:col-span-5 p-8 rounded-3xl bg-[#08120e] border border-emerald-500/20 flex flex-col justify-between">
        <div>
          <span className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5" /> Simulador de Impacto
          </span>
          <h3 className="text-3xl font-bold mb-3">Modelado de Retorno Verde</h3>
          <p className="text-stone-400 text-sm mb-8 leading-relaxed">
            Ajusta los parámetros de tu desarrollo turístico o residencial para calcular el incremento del valor de mercado y la reducción del riesgo operativo.
          </p>

          <div className="space-y-6">
            {/* Slider 1: Rooms */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-stone-300">Capacidad del Resort</span>
                <span className="text-emerald-400 font-mono font-bold">{rooms} Habitaciones / Villas</span>
              </div>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={rooms}
                onChange={(e) => setRooms(parseInt(e.target.value))}
                className="w-full h-1 bg-stone-850 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] text-stone-600 font-mono">
                <span>50 HAB.</span>
                <span>500 HAB.</span>
              </div>
            </div>

            {/* Slider 2: Wetlands */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-stone-300">Humedal/Manglar Conservado</span>
                <span className="text-emerald-400 font-mono font-bold">{wetlands} Hectáreas (ANP)</span>
              </div>
              <input
                type="range"
                min="2"
                max="40"
                step="1"
                value={wetlands}
                onChange={(e) => setWetlands(parseInt(e.target.value))}
                className="w-full h-1 bg-stone-850 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] text-stone-600 font-mono">
                <span>2 HA.</span>
                <span>40 HA.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-[#040a08] border border-emerald-500/10 flex gap-3 items-start">
          <AlertTriangle className="w-4.5 h-4.5 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[11px] text-stone-500 leading-relaxed">
            Las estimaciones de plusvalía y multas se basan en estudios históricos del Banco Mundial sobre el valor económico de los servicios ecosistémicos de manglares en el Caribe y multas federales mexicanas.
          </p>
        </div>
      </div>

      {/* METRICS & RESULT DASHBOARD (Right 7 Columns) */}
      <div className="lg:col-span-7 p-8 rounded-3xl bg-[#070e0b] border border-emerald-500/20 flex flex-col justify-between relative overflow-hidden">
        {/* Tech grid background */}
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

        {/* Dashboard Title */}
        <div className="relative z-10 flex justify-between items-center text-xs uppercase tracking-widest text-emerald-400/70 font-mono mb-6">
          <span>METRICS_REPORT // ECO_IN VESTMENT</span>
          <span>CURRENCY: USD</span>
        </div>

        {/* Grid of Results */}
        <div className="relative z-10 grid sm:grid-cols-2 gap-6 mb-6">
          {/* Card 1: Value Added */}
          <div className="p-5 rounded-2xl bg-[#030605] border border-emerald-500/15">
            <span className="text-xs text-stone-500 block mb-1">Plusvalía Inmobiliaria (+45%)</span>
            <p className="text-3xl font-black text-gradient font-mono">{formatUSD(plusvaliaPremium)}</p>
            <p className="text-[11px] text-emerald-400/80 mt-2 font-mono flex items-center gap-1">
              <span>★ Premium Ecológico Certificado</span>
            </p>
          </div>

          {/* Card 2: Fines Avoided */}
          <div className="p-5 rounded-2xl bg-[#030605] border border-emerald-500/15">
            <span className="text-xs text-stone-500 block mb-1">Sanciones Federales Evitadas</span>
            <p className="text-3xl font-black text-gradient-gold font-mono">{formatUSD(potentialFinesSaved)}</p>
            <p className="text-[11px] text-amber-400/80 mt-2 font-mono flex items-center gap-1">
              <span>⚠ Riesgo de Clausura Mitigado</span>
            </p>
          </div>

          {/* Card 3: Incident Risk Reduction */}
          <div className="p-5 rounded-2xl bg-[#030605] border border-emerald-500/15">
            <span className="text-xs text-stone-500 block mb-1">Reducción de Incidentes de Fauna</span>
            <p className="text-4xl font-black text-red-400 font-mono">-80%</p>
            <p className="text-[11px] text-stone-500 mt-2">
              Con barreras biológicas, monitoreo FLIR y reubicación inteligente activa.
            </p>
          </div>

          {/* Card 4: Ecological Safety Index */}
          <div className="p-5 rounded-2xl bg-[#030605] border border-emerald-500/15 flex flex-col justify-between">
            <div>
              <span className="text-xs text-stone-500 block mb-1">Índice de Coexistencia Segura</span>
              <div className="flex justify-between items-baseline mt-1">
                <span className="text-3xl font-black text-emerald-400 font-mono">{safetyPercentage}%</span>
                <span className="text-[10px] text-emerald-500 font-bold tracking-widest font-mono">
                  {safetyPercentage > 85 ? "EXCELENTE" : safetyPercentage > 60 ? "ÓPTIMO" : "ACEPTABLE"}
                </span>
              </div>
            </div>
            {/* Mini Progress Bar */}
            <div className="w-full h-1.5 bg-stone-900 rounded-full overflow-hidden mt-3">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
                style={{ width: `${safetyPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Certificate stamp box */}
        <div className="relative z-10 p-6 rounded-2xl bg-[#091a13] border border-emerald-500/30 flex flex-col sm:flex-row gap-5 items-center justify-between">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Certificación de Coexistencia Segura</h4>
              <p className="text-xs text-stone-400 leading-relaxed mt-0.5">
                Otorga a tu desarrollo hotelero la placa de sustentabilidad internacional y el sello verde de la SEMARNAT.
              </p>
            </div>
          </div>
          <a
            href="#contacto"
            className="btn-primary text-xs py-3 px-6 shrink-0 w-full sm:w-auto text-center"
          >
            Certificar mi Desarrollo
          </a>
        </div>
      </div>
    </div>
  );
}
