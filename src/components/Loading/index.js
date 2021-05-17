import "./style.loading.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
  const spinnertIcon = <FontAwesomeIcon icon={faSpinner} pulse />;

  return (
    <div className="loading-icon">
      {spinnertIcon}
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
