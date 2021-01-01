import React from "react";
import Intro from "./Intro";
import "./Main.css";
import UploadArea from "./UploadArea";

const Main = () => {
  return (
    <div className="main">
      <Intro />
      <UploadArea />
    </div>
  );
};

export default Main;
