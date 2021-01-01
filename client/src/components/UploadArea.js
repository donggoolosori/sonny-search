import React, { useState } from "react";
import "./UploadArea.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CachedIcon from "@material-ui/icons/Cached";
import axios from "../axios";
import cloudImage from "../image/cloud.jpg";

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
  const [resultImg, setResultImage] = useState("");
  const [isImage, setIsImage] = useState(false);

  const handleFileInput = (e) => {
    setSelectedFiles(e.target.files[0]);
  };

  const handleConvertButton = async () => {
    const formData = new FormData();
    formData.append("image", selectedFiles);
    try {
      const {
        data: { imgsrc },
      } = await axios.post("/predict", formData);
      setResultImage(imgsrc);
      setIsImage(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="uploadArea">
      <img
        className="resultImage"
        alt="Result"
        src={isImage ? process.env.PUBLIC_URL + resultImg : cloudImage}
      />
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
