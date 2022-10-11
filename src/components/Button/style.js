import { StyleSheet } from 'react-native';
import { COLORS } from '../../colors';

export const styles = StyleSheet.create({
    button: {
        textAlign: 'center',
        justifyContent: 'center',
        // backgroundColor: COLORS.primary,
        color: COLORS.primary,
        // paddingHorizontal: 10,
        // paddingVertical: 5,
        fontFamily: 'KGSecondChancesSolid',
        
    },
    background: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    }
});