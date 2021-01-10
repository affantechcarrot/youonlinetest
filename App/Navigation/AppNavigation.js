import 'react-native-gesture-handler'
import { LogBox } from 'react-native';
import { Easing} from '../common'
import React from 'react'
LogBox.ignoreLogs(['Warning: ...']);
import RegisterScreen from '../Containers/RegisterScreen'
import LoginScreen from '../Containers/LoginScreen'
import AddblogScreen from '../Containers/AddblogScreen'
import BlogScreen from '../Containers/BlogScreen'
import AuthScreen from '../Containers/AuthScreen'
import HomeScreen from '../Containers/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack'


// const closeConfig = {
//   animation:"timing",
//   config:{
//     duration :100,
//     easing:Easing.linear
//   }
// }
// const config = {
//   animation: 'spring',
//   config: {
//     stiffness: 1000,
//     damping: 500,
//     mass: 3,
//     overshootClamping: false,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };


const Stack = createStackNavigator();
function MainStackNavigator() {
  //const routeNameRef = React.useRef();
  const navigationRef = React.useRef();
  return (

    <NavigationContainer 
    ref={navigationRef}
    >
     <Stack.Navigator 
      initialRouteName={'AuthScreen'}
      screenOptions={({ route, navigation }) => ({
        gestureDirection: "horizontal",
        ...TransitionPresets.SlideFromRightIOS
      })}
      animation="fade"
      headerMode="none">
        <Stack.Screen
        name='AuthScreen' component={AuthScreen} />
        <Stack.Screen 
        options={{gestureEnabled: false}}
        name='BlogScreen' component={BlogScreen}
        />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='AddblogScreen' component={AddblogScreen} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default MainStackNavigator

