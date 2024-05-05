/* eslint-disable react/no-unescaped-entities */
import homeImg from "../../images/homeDonkeys.png";
import donkeys from "../../images/tirelalangue.jpg";
import farmMap from "../../images/plan-de-la-ferme.png";
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
          L’Occit’Ânerie est une ferme pédagogique située sur la commune de Le
          Born, dans les coteaux de Villemur-sur-Tarn.
        </span>
        <span className="standard-paragraph">
          Venez découvrir ce lieu privilégié, prendre le temps d’écouter notre
          belle nature, loin des bruits de la route et des villes. Vous pourrez
          y rencontrer nos animaux et découvrir tout un espace consacré au
          maraîchage. C’est aussi l’occasion d’observer la faune et la flore
          locale grâce au différents éco-systèmes présents sur le site
          (prairies, étang, forêt).
        </span>
        {/* <span className="standard-paragraph">
          La structure permet l’accueil de petits groupes, toute l’année.
        </span>
        <span className="standard-paragraph">Uniquement sur réservation.</span> */}
      </div>
      <div className="page-content">
        <div className="standard-paragraph black">
          Notre objectif premier est de mettre en lien les visiteurs avec les
          animaux de la ferme mais aussi les végétaux grâce à la serre, au
          potager et au verger.
        </div>
        <div className="standard-paragraph black">
          Nous proposons de nombreuses activités autour des animaux, du
          maraîchage et du “travail” à la ferme en général. Différents ateliers
          sont également proposés tous les mois, en fonction des saisons et de
          ce que nous offre la ferme et la nature.
        </div>
        <div className="standard-paragraph black">
          Tout un panel de formules a été créé, pour différents effectifs de
          groupe, pour les structures et les particuliers.
        </div>
        <div className="standard-paragraph black">
          Mais tous les projets sont envisageables... N’hésitez pas à nous faire
          vos demandes que nous prendrons le temps d’étudier avec vous.
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

        <Image
          className="standard-content-image"
          src={farmMap}
          alt="Un plan qui montre les différentes zones de la ferme pédagogique"
        />
      </div>
    </main>
  );
}
