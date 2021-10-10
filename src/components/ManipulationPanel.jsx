import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowUp,
  faArrowDown,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const ManipulationPanel = ({ onChange }) => {
  const onUp = () => onChange("up");
  const onRight = () => onChange("right");
  const onLeft = () => onChange("left");
  const onDown = () => onChange("down");

  return (
    <div className="manipulation-panel">
      <button onClick={onLeft} className="manipulation-btn btn btn-left">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div>
        <button onClick={onUp} className="manipulation-btn btn btn-up">
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <button onClick={onDown} className="manipulation-btn btn btn-down">
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>
      <button onClick={onRight} className="manipulation-btn btn btn-right">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default ManipulationPanel;
