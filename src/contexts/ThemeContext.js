import { createContext, useState } from "react";

const ThemeContext = createContext({});

export default ThemeContext;


export const ThemeProvider = ({children}) => {

    const [values, setValues] = useState({
        id: 0,
        name: 'default',
        
    })

    return (
        <ThemeContext.Provider value={{values, setValues}}>
            {children}
        </ThemeContext.Provider>
    )
}