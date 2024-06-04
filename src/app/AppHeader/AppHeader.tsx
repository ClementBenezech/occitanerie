"use client";

/* eslint-disable react/no-unescaped-entities */
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export const AppHeader = () => {
  const [isMobileMenuOpen, setIsMobilemenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobilemenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="app-header">
      <FontAwesomeIcon
        onClick={() => toggleMenu()}
        icon={faBars}
        className="mobile-menu-trigger-icon"
      />
      {isMobileMenuOpen && (
        <div className="mobile-menu-container" onClick={() => toggleMenu()}>
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
      )}
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
