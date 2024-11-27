import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import api from './../Service/api';

const WelcomeBackScreen = ({ navigation }) => {
  const [signIn, toggle] = useState(true);
  const [valiemail, setValiEmail] = useState('');
  const [valipassoword, setValiPassword] = useState('');

  const handleCheck = async () => {
    try {
      const response = await api.post('http://192.168.0.17:8080/validateUser', {
        email: valiemail,
        password: valipassoword,
      });

      console.log(response.data);

      const userCode = response.data.userVerification; // "A" para aluno, "P" para professor
      const userId = response.data.userId;

      console.log("userId:", userId);

      if (!userId) {
        Alert.alert('Erro!', 'ID do usuário não encontrado.');
        return;
      }

      if (userCode === "A") {
        Alert.alert('Bem-vindo!', 'Você está logado como aluno.');
        navigation.navigate('User'); // Navega para a tela de Aluno
      } 
      else if (userCode === "P") {
        Alert.alert('Bem-vindo!', 'Você está logado como professor.');
        navigation.navigate('Teacher'); // Navega para a tela de Professor
      } else {
        Alert.alert('Erro!', 'Tipo de usuário desconhecido.');
      }

    } catch (error) {
      Alert.alert('Erro!', 'Credenciais inválidas, tente novamente.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.text}>Conhecimento ao alcance de um clique</Text>

      <TextInput
        style={styles.input}
        placeholder="Email ou CPF"
        onChangeText={setValiEmail}
        value={valiemail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={setValiPassword}
        value={valipassoword}
      />

      <TouchableOpacity style={styles.button} onPress={handleCheck}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text
        style={styles.link}
        onPress={() => navigation.navigate('WelcomeScreen')}
      >
        Não é registrado?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002250',
    padding: 10,
    paddingTop: 80,
    width: "100%",
    alignItems: 'center',
    textAlign: 'center',
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
    fontWeight: 'light',
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 40,
    width: "100%",
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 10,
    height: 60,
    width: "100%",
    padding: 4,
  },
  button: {
    backgroundColor: '#00C2FF',
    borderRadius: 15,
    fontWeight: 'bold',
    width: '100%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  link: {
    marginTop: 40,
    fontSize: 16,
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default WelcomeBackScreen;