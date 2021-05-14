import "./style.card.scss";

// Dependencies
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const CharacterCard = ({ data, type, saveToCookie, isFav }) => {
  const [isShown, setIsShown] = useState(false);
  const location = useLocation();
  console.log(location);
  const heartIcon = <FontAwesomeIcon icon={faHeart} />;

  const Position = () => {
    const res = data.thumbnail.path.match("image_not_available")
      ? "left"
      : "center";
    return res;
  };

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
            backgroundPosition: Position(),
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
                {!isFav && (
                  <div
                    className="btn-fav"
                    onClick={() => saveToCookie({ ...data, type: type })}
                  >
                    {heartIcon}
                  </div>
                )}
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
