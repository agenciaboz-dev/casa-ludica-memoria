import { StyleSheet } from 'react-native';
import { COLORS } from '../../colors';
import { Dimensions } from 'react-native'

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export const styles = StyleSheet.create({
    main_container: {
        position: 'relative',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 0.85,
        // backgroundColor: COLORS.background,
    },
    cloud_background: {
        position: 'absolute',
        top: 5*vh,
        width: 100*vw,
        height: 100*vh,
        
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
    card_container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 5,
        width: 19.4*vw,
        height: 32.5*vw,
        // borderColor: COLORS.border, borderWidth: 3,
    },
    cartinha: {
        width: 19.4*vw,
        height: 32.5*vw,
        borderRadius: 5,
        resizeMode: 'stretch',
    },
    cartinha_number: {
        fontSize: 32,
    },
    bottom_buttons_style: {
        height: 14.2*vw,
        width: 70*vw,
    },
});