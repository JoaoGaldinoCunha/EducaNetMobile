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
        <Text style={styles.title}>Make the CHANGE
        and change the way you learn
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Diam maecenas mi non sed ut odio. Non, justo, sed facilisi
          et. Eget viverra urna, vestibulum egestas faucibus
          egestas. Sagittis nam velit volutpat eu nunc.
        </Text>
        <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonTextLogin} onPress={ () => navigation.navigate('WelcomeBackScreen')}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister} onPress={ () => navigation.navigate('WelcomeRegister') }>
            <Text style={styles.buttonTextRegister}>Register</Text>
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