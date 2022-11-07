import React from "react";

import "./homeStyles.css";

import {
  signInWithGooglePopup,
  createUserDocumentfromAuth,
} from "../../utils/firebase";

function Home() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentfromAuth(user);
  };

  //after user has logged in we must get a property that says that the user has been logged in
  //make a conditional that renders the list of tasks
  //the nav bar also has a conditional
  return (
    <section className="home">
      <div className="signIn">
        <button onClick={logGoogleUser}>SignInWithGoogle</button>
      </div>

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
