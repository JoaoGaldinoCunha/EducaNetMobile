import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const WelcomeScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    if (!username.trim()) newErrors.username = 'preenchimento obrigatório.';
    if (!lastname.trim()) newErrors.lastname = 'preenchimento obrigatório.';
    if (!email.trim()) newErrors.email = 'preenchimento obrigatório.';
    if (!cpf.trim()) newErrors.cpf = 'preenchimento obrigatório.';
    if (!password.trim()) newErrors.password = 'preenchimento obrigatório.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna `true` se não houver erros
  };

  // const handleRegister = () => {
  //   if (validateInputs()) {
  //     Alert.alert('Registro', 'Registro feito com sucesso!');
  //     console.log('Username:', username);
  //     console.log('Lastname:', lastname);
  //     console.log('Email:', email);
  //     console.log('CPF:', cpf);
  //     console.log('Password:', password);

      // Resetando os valores após sucesso (opcional)
  //       setUsername('');
  //       setLastname('');
  //       setEmail('');
  //       setCpf('');
  //       setPassword('');
  //       setErrors({});
  //      } else {
  //       Alert.alert('Erro', 'Preencha todos os campos obrigatórios.');
  //       }
  // };

  const handleRegister = async () => {
    if (validateInputs()) {
      try {
        const newUser = { username, lastname, email, cpf, password };
        const storedUsers = await AsyncStorage.getItem('users');
        const users = storedUsers ? JSON.parse(storedUsers) : [];
        users.push(newUser);
        await AsyncStorage.setItem('users', JSON.stringify(users));

  
        Alert.alert('Registro', 'Registro feito com sucesso!');
        navigation.navigate('WelcomeBackScreen'); // Redireciona para a tela de login
      } catch (error) {
        Alert.alert('Erro', 'Ocorreu um problema ao salvar os dados.');
      }
    } else {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios.');
    }

  };

  return (

    <View style={styles.container}>
      <Text style={styles.welcome}>Cadastre-se</Text>
      {/* <Text style={styles.Titulo}>Educa-Net</Text> */}
      <Text style={styles.text}>
        Ainda Não tem o seu login, faça um Cadastro, informe seus dados abaixo.
      </Text>



      <TextInput
        style={[styles.input, errors.username && styles.errorInput]}
        placeholder="Nome"
        onChangeText={(text) => {
          setUsername(text);
          if (errors.username) setErrors((prev) => ({ ...prev, username: null }));
        }}
        value={username}
      />
      {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

      <TextInput
        style={[styles.input, errors.lastname && styles.errorInput]}
        placeholder="Sobrenome"
        onChangeText={(text) => {
          setLastname(text);
          if (errors.lastname) setErrors((prev) => ({ ...prev, lastname: null }));
        }}
        value={lastname}
      />
      {errors.lastname && <Text style={styles.errorText}>{errors.lastname}</Text>}

      <TextInput
        style={[styles.input, errors.email && styles.errorInput]}
        placeholder="Email"
        onChangeText={(text) => {
          setEmail(text);
          if (errors.email) setErrors((prev) => ({ ...prev, email: null }));
        }}
        value={email}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <TextInput
        style={[styles.input, errors.cpf && styles.errorInput]}
        placeholder="CPF"
        KeyboardType="numeric"
        onChangeText={(text) => {
          const numericText = text.replace(/[^0-9]/g, '').slice(0, 11);
          setCpf(numericText);
          if (errors.cpf) setErrors((prev) => ({ ...prev, cpf: null }));
        }}
        value={cpf}
      />
      {errors.cpf && <Text style={styles.errorText}>{errors.cpf}</Text>}

      <TextInput
        style={[styles.input, errors.password && styles.errorInput]}
        placeholder="Senha"
        onChangeText={(text) => {
          setPassword(text);
          if (errors.password) setErrors((prev) => ({ ...prev, password: null }));
        }}
        value={password}
        secureTextEntry
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
      <Text style={styles.link} onPress={() => navigation.navigate('WelcomeBackScreen')}>Já é Cadastrado</Text>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002250',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  welcome: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 3,
  },
  Titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height:60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 60,
    backgroundColor: '#00C2FF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop:20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  link: {
    fontSize: 16,
    color: '#fff',
    textDecorationLine: 'underline',
  },
  errorInput: {
    borderColor: 'red',
    marginTop:10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
    margin:0,
    padding: 0,
  },
});

export default WelcomeScreen;