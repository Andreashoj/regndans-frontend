import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import CanvasDraw from "react-canvas-draw";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import { Button, Grid, Input, Box } from "@material-ui/core";
import Form from "../form";

const jsonObject = [
  { key: 1, htmlFor: "Name", order: 1, value: "Name", type: "text" },
  { key: 2, htmlFor: "Age", order: 2, value: "Age", type: "numeric" },
  {
    key: 23,
    order: 3,
    htmlFor: "Person Description",
    value: "Person Description",
    type: "textarea",
  },
];

const socket = io("http://127.0.0.1:8080");

const useStyles = makeStyles((theme) => ({
  root: {},
  canvas: {
    backgroundColor: "white",
    border: "1px solid #ebebeb",
    borderRadius: "8px",
    marginTop: "20px",
    width: "100% !important",
  },
}));

const Canvas = (props) => {
  const classes = useStyles();

  const [socketData, setSocketData] = useState({ response: false });
  const canvasRef = useRef(null);

  useEffect(() => {
    return () => {
      socket.off("socketdata");
    };
  }, []);

  const loadData = () => {
    const canvas = canvasRef.current;
    if (localStorage.getItem("drawing") !== null) {
      canvas.loadSaveData(localStorage.getItem("drawing"), true);
    }
  };

  const handleSocketChange = (e) => {
    const canvas = canvasRef.current;
    const canvasData = canvas.getSaveData();

    localStorage.setItem("drawing", canvasData);

    setSocketData({ response: canvasData });
    socket.emit("socketdata", socketData);
  };

  const clearData = () => {
    const canvas = canvasRef.current;
    canvas.clear();
  };

  return (
    <Grid container spacing={8}>
      <Grid item xs={8}>
        <h1>{props.title}</h1>
        <span style={{ display: "flex" }}>
          <p>{props.message}</p>
          <EditIcon style={{ paddingLeft: "10px" }} />
        </span>
      </Grid>
      <Box display="flex" width="100%">
        <Box width="100%">
          <CanvasDraw
            onChange={handleSocketChange}
            className={classes.canvas}
            ref={canvasRef}
            brushRadius={1}
            lazyRadius={1}
          />
          <Button color="error" onClick={loadData}>
            Clear Canvas
          </Button>
        </Box>
        <Grid item xs={4}>
          <Form labels={jsonObject} />
        </Grid>
      </Box>
    </Grid>
  );
};
export default Canvas;
