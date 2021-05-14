import "./style.character.scss";

// Dependencies
import { useParams, useEffect } from "react-router-dom";

const Character = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default Character;
