import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';

export const VideoNameScreen = ({ route, navigation }) => {
  const { videoUrl, videoTitle, videoDescription } = route.params || {};

  // Função para abrir o vídeo no YouTube
  const openYouTube = async () => {
    try {
      const supported = await Linking.canOpenURL(videoUrl);
      if (supported) {
        await Linking.openURL(videoUrl); // Abre o YouTube diretamente
      } else {
        Alert.alert('Erro', 'Não foi possível abrir o link do vídeo.');
      }
    } catch (error) {
      console.error('Erro ao abrir o vídeo:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar abrir o vídeo.');
    }
  };

  if (!videoUrl) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>URL do vídeo não disponível.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>VOLTAR</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{videoTitle || 'Sem título disponível'}</Text>
      <Text style={styles.description}>{videoDescription || 'Descrição não disponível'}</Text>

      <TouchableOpacity style={styles.watchButton} onPress={openYouTube}>
        <Text style={styles.watchButtonText}>ASSISTIR VIDEO AULA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002250',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  watchButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#00C2FF',
    borderRadius: 10,
  },
  watchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1977F3',
    borderRadius: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1977F3',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VideoNameScreen;
