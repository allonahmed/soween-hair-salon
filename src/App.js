import "./styles/style.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AfricanBraids from "./pages/AfricanBraids";
import { Main } from "./Main";
import Header from "./components/header/header.js";
import Particles from "react-tsparticles";
import json from "./components/particle.json";

function App() {
  const [clicked, isClicked] = useState(false);

  return (
    <div
      className="App"
      onScroll={() => {
        isClicked(false);
      }}
    >
      <Router>
        <Switch>
          <Route path={"/african-braids"}>
            <Header />
            <Particles
              className="particles"
              id="tsparticles"
              options={JSON.parse(json)}
            />
            <AfricanBraids />
          </Route>
          <Route path={"/"}>
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
