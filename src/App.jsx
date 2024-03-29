import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import hourglass from "./assets/hourglass.svg";
import badpiggies from "./assets/badpiggies.png";
import clashroyale from "./assets/clashroyale.png";
import tiktok from "./assets/tiktok.png";
import instagram from "./assets/instagram.png";
import youtube from "./assets/Youtube.png";
import wykres from "./assets/wykres.png";
import wybieracz from "./assets/wybieracz.png";
import streak from "./assets/Streak.png";
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
            <h1 className="godzinyDuze">6h i 16min</h1>
            <span className="limit">Ustawiony limit dzienny 7h 30 min</span>
            <div className="streak">
              <img src={streak} width="50px" height="60px"/>
            </div>
          </div>
          <div id="phoneContentAppsBar">
            <img className="wybieracz" src={wybieracz}></img>
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
          <div className="WykresBox">
            <h2 className="AplikacjeHeader">Podsumowanie</h2>
          </div>
          <img src={wykres} id="wykres"></img>
        </div>

        <div id="phoneBottom"></div>
      </div>
    </>
  );
}

export default App;
