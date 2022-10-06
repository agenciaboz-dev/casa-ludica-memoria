import { StyleSheet } from 'react-native';
import { COLORS } from '../../colors';

export const styles = StyleSheet.create({
    main_container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        flex: 1,
    },
    top_container: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        width: '100%',
        marginTop: 25,
    },
    top_buttons_style: {
        backgroundColor: COLORS.background,
        color: COLORS.primary,
        width: 100,
    },
    body_container: {
        justifyContent: 'space-around',
        alignContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 20,
        flex: 1,
    },  
    cartinha: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        width: 40,
        height: 60,
        margin: 20,
        borderRadius: 5,
    }
});