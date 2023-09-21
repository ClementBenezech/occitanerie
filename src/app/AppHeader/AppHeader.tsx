/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import logo from "../../images/logo.png";
import Image from "next/image";

export const AppHeader = () => {
  return (
    <header className="app-header">
      <Image
        className="site-logo"
        src={logo}
        alt="Un logo avec plusieurs animaux dessinés"
      />
      <div className="menu-container">
        <Link href="/home">Home</Link>
        <Link href="/about">Nos activités</Link>
        <Link href="/animaux">Les animaux</Link>
        <Link href="/about">A propos</Link>
      </div>
    </header>
  );
};
