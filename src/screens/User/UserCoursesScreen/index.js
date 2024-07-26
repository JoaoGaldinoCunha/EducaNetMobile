import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

export const UserCoursesScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Educa-<Text style={styles.span}>Net</Text></Text>
        <Text style={styles.subtitle}>OPEN COURSES</Text>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.coursesContainer}>
          <TextInput
            style={styles.coursesText}
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.coursesContainer}>
          <TextInput
            style={styles.coursesText}
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.coursesContainer}>
          <TextInput
            style={styles.coursesText}
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.coursesContainer}>
          <TextInput
            style={styles.coursesText}
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.coursesContainer}>
          <TextInput
            style={styles.coursesText}
            editable={false}
          />
        </TouchableOpacity>
        </View>

      <View>
      <Text style={styles.avaiableCourses}>AVAIABLE COURSES</Text>
      </View>
      <View style={styles.Avaiablesection}>
        <TouchableOpacity style={styles.avaiableContainer}>
          <TextInput
            style={styles.alternativesText}
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.avaiableContainer}>
          <TextInput
            style={styles.alternativesText}
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.avaiableContainer}>
          <TextInput
            style={styles.alternativesText}
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.avaiableContainer}>
          <TextInput
            style={styles.alternativesText}
            editable={false}
          />
        </TouchableOpacity>
 
      </View>
      </ScrollView>
  );    


}
export default UserCoursesScreen
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
    marginLeft: 10,
    top: 120,
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
    marginTop: 100,
  },
  coursesContainer: {
    backgroundColor: '#fff',
    top:5,
    marginLeft: 10,
    marginRight: 20,
    padding: 5,
    marginBottom: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15 
  },
  Avaiablesection: {
    top:30,
    marginLeft: 10,
    marginRight: 20,
    padding: 5,
    marginBottom: 25,
  },
  avaiableCourses: {
    fontSize: 25,
    marginLeft: 10,
    top: 30,
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'VT323_400Regular'
  },
  avaiableContainer: {
    backgroundColor: '#fff',
    top:5,
    padding: 5,
    marginBottom: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15
  }

})

