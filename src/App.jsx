import "./App.css";

import Home from "./routes/home/home";
import Nav from "./routes/nav/Nav";

function App() {
  return (
    <div className="bodyContainer">
      <Nav />
      <Home />
      <footer className="footer">Made by Julio Salas</footer>
    </div>
  );
}

export default App;
