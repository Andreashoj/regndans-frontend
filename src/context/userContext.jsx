import React, {useState, createContext, useEffect }from "react";
import axios from "axios";

export const UserContext = createContext();

//Function that contains all the properties and functions that needs to be avaliable in the global scope.
const UserContextProvider = props => {

    //state functions
    const [user, setUser] = useState({
        firstname: "tobias"
    });
    const [turns, setTurns] = useState([]);

    //Clousures
    const getTurns = async () => {
        const allTurns = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        let responseArray = [];
        responseArray.push(allTurns.data);

        return responseArray;
    }

    //Lifecycles
    useEffect( async () => {
        setTurns(await getTurns());
    }, []);

    const [isAuth, setIsAuth] = useState(false);

    return (
        <UserContext.Provider value={{
            user,
            isAuth,
            turns,
            setTurns,
            getTurns }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
