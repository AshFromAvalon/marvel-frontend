import "./style.favorites.scss";

import Card from "../../components/Card/index";

const Favorites = ({ fav, setFav }) => {
  const characters = fav.filter((item) => item.type === "characters");
  const comics = fav.filter((item) => item.type === "comics");

  return fav && fav[0] ? (
    <div className="fav-container">
      <div className="container">
        {characters.length > 0 && (
          <>
            <div className="fav-cat">Characters</div>
            <div className="fav-wrapper">
              {characters.map((item, index) => {
                return (
                  <Card
                    key={index}
                    data={item}
                    type={item.type}
                    isFav={true}
                    setFav={setFav}
                  />
                );
              })}
            </div>
          </>
        )}

        {comics.length > 0 && (
          <>
            <div className="fav-cat">Comics</div>
            <div className="fav-wrapper">
              {comics.map((item, index) => {
                return (
                  <Card
                    key={index}
                    data={item}
                    type={item.type}
                    isFav={true}
                    fav={fav}
                    setFav={setFav}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  ) : (
    <div className="fav-container">
      <div className="no-fav">NO FAVS YET...</div>
    </div>
  );
};

export default Favorites;
