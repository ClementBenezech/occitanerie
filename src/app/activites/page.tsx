/* eslint-disable react/no-unescaped-entities */
import styles from "../page.module.css";
import animals from "../../images/animals.jpg";
import Image from "next/image";
import { activities } from "@/content/activities/activities";
import { Activity } from "@/content/activities/activities";

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
        <div className="activity-card-paragraph">{`${activity.when} ${activity.details} `}</div>
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
        src={animals}
        alt="Des bons gros farmers"
      />
      <div className="title-container">
        <svg
          className="cover-text-background"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#000000ac"
            fill-opacity="0.8"
            d="M0,160L120,138.7C240,117,480,75,720,85.3C960,96,1200,160,1320,192L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
        <div className="page-cover-image-text">
          <div className="standard-section-title">Des activités pour tous!</div>
          <span className="cover-paragraph">
            Notre objectif premier est de mettre en lien les visiteurs avec les
            animaux de la ferme mais aussi les végétaux grâce à la serre, au
            potager et au verger.
          </span>
          <span className="cover-paragraph">
            Nous proposons de nombreuses activités autour des animaux, du
            maraîchage et du “travail” à la ferme en général. Différents
            ateliers sont également proposés tous les mois, en fonction des
            saisons et de ce que nous offre la ferme et la nature.
          </span>
        </div>
      </div>
      {ActivitiesCards}
    </main>
  );
}
