/* eslint-disable react/no-unescaped-entities */
import { AppHeader } from "./AppHeader/AppHeader";
import "./globals.css";
import { Inter } from "next/font/google";
import AppFooter from "./AppFooter.tsx/AppFooter";
import logo from "../images/logo.png";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "L'occitanerie, ferme pédagogique",
  description: "Ferme pédagogique aux portes de Toulouse",
  openGraph: {
    title: "L'occitanerie, ferme pédagogique",
    description: "Ferme pédagogique aux portes de Toulouse",
    url: "https://loccitanerie.fr",
    siteName: "L'occitanerie",
    images: [
      {
        url: "https://loccitanerie.fr/og-image.png", // Must be an absolute URL
        width: 1200,
        height: 600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Image
          className="site-logo"
          src={logo}
          alt="Un logo avec plusieurs animaux dessinés"
        />
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
