import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../colors';

const vw = Dimensions.get('window').width / 100;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10 * vw,
        
    },
    rooms: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    button: {
        height: 10.3*vw,
        width: 50 * vw,
        margin: 2*vw,
    }
});