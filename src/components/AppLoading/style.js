import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../colors';

const vw = Dimensions.get('window').width / 100;

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        
    },
    logo_casa: {
        height: 40*vw,
    },
    logo_boz: {
        position: 'absolute',
        height: 30*vw,
        opacity: 0.2,
        bottom: 7*vw,
    }
});