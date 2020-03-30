import React, { useContext } from 'react';
import BoardSection from '../section';
import { BoardContext } from '../../context/boardContext';

const Board = (props) => {
  const { phases } = useContext(BoardContext);

  return (
    <>
      {
        phases.map((phase, index) => (
          phase.active && <BoardSection key={index} phase={phase.phase} part={phase.part} />
        ))
      }
    </>
  );
};

export default Board;
