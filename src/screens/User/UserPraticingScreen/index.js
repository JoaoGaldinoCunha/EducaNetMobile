import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useFonts, VT323_400Regular } from '@expo-google-fonts/vt323'

export const UserPraticingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Educa-<Text style={styles.span}>Net</Text></Text>
        <Text style={styles.subtitle}>OPEN ACTIVITIES</Text>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.activityContainer}>
          <TextInput
            style={styles.activityText}
            value="ACTIVITY"
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.activityContainer}>
          <TextInput
            style={styles.activityText}
            value="ACTIVITY"
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.activityContainer}>
          <TextInput
            style={styles.activityText}
            value="ACTIVITY"
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.activityContainer}>
          <TextInput
            style={styles.activityText}
            value="ACTIVITY"
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.activityContainer}>
          <TextInput
            style={styles.activityText}
            value="ACTIVITY"
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.activityContainer}>
          <TextInput
            style={styles.activityText}
            value="ACTIVITY"
            editable={false}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.gradeSection}>
        <Text style={styles.titleGrade}>GRADE FROM LATEST ACTIVITIES</Text>
        <View style={styles.row}>
          <Text style={styles.labelGrade}>ACTIVITY</Text>
          <TextInput
            style={styles.inputGrade}
            value="GRADE"
            editable={false}
          />
          <TextInput
            style={styles.input}
            value="ACTIVITY"
            editable={false}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.labelGrade}>ACTIVITY</Text>
          <TextInput
            style={styles.inputGrade}
            value="GRADE"
            editable={false}
          />
          <TextInput
            style={styles.input}
            value="ACTIVITY"
            editable={false}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.labelGrade}>ACTIVITY</Text>
          <TextInput
            style={styles.inputGrade}
            value="GRADE"
            editable={false}
          />
          <TextInput
            style={styles.input}
            value="ACTIVITY"
            editable={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

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
    marginLeft: 110,
    top: 80,
    color: '#fff',
    marginBottom: 1,
    fontFamily: 'VT323_400Regular',

  },
  section: {
    marginTop: 60,
  },
  activityContainer: {
    backgroundColor: '#fff',
    height: 47,
    padding: 15,
    marginBottom: 10,
    borderRadius: 15,
  },
  activityText: {
    fontSize: 16,
    marginLeft: 10,
  },
  gradeSection: {
    backgroundColor: '#00BFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 40,
  },
  titleGrade: {
    fontSize: 25,
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 25,
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'VT323_400Regular'

  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  labelGrade: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'white',
  },
  inputGrade:{
    height: 40,
    width: '20',
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius:10,
    flex: 1,
    marginRight: 10,

  },
  input: {
    height: 40,
    backgroundColor: 'white',
    padding: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius:10,
    flex: 1,
    marginRight: 10,
  },
});

export default UserPraticingScreen;