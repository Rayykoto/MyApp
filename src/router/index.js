import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { GetStarted, Splash } from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="GetStarted">
            <Stack.Screen name="splash" component={Splash} options={{headerShown: false}} />
            <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default Router