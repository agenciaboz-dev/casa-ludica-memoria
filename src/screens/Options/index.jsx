import { Text, TextInput, View } from 'react-native';
import { useOptions } from '../../hooks/useOptions';
import { styles } from './style';

export const Options = ({navigation}) => {

    const options = useOptions();
    
    return (
        <View style={styles.main_container}>
            {/* {Object.entries(options.values).map((item) => {
                return (
                    <View key={`${item}-container`}>
                        <Text>{item[0]}</Text>
                        <TextInput>{item[1]}</TextInput>
                    </View>
                )
            })} */}
        </View>
    )
}