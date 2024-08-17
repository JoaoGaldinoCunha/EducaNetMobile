import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Video } from 'react-native-video';
import { VideoPlayerScreen } from '../../UserVideoScreen/VideoPlayerScreen'

export const VideoNameScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Educa-<Text style={styles.span}>Net</Text>
        </Text>
        <Text style={styles.subtitle}>VIDEO NAME</Text>
        <Text style={styles.description}>DESCRIPTION</Text>
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
      <View style={styles.videoContainer}>
       <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>RETORNAR PARA VIDEOS DO CURSO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default VideoNameScreen;

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
    fontFamily: 'VT323_400Regular',
  },
  description: {
    fontSize: 15,
    marginLeft: 20,
    top: 100,
    color: '#fff',
    marginBottom: 1,
    fontFamily: 'VT323_400Regular',
  },
  text: {
    top: 100,
    marginLeft: 20,
    fontSize: 20,
    color: '#fff',
  },

  videoContainer: {
    marginTop: 150,
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 200,
    backgroundColor: '#000',
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#00C2FF',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
