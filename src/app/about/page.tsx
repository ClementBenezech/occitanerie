/* eslint-disable react/no-unescaped-entities */
import styles from "../page.module.css";
import farmers from "../../images/farmers.jpg";
import Image from "next/image";
import farmMap from "../../images/plan-de-la-ferme.png";

export default function Page() {
  return (
    <main className={styles.main}>
      <Image
        className="page-cover-image"
        src={farmers}
        alt="Des bons gros farmers"
      />
      <Image
        className="standard-content-image"
        src={farmMap}
        alt="Un plan qui montre les différentes zones de la ferme pédagogique"
      />
    </main>
  );
}
