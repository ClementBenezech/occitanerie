/* eslint-disable react/no-unescaped-entities */
import styles from "../page.module.css";
import activitiesPicture from "../../images/activites.jpg";
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
      <div className="standard-section-title">Des activités pour tous!</div>
      <div className="title-container">
        <div className="page-cover-image-text">
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
