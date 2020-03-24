import React, {useState, createContext, useEffect} from "react";

export const BoardContext = createContext();

const BoardContextProvider = props => {

    const [phases, setPhase] = useState([
        {
        section: {
            phase: "problem",
            part: [
                {
                    part: 1,
                    active: true,
                },
                {
                    part: 2,
                    active: false
                }
            ],
            color: "red",
            active: true
        }},
        {section: {
                part: [
                    {
                        part: 1,
                        active: false
                    },
                    {
                        part:2,
                        active: false
                    }
                ],
                phase: "idea",
                color: "red",
                active: false
            }},
        {section: {
                part: [
                    {
                        part: 1,
                        active: false
                    },
                    {
                        part:2,
                        active: false
                    }
                ],
                phase: "something",
                color: "green",
                active: false
            }},
        {section: {
                part: [
                    {
                        part: 1,
                        active: false
                    },
                    {
                        part:2,
                        active: false
                    }
                ],
                phase: "test",
                color: "blue",
                active: false
            }}
        ]);

    return (
        <BoardContext.Provider value={{phases}}>
            {props.children}
        </BoardContext.Provider>

    );
};

export default BoardContextProvider;