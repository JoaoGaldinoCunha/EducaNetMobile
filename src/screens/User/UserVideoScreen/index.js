import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useFonts, VT323_400Regular } from '@expo-google-fonts/vt323'

export const UserVideoScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Educa-<Text style={styles.span}>Net</Text></Text>
        <Text style={styles.subtitle}>VIDEO COURSES</Text>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.videoContainer}          
        onPress={ () => navigation.navigate('VideoNameScreen')}>
          <TextInput
            style={styles.videoText}
            value="VIDEO"
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.videoContainer}        
        onPress={ () => navigation.navigate('VideoNameScreen')}>
          <TextInput
            style={styles.videoText}
            value="VIDEO"
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.videoContainer}        
        onPress={ () => navigation.navigate('VideoNameScreen')}>
          <TextInput
            style={styles.videoText}
            value="VIDEO"
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.videoContainer}        
        onPress={ () => navigation.navigate('VideoNameScreen')}>
          <TextInput
            style={styles.videoText}
            value="VIDEO"
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.videoContainer}        
        onPress={ () => navigation.navigate('VideoNameScreen')}>
          <TextInput
            style={styles.videoText}
            value="VIDEO"
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.videoContainer}        
        onPress={ () => navigation.navigate('VideoNameScreen')}>
          <TextInput
            style={styles.videoText}
            value="VIDEO"
            editable={false}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.gradeVideoSection}>

        <Text style={styles.titleVideoGrade}>VIDEOS SEEN</Text>

        <View style={styles.row}>
          <Text style={styles.labelVideoGrade}>VIDEO</Text>
          <TouchableOpacity style={styles.inputVideoGrade}
          onPress={ () => navigation.navigate('VideoNameScreen')}>
          <Text style={styles.alternativesText}>SEE AGAIN</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.labelVideoGrade}>VIDEO</Text>
          <TouchableOpacity style={styles.inputVideoGrade}
          onPress={ () => navigation.navigate('VideoNameScreen')}>
          <Text style={styles.alternativesText}>SEE AGAIN</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.labelVideoGrade}>VIDEO</Text>
          <TouchableOpacity style={styles.inputVideoGrade}
          onPress={ () => navigation.navigate('VideoNameScreen')}>
          <Text style={styles.alternativesText}>SEE AGAIN</Text>
        </TouchableOpacity>
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
    marginLeft: 10,
    top: 80,
    color: '#fff',
    marginBottom: 1,
    fontFamily: 'VT323_400Regular',

  },
  section: {
    marginTop: 60,
  },
    videoContainer: {
    backgroundColor: '#fff',
    height: 40,
    marginRight: 20,
    marginLeft: 10,
    padding: 10,
    marginBottom: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius:10,  
  },
  videoText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 20,
  },
  gradeVideoSection: {
    backgroundColor: '#00BFFF',
    top: 5,
    marginRight: 20,
    borderRadius: 15,
    marginLeft: 10,
    padding: 15,
    marginBottom: 40,
  },
  titleVideoGrade: {
    fontSize: 25,
    marginLeft: 10,
    color: '#fff',
    fontFamily: 'VT323_400Regular'

  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  labelVideoGrade: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 15,
    marginRight: 20,
    color: 'white',
  },
  inputVideoGrade:{
    height: 40,
    width: '20',
    backgroundColor: 'white',
    padding: 10,
    marginRight: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius:10,
    flex: 1,
    marginRight: 10,

  },

});

export default UserVideoScreen;