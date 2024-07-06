/* eslint-disable react/no-unescaped-entities */
import styles from "../page.module.css";
import activitiesPicture from "../../images/activites.jpg";
import Image from "next/image";
import { activities } from "@/content/activities/activities";
import { Activity } from "@/content/activities/activities";

export const metadata = {
  title: "L'occitanerie, ferme pédagogique - Activités",
  description: "Nos activités",
  openGraph: {
    title: "L'occitanerie",
    description: "Activités à la ferme",
    url: "https://loccitanerie.fr/activites",
    siteName: "L'occitanerie",
    images: [
      {
        url: "https://loccitanerie.fr/og-image.jpg", // Must be an absolute URL
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
  const ActivitiesCards = activities.map((activity: Activity) => {
    const Description = activity.description.map((paragraph) => {
      return (
        <div className="activity-card-paragraph" key={paragraph}>
          {paragraph}
        </div>
      );
    });
    return (
      <div className="activity-card" key={activity.name}>
        <div className="activity-card-title">{activity.name}</div>
        {Description}
        <div className="activity-card-paragraph">{`${activity.when}`}</div>
        <div className="activity-card-paragraph">{`${activity.details} `}</div>
        {activity.image && (
          <Image className="activity-info-card" src={activity.image} alt="" />
        )}
      </div>
    );
  });

  return (
    <main className={styles.main}>
      <Image
        className="page-cover-image"
        src={activitiesPicture}
        alt="Une photo montrant des enfants à la ferme"
      />
      <div className="standard-section-title">
        {" "}
        Notre objectif premier est de mettre en lien les visiteurs avec les
        animaux de la ferme mais aussi les végétaux grâce à la serre, au potager
        et au verger.
      </div>
      <div className="title-container">
        <div className="page-cover-image-text">
          <span className="cover-paragraph">
            Nous proposons de nombreuses activités autour des animaux, du
            maraîchage et du “travail” à la ferme en général. Différents
            ateliers sont également proposés tous les mois, en fonction des
            saisons et de ce que nous offre la ferme et la nature.
          </span>
        </div>
      </div>
      <div className="activity-cards">{ActivitiesCards}</div>
    </main>
  );
}
