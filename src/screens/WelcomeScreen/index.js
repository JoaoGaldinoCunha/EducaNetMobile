import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import api from './../Service/api';

export const WelcomeScreen = ({ navigation }) => {
  const [signIn, toggle] = useState(true);

  // Dados de cadastro
  const [vemail, setEmail] = useState('');
  const [vpassword, setPassword] = useState('');
  const [vcpf, setCpf] = useState('');
  const [vnome, setNome] = useState('');
  const [vsobrenome, setSobrenome] = useState('');

  // Validação aluno ou professor
  const [isProfessor, setIsProfessor] = useState(false);
  const resultado = isProfessor ? 'P' : 'A';

  const [errors, setErrors] = useState({});

  // Função de cadastro
  const handleSubmit = async () => {
    const newErrors = {};
    // Validando campos de entrada
    if (!vemail) newErrors.email = 'O campo email é obrigatório';
    if (!vcpf) newErrors.userCpf = 'O campo CPF é obrigatório';
    if (!vnome) newErrors.userName = 'O campo nome é obrigatório';
    if (!vsobrenome) newErrors.userLastName = 'O campo sobrenome é obrigatório';
    if (!vpassword) newErrors.password = 'O campo senha é obrigatório';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await api.post('http://192.168.0.17:8080/users', {
        email: vemail,
        password: vpassword,
        userCpf: vcpf,
        userVerification: resultado,
        userName: vnome,
        userLastName: vsobrenome
      });

      console.log(response.data);

      // Alerta indicando se foi cadastrado como Professor ou Usuário
      const userType = resultado === 'P' ? 'Professor' : 'Usuário';
      Alert.alert('Cadastro realizado com sucesso!', `Você se cadastrou como ${userType}. Agora, faça login.`);

      // Navegando para a página de login (WelcomeBackScreen)
      navigation.navigate('WelcomeBackScreen', {
        email: vemail,
        password: vpassword,
      });

    } catch (error) {
      Alert.alert('Erro!', `Houve um problema ao cadastrar: ${error.response?.data || error.message}`);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Cadastre-se</Text>
      <Text style={styles.text}>
        Ainda Não tem o seu login? Faça um cadastro e informe seus dados abaixo.
      </Text>

      <TextInput
        style={[styles.input, errors.userName && styles.errorInput]}
        placeholder="Nome"
        onChangeText={setNome}
        value={vnome}
      />
      {errors.userName && <Text style={styles.errorText}>{errors.userName}</Text>}

      <TextInput
        style={[styles.input, errors.userLastName && styles.errorInput]}
        placeholder="Sobrenome"
        onChangeText={setSobrenome}
        value={vsobrenome}
      />
      {errors.userLastName && <Text style={styles.errorText}>{errors.userLastName}</Text>}

      <TextInput
        style={[styles.input, errors.email && styles.errorInput]}
        placeholder="Email"
        onChangeText={setEmail}
        value={vemail}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <TextInput
        style={[styles.input, errors.userCpf && styles.errorInput]}
        placeholder="CPF"
        keyboardType="numeric"
        maxLength={11}
        onChangeText={setCpf}
        value={vcpf}
      />
      {errors.userCpf && <Text style={styles.errorText}>{errors.userCpf}</Text>}

      <TextInput
        style={[styles.input, errors.password && styles.errorInput]}
        placeholder="Senha"
        secureTextEntry
        onChangeText={setPassword}
        value={vpassword}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setIsProfessor(!isProfessor)}
      >
        <View style={[styles.checkbox, isProfessor && styles.checkboxChecked]} />
        <Text style={styles.checkboxText}>Registrar como Professor</Text>
      </TouchableOpacity>

      <Text style={styles.link} onPress={() => navigation.navigate('WelcomeBackScreen')}>
        Já é registrado?
      </Text>
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
  text: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 60,
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
    marginTop: 20,
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
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
    margin: 0,
    padding: 0,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: 'transparent',
    marginRight: 10,
    borderRadius: 4,
  },
  checkboxChecked: {
    backgroundColor: '#00C2FF',
  },
  checkboxText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default WelcomeScreen;
