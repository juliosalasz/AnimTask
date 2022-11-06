import React from "react";

import "./navStyles.css";

function Nav() {
  return (
    <header className="navContainer">
      <h1>ANIMTASK</h1>
      <nav className="navBar">
        <p>Create new Scene</p>
        <p>Sign Out</p>
      </nav>
    </header>
  );
}

export default Nav;
