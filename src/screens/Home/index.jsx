import { Image, ImageBackground, Text, View } from 'react-native';
import { Button } from '../../components/Button';
import { styles } from './style';

export const Home = ({navigation, custom_fonts}) => {

    return (
        <ImageBackground style={styles.main_container} source={require('../../../assets/background.jpeg')}>
                <Image style={styles.logo} source={require('../../../assets/logo.png')} resizeMode='contain' />
                <Image style={styles.title} source={require('../../../assets/jogo_da_memoria.png')} resizeMode='contain' />
                <ImageBackground style={styles.bottom_container} source={require('../../../assets/cloud.png')} resizeMode='contain'>
                    <Button style={styles.button} onPress={() => navigation.navigate('OnePlayerScreen')} fontSize={50} >JOGAR</Button>
                    {/* <Button style={{margin: 30}} onPress={() => navigation.navigate('Details')} >Dois jogadores</Button>
                    <Button style={{margin: 30}} onPress={() => navigation.navigate('Options')} >Opções</Button> */}
                </ImageBackground>
        </ImageBackground>
    )
}
