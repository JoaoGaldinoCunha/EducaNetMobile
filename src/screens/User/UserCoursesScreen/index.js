import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export const UserCoursesScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Educa-<Text style={styles.span}>Net</Text></Text>
        <Text style={styles.subtitle}>OPEN COURSES</Text>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.coursesContainer} onPress={() => navigation.navigate('CourseNameScreen')}>
          <Text style={styles.coursesText}>Course 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.coursesContainer} onPress={() => navigation.navigate('CourseNameScreen')}>
          <Text style={styles.coursesText}>Course 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.coursesContainer} onPress={() => navigation.navigate('CourseNameScreen')}>
          <Text style={styles.coursesText}>Course 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.coursesContainer} onPress={() => navigation.navigate('CourseNameScreen')}>
          <Text style={styles.coursesText}>Course 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.coursesContainer} onPress={() => navigation.navigate('CourseNameScreen')}>
          <Text style={styles.coursesText}>Course 5</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.availableCourses}>AVAILABLE COURSES</Text>
      </View>
      <View style={styles.availableSection}>
        <TouchableOpacity style={styles.availableContainer} onPress={() => navigation.navigate('CourseNameScreen')}>
          <Text style={styles.availableText}>Available Course 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.availableContainer} onPress={() => navigation.navigate('CourseNameScreen')}>
          <Text style={styles.availableText}>Available Course 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.availableContainer} onPress={() => navigation.navigate('CourseNameScreen')}>
          <Text style={styles.availableText}>Available Course 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.availableContainer} onPress={() => navigation.navigate('CourseNameScreen')}>
          <Text style={styles.availableText}>Available Course 4</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default UserCoursesScreen;

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
    marginBottom: 1,

  },
  span: {
    color: "#00C2FF",
  },
  subtitle: {
    fontSize: 25,
    marginLeft: 10,
    Top: 20,
    color: '#fff',
    marginBottom: 0,
    fontFamily: 'VT323_400Regular',
  },
  section: {
    marginTop: 20,
  },
  coursesContainer: {
    backgroundColor: '#fff',
    top: 1,
    marginTop: 2,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    marginBottom: 8,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  coursesText: {
    fontSize: 18,
    color: '#000',
  },
  availableSection: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  availableCourses: {
    fontSize: 25,
    marginLeft: 10,
    marginTop: 30,
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'VT323_400Regular',
  },
  availableContainer: {
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    marginBottom: 10,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  availableText: {
    fontSize: 18,
    color: '#000',
  },
});
