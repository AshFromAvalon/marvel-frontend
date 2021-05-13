import "./style.comics-card.scss";

// Dependencies
import { useState } from "react";

const ComicsCard = ({ comics }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      className="comics-card"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="comics-card-image-container">
        <div
          className="comics-card-image"
          style={{
            backgroundImage: `url(
          ${comics.thumbnail.path}.${comics.thumbnail.extension}
        )`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {isShown && (
            <div className="comics-card-description-container">
              <p className="comics-card-description">
                {comics.description ? comics.description : "NO DESCRIPTION"}
              </p>
            </div>
          )}
        </div>
      </div>
      <p className="comics-card-name">{comics.title}</p>
    </div>
  );
};

export default ComicsCard;
