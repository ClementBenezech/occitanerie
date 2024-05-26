/* eslint-disable react/no-unescaped-entities */
import { AppHeader } from "./AppHeader/AppHeader";
import "./globals.css";
import { Inter } from "next/font/google";
import AppFooter from "./AppFooter.tsx/AppFooter";
import logo from "../images/logo.png";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "L'occitanerie",
  description: "Ferme pédagogique",
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
