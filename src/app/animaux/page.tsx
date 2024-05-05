/* eslint-disable react/no-unescaped-entities */
import styles from "../page.module.css";
import animals from "../../images/home.jpg";
import Image from "next/image";
import { AnimalsData } from "@/content/animals/animals";
import AnimalCard from "./AnimalCard";

export default function Page() {
  const AnimalCards = AnimalsData.map((animal) => {
    return <AnimalCard key={animal.name} {...animal} />;
  });
  return (
    <main className={styles.main}>
      <Image
        className="page-cover-image"
        src={animals}
        alt="Une vue aérienne d'une ferme"
      />
      <div className="title-container">
        <svg
          className="cover-text-background"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#000000ac"
            fill-opacity="0.8"
            d="M0,160L120,138.7C240,117,480,75,720,85.3C960,96,1200,160,1320,192L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
        <div className="page-cover-image-text">
          <div className="standard-section-title">Découvrez nos animaux</div>
          <span className="cover-paragraph">
            Ânes, Cochons, Poules et canards, Moutons, Boucs... et plus encore!
          </span>
          <span className="cover-paragraph">
            Ils vous attendent, venez les découvrir :)
          </span>
        </div>
      </div>
      {AnimalCards}
    </main>
  );
}
