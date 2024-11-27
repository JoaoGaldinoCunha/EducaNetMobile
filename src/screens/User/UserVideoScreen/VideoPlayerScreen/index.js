import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';

export const VideoPlayerScreen = ({ route }) => {
  const { videoUrl, videoTitle, videoDescription } = route.params || {};

  // Verificar se a URL do vídeo foi passada
  if (!videoUrl) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>URL do vídeo não disponível.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{videoTitle || 'Sem título disponível'}</Text>
      <Text style={styles.description}>{videoDescription || 'Descrição não disponível'}</Text>
      
      <Video
        source={{ uri: videoUrl }} // Define a URL do vídeo
        style={styles.video} // Estilos do player
        controls={true} // Ativa os controles padrão (play, pause, etc.)
        resizeMode="contain" // Ajusta o vídeo para caber na tela
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002250',
  },
  errorText: {
    color: '#FF5C5C',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default VideoPlayerScreen;
