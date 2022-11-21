import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../colors';

const vw = Dimensions.get('window').width / 100;

export const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 20*vw,
        height: '100%'
    },
    grats: {
        width: 90*vw,
        height: 150*vw,
    },
    content: {
        position: 'absolute',
        alignItems: 'center',
        top: 128 * vw,
    },
    text: {
        color: COLORS.background,
        fontWeight: 'bold',
        fontSize: 16,
    },
    score: {
        fontSize: 46,
    },
    button: {
        height: 14.2*vw,
        width: 75*vw,
    }
});