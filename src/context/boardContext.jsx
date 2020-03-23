import React, {useState, createContext, useEffect} from "react";

export const BoardContext = createContext();

const BoardContextProvider = props => {

    const [phase, setPhase] = useState([
        {
        section: {
            phase: "problem",
            color: "red",
            active: true
        }},
        {section: {
                phase: "idea",
                color: "red",
                active: false
            }},
        {section: {
                phase: "something",
                color: "green",
                active: false
            }},
        {section: {
                phase: "test",
                color: "blue",
                active: false
            }}
        ]);

    return (
        <BoardContext.Provider value={{phase}}>
            {props.children}
        </BoardContext.Provider>

    );
};

export default BoardContextProvider;