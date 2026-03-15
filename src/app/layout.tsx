import "./globals.css";
import type { Metadata } from "next";
import { Header } from "../components/Header";
import { ScrollToTop } from "../components/ScrollToTop";
import { Footer } from "../components/Footer";
import { Space_Grotesk, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-family",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body-family",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono-family",
  weight: ["400", "500", "600"],
  display: "swap",
});
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Leonardo Nunes | Desenvolvedor de Software",
    template: "%s | Leonardo Nunes",
  },
  description:
    "Portfólio de Leonardo Nunes, desenvolvedor de software focado em aplicações web modernas, performance, SEO e experiência do usuário.",
  keywords: [
    "Leonardo Nunes",
    "desenvolvedor de software",
    "desenvolvedor full stack",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "portfólio",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Leonardo Nunes | Desenvolvedor de Software",
    description:
      "Conheça os projetos, experiências e habilidades de Leonardo Nunes no desenvolvimento de soluções web modernas.",
    url: siteUrl,
    siteName: "Leonardo Nunes",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prévia do portfólio de Leonardo Nunes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Nunes | Desenvolvedor de Software",
    description:
      "Portfólio com projetos, experiência profissional e tecnologias de Leonardo Nunes.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
      >
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
