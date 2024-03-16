import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import hourglass from "./assets/hourglass.svg";
import badpiggies from "./assets/badpiggies.png";
import clashroyale from "./assets/clashroyale.png";
import tiktok from "./assets/tiktok.png";
import instagram from "./assets/instagram.png";
import youtube from "./assets/Youtube.png";
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
            <h2 className="dzisuzywalesfona">Korzystałeś dziś z telefonu </h2>
            <h1 className="godzinyDuze">6h i 32min</h1>
            <img src={hourglass} className="hourglassImage"></img>
          </div>
          <div id="phoneContentAppsBar">
            <div className="AppTime">
              <h2 className="AplikacjeHeader">Aplikacje</h2>
            </div>

            <AppTimeUsed
              appIcon={badpiggies}
              width="100%"
              appName="Bad Piggies"
              timeUsed="5h 47min"
            />
            <AppTimeUsed
              appIcon={clashroyale}
              width="40%"
              appName="Clash Royale"
              timeUsed="1h 24min"
            />
            <AppTimeUsed
              appIcon={tiktok}
              width="25%"
              appName="TikTok"
              timeUsed="1h 1min"
            />
            <AppTimeUsed
              appIcon={instagram}
              width="15%"
              appName="Instagram"
              timeUsed="41min"
            />
            <AppTimeUsed
              appIcon={youtube}
              width="10%"
              appName="YouTube"
              timeUsed="21min"
            />
          </div>
        </div>
        <div id="phoneBottom"></div>
      </div>
    </>
  );
}

export default App;
