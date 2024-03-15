import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div id="main">
        <div id="phoneTop"></div>
        <div id="phoneContent" class="scrollable-div">
          <h2 className="dzisuzywalesfona">Dziś korzystałes z telefonu </h2>
          <h1 className="godzinyDuze">6h i 32min</h1>
        </div>
        <div id="phoneBottom"></div>
      </div>
    </>
  );
}

export default App;
