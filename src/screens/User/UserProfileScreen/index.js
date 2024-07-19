import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import imageProfile from '../../../../img/Profile.png'
export const UserProfileScreen = () => {
    return (
      <View style={styles.conteiner} >
      <View>
        <Image source={imageProfile} style={styles.imagem} />
      </View>
      <View>
        <Text style={styles.titleProfile}>PROFILIE</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="UserName"
          /><TextInput
            style={styles.input}
            placeholder="LastName"
          /><TextInput
            style={styles.input}
            placeholder="Email"
          /><TextInput
            style={styles.input}
            placeholder="Password"
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: "#002250",
    flex: 1,
    padding: 20,
    paddingTop: 80,
    alignItems: "center"
  },
  imagem: {
    width: 310,
    height: 280,
    borderRadius: 20
  },
  titleProfile: {
    marginTop: 15,
    color: '#00C2FF',
    fontSize: 30
  }, 
  input: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 10,
    height:60,
    width: "100%",
    padding:4
  }

})