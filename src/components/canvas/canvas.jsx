import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import CanvasDraw from "react-canvas-draw";
import {makeStyles} from "@material-ui/core/styles";
import EditIcon from '@material-ui/icons/Edit';
import {Button, Grid, Input } from "@material-ui/core";
import PropTypes from "prop-types";
import Form from "../form";

const socket = io("http://127.0.0.1:8080");

const useStyles = makeStyles(theme => ({
  root: {

  },
  main:{

  },
  label: {
    border: "1px solid #ebebeb"
  }
}));


const Canvas = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState({
    data: ""
  });

  const [socketData, setSocketData] = useState();
  const canvasRef = useRef(null);

  useEffect(() => {
    socket.emit("chat", {
      value
    });

  }, [value]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasData = canvas.getSaveData();
    console.log("canvas data", canvasData);
  }, []);

  const { data } = value;

  socket.on("chat", function(data) {
    setSocketData(() => data);
  });

  const handleSave = () => {
    const canvas = canvasRef.current;
    const canvasData = canvas.getSaveData();
    socket.emit("graph", canvasData);
  };

  const handleLoadData = () => {
    const canvas = canvasRef.current;
    const getData = canvas.loadSaveData();
    console.log(getData);
  };

  const clearData = () => {
    const canvas = canvasRef.current;
    canvas.clear();
  };

  return (
    <Grid container>
      <Grid item xs={8}>
        <h1>{props.title}</h1>
        <span style={{display: "flex"}}>
          <p>{props.message}</p>
          <EditIcon style={{paddingLeft: "10px"}}/>
        </span>
        <CanvasDraw
          ref={canvasRef}
          brushRadius={1}
          lazyRadius={1}
          style={{
            backgroundColor: "white",
            border: "1px solid #ebebeb",
            marginTop: "20px",
          }}
        />
        <Button color="error" onClick={clearData}>
            Clear Canvas
        </Button>
      </Grid>
      <Grid item xs={4}>
        {
          /* TODO:
            1. * [X] Split form component up so it's a component
            2. * [] Validate the props for it
          */
        }
        <Form labels={[{key: 1, htmlFor: "something", value: "Label 1"},{key: 2, htmlFor: "something", value: "Label 1"},{key: 23, htmlFor: "something", value: "Label 1"}]}/>
      </Grid>
    </Grid>
  );
};

export default Canvas;


Canvas.propTypes = {
  labelName: PropTypes.string.isRequired,

};