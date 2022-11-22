import { StyleSheet } from 'react-native';
import { COLORS } from '../../colors';
import { Dimensions } from 'react-native'

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        color: COLORS.primary,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25*vh,
    },
    cloud_background: {
        marginTop: 5 * vh,
        position: 'absolute',
        width: 100 * vw,
        height: 100 * vh,
    },
    text: {
        color: COLORS.primary,
        fontFamily: 'KGSecondChancesSolid',
        fontSize: 22,
    }
});