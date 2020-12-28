import './App.css';
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div id="LogoArea">
          <div id="LogoCircle">
            <div id="LogoPhoto"/>
          </div>
        </div>
        <div id="Title">Son in My Hand</div>
      </div>
      <div className="Main">
        <div className="Intro">
          This Webpage supports a YOLOv5 based Sonny Detector.<br/>
          Upload a Tottenham video on the page and convert your video.<br/>
          The converted video will show a picker that tracks Sonny along the field.<br/>
          So, are you a big fan of Sonny?<br/>
          Watch his every movement exclusively!<br/>
        </div>
        <div className="VerticalLineArea"><div id="VerticalLine"></div></div>
        <div className="UploadArea">
          <div id="FileNameBox">
            {/* <p>{fileName}</p> */}
          </div>
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
