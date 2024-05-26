import defaultImage from "../../images/logo.jpg";
import Image, { StaticImageData } from "next/image";

type AnimalProps = {
  name: string;
  age: string;
  species: string;
  description: string[];
  key: string;
  image?: StaticImageData;
};

const AnimalCard = (animal: AnimalProps) => {
  const fullDescription = animal.description.map((element) => {
    return (
      <div
        className="animal-card__description-paragraph"
        key={element.substring(0, 10)}
      >
        {element}
      </div>
    );
  });

  return (
    <div className="animal-card">
      <Image
        className="animal-card__avatar"
        src={animal.image ?? defaultImage}
        alt="un animal"
      ></Image>

      <div className="animal-card__container">
        <div className="animal-card__key-info">
          <div>{animal.name}</div>
        </div>
        <div className="animal-card__description">{fullDescription}</div>
      </div>
    </div>
  );
};

export default AnimalCard;
