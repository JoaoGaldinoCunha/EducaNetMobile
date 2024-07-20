import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';

import { useFonts, VT323_400Regular } from '@expo-google-fonts/vt323'

import imageProfile from '../../../../img/Profile.png'

import { SplashScreen } from '../../SplashScreen';

export const TeacherProfileScreen = () => {
  const [fontLoaded] = useFonts({
    VT323_400Regular
  })

  useEffect(() => {
    if (!fontLoaded) {
       return SplashScreen
    }
  }, [])
  return (
    <View style={styles.conteiner} >
      <View>
        <Image source={imageProfile} style={styles.imagem} />
        <TouchableOpacity style={styles.buttonchose}>
          <Text style={styles.buttonTextchose} >CHOSE PHOTO</Text>
        </TouchableOpacity>
      </View>
      <View  style={styles.profileAndFormConteiner}>
        <Text style={styles.titleProfile}>PROFILE</Text>
        <View style={styles.form} >
          <TextInput
            style={styles.input}
            placeholder="UserName"
          />
          <TextInput
            style={styles.input}
            placeholder="LastName"
          />
          <TextInput
            style={styles.input}
            placeholder="CPF"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>EDIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: "#002250",
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    padding: 30
  },
  imagem: {
    width: 320,
    height: 200,
    borderRadius: 20
  }, 
  buttonchose: {
    backgroundColor: '#00C2FF',
    borderRadius: 10,
    fontWeight: 'bold',
    width: '45%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTextchose:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  profileAndFormConteiner:{
    marginTop:10
  },
  titleProfile: {
    color: '#00C2FF',
    fontSize: 40,
    fontFamily:'VT323_400Regular'
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 10,
    height: 50,
    width: "100%",
    padding: 4
  },
  button: {
    backgroundColor: '#00C2FF',
    borderRadius: 15,
    fontWeight: 'bold',
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },

})