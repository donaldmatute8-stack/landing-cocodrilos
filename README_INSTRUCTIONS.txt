INSTRUCCIONES PARA SOFÍA — PROYECTO COCODRILOS
===============================================

Este es el proyecto Landing Cocodrilos.

📍 REPO: github.com/donaldmatute8-stack/landing-cocodrilos
📍 URL: https://landing-cocodrilos.vercel.app

⚠️ REGLAS FUERTES APRENDIDAS (NO REPETIR ERRORES):

1. Hero SIN split-screen. 
   — Foto fullscreen real + overlay oscuro + tipografía masiva centrada.
   — NO: grid grid-cols-2 con texto izq y foto der.

2. NUNCA glassmorphism.
   — NO usar: bg-white/5, bg-white/[0.06], backdrop-blur.
   — SÍ usar: fondos sólidos oscuros (#030507, #080c0e)

3. NUNCA grid de tarjetitas para todo.
   — Alterna layouts: stats bar, editorial 2-col, strips horizontales, números gigantes.
   — NO uses: grid de cards con bordes blancos para 7+ items.

4. Botones con sombra y brillo.
   — Sombra visible: box-shadow
   — Shine effect en hover con pseudo-elemento ::after
   — Hover translateY(-3px)

5. Márgenes enormes.
   — Entre secciones: py-32 (128px) o más.
   — NO queden pegadas.

6. Bordes coloridos o ninguno.
   — SÍ: border-teal-500/20
   — NO: border-white/[0.06] (invisible, se ve sucio)

7. Footer con info real.
   — Grid multi-columna: logo+desc, instituciones, contacto.
   — NO: footer minimalista de 2 líneas.

8. Tipografía como protagonista.
   — Títulos: text-7xl, text-8xl, text-9xl
   — tracking-tighter para estilo editorial
   — Subtítulos: text-stone-400 (NO blanco puro)

9. Fuentes: Playfair Display para títulos, Inter para cuerpo.

10. Animaciones: Framer Motion con useInView para scroll.

📖 Ver guía completa en:
~/.openclaw/agents/sofia-workspace/memory/UI-UX-LANDING-GUIDE.md
