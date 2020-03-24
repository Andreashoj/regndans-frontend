import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import CanvasDraw from "react-canvas-draw";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import { Button, Grid, Input, Box } from "@material-ui/core";
import PropTypes from "prop-types";
import Form from "../form";

const jsonObject = [
  { key: 1, htmlFor: "Name", value: "Name", type: "text" },
  { key: 2, htmlFor: "Age", value: "Age", type: "numeric" },
  {
    key: 23,
    htmlFor: "Person Description",
    value: "Person Description",
    type: "textarea"
  }
];

const socket = io("http://127.0.0.1:8080");

const useStyles = makeStyles(theme => ({
  root: {},
  canvas: {
    backgroundColor: "white",
    border: "1px solid #ebebeb",
    borderRadius: "8px",
    marginTop: "20px",
    width: "100% !important"
  }
}));

const Canvas = props => {
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
  };

  const clearData = () => {
    const canvas = canvasRef.current;
    canvas.clear();
  };

  return (
    <Grid container spacing={8}>
      <Box xs={12} width="100%">
        <h1>{props.title}</h1>
        <span style={{ display: "flex" }}>
          <p>{props.message}</p>
          <EditIcon style={{ paddingLeft: "10px" }} />
        </span>
        <Box display="flex" width="100%">
          <Box width="100%">
            <CanvasDraw
              className={classes.canvas}
              ref={canvasRef}
              brushRadius={1}
              lazyRadius={1}
            />
            <Button color="error" onClick={clearData}>
              Clear Canvas
            </Button>
          </Box>

          <Form labels={jsonObject} />
        </Box>
      </Box>
    </Grid>
  );
};
export default Canvas;
