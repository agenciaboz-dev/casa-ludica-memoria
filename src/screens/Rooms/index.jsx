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
            const data = response.data;
            navigation.navigate('GameMult', {room: data.room, players: [data.player]});
        });
    }

    const updateRooms = () => {
        api.get('/rooms').then((response) => {
            const rooms = response.data;
            setRooms(rooms)
        });
    }

    const onRoomClick = (room) => {
        api.post('/room', room).then((response) => {
            console.log(response);
        })
    }
    
    return (
        <View style={styles.container}>
            <Button style={styles.button} onPress={newRoom}>Nova sala</Button>
            <Button style={styles.button} onPress={updateRooms}>Atualizar</Button>
            <View style={styles.rooms}>
                {
                    rooms.map((item) => {return(
                        <Button onPress={() => onRoomClick(item)} style={styles.button} key={rooms.indexOf(item)}>{item.id}</Button>
                    )})
                }
            </View>
        </View>
    )
}