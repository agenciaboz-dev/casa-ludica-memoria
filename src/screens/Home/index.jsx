import { Text, View } from 'react-native';
import { Button } from '../../components/Button';
import { styles } from './style';

export const Home = ({navigation}) => {
    
    return (
        <View style={styles.main_container}>
            <View style={styles.container}>
                <Button style={{marginBottom: 5}} onPress={() => navigation.navigate('OnePlayerScreen')} >Jogar</Button>
                {/* <Button style={{margin: 30}} onPress={() => navigation.navigate('Details')} >Dois jogadores</Button>
                <Button style={{margin: 30}} onPress={() => navigation.navigate('Options')} >Opções</Button> */}
            </View>
        </View>
    )
}
