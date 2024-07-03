/* eslint-disable react/no-unescaped-entities */
import styles from "../page.module.css";
import animals from "../../images/animals.jpg";
import Image from "next/image";
import { AnimalsData } from "@/content/animals/animals";
import AnimalCard from "./AnimalCard";

export const metadata = {
  title: "L'occitanerie, ferme pédagogique",
  description: "Decouvrez nos animaux",
  openGraph: {
    title: "L'occitanerie",
    description: "Decouvrez nos animaux",
    url: "https://loccitanerie.fr/animaux",
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
  other: {
    "google-site-verification": "buunzNLCVGPGAMKr0WT0oi_YDPlUMBzJ7CdCj9l9E7E",
  },
};

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
      <div className="standard-section-title">Découvrez nos animaux</div>
      <div className="title-container">
        <div className="page-cover-image-text">
          <span className="cover-paragraph">
            L’Occit’Ânerie s’engage dans la protection animale et a donc pris la
            décision d’être une ferme zéro naissances : tous nos mâles (poilus)
            sont castrés. Ils présentent donc un caractère doux et stable et
            n’ont pas de forte odeur.
          </span>
          <span className="cover-paragraph">
            Petits et grands, à plumes ou à poils, sur deux ou quatre pattes...
            Il y en a pour tous les goûts. Venez rencontrer tous nos animaux !!
          </span>
        </div>
      </div>
      <div className="animal-cards-container">{AnimalCards}</div>
    </main>
  );
}
