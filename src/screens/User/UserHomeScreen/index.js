import { useEffect } from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity} from 'react-native';
import { useFonts, VT323_400Regular } from '@expo-google-fonts/vt323'

import SplashScreen from '../../SplashScreen/index'

import imagehome1 from '../../../../img/ReturnExercicies.png'
import imagehome2 from '../../../../img/ReturnYourCourses.png'
import imagehome3 from '../../../../img/ReturnYourVideos.png'




export const UserHomeScreen = ({navigation}) => {
  const [fontLoaded] = useFonts({
    VT323_400Regular
  })

  useEffect(() => {
    if (!fontLoaded) {
     return SplashScreen
    }
  }, [])
    return (
      <View style={styles.conteiner}>
      <View style={styles.conteinerTexto}>
        <Text style={styles.titile}>Bem Vindo ao Educa-<Text style={styles.span} >Net</Text></Text>
        <Text style={styles.Subtitile}>Explore nosso aplicativo navegando nos <Text style={styles.span}> CARDS</Text></Text>
      </View>
      <View style={styles.conteinerimg}>
        <TouchableOpacity  onPress={() => navigation.navigate('PRATICING')}>
        <Image style={styles.imagem1} source={imagehome1}/>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('VIDEO')}>
        <Image source={imagehome3} style={styles.imagem2} />
        </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity  onPress={() => navigation.navigate('COURSE')}>
        <Image source={imagehome2} style={styles.imagem3} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  conteiner: {
    backgroundColor: "#002250",
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  conteinerTexto:{
    paddingBottom:20
  },
  titile: {
    color: "#ffffff",
    fontSize: 45,
    paddingBottom: 2,
    fontFamily: 'VT323_400Regular'
  },
  Subtitile:{
    color: "#ffffff",
    fontSize: 15,
  },
  span: {
    color: '#00C2FF',
  },
  conteinerimg: {
    flexDirection: "row",
    marginBottom: 10
  },
  imagem1: {
    width: 170,
    height: 160,
    marginRight: 5,
    borderRadius: 20
  },
  imagem2: {
    width: 170,
    height: 160,
    borderRadius: 20
  },
  imagem3: {
    width: 360,
    height: 340,
    borderRadius: 20,
    marginBottom:40

  }
})
export default UserHomeScreen
