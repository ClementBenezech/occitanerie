/* eslint-disable react/no-unescaped-entities */
import homeImg from "../images/home.jpg";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className="page-cover-image"
        src={homeImg}
        alt="Une vue aérienne d'une ferme"
      />
      <div className="page-cover-image-text">
        <div className="standard-section-title">Bienvenue à la ferme!</div>
        <span className="standard-paragraph">
          L’Occit’Ânerie est une petite ferme pédagogique qui se situe sur la
          commune de Le Born, dans les coteaux de Villemur-sur-Tarn.{" "}
        </span>
        <span className="standard-paragraph">
          Sur un terrain de presque 4 Ha, au bout d’un chemin, en lisière de
          forêt, venez vous ressourcer dans cet écrin de verdure en compagnie de
          nos animaux
        </span>
        {/* <span className="standard-paragraph">
          La structure permet l’accueil de petits groupes, toute l’année.
        </span>
        <span className="standard-paragraph">Uniquement sur réservation.</span> */}
      </div>
    </main>
  );
}
