import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { BottomNavigator } from '../components';
import { GetStarted, Splash, Register, Login, UploadPhoto, Therapist, Messages, Hospitals, ChooseTherapist, Chatting } from '../pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props}/>}>
            <Tab.Screen name="Therapist" 
            component={Therapist}
            options={{headerShown: false }}/>
            <Tab.Screen name="Messages" 
            component={Messages} 
            options={{ headerShown: false }}/>
            <Tab.Screen name="Hospitals" 
            component={Hospitals}
            options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="MainApp">
            <Stack.Screen name="Splash" 
            component={Splash} 
            options={{headerShown: false}} 
            />
            <Stack.Screen name="GetStarted" 
            component={GetStarted} 
            options={{headerShown: false}}
            />
            <Stack.Screen name="Register" 
            component={Register} 
            options={{headerShown: false}} 
            />
            <Stack.Screen name="Login" 
            component={Login} 
            options={{headerShown: false}} 
            />
            <Stack.Screen name="UploadPhoto" 
            component={UploadPhoto} 
            options={{headerShown: false}} 
            />
            <Stack.Screen name='MainApp'
            component={MainApp}
            options={{headerShown: false}}>
            </Stack.Screen>
            <Stack.Screen name='ChooseTherapist'
            component={ChooseTherapist}
            options={{headerShown: false}}>
            </Stack.Screen>
            <Stack.Screen name='Chatting'
            component={Chatting}
            options={{headerShown: false}}>
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default Router