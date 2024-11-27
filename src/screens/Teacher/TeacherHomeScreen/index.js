import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const imagehome1 = require('../../../../img/ReturnExercicies.png');
const imagehome2 = require('../../../../img/ReturnYourCourses.png');
const imagehome3 = require('../../../../img/ReturnYourVideos.png');

const TeacherHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Bem Vindo ao Educa-<Text style={styles.span}>Net</Text>
        </Text>
        <Text style={styles.subtitle}>
          Explore nosso aplicativo navegando nos <Text style={styles.span}>CARDS</Text>
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('PRATICING')}>
          <Image style={styles.image1} source={imagehome1} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('VIDEO')}>
          <Image source={imagehome3} style={styles.image2} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('COURSES')}>
          <Image source={imagehome2} style={styles.image3} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#002250',
    flex: 1,
    padding: 20,
  },
  textContainer: {
    paddingBottom: 20,
  },
  title: {
    color: '#ffffff',
    fontSize: 45,
    paddingBottom: 2,
    fontFamily: 'VT323_400Regular',
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 15,
  },
  span: {
    color: '#00C2FF',
  },
  imageContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  image1: {
    width: 170,
    height: 160,
    marginRight: 5,
    borderRadius: 20,
  },
  image2: {
    width: 170,
    height: 160,
    borderRadius: 20,
  },
  image3: {
    width: 360,
    height: 340,
    borderRadius: 20,
    marginBottom: 40,
  },
});

export default TeacherHomeScreen;