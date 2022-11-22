import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { COLORS } from './src/colors';
import { Game } from './src/screens/Game';
import { OptionsProvider } from './src/contexts/OptionsContext'
import { RoomsProvider } from './src/contexts/RoomsContext'
import { Options } from './src/screens/Options';
import { AppLoading } from './src/components/AppLoading';
import { useFonts } from 'expo-font';
import { Score } from './src/screens/Score';
import { Rooms } from './src/screens/Rooms';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { GameMode } from './src/screens/GameMode';

export default function App() {

    const Stack = createNativeStackNavigator();
    const navigator_options = {
        headerStyle: {
            backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.background,
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        animation: 'slide_from_bottom',
    };
    const home_header_options = {
        title: 'Inicio',
        headerShown: false,
    };

    let [loaded] = useFonts({
        'KGSecondChancesSolid': require('./assets/fonts/KGSecondChancesSolid.ttf'),
        'KGSecondChancesSketch': require('./assets/fonts/KGSecondChancesSketch.ttf'),
    });

    if (!loaded) {
        return <AppLoading />
    }

    return (
        <NavigationContainer>
            <OptionsProvider>
                <ThemeProvider>
                    <RoomsProvider>
                        <StatusBar style="auto" />
                        <Stack.Navigator initialRouteName='Home' screenOptions={navigator_options}>
                            <Stack.Screen
                                name="Home"
                                options={home_header_options}
                                component={Home}
                            />
                            <Stack.Screen name="Game" component={Game} options={{headerShown: false}} />
                            <Stack.Screen name="Rooms" component={Rooms} options={{headerShown: false}} />
                            <Stack.Screen name="GameMode" component={GameMode} options={{headerShown: false}} />
                            <Stack.Screen name="Score" component={Score} options={{headerShown: false}} />
                            <Stack.Screen name="Options" component={Options} options={{title: 'Opções'}} />
                        </Stack.Navigator>
                    </RoomsProvider>
                </ThemeProvider>
            </OptionsProvider>
        </NavigationContainer>
    );
}


