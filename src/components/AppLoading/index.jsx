import { Image, ImageBackground } from 'react-native';
import { styles } from './style';

export const AppLoading = () => {
    
    return (
        <ImageBackground style={styles.background} source={require('../../../assets/background.jpeg')}>
            <Image style={styles.logo_casa} source={require('../../../assets/logo.png')} resizeMode='contain' />
            <Image style={styles.logo_boz} source={require('../../../assets/logo_boz.png')} resizeMode='contain' />
        </ImageBackground>
    )
}