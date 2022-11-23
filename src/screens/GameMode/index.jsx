import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import Images from '../../images'
import { styles } from './style';

export const GameMode = ({navigation}) => {

    const theme = useTheme()

    const modes = [
        {
            id: 0,
            name: 'default',
        },
        {
            id: 1,
            name: 'xmas',
        },
    ]

    const play = (item) => {
        theme.setValues(item)
        navigation.navigate('Game')
    }
    
    return (
        <ImageBackground style={{ flex: 1 }} source={Images.background}>
            <Image style={styles.cloud_background} source={Images.cloud_background} resizeMode='stretch' />
            <View style={styles.main_container}>
                <Text style={styles.text}>ESCOLHA O MODO DE JOGO</Text>
                {modes.map(item => {
                    return (
                        <TouchableOpacity key={item.id} onPress={() => play(item)}>
                            <Image style={styles.gamemode_card} source={Images.themes[item.name].game_mode} resizeMode='stretch' />
                        </TouchableOpacity>
                    )
                })}
            </View>
        </ImageBackground>
    )
}