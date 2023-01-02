import { useContext } from "react";

import "./homeStyles.css";

import {
  signInWithGooglePopup,
  createUserDocumentfromAuth,
} from "../../utils/firebase";

import { UserContext } from "../../context/userContext";

import Tasks from "../../components/tasks/tasks";

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
            <Tasks />
          </div>
        </>
      )}
    </section>
  );
}

export default Home;
