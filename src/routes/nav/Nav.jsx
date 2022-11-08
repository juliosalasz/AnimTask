import { useContext } from "react";

import "./navStyles.css";

import { UserContext } from "../../context/userContext";
import { signOutUser } from "../../utils/firebase";

function Nav() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <header className="navContainer">
      <h1>ANIMTASK</h1>
      {currentUser ? (
        <nav className="navBar">
          <p>Create new Scene</p>
          <span className="signOutLink" onClick={signOutHandler}>
            Sign Out
          </span>
        </nav>
      ) : (
        ""
      )}
    </header>
  );
}

export default Nav;
