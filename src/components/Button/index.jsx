import { Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

export const Button = ({children, onPress, style}) => {
    
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.button, style]}>{children}</Text>
        </TouchableOpacity>
    )
}