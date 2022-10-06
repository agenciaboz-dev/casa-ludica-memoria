import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button } from 'react-native';
import { Home } from './src/screens/Home';
import { COLORS } from './src/colors';
import { OnePlayerScreen } from './src/screens/OnePlayerScreen';
import { OptionsProvider } from './src/contexts/OptionsContext'
import { Options } from './src/screens/Options';


  function DetailsScreen({route, navigation}) {
    // const {nome} = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>oi</Text>
        <Button
            title='Mudar de nome'
            onPress={() => {
                navigation.setParams({
                    nome: 'Arthur'
                })
            }}
        />
      </View>
    );
  }

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
          animation: 'slide_from_right',
    };
    const home_header_options = {
        title: 'Inicio',
        // headerShown: false,
    };

    return (
        <NavigationContainer>
            <OptionsProvider>
                <StatusBar style="auto" />
                <Stack.Navigator initialRouteName='Home' screenOptions={navigator_options}>
                    <Stack.Screen 
                        name="Home" 
                        component={Home}
                        options={home_header_options}  
                        />
                    <Stack.Screen name="Details" component={DetailsScreen} options={
                        {title: "Detalhes"}
                    } />
                    <Stack.Screen name="OnePlayerScreen" component={OnePlayerScreen} options={{headerShown: false}} />
                    <Stack.Screen name="Options" component={Options} options={{title: 'Opções'}} />
                </Stack.Navigator>
            </OptionsProvider>
        </NavigationContainer>
    );
}


