/* eslint-disable react/no-unescaped-entities */
import styles from "../page.module.css";
import farmers from "../../images/farmers.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <main className={styles.main}>
      <Image
        className="page-cover-image"
        src={farmers}
        alt="Des bons gros farmers"
      />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d858.9515116513954!2d1.528936828374665!3d43.898321462005256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ac22862f961395%3A0xbef1c2a50eb56e48!2s669%20Chem.%20des%20Camparnals%2C%2031340%20Le%20Born%2C%20France!5e1!3m2!1sfr!2sth!4v1695964645680!5m2!1sfr!2sth"
        width="100%"
        height="600"
        loading="lazy"
        className="google-map"
      ></iframe>
    </main>
  );
}
