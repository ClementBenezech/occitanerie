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
          Tu vois, premièrement, entre penser et dire, il y a un monde de
          différence et c'est très, très beau d'avoir son propre moi-même !
          C'est cette année que j'ai eu la révélation ! Tu vois, je sais que,
          grâce à ma propre vérité il faut toute la splendeur du aware et
          parfois c'est bon parfois c'est pas bon. Et tu as envie de le dire au
          monde entier, including yourself
        </div>{" "}
        <div className="standard-paragraph black">
          {" "}
          Si je t'emmerde, tu me le dis, après il faut s'intégrer tout ça dans
          les environnements et il y a de bonnes règles, de bonnes rules car
          l'aboutissement de l'instinct, c'est l'amour !
        </div>{" "}
        <Image
          className="standard-content-image"
          src={donkeys}
          alt="Des ânes contents qui tirent la langue"
        />
        <div className="standard-paragraph black">
          {" "}
          Mais ça, c'est uniquement lié au spirit. Si je t'emmerde, tu me le
          dis, si vraiment tu veux te rappeler des souvenirs de ton perroquet,
          c'est un très, très gros travail car l'aboutissement de l'instinct,
          c'est l'amour ! Et tu as envie de le dire au monde entier, including
          yourself. Quand tu fais le calcul, là on voit qu'on a beaucoup à
          travailler sur nous-mêmes car entre penser et dire, il y a un monde de
          différence et ça, c'est très dur, et, et, et... c'est très facile en
          même temps. C'est cette année que j'ai eu la révélation !
        </div>
      </div>
    </main>
  );
}
