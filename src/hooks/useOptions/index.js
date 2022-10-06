import { useContext } from "react"
import OptionsContext from "../../contexts/OptionsContext"

export const useOptions = () => {
    const optionsContext = useContext(OptionsContext);

    if (!optionsContext?.values) {
        console.error('cu');
    }

    return optionsContext;
}