import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';

export const VideoPlayerScreen = ({ route }) => {
  const { videoUrl, videoTitle, videoDescription } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{videoTitle}</Text>
      <Text style={styles.description}>{videoDescription}</Text>
      <Video
        source={{ uri: videoUrl }}
        style={styles.video}
        controls={true}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002250',
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  video: {
    width: '100%',
    height: 250,
    backgroundColor: '#000',
  },
});

export default VideoPlayerScreen;
