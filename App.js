import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import WelcomeBackScreen from './src/screens/WelcomeBackScreen/index';
import RegisterLoginScreen from './src/screens/RegisterLoginScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

import TabNavigationUser from './src/navagations/TabNavigatorUser/index'
import TabNavigationTeacher from './src/navagations/TabNavigatorTeacher/index'
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="
        " component={RegisterLoginScreen}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false
          }} />
        <Stack.Screen name='WelcomeRegister' component={WelcomeScreen}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false
          }} />
        <Stack.Screen name='WelcomeBackScreen' component={WelcomeBackScreen}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false
          }} />
        <Stack.Screen name='User' component={TabNavigationUser}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false
          }}
        />
        <Stack.Screen name='Teacher' component={TabNavigationTeacher}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
