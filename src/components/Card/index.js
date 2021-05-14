import "./style.card.scss";

// Dependencies
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const CharacterCard = ({ data, type }) => {
  console.log(data);
  const [isShown, setIsShown] = useState(false);
  const heartIcon = <FontAwesomeIcon icon={faHeart} />;

  return (
    <div
      className="card"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="card-image-container">
        <div
          className="card-image"
          style={{
            backgroundImage: `url(
          ${data.thumbnail.path}.${data.thumbnail.extension}
        )`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {isShown && (
            <div className="card-description-container">
              {data.description ? (
                <div>
                  <p className="card-description-title">Description: </p>
                  <p className="card-description">{data.description}</p>
                </div>
              ) : (
                <p className="card-description">NO DESCRIPTION YET</p>
              )}
              <div className="action">
                {type === "characters" && (
                  <Link to={`/comics/${data._id}`} className="btn-seemore">
                    See more
                  </Link>
                )}
                <div className="btn-fav">{heartIcon}</div>
              </div>
            </div>
          )}
        </div>
      </div>
      {type === "comics" ? (
        <p className="card-name">{data.title}</p>
      ) : (
        <p className="card-name">{data.name}</p>
      )}
    </div>
  );
};

export default CharacterCard;
