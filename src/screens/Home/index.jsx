import { Image, ImageBackground, Text, View } from 'react-native';
import { api } from '../../api';
import { Button } from '../../components/Button';
import { useRooms } from '../../hooks/useRooms';
import { styles } from './style';
import Images from '../../images'

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
        <ImageBackground style={styles.main_container} source={Images.background}>
                <Image style={styles.logo} source={Images.logo} resizeMode='contain' />
                <Image style={styles.title} source={Images.jogo_da_memoria} resizeMode='contain' />
                <ImageBackground style={styles.bottom_container} source={Images.cloud} resizeMode='cover' >
                    <Button style={styles.button} onPress={() => navigation.navigate('GameMode')} fontSize={50} >JOGAR</Button>
                    <View style={styles.bottom_buttons}>
                        <Button disabled={true} style={[styles.button, styles.small_button]} fontSize={22} onPress={() => navigation.navigate('Options')} >PLACAR</Button>
                        <Button disabled={true} style={[styles.button, styles.small_button]} fontSize={22} onPress={() => navigation.navigate('Options')} >OPÇÕES</Button>
                    </View>
                </ImageBackground>
        </ImageBackground>
    )
}
