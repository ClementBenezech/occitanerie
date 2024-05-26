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
      <div className={styles.flexrow}>
        <iframe
          width="320"
          height="400"
          src="https://www.instagram.com/l.occit.anerie/embed/"
          frameBorder="0"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLoccitanerie&tabs=timeline%2C%20events&width=500&height=900&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
          width="500"
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
