import CharacterCard from "../../components/Card";
import "./style.favorites.scss";

import Card from "../../components/Card/index";

const Favorites = (fav) => {
  const data = fav.fav;
  console.log(data);

  const characters = data.filter((item) => item.type === "characters");
  const comics = data.filter((item) => item.type === "comics");

  return data.length >= 1 ? (
    <div className="fav-container">
      <div className="container">
        <div className="fav-cat">Characters</div>
        <div className="fav-wrapper">
          {characters.map((item, index) => {
            return <Card key={index} data={item} type={item.type} />;
          })}
        </div>
        <div className="fav-cat">Comics</div>
        <div className="fav-wrapper">
          {comics.map((item, index) => {
            return <Card key={index} data={item} type={item.type} />;
          })}
        </div>
      </div>
    </div>
  ) : (
    <div className="fav-container">NO FAVS YET</div>
  );
};

export default Favorites;
