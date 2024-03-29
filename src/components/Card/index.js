import "./style.card.scss";

// Dependencies
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Card = ({
  setFav,
  data,
  type,
  saveToLocalStorage,
  setShowAlert,
  isFav,
}) => {
  const [isShown, setIsShown] = useState(false);

  const heartIcon = <FontAwesomeIcon icon={faHeart} />;

  const Position = () => {
    const res = data.thumbnail.path.match("image_not_available")
      ? "left"
      : "center";
    return res;
  };

  const addToFav = () => {
    saveToLocalStorage({ ...data, type: type }) && setShowAlert(true);
  };

  const removeFromFav = () => {
    const newFav = JSON.parse(localStorage.getItem("fav"));
    const itemToRemove = newFav.find((item) => item._id === data._id);
    const index = newFav.indexOf(itemToRemove);
    newFav.splice(index, 1);
    setFav(newFav);
    localStorage.setItem("fav", JSON.stringify(newFav));
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
                <div className="card-description-content">
                  <p className="card-description-title">Description: </p>
                  <div
                    className="card-description"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  ></div>
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
                {isFav ? (
                  <div className="btn-seemore" onClick={removeFromFav}>
                    unfav
                  </div>
                ) : (
                  <div className="btn-fav" onClick={addToFav}>
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

export default Card;
