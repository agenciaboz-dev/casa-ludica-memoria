import { ImageBackground, Text, View } from 'react-native';
import { styles } from './style';

export const GameMode = ({navigation}) => {
    
    return (
        <ImageBackground style={styles.background} source={require('../../../assets/background.jpeg')}>
                <ImageBackground style={styles.bottom_container} source={require('../../../assets/cloud.png')} resizeMode='cover' >
                    <Text>oi</Text>
                </ImageBackground>
        </ImageBackground>
    )
}