import React, {useState} from 'react'
import Board from "../board";
import BoardContextProvider from "../../context/boardContext";

const Helper = () => {
  const [checked, setChecked] = useState(false);
  const [state, setState] = useState({
    left: false
  });

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  return (
      <>
        <BoardContextProvider>
          <Board />
        </BoardContextProvider>
      </>
  );
};

export default Helper;

