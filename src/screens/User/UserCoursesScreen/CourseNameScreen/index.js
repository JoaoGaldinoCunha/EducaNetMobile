import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export const CourseNameScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Educa-<Text style={styles.span}>Net</Text>
        </Text>
        <Text style={styles.subtitle}>COURSE NAME</Text>
        <Text style={styles.description}>DESCRIPTION</Text>
        <View>
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
      </View>


      <View style={styles.section}>
        <TouchableOpacity style={styles.alternativesContainer}>
          <Text style={styles.alternativesText}>COURSE HOURS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.alternativesContainer}>
          <Text style={styles.alternativesText}>TOPICS COVERED</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.alternativesContainer}>
          <Text style={styles.alternativesText}>TEACHER'S NAME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpContainer}>
          <Text style={styles.alternativesText}>SIGN UP</Text>
        </TouchableOpacity>
        

      </View>
    </ScrollView>
  );
}

export default CourseNameScreen;

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
    marginTop: 30,
    fontSize: 35,
    fontWeight: 'bold',
    padding: 10,
  },
  span: {
    color: "#00C2FF",
  },
  subtitle: {
    fontSize: 25,
    marginLeft: 20,
    color: '#fff',
    fontFamily: 'VT323_400Regular'
  },
  description: {
    fontSize: 15,
    marginLeft: 20,
    marginTop: 20,
    color: '#fff',
    marginBottom: 1,
    fontFamily: 'VT323_400Regular'
  },
  text: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 15,
    color: '#fff',
  },
  section: {
    marginTop: 6,
    marginBottom: 35,

  },
  alternativesContainer: {
    backgroundColor: '#fff',
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    marginBottom: 5,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15
  },
  alternatives: {
    fontSize: 25,
    marginLeft: 20,
    marginTop: 20,
    color: '#fff',
    fontFamily: 'VT323_400Regular'
  },
  alternativesText: {
    fontSize: 15,
    marginLeft: 5,
    color: '#000',
  },
  
    signUpContainer: {
    backgroundColor: '#00BFFF',
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    marginBottom: 5,
    borderRadius: 15,
  },

});
