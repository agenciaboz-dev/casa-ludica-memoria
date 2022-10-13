import { useState } from 'react';
import { Text, View } from 'react-native';
import { api } from '../../api';
import { Button } from '../../components/Button';
import { styles } from './style';

export const Rooms = ({ navigation, route }) => {

    const [rooms, setRooms] = useState(route.params)
    console.log(rooms);

    const newRoom = () => {
        api.get('/new_room').then((response) => {
            const room = response.data;
            setRooms([...rooms, room])
        });
    }

    const updateRooms = () => {
        api.get('/rooms').then((response) => {
            const rooms = response.data;
            setRooms(rooms)
        });
    }
    
    return (
        <View style={styles.container}>
            <Button style={styles.button} onPress={newRoom}>Nova sala</Button>
            <Button style={styles.button} onPress={updateRooms}>Atualizar</Button>
            <View style={styles.rooms}>
                {
                    rooms.map((item) => {return(
                        <Text key={rooms.indexOf(item)}>{item.id}</Text>
                    )})
                }
            </View>
        </View>
    )
}