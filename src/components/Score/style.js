import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../colors';

const vw = Dimensions.get('window').width / 100;

export const styles = StyleSheet.create({
    backgroud: {
        position: 'absolute',
        width: 80*vw,
        height: 60*vw,
        backgroudColor: 'white',
    }
});