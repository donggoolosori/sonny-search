import React from "react";
import Intro from "./Intro";
import "./Main.css";
import UploadArea from "./UploadArea";

const Main = () => {
  return (
    <div className="main">
      <Intro />
      <div className="verticalLineArea">
        <div id="verticalLine"></div>
      </div>
      <UploadArea />
    </div>
  );
};

export default Main;
