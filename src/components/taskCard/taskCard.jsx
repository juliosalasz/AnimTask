import "./taskCardStyles.css";

import taskImage from "../../assets/TaskImage.jpg";

function TaskCard({ sceneId, plNumber, deleteScene }) {
  return (
    <div className="taskCard">
      <div
        className="taskImage"
        style={{ backgroundImage: `url(${taskImage})` }}
      ></div>
      <div className="task">
        <div className="taskInfo">
          <h2 className="taskNumber">{`PL${plNumber}`}</h2>
          <h3 className="episode">S1E02</h3>
        </div>
        <div className="taskOptions">
          <div className="taskStatus">Aprobado Alex</div>
          <div className="taskButtons">
            <button className="taskButton">Edit</button>
            <button
              className="taskButton"
              onClick={() => {
                deleteScene(sceneId);
              }}
            >
              Erase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
