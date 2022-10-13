import { createContext, useState } from "react";

const RoomsContext = createContext({});

export default RoomsContext;


export const RoomsProvider = ({children}) => {

    const [values, setValues] = useState([])

    return (
        <RoomsContext.Provider value={{values, setValues}}>
            {children}
        </RoomsContext.Provider>
    )
}