import { useContext } from "react"
import RoomsContext from "../../contexts/RoomsContext"

export const useRooms = () => {
    const roomsContext = useContext(RoomsContext);

    if (!roomsContext?.values) {
        console.error('cu rooms');
    }

    return roomsContext;
}