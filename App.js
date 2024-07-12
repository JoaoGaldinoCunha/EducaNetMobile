import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeUserScreen/index'
import WelcomeBackScreen from './src/screens/WelcomeBackScreen/index';
import RegisterLoginScreen from './src/screens/RegisterLoginScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeBackScreen/>
      <StatusBar style="auto" />
    </View>
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
