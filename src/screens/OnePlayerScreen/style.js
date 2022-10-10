import { StyleSheet } from 'react-native';
import { COLORS } from '../../colors';
import { Dimensions } from 'react-native'

const vw = Dimensions.get('window').width / 100;

export const styles = StyleSheet.create({
    main_container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 0.85,
        backgroundColor: COLORS.background,
    },
    cloud_background: {
        position: 'absolute',
        top: -5.5*vw,
        width: 100*vw,
        height: 78.5*vw,
        
    },
    bottom_container: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        width: 100*vw,
        marginBottom: 25,
    },
    body_container: {
        justifyContent: 'space-around',
        alignContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5.5*vw,
        flex: 1,
    },  
    cartinha: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 19.4*vw,
        height: 30.5*vw,
        margin: 5,
        borderRadius: 5,
        borderColor: COLORS.border, borderWidth: 3,
    },
    cartinha_number: {
        fontSize: 32,
    },
    bottom_buttons_style: {
        height: 14.2*vw,
        width: 70*vw,
    },
});