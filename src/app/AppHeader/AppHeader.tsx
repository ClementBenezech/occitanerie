/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="menu-container">
        <Link className="menu-item" href="/home">
          Home
        </Link>
        <Link className="menu-item" href="/activites">
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
