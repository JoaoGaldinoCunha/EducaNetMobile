import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const WelcomeScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [isProfessor, setIsProfessor] = useState(false); // Estado para a checkbox
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    if (!username.trim()) newErrors.username = 'Preenchimento obrigatório.';
    if (!lastname.trim()) newErrors.lastname = 'Preenchimento obrigatório.';
    if (!email.trim()) newErrors.email = 'Preenchimento obrigatório.';
    if (!cpf.trim()) newErrors.cpf = 'Preenchimento obrigatório.';
    if (!password.trim()) newErrors.password = 'Preenchimento obrigatório.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleRegister = async (role) => {
    if (validateInputs()) {
      try {
        const newUser = { username, lastname, email, cpf, password, role };
        const storageKey = role === 'professor' ? 'professors' : 'users';
  
        // Log para confirmar o novo usuário
        console.log("Novo usuário cadastrado:", newUser);
  
        const storedUsers = await AsyncStorage.getItem(storageKey);
        const users = storedUsers ? JSON.parse(storedUsers) : [];
        users.push(newUser);
        await AsyncStorage.setItem(storageKey, JSON.stringify(users));
  
        // Exibe alerta com a mensagem personalizada
        const userType = role === 'professor' ? 'Professor' : 'Usuário';
        Alert.alert('Registro Concluído', `Registro como ${userType} realizado com sucesso!`);
  
        // Navegação condicional
        if (role === 'professor') {
          navigation.navigate('Teacher'); // Tela principal do professor
        } else {
          navigation.navigate('WelcomeBackScreen'); // Tela de login
        }
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
      <Text style={styles.text}>
        Ainda Não tem o seu login? Faça um cadastro e informe seus dados abaixo.
      </Text>

      <TextInput
        style={[styles.input, errors.username && styles.errorInput]}
        placeholder="Nome"
        onChangeText={(text) => {
          setUsername(text);
          if (errors.username) setErrors((prev) => ({ ...prev, username: null }));
        }}
        value={username}
      />{errors.username && <Text style={styles.errorText}>{errors.username}
      </Text>}

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
        keyboardType="numeric"
        onChangeText={(text) => {
          const numericText = text.replace(/[^0-9]/g, '').slice(0, 11);
          setCpf(numericText);
          if (errors.cpf) setErrors((prev) => ({ ...prev, cpf: null }));
        }}
        value={cpf}
      />{errors.cpf && <Text style={styles.errorText}>{errors.cpf}
      </Text>}

      <TextInput
        style={[styles.input, errors.password && styles.errorInput]}
        placeholder="Senha"
        onChangeText={(text) => {
          setPassword(text);
          if (errors.password) setErrors((prev) => ({ ...prev, password: null }));
        }}
        value={password}
        secureTextEntry
      />{errors.password && <Text style={styles.errorText}>{errors.password}
      </Text>}

      <TouchableOpacity
       style={styles.button}
        onPress={() => handleRegister(isProfessor ? 'professor' : 'user')}
       >
       <Text style={styles.buttonText}>Cadastre-se</Text>
       </TouchableOpacity>

      {/* Checkbox para Professor */}
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

  
