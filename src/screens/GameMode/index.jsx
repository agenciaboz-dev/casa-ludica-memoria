import { Image, ImageBackground, Text, View } from 'react-native';
import { styles } from './style';

export const GameMode = ({navigation}) => {

    const modes = [
        {
            id: 0,
            name: 'Clássico',
            theme: 'default',

        }
    ]
    
    return (
        <ImageBackground style={{ flex: 1 }} source={require('../../../assets/background.jpeg')}>
            <Image style={styles.cloud_background} source={require('../../../assets/cloud_background.png')} resizeMode='stretch' />
            <View style={styles.main_container}>
                <Text style={styles.text}>ESCOLHA O MODO DE JOGO</Text>
                {modes.map(item => {
                    return (
                        <View key={item.id}>
                            {/* <Image source={require(`../../../assets/themes/${item.theme}/game_mode.png`)} /> */}
                        </View>
                    )
                })}
            </View>
        </ImageBackground>
    )
}