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
        <Link className="menu-item" href="/home">
          Home
        </Link>
        <Link className="menu-item" href="/about">
          Nos activités
        </Link>
        <Link className="menu-item" href="/animaux">
          Les animaux
        </Link>
        <Link className="menu-item" href="/about">
          A propos
        </Link>
      </div>
    </header>
  );
};
