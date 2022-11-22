import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../colors';

const vw = Dimensions.get('window').width / 100;

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.background,
    }
});