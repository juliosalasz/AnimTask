import React from "react";

import "./homeStyles.css";

function Home() {
  return (
    <section className="home">
      <div className="sceneCounterContainer">
        <h2> Has hecho 30 Tomas este mes</h2>
      </div>
      <div className="allTasksContainer">
        <div className="task">
          <div className="taskInfo">
            <h2 className="taskNumber">PL079</h2>
            <h3 className="episode">E02</h3>
            <div className="taskStatus">Aprobado Alex</div>
          </div>
          <div>IMAGE</div>
        </div>
        <div className="taskOptions">
          <button>Edit</button>
          <button>Erase</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
