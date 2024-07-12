import React from 'react';
import { StyleSheet, View, Text,Image,TouchableOpacity} from 'react-native';
import Imagem from '../../../img/RegisterOrLogin.png'
export const RegisterLoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>9:41</Text>
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
            <Text style={styles.buttonTextLogin}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister}>
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
  time: {
    color: 'white',
    fontSize: 18,
  },
  content: {
    flex:1,
    padding: 20,
    paddingTop:30,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:80,
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
    width: 180,
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
    width: 180,
  },
  buttonTextRegister: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RegisterLoginScreen;