import React, { useState } from "react";
import "./UploadArea.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CachedIcon from "@material-ui/icons/Cached";
import axios from "../axios";
import cloudImage from "../image/cloud.jpg";
import spinner from "../image/spinner.gif";

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
  const [resultImg, setResultImage] = useState(cloudImage);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileInput = (e) => {
    setSelectedFiles(e.target.files[0]);
  };

  const handleConvertButton = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", selectedFiles);
    try {
      const {
        data: { imgsrc },
      } = await axios.post("/predict", formData);
      setResultImage(imgsrc);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="uploadArea">
      {isLoading ? (
        <img className="spinner" alt="" src={spinner} />
      ) : (
        <img className="resultImage" alt="Result" src={resultImg} />
      )}
      <div className="buttonArea">
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
