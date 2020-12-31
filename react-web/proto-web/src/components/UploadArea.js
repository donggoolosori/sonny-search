import React, { useState } from "react";
import "./UploadArea.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CachedIcon from "@material-ui/icons/Cached";
import axios from "../axios";

const useStyles = makeStyles({
  root: {
    margin: "30px",
    fontSize: "25px",
  },
  input: {
    display: "none",
  },
  largeIcon: {
    width: 40,
    height: 40,
  },
  label: {
    textTransform: "capitalize",
  },
});

const UploadArea = () => {
  const classes = useStyles();
  const [selectedFiles, setSelectedFiles] = useState();
  const [resultImg, setResultImage] = useState();

  const handleFileInput = (e) => {
    setSelectedFiles(e.target.files[0]);
  };

  const handleConvertButton = async () => {
    const formData = new FormData();
    formData.append("image", selectedFiles);
    const res = await axios.post("/predict", formData);

    // convert to Base64
    const imgsrc =
      "data:image/png;base64," + btoa(unescape(encodeURIComponent(res.data)));

    setResultImage(imgsrc);
  };

  return (
    <div className="uploadArea">
      <div id="fileNameBox">{/* <p>{fileName}</p> */}</div>
      <div className="buttonArea">
        <img className="resultImage" alt="Result" src={resultImg} />
        <input
          accept="image/*"
          type="file"
          id="contained-button-file"
          className={classes.input}
          onChange={handleFileInput}
        />
        <label htmlFor="contained-button-file">
          <Button
            component="span"
            classes={{ root: classes.root }}
            size="large"
            variant="contained"
            color="default"
            startIcon={<CloudUploadIcon className={classes.largeIcon} />}
          >
            Upload
          </Button>
        </label>
        <Button
          classes={{ root: classes.root }}
          size="large"
          variant="contained"
          color="primary"
          startIcon={<CachedIcon className={classes.largeIcon} />}
          onClick={handleConvertButton}
        >
          Convert
        </Button>
      </div>
    </div>
  );
};

export default UploadArea;
