import { Image, ImageBackground, Text, View } from 'react-native';
import { api } from '../../api';
import { Button } from '../../components/Button';
import { useRooms } from '../../hooks/useRooms';
import { styles } from './style';

export const Home = ({ navigation, custom_fonts }) => {

    const getRooms = () => {
        api.get('/rooms').then((response) => {
            const data = response.data;
            navigation.navigate('Rooms', data);
        })
            .catch((error) => {
                console.error(error);
            })
    }

    return (
        <ImageBackground style={styles.main_container} source={require('../../../assets/background.jpeg')}>
                <Image style={styles.logo} source={require('../../../assets/logo.png')} resizeMode='contain' />
                <Image style={styles.title} source={require('../../../assets/jogo_da_memoria.png')} resizeMode='contain' />
                <ImageBackground style={styles.bottom_container} source={require('../../../assets/cloud.png')} resizeMode='cover' >
                    <Button style={styles.button} onPress={() => navigation.navigate('GameMode')} fontSize={50} >JOGAR</Button>
                    <View style={styles.bottom_buttons}>
                        <Button disabled={true} style={[styles.button, styles.small_button]} fontSize={22} onPress={() => navigation.navigate('Options')} >PLACAR</Button>
                        <Button disabled={true} style={[styles.button, styles.small_button]} fontSize={22} onPress={() => navigation.navigate('Options')} >OPÇÕES</Button>
                    </View>
                </ImageBackground>
        </ImageBackground>
    )
}
