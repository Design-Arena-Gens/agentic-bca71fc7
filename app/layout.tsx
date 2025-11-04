import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = Lato({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-lato',
});

const playfair = Playfair_Display({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Champisphère - Champignons Bio de Forbach",
  description: "Découvrez nos champignons biologiques cultivés localement à Forbach : Pleurotes, Crinière de Lion, Pleurotes du Panicaut et Pleurotes Jaunes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${lato.variable} ${playfair.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
