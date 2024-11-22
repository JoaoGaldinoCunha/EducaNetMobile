import React from 'react';
import { StyleSheet, View, Text,Image,TouchableOpacity} from 'react-native';
import Imagem from '../../../img/RegisterOrLogin.png'

export const RegisterLoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>
      <View style={styles.content}>
      <Image source={Imagem}/>
        <Text style={styles.title}>Educa-Net 
        </Text>
        <Text style={styles.text}>
        Bem-vindo ao Educa-net! Faça login ou Cadastre-se para acessar um mundo de conhecimento e transformar seu aprendizado
        </Text>
        <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonTextLogin} onPress={ () => navigation.navigate('WelcomeBackScreen')}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister} onPress={ () => navigation.navigate('WelcomeScreen') }>
            <Text style={styles.buttonTextRegister}>Cadastro</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002250',
    width:'100%',
  },
  header: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex:1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:60,
    textAlign:"center",
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttons: {
    flexDirection:'row',
    padding:90,
  },
  buttonLogin: {
    backgroundColor: '#00C2FF',
    padding: 15,
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10,
    width: 150,
  },
  buttonTextLogin: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRegister: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderBottomRightRadius:10,
    borderTopRightRadius:10,
    width: 150,
  },
  buttonTextRegister: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RegisterLoginScreen;