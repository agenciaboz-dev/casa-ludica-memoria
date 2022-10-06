import { StyleSheet } from 'react-native';
import { COLORS } from '../../colors';

export const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: COLORS.background,
        color: COLORS.primary,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
});