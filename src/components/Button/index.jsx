import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

export const Button = ({children, onPress, style}) => {
    
    return (
        <TouchableOpacity onPress={onPress}>
            <ImageBackground source={require('../../../assets/button.png')}>
                <Text style={[styles.button, style]}>{children}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}