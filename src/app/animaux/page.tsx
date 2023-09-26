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
      <div className="page-cover-image-text">
        <div className="standard-section-title">Découvrez nos animaux</div>
        <span className="cover-paragraph">
          Ânes, Cochons, Poules et canards, Moutons, Boucs... et plus encore!
        </span>
        <span className="cover-paragraph">
          Ils vous attendent, venez les découvrir :)
        </span>
      </div>
      {AnimalCards}
    </main>
  );
}
