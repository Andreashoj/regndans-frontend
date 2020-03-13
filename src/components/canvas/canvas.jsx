import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import CanvasDraw from "react-canvas-draw";
const socket = io("http://127.0.0.1:8080");

const Canvas = props => {

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
  }, [])

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>{socketData ? socketData.value.data : ""}</h1>
        <input
          type="text"
          value={data}
          name="sockettext"
          onChange={ops => {
            setValue({
              data: ops.target.value
            });
            socket.emit("data", data);
          }}
        />

        <button onClick={handleSave}>save</button>
        <button onClick={handleLoadData}>load</button>
        <CanvasDraw
          ref={canvasRef}
          hideGrid={false}
          canvasHeight={200}
          canvasHeight={200}
          brushRadius={1}
          style={{
            backgroundColor: "white",
            border: "1px solid #ebebeb"
          }}
        />
      </header>
    </div>
  );
};

export default Canvas;
