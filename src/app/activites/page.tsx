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
      <div key={activity.name}>
        <div className="activity-card-title">{activity.name}</div>
        {Description}
        <div className="activity-card-paragraph">{`${activity.when}, ${activity.details} `}</div>
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
      <div className="page-cover-image-text">
        <div className="standard-section-title">Des activités pour tous!</div>
        <span className="cover-paragraph">
          Les blancs les noirs, même les mangeurs de sushis!
        </span>
        <span className="cover-paragraph">
          Sauf les scolaires. C'est chiant les scolaires :)
        </span>
      </div>
      {ActivitiesCards}
    </main>
  );
}
