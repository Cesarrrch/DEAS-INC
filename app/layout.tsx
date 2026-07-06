import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Crédito Mejoravit en Chihuahua | Solicita tu precalificación",
  description:
    "Te ayudamos a revisar si puedes acceder a un crédito Mejoravit de hasta $170,000 para mejorar, remodelar o arreglar tu casa. Proceso claro y acompañado. Sujeto a precalificación y autorización.",
  openGraph: {
    title: "Crédito Mejoravit en Chihuahua | Solicita tu precalificación",
    description:
      "Hasta $170,000 para mejorar tu casa, con tasa del 11% anual y pago vía nómina. Te acompañamos en todo el proceso.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
