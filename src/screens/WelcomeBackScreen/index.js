import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity, Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const WelcomeBackScreen = ({navigation}) => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleLogin = () => {
  //   // TODO: Implement login logic
  //   console.log('Username:', username);
  //   console.log('Password:', password);
  // };

  const handleLogin = async () => {
    try {
      // Recupera os usuários registrados do AsyncStorage
      const storedUsers = await AsyncStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      // Procura um usuário correspondente
      const user = users.find(
        (user) =>
          (user.email === username || user.cpf === username) &&
          user.password === password
      );

      if (user) {
        // Se encontrou, exibe sucesso e navega para outra tela
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        navigation.navigate('User'); // Redireciona para a tela do usuário
      } else {
        // Se não encontrou, exibe erro
        Alert.alert('Erro', 'As informações fornecidas estão incorretas.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível validar as informações.');
    }
  };


return (
  <View style={styles.container}>
    <Text style={styles.title}>Login</Text>
    {/* <Text style={styles.title}>Educa-Net</Text> */}
    <Text style={styles.text}>Conhecimento ao alcance de um clique</Text>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Email ou CPF"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={setPassword}
        secureTextEntry
        value={password}
      />
    </View>
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text style={styles.buttonText}>Entre</Text>
    </TouchableOpacity>
    <Text
    style={styles.link}
    onPress={() => navigation.navigate('WelcomeScreen')}>Não é registrado?
    </Text>
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 19,
    marginBottom: 40,
    textAlign: 'center',
    fontWeight:'light',
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 40,
    width:"100%",
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 10,
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