import { StaticImageData } from "next/image";
import farmWorkshop from "../../images/travail-a-la-ferme.png";
import farmAwakening from "../../images/eveil-a-la-ferme.png";
import birthdayParty from "../../images/anniversaire.png";
import farmForAll from "../../images/ferme-pour-tous.png";
import groupVisit from "../../images/groupes.png";
import forestTrail from "../../images/balades-foret.png";

export type Activity = {
  name: string;
  image?: StaticImageData;
  description: string[];
  when: string;
  details: string;
};

export const activities = [
  {
    name: "Les séance “ travail à la ferme ” (2 heures)",
    image: farmWorkshop,
    description: [
      "Accueils réservés aux structures spécialisées.",
      "A l’occasion de ces demi-journées, les bénéficiaires auront accès à plusieurs ateliers:",
      " - le travail avec les animaux : on apprend à prendre soin d’eux... On laisse une place de “soignant” aux bénéficiaires qui en ont envie de la prendre. Nettoyage des différents espaces animaliers, ramassage des œufs, nourrissage, pansage, brossage, promenade, papouilles...",
      " - le travail maraîcher : chaque groupe qui viendra régulièrement à la ferme aura une bande potagère attitrée. L’occasion pour les bénéficiaires d’être acteurs, de la germination à la récolte (sans oublier la dégustation!)",
      " - les activités manuelles, créatives et culinaires : jeux, conceptions d’épouvantails, d’hôtel à insectes, préparation des récoltes du groupe... au gré de ce que nous offre les saisons.",
    ],
    when: "Du lundi au vendredi après midi.",
    details:
      "Possibilité de pique-niquer sur place (en intérieur ou en extérieur) avant la séance (arrivée à la ferme possible dés midi).",
  },
  {
    name: "Les séances “ Matinées éveil ” (1h30)",
    image: farmAwakening,
    description: [
      "Cette formule est destinée à la petite enfance (RAM, crèches, assistantes maternelles, nounous...), mais également aux maisons de retraite.",
      "L’accueil se fait par petits groupes d’enfants et/ou résidents",
      "Il s’agit de stimuler les fonctions motrices, cognitives et sensorielles par un contact privilégié avec les animaux et les végétaux.",
      "Une activité manuelle est également proposée en fin de visite : elle sera adaptée à la météo du jour et aux capacités des participants.",
    ],
    when: "Du lundi au vendredi matin.",
    details: "Possibilité de pique-niquer sur place après la séance.",
  },
  {
    name: "Les anniversaires",
    image: birthdayParty,
    description: [
      "Votre enfant aura l’occasion d’inviter ses amis à la ferme, pour une fête inoubliable !",
      "La séance se déroule en 3 temps :",
      "- Une visite de la ferme pendant laquelle les enfants pourront entrer en contact et nourrir les animaux",
      "- Une activité au choix (pansage des ânes, activité manuelle/créative, chasse au trésor...)",
      "- Le goûter !",
      "Accueil de petits groupes (10 enfants maximum au total) et sous la responsabilité des parents encadrants (1 parent pour 3 enfants minimum)",
      "Le goûter et la décoration sont à la charge des parents. Un espace goûter (intérieur ou extérieur) et réfrigérateur sont mis à votre disposition. Les parents “réservants” peuvent arriver 30 minutes avant le début de la séance pour préparer l’espace goûter à leur convenance.",
    ],
    when: "Les mercredis et samedis après-midi.",
    details: "",
  },

  {
    name: "Les séances 'La ferme pour tous'",
    image: farmForAll,
    description: [
      "Ces séances sont réservées aux familles dont un (ou plusieurs) membres présente(nt) un profil atypique (TSA, TDAH...)",
      "Le but est d’ouvrir notre ferme, d’offrir un moment privilégié à des familles qui ne veulent ou ne peuvent pas participer aux visites simples/visites ateliers...",
      "Parce que ce n’est pas compatible, par peur de gêner, du regard des autres... peu importe votre raison, nous sommes là pour en discuter et vous proposer une solution adaptée",
    ],
    when: "",
    details: "",
  },

  {
    name: "Les séances 'Groupe découverte' (2h)",
    image: groupVisit,
    description: [
      "Les réservations de groupe sont possibles, pour les structures comme pour les particuliers.",
      "Visites animées de la ferme avec présentation des animaux et de leur environnement. Mise en contact et nourrissage des animaux.",
      "Une activité, variable en fonction des saisons et des envies, sera proposée après la visite (jeux, chasse au trésor, activités créatives...).",
    ],
    when: "Du lundi au samedi après-midi.",
    details:
      "Possibilité de pique-niquer sur place (en extérieur ou en intérieur)",
  },
  {
    name: "les balades sur le sentier forestier",
    image: forestTrail,
    description: [
      "Un temps entièrement axé sur les ânes, pendant lequel on prend le temps de les connaître et de prendre soin d’eux avant de partir se promener avec eux.",
      "Ici on ne se promène pas sur mais avec les ânes.",
      "Ces séances sont programmées tout au long de l’année (voir sur les pages Facebook et Instagram) mais vous pouvez également faire une réservation de groupe à la date de votre choix.",
      "Des balades caprines, avec un petit troupeau, seront bientôt possibles 😉",
      "Nous ne faisons pas de visite de la ferme lors de cette activité.",
    ],
    when: "Du lundi au samedi après-midi.",
    details:
      "Possibilité de pique-niquer sur place (en extérieur ou en intérieur)",
  },
  {
    name: "Les visites...",
    description: [
      "Ces visites sont programmées d’un mois sur l’autre et publiées sur la pages Facebook et Instagram de la ferme",
      "Les liens sont disponibles en bas de cette page",
    ],
    when: "Les samedis, mercredis après-midi, jours fériés et vacances scolaires",
    details: "",
  },
  {
    name: "L’accompagnement par l’animal",

    description: [
      "L’animal favorise le lien, la relation à l’autre. C’est un médiateur qui cherche l’interaction.",
      "Il va vers l’autre sans jugement, sans intention, sans communication verbale. Il est spontané, stimule, éveille, réconforte de manière naturelle. Il permet le partage et une relation authentique. L’animal assure un rôle de catalyseur social et procure de l’apaisement.",
      "Les séances peuvent se faire en individuel ou en petits groupes.",
    ],
    when: "",
    details: "",
  },
];
