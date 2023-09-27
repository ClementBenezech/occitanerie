export type Activity = {
  name: string;
  description: string[];
  when: string;
  details: string;
};

export const activities = [
  {
    name: "Les demi-journées à la ferme",
    description: [
      "C’est l’axe principal que souhaiterait prendre l’association : l’accueil de structures spécialisées. Accueil proposé pour des petits groupes de 10 maximum. A l’occasion de ces demi-journées, les bénéficiaires auront accès à plusieurs types d’activités :",
      " - Le travail avec les animaux : ramassage des œufs, nettoyage des différents espaces animaliers, nourrissage, pansage, promenades, parcours, et papouilles ;",
      " - Le travail de maraichage : le potager, le verger et la serre. Chaque structure qui viendra régulièrement à la ferme aura une bande potagère attitrée. Cela permettra aux bénéficiaires d’être acteur de la germination à la récolte (et la dégustation :) ) ;",
      " - Activités manuelles : par exemple, jeux autour du vivant et de l’environnement, création et utilisation peintures naturelles, confection d’hôtels à insectes, d’épouvantails…",
    ],
    when: "9h30 – 12h ou 14h – 16h30 du lundi au vendredi",
    details:
      "Possibilité de pique-niquer sur place (en intérieur ou extérieur) avant ou après la demi-journée (en fonction du créneau choisi).",
  },
  {
    name: "Les matins éveil",
    description: [
      "Cette formule est destinée aux RAM, crèches et assistantes maternelles, mais également aux maisons de retraite.",
      "L’accueil se fait par petits groupes de maximum 10 enfants (de plus de 18 mois) ou 8 résidants.",
      "Il s’agit de leur permettre d’avoir un contact privilégié avec les animaux et la nature. Une activité manuelle est également proposée pour chaque visite : elle sera adaptée à la météo du jour et à l’âge des participants.",
      " - Activités manuelles : par exemple, jeux autour du vivant et de l’environnement, création et utilisation peintures naturelles, confection d’hôtels à insectes, d’épouvantails…",
    ],
    when: "Horaires : 9h30 – 11h30 du lundi au vendredi.",
    details: "Possibilité de pique-niquer sur place après la matinée.",
  },
];

/*

Les anniversaires :
Votre enfant aura l’occasion d’inviter ses amis à la ferme, pour une fête inoubliable.
Après un temps avec les animaux, différentes activités pourront être proposées en
attendant le goûter et les cadeaux.
Accueil par petits groupes (10 enfants) et sous la responsabilité des parents.
Le goûter est à la charge des parents.
Les gobelets, assiettes et couverts sont fournis et un réfrigérateur laissé à votre
disposition.
Horaires : 14h – 17h les mercredis et samedis après-midi.

Les groupes :
Des réservations de groupes sont possibles.
Pour des groupes de 8 à 12 personnes.
Visite guidée de la ferme et présentation des animaux et leur environnement,
Une activité sera proposée, en fonction des saisons et de l’inspiration, puis le groupe
aura un temps libre sur la ferme.
Possibilité de pique-niquer sur place.
Un réfrigérateur est laissé à votre disposition.
Horaires : 14h – 17h les mercredis et samedis après-midi.

L’accompagnement par l’animal :
L’animal favorise le lien, la relation à l’autre. C’est un médiateur qui cherche
l’interaction. Il va vers l’autre sans jugement, sans intention, sans communication
verbale. Il est spontané, stimule, éveille, réconforte de manière naturelle. Il permet le
partage et une relation authentique. L’animal assure un rôle de catalyseur social et
procure de l’apaisement.
Les séances peuvent se faire en individuel ou en petits groupes.
Une intervenante en médiation animale intervient à la ferme, sur demande.

Les évènements :
A l’occasion de certains évènements (Pâques, Halloween, Noël, fête de l’association…), la
ferme s’ouvrira au public sous d’autres modalités. Il sera possible de venir sans
réservation de groupe.
La communication sur ces événements se fait par le biais de la page Facebook (lien).
Abonnez-vous pour ne rien manquer des actualités.

*/
