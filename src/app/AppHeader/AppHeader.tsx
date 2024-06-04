"use client";

/* eslint-disable react/no-unescaped-entities */
import {
  faBars,
  faHorse,
  faLeaf,
  faHouseChimneyWindow,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export const AppHeader = () => {
  const [isMobileMenuOpen, setIsMobilemenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobilemenuOpen(!isMobileMenuOpen);
  };

  const delayedToggleMenu = () => {
    setTimeout(() => {
      setIsMobilemenuOpen(!isMobileMenuOpen);
    }, 100);
  };

  return (
    <header className="app-header">
      <FontAwesomeIcon
        onClick={() => toggleMenu()}
        icon={faBars}
        className="mobile-menu-trigger-icon"
      />
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-container"
          onClick={() => delayedToggleMenu()}
        >
          <Link className="menu-item" href="/home">
            <FontAwesomeIcon icon={faHouseChimneyWindow}></FontAwesomeIcon>Home
          </Link>
          <Link className="menu-item" href="/activites">
            <FontAwesomeIcon icon={faLeaf}></FontAwesomeIcon>Nos activités
          </Link>
          <Link className="menu-item" href="/animaux">
            <FontAwesomeIcon icon={faHorse}></FontAwesomeIcon>Les animaux
          </Link>
          <Link className="menu-item" href="/about">
            <FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon>A propos
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
