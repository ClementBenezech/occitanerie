/* eslint-disable react/no-unescaped-entities */
import styles from "../page.module.css";
import background from "../../images/about.jpg";
import Image from "next/image";
import farmMap from "../../images/plan-de-la-ferme.png";

export default function Page() {
  return (
    <main className={styles.main}>
      <Image
        className="page-cover-image page-cover-position-right"
        src={background}
        alt="Des bons gros farmers"
      />
      <div className="standard-section-title">Informations</div>
      <div className="title-container">
        <div className="page-cover-image-text">
          <span className="cover-paragraph">
            Sur cette page, vous retrouverez le plan de la ferme, ainsi que nos
            flux Facebook et Instagram!
          </span>
          <span className="cover-paragraph">
            Pensez à nous suivre pour ne rien rater de notre actualité et des
            évènements à venir!
          </span>
        </div>
      </div>
      <Image
        className="standard-content-image"
        src={farmMap}
        alt="Un plan qui montre les différentes zones de la ferme pédagogique"
      />
      <div className={styles.flexrow}>
        <iframe
          width="320"
          height="400"
          src="https://www.instagram.com/l.occit.anerie/embed/"
          frameBorder="0"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLoccitanerie&tabs=timeline%2C%20events&width=400&height=900&small_header=true&adapt_container_width=false&hide_cover=true&show_facepile=false&appId"
          width="400"
          height="900"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </main>
  );
}
