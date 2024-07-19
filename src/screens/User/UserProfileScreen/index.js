import {  View, Text} from 'react-native';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';

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
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            value={password}
          /><TextInput
            style={styles.input}
            placeholder="LastName"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            value={password}
          /><TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            value={password}
          /><TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            value={password}
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