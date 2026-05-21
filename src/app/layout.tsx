import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Programa Integral de Recuperación y Coexistencia de Humedales y Cocodrilos",
  description: "Transformando conflictos entre desarrollo humano y fauna silvestre en modelos de coexistencia ecológica, legal y económicamente sostenibles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-stone-950 text-stone-100">
        {children}
      </body>
    </html>
  );
}
