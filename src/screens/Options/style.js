import { StyleSheet } from 'react-native';
import { COLORS } from '../../colors';
import { Dimensions } from 'react-native'

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

export const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        color: COLORS.primary,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    cloud_background: {
        marginTop: 5 * vh,
        position: 'absolute',
        width: 100 * vw,
        height: 100 * vh,
    },

    audio_container: {
        backgroundColor: '#4D4A4A',
        padding: 20 * vw,
    },

    video_container: {
        backgroundColor: '#4D4A4A',
        padding: 20 * vw,
    },

    text: {
        color: COLORS.primary,
    }
});