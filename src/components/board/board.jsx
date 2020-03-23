import React, {useContext} from "react";
import BoardSection from "../section";
import {BoardContext} from "../../context/boardContext";

const Board = (props) => {
    const {phase} = useContext(BoardContext);
    return (
        <>
        {phase.name === 1 ? <h1>section 1</h1>
            : phase.name === 2 ? <h1>section 2</h1>
            : phase.name === 3 ? <h1> section 3</h1>
            : <BoardSection/>}
        </>
    )
};

export default  Board;