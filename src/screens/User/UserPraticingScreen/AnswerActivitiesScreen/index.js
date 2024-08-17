import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
export const AnswerActivitiesScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Educa-<Text style={styles.span}>Net</Text></Text>
        <Text style={styles.subtitle}>ACTIVITIY A</Text>
        <Text style={styles.description}>QUESTIONS</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Diam maecenas mi non sed ut odio. Non, justo, sed facilisi
          et. Eget viverra urna, vestibulum egestas faucibus
          egestas. Sagittis nam velit volutpat eu nunc.
          Diam maecenas mi non sed ut odio. Non, justo, sed facilisi
          et. Eget viverra urna, vestibulum egestas faucibus
          egestas. Sagittis nam velit volutpat eu nunc.
        </Text>
      </View>

      <View>
      <Text style={styles.alternatives}>ALTERNATIVES</Text>

      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.alternativesContainer}>
          <TextInput
            style={styles.alternativesText}
            value="ALTERNATIVE"
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.alternativesContainer}>
          <TextInput
            style={styles.alternativesText}
            value="ALTERNATIVE"
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.alternativesContainer}>
          <TextInput
            style={styles.alternativesText}
            value="ALTERNATIVE"
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.alternativesContainer}>
          <TextInput
            style={styles.alternativesText}
            value="ALTERNATIVE"
            editable={false}
          />
        </TouchableOpacity>
 
      </View>
      </ScrollView>
  );    


}
export default AnswerActivitiesScreen
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#002250",
    flex: 1,
    padding: 10,
  },
  
  header: {
    marginBottom: 30,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 35,
    fontWeight: 'bold',
    position: 'absolute',
    top: 25,
    padding: 10,
    
  },
  span: {
    color: "#00C2FF",
  },
  subtitle: {
    fontSize: 25,
    marginLeft: 20,
    top: 80,
    color: '#fff',
    marginBottom: 1,
    fontFamily: 'VT323_400Regular'

  },
  description: {
    fontSize: 15,
    marginLeft: 20,
    top: 100,
    color: '#fff',
    marginBottom: 1,
    fontFamily: 'VT323_400Regular'

  },
  text: {
    top: 100,
    marginLeft: 20,

    fontSize: 20,
    color: '#fff',
  },
  section: {
    marginTop: 60,
  },
  alternativesContainer: {
    backgroundColor: '#fff',
    top:25,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    marginBottom: 25,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15
  },
  alternatives: {
    fontSize: 25,
    marginLeft: 20,
    top: 80,
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'VT323_400Regular'
  },
  alternativesText: {
    fontSize: 15,
    marginLeft: 5,
    color: '#000',

  }


  
})

