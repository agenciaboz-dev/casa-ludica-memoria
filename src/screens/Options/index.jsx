import { ImageBackground, Image, Text, TextInput, View } from 'react-native';
import { useOptions } from '../../hooks/useOptions';
import { styles } from './style';

export const Options = ({ navigation }) => {

    const options = useOptions();

    return (
        <ImageBackground style={{ flex: 1 }} source={require('../../../assets/background.jpeg')}>
            <Image style={styles.cloud_background} source={require('../../../assets/cloud_background.png')} resizeMode='stretch' />
            <View style={styles.main_container}>
                <View style={styles.audio_container}>
                    <Text style={styles.text}>
                        Audio
                    </Text>
                </View>
                <View style={styles.video_container}>
                    <Text style={styles.text}>
                        Video
                    </Text>
                </View>
            </View>
        </ImageBackground>
    )
}
// {Object.entries(options.values).map((item) => {
//     return (
//         <View key={`${item}-container`}>
//             <Text>{item[0]}</Text>
//             <TextInput>{item[1]}</TextInput>
//         </View>
//     )
// })}