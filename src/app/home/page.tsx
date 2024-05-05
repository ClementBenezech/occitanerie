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
      <div className="title-container">
        <svg
          id="wave"
          className="cover-text-background"
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 490"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="#00000085" offset="0%"></stop>
              <stop stop-color="#00000085" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,343L120,326.7C240,310,480,278,720,285.8C960,294,1200,343,1440,359.3C1680,376,1920,359,2160,310.3C2400,261,2640,180,2880,138.8C3120,98,3360,98,3600,106.2C3840,114,4080,131,4320,163.3C4560,196,4800,245,5040,285.8C5280,327,5520,359,5760,359.3C6000,359,6240,327,6480,302.2C6720,278,6960,261,7200,212.3C7440,163,7680,82,7920,114.3C8160,147,8400,294,8640,351.2C8880,408,9120,376,9360,326.7C9600,278,9840,212,10080,196C10320,180,10560,212,10800,261.3C11040,310,11280,376,11520,392C11760,408,12000,376,12240,343C12480,310,12720,278,12960,220.5C13200,163,13440,82,13680,65.3C13920,49,14160,98,14400,171.5C14640,245,14880,343,15120,392C15360,441,15600,441,15840,441C16080,441,16320,441,16560,424.7C16800,408,17040,376,17160,359.3L17280,343L17280,490L17160,490C17040,490,16800,490,16560,490C16320,490,16080,490,15840,490C15600,490,15360,490,15120,490C14880,490,14640,490,14400,490C14160,490,13920,490,13680,490C13440,490,13200,490,12960,490C12720,490,12480,490,12240,490C12000,490,11760,490,11520,490C11280,490,11040,490,10800,490C10560,490,10320,490,10080,490C9840,490,9600,490,9360,490C9120,490,8880,490,8640,490C8400,490,8160,490,7920,490C7680,490,7440,490,7200,490C6960,490,6720,490,6480,490C6240,490,6000,490,5760,490C5520,490,5280,490,5040,490C4800,490,4560,490,4320,490C4080,490,3840,490,3600,490C3360,490,3120,490,2880,490C2640,490,2400,490,2160,490C1920,490,1680,490,1440,490C1200,490,960,490,720,490C480,490,240,490,120,490L0,490Z"
          ></path>
        </svg>

        <div className="page-cover-image-text">
          <div className="standard-section-title">Bienvenue à la ferme!</div>
          <span className="cover-paragraph">
            L’Occit’Ânerie est une ferme pédagogique située sur la commune de Le
            Born, dans les coteaux de Villemur-sur-Tarn.
          </span>
          <span className="cover-paragraph">
            Venez découvrir ce lieu privilégié, prendre le temps d’écouter notre
            belle nature, loin des bruits de la route et des villes. Vous
            pourrez y rencontrer nos animaux et découvrir tout un espace
            consacré au maraîchage. C’est aussi l’occasion d’observer la faune
            et la flore locale grâce au différents éco-systèmes présents sur le
            site (prairies, étang, forêt).
          </span>
          {/* <span className="standard-paragraph">
          La structure permet l’accueil de petits groupes, toute l’année.
        </span>
        <span className="standard-paragraph">Uniquement sur réservation.</span> */}
        </div>
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
