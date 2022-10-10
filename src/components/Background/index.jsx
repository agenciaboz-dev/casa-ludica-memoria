import { ImageBackground, View } from 'react-native';
// import { styles } from './style';

export const Background = ({children}) => {
    
    return (
        <ImageBackground source={require('../../../assets/background.jpeg')}>
            <View>
                {children}
            </View>
        </ImageBackground>
    )
}