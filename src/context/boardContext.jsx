import React, {useState, createContext, useEffect} from "react";

export const BoardContext = createContext();

const BoardContextProvider = props => {

    const [phases, setPhase] = useState([
{
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
            color: "#E74C3C",
            active: true
        },{
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
                color: "#F1C40F",
                active: false
            }, {
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
                color: "#2ECC71",
                active: false
            }, {
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
                color: "#3498DB",
                active: false
            }
        ]);

    return (
        <BoardContext.Provider value={{phases}}>
            {props.children}
        </BoardContext.Provider>

    );
};

export default BoardContextProvider;