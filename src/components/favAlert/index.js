import "./style.fav-alert.scss";

import { useEffect } from "react";

const FavAlert = ({ showAlert, setShowAlert }) => {
  useEffect(() => {
    const fade = () => {
      setTimeout(() => {
        setShowAlert(false);
      }, 1000);
    };
    fade();
  }, [showAlert]);

  const showHideClassName = showAlert ? "display-block" : "display-none";

  const closAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className={showHideClassName}>
      <div className="fav-alert">
        <div className="close" onClick={closAlert}>
          x
        </div>
        <p> Added to fav successfully !</p>
      </div>
    </div>
  );
};

export default FavAlert;
