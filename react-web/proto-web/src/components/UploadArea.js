import React from "react";
import "./UploadArea.css";

const UploadArea = () => {
  return (
    <div className="uploadArea">
      <div id="fileNameBox">{/* <p>{fileName}</p> */}</div>
      <div className="buttonArea">
        <div id="searchFileButton__container">
          <button id="searchFileButton">Search File</button>
        </div>
        <div id="convertButton__container">
          <button id="convertButton">Convert video</button>
        </div>
      </div>
    </div>
  );
};

export default UploadArea;
