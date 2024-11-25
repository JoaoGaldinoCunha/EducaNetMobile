import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { useFonts, VT323_400Regular } from '@expo-google-fonts/vt323';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SplashScreen } from './src/screens/SplashScreen';
// Telas de entrada
import WelcomeBackScreen from './src/screens/WelcomeBackScreen/index';
import RegisterLoginScreen from './src/screens/RegisterLoginScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
// UserEdits
import { UserCoursesScreen } from './src/screens/User/UserCoursesScreen';
import { UserVideoScreen } from './src/screens/User/UserVideoScreen';
import { VideoNameScreen } from './src/screens/User/UserVideoScreen/VideoNameScreen';
// TeacherEdits
import { TeacherEditPraticingScreen } from './src/screens/Teacher/TeacherPraticingScreen/EditPraticingScreen';
import { TeacherEditVideoScreen } from './src/screens/Teacher/TeacherVideoScreen/EditVideoScreen';
import TeacherEditCourseScreen from './src/screens/Teacher/TeacherCoursesScreen/TeacherEditCourseScreen';
import TabNavigationUser from './src/navagations/TabNavigatorUser/index';
import TabNavigationTeacher from './src/navagations/TabNavigatorTeacher/index';
import VideoPlayerScreen from './src/screens/User/UserVideoScreen/VideoPlayerScreen'; 

const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    VT323_400Regular,
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!fontLoaded) {
      setIsReady(false);
    } else {
      setIsReady(true);
    }
  }, [fontLoaded]);

  if (!isReady) {
    return <SplashScreen />; // Exibe a SplashScreen enquanto as fontes carregam
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegisterLogin">
        {/* Tela inicial */}
        
        <Stack.Screen
          name="RegisterLogin"
          component={RegisterLoginScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />

        {/* Tela de registro */}
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />

        {/* Tela de login */}
        <Stack.Screen
          name="WelcomeBackScreen"
          component={WelcomeBackScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />

        {/* Navegação do usuário */}
        <Stack.Screen
          name="User"
          component={TabNavigationUser}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UserCoursesScreen"
          component={UserCoursesScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UserVideoScreen"
          component={UserVideoScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="VideoNameScreen"
          component={VideoNameScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />

        {/* Navegação do professor */}
        <Stack.Screen
          name="Teacher"
          component={TabNavigationTeacher}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TeacherEditActivity"
          component={TeacherEditPraticingScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TeacherEditVideo"
          component={TeacherEditVideoScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TeacherEditCourse"
          component={TeacherEditCourseScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
                <Stack.Screen
          name="VideoPlayerScreen" // Registro da tela de player de vídeo
          component={VideoPlayerScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
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
