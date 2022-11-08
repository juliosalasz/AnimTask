import { useContext } from "react";

import "./homeStyles.css";

import {
  signInWithGooglePopup,
  createUserDocumentfromAuth,
} from "../../utils/firebase";

import { UserContext } from "../../context/userContext";

function Home() {
  //UserContext
  const { setCurrentUser, currentUser } = useContext(UserContext);

  //Log Google User
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentfromAuth(user);
    setCurrentUser(user);
  };

  return (
    <section className="home">
      {!currentUser ? (
        <div className="signIn">
          <button onClick={logGoogleUser}>SignInWithGoogle</button>
        </div>
      ) : (
        <>
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
        </>
      )}
    </section>
  );
}

export default Home;
