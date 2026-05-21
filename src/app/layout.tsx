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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Cinzel:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-[#0a0a0a] text-[#e8e6e3]">
        {children}
      </body>
    </html>
  );
}
