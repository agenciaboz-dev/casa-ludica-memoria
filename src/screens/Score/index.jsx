import { Text, View } from 'react-native';
import { styles } from './style';

export const Score = ({navigation, route}) => {
    
    const erros = route.params.erros;
    const score = parseInt(300 / (erros + 1));


    return (
        <View>
            <Text>{erros}</Text>
            <Text>{score}</Text>
        </View>
    )
}