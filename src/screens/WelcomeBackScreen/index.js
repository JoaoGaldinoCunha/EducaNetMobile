import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export const WelcomeBackScreen = ({navigation}) => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implement login logic
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME BACK</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
        maecenas mi non sed ut odio. Non, justo, sed facilisi et.
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username, Email & Phone Number"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          value={password}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Teacher')}>
        <Text style={styles.buttonText} >Entre</Text>
      </TouchableOpacity>
      <Text style={styles.link}onPress={ () => navigation.navigate('WelcomeRegister')}> Não é registrado?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002250',
    padding: 10,
    paddingTop:80,
    width:"100%",
    alignItems: 'center',
    textAlign:'center'
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    color: '#fff',
    marginBottom: 50,
    textAlign: 'center',
    fontWeight:'light',
  },
  inputContainer: {
    marginBottom: 40,
    width:"100%",
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 10,
    height:60,
    width: "100%",
    padding:4
  },
  button: {
    backgroundColor: '#00C2FF',
    borderRadius: 15,
    fontWeight:'bold',
    width:'100%',
    height:55,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize:20
  },
  link: {
    marginTop:40,
    fontSize: 16,
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default WelcomeBackScreen;