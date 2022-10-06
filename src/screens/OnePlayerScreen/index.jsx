import { useEffect, useMemo, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../colors';
import { Button } from '../../components/Button';
import { useOptions } from '../../hooks/useOptions';
import { styles } from './style';

export const OnePlayerScreen = ({navigation}) => {

    const options = useOptions();
    const [first, setFirst] = useState({
        number: 0,
    });
    const [second, setSecond] = useState({
        number: 0,
    });

    const [reset, setReset] = useState(false);

    const acertou_style = {
        backgroundColor: COLORS.terciary,
    };
    
    
    const items = useMemo(() => {
        const max = options.values.quantidade;
        const min = 1;
        const lista = [];
        
        const newRandom = () => {
            let number = Math.floor(Math.random() * (max / 2 - min + 1)) + min;
            let counter = 0;
            for (const item of lista) {
                if (item.number == number) {
                    counter++;
                }
            }
            if (counter == 2) {
                number = newRandom();
            }
            return number
        }

        for (let i = 0; i < max; i++) {
            lista.push({
                position: i,
                number: newRandom(),
            });
        }
        console.log(lista);
        return lista;
    }, [options.values.quantidade]);


    const teste = (item) => {
        if (first.number) {
            setSecond(item);
            // item.style = acertou_style;
        } else {
            setFirst(item);
        }
    }

    useEffect(() => {
        if (second.number) {
            if (second.number == first.number) {
                console.log('acertou');
                first.style = acertou_style;
                second.style = acertou_style;
                first.done = true;
                second.done = true;
                
                setTimeout(() => {
                    first.style = {...acertou_style, opacity: 0.3}
                    second.style = {...acertou_style, opacity: 0.3}
                    console.log(first.style)
                }, 1000)
            } else {
                console.log('errou');
            }
            console.log(first);
            setFirst({number: 0});
            setSecond({number: 0});
        }
    }, [second])

    return (
        <View style={styles.main_container}>
            <View style={styles.top_container}>
                <Button style={styles.top_buttons_style} onPress={() => navigation.goBack()}>Voltar</Button>
                <Button style={styles.top_buttons_style}>Sei lá</Button>
                <Button style={styles.top_buttons_style}>Algo</Button>
            </View>
            <View style={styles.body_container}>
                {
                    items.map((item) => {
                        return (
                            <View key={`${item.position}`} pointerEvents={item.done ? 'none' : 'auto'}>
                                <TouchableOpacity onPress={() => teste(item)} style={[styles.cartinha, item.style]} >
                                    <Text>{item.number}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}