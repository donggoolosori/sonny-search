import "./App.css";
import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Main">
        <Intro />
        <div className="VerticalLineArea">
          <div id="VerticalLine"></div>
        </div>
        <div className="UploadArea">
          <div id="FileNameBox">{/* <p>{fileName}</p> */}</div>
          <div className="ButtonArea">
            <div id="SearchFileButton">
              <button id="searchFileButton">Search File</button>
            </div>
            <div id="ConvertButton">
              <button id="convertButton">Convert video</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
