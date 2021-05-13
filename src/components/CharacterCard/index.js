import "./style.character-card.scss";

// Dependencies
import { useState } from "react";

const CharacterCard = ({ character }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className="character-card"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="character-card-image-container">
        <div
          className="character-card-image"
          style={{
            backgroundImage: `url(
          ${character.thumbnail.path}.${character.thumbnail.extension}
        )`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {isShown && (
            <div className="character-card-description-container">
              <p className="character-card-description">
                {character.description
                  ? character.description
                  : "NO DESCRIPTION"}
              </p>
            </div>
          )}
        </div>
      </div>
      <p className="character-card-name">{character.name}</p>
    </div>
  );
};

export default CharacterCard;
