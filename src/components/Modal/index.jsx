import { styles } from './style';
import { Image, Text, View } from 'react-native';
import { Button } from '../Button';
import { useEffect, useState } from 'react';
import { useOptions } from '../../hooks/useOptions';

export const Modal = ({ navigation, visible, setVisible, erros }) => {

    const options = useOptions();

    const [initialTime, setInitialTime] = useState(new Date)
    const [endTime, setEndTime] = useState(initialTime)
    const [score, setScore] = useState(options.values.quantidade / 2 * 1000)
    console.log(`initial time: ${initialTime}`)

    const restartGame = () => {
        navigation.navigate('Home');
        navigation.push('Game');
    }

    useEffect(() => {
        if (visible) {
            setEndTime(new Date)
        }
    }, [visible])

    useEffect(() => {
        console.log(`end time: ${endTime}`)
        const gametime = (endTime - initialTime) / 1000
        console.log(`game time: ${gametime}`)
        setScore(Math.round(score - (gametime * 25) - (erros * 100)))
    }, [endTime])
    
    return (
        visible 

        ? <View style={styles.background}>
            <Image style={styles.grats} source={require('../../../assets/grats.png')} resizeMode='contain' />
            <View style={styles.content}>
                <Text style={styles.text}>você fez  <Text style={styles.score}>{score}</Text>  pontos!</Text>
                <Button style={styles.button} fontSize={22} onPress={restartGame}>JOGAR NOVAMENTE</Button>
            </View>
        </View>

        : null
    )
}