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
        marginBottom: 25,
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
        width: 70,
        height: 110,
        margin: 5,
        borderRadius: 5,
    },
    bottom_buttons_style: {
        backgroundColor: COLORS.background,
        color: COLORS.primary,
        width: 100,
        borderRadius:5,
    },
});