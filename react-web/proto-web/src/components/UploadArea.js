import React from "react";
import "./UploadArea.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CachedIcon from "@material-ui/icons/Cached";

const useStyles = makeStyles({
  root: {
    margin: "30px",
    fontSize: "25px",
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

  return (
    <div className="uploadArea">
      <div id="fileNameBox">{/* <p>{fileName}</p> */}</div>
      <div className="buttonArea">
        <Button
          classes={{ root: classes.root }}
          size="large"
          variant="contained"
          color="default"
          startIcon={<CloudUploadIcon className={classes.largeIcon} />}
        >
          Upload
        </Button>
        <Button
          classes={{ root: classes.root }}
          size="large"
          variant="contained"
          color="primary"
          startIcon={<CachedIcon className={classes.largeIcon} />}
        >
          Convert
        </Button>
      </div>
    </div>
  );
};

export default UploadArea;
