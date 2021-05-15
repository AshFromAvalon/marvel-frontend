import "./style.fav-alert.scss";

import { useEffect } from "react";

const FavAlert = ({ showAlert, setShowAlert }) => {
  useEffect(() => {
    const fade = () => {
      setTimeout(() => {
        setShowAlert(false);
      }, 1300);
    };
    fade();
  }, [showAlert]);

  const showHideClassName = showAlert ? "display-block" : "display-none";

  return (
    <div className={showHideClassName}>
      <div className="fav-alert">
        <p> Added to fav successfully !</p>
      </div>
    </div>
  );
};

export default FavAlert;
