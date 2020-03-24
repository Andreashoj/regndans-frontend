import React, {useContext} from "react";
import BoardSection from "../section";
import {BoardContext} from "../../context/boardContext";

const Board = (props) => {
    const {phases} = useContext(BoardContext);
    return (
            <>
            {
                phases.map((phase, index) => (
                    phase.section.active && <BoardSection key={index} phase={phase.section.phase} part={phase.section.part}/>
                ))
            }
        </>
    )
};

export default  Board;