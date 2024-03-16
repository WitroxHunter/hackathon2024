import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import hourglass from "./assets/hourglass.svg";
import badpiggies from "./assets/badpiggies.png";
import "./App.css";

const AppTimeUsed = (props) => {
  return (
    <>
      <div className="AppTime">
        <div className="AppTimeLeft">
          <img className="appIcon" src={props.appIcon} />
        </div>
        <div className="AppTimeMiddle">
          <div className="AppTimeMiddleTop">{props.appName}</div>
          <div className="AppTimeMiddleBottom">
            <div className="timeBar" style={{ width: props.width }}></div>
          </div>
        </div>
        <div className="AppTimeRight">{props.timeUsed}</div>
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <div id="main">
        <div id="phoneTop"></div>
        <div id="phoneContent" class="scrollable-div">
          <div id="phoneContentTopBar">
            <h2 className="dzisuzywalesfona">Dziś korzystałeś z telefonu </h2>
            <h1 className="godzinyDuze">6h i 32min</h1>
            <img src={hourglass} className="hourglassImage"></img>
          </div>
          <div id="phoneContentAppsBar">
            <AppTimeUsed
              appIcon={badpiggies}
              width="50%"
              appName="Bad Piggies"
              timeUsed="5h 47min"
            />
          </div>
        </div>
        <div id="phoneBottom"></div>
      </div>
    </>
  );
}

export default App;
