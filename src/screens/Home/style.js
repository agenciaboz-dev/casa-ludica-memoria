import { StyleSheet } from "react-native";
import { COLORS } from '../../colors';

export const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.background,

    },
    container: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 283,
        width: '100%',
        marginTop: 'auto',
        // borderColor: 'red', borderWidth: 1,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 70,
        width: 300,
        height: 61,
    },
    logo: {
        marginTop: 50,
        height: 150,
    },
    title: {
        marginTop: 'auto',
        height: 120,
    }
})