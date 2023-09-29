/* eslint-disable react/no-unescaped-entities */
import homeImg from "../../images/homeDonkeys.png";
import donkeys from "../../images/tirelalangue.jpg";
import styles from "./../page.module.css";
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
      <div className="page-content">
        <div className="standard-paragraph black">
          Notre approche est centrée sur l'accueil de petits groupes de publics
          spécifiques (Structures spécialisées, Petite enfance, Maisons de
          retraites...),
        </div>
        <div className="standard-paragraph black">
          Nous vous proposons de nombreuses activités autour des animaux, de
          l'agriculture (maraîchage), et de la vie et du travail à la ferme en
          général.
        </div>
        <div className="standard-paragraph black">
          Consultez notre page "activités" pour en savoir plus :)
        </div>

        <Image
          className="standard-content-image"
          src={donkeys}
          alt="Des ânes contents qui tirent la langue"
        />
        <div className="standard-paragraph black">
          De nombreux espaces extérieurs et intérieurs ont été aménagés pour le
          confort des animaux... et le votre!
        </div>
        <div className="bulletpoints-container black">
          <div>- les prés</div>
          <div>- Un hectare de forêt avec des coins pique-nique</div>
          <div>- L’étang avec ses poissons et grenouilles</div>
          <div>- Le potager</div>
          <div>- La grande serre</div>
          <div>- Les écuries</div>
          <div>- Le poulailler</div>
          <div>- la grange</div>
          <div>
            - les deux salles pédagogiques (dont une chauffée avec espace
            cuisine)
          </div>
          <div>- l’espace de pansage extérieur</div>
        </div>
      </div>
    </main>
  );
}
