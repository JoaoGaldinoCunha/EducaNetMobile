import {  View, Text,Image,StyleSheet} from 'react-native';

import imagehome4 from '../../../../img/homepg.png'
import imagehome3 from '../../../../img/homepg2.png'
import imagehome1 from '../../../../img/homepg4.png'

export const UserHomeScreen = () => {
    return (
      <View style={styles.conteiner}>
      <View style={styles.conteinerimg}>
        <Image style={styles.imagem1} source={imagehome1} />
        <Image source={imagehome3} style={styles.imagem3}/>
      </View>
      <View>
        <Image source={imagehome4} style={styles.imagem4}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({

  conteiner: {
    backgroundColor: "#002250",
    flex: 1,
    padding: 20,
    paddingTop:80
  },
  conteinerimg: {
    flexDirection: "row",
    marginBottom:10
  },
  imagem1:{
    width:180,
    height:160,
    marginRight:5
  }, 
  imagem3:{
    width:180,
    height:160,
    borderRadius:20
  },
  imagem4:{
    width:360,
    height:340,
    borderRadius:20
  }
})
export default UserHomeScreen
