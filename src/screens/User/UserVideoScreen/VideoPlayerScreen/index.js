import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'react-native-video';

export const VideoPlayerScreen = ({ source }) => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: source }}
        style={styles.video}
        controls={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 200,
  },
});

export default VideoPlayerScreen;