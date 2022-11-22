import { createContext, useState } from "react";

const OptionsContext = createContext({});

export default OptionsContext;


export const OptionsProvider = ({ children }) => {

    const [values, setValues] = useState({
        quantidade: 16,
        animations: true,
    })

    return (
        <OptionsContext.Provider value={{ values, setValues }}>
            {children}
        </OptionsContext.Provider>
    )
}