import { StyleSheet } from 'react-native';
import { COLORS } from '../../colors';

export const styles = StyleSheet.create({
    main_container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 0.85,
        backgroundColor: COLORS.background,
    },
    cloud_background: {
        position: 'absolute',
        top: -20,
        
    },
    bottom_container: {
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
        width: 70,
        height: 110,
        margin: 5,
        borderRadius: 5,
        borderColor: COLORS.border, borderWidth: 3,
    },
    cartinha_number: {
        fontSize: 32,
    },
    bottom_buttons_style: {
        height: 51.5,
        width: '70%',
    },
});