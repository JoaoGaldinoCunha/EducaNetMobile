import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';

export const VideoNameScreen = ({ navigation, route }) => {
  const { videoId } = route.params; // ID do vídeo recebido da navegação anterior
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Buscar os detalhes do vídeo ao montar o componente
  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await fetch(`http://192.168.0.10:8080/VideoCoursesById/{id}`);
        if (!response.ok) throw new Error('Erro ao buscar detalhes do vídeo');
        const data = await response.json();
        setVideoData(data); // Define os detalhes do vídeo
      } catch (error) {
        console.error('Erro ao carregar o vídeo:', error);
      } finally {
        setLoading(false); // Para de exibir o loader
      }
    };

    fetchVideoDetails();
  }, [videoId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00C2FF" />
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  if (!videoData) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Erro ao carregar os detalhes do vídeo.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>VOLTAR</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Educa-<Text style={styles.span}>Net</Text>
        </Text>
        <Text style={styles.subtitle}>VIDEO NAME</Text>
        <Text style={styles.description}>Descrição</Text>
        <Text style={styles.text}>{videoData.description}</Text>
      </View>

      <View style={styles.videoContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('VideoPlayerScreen', { videoUrl: videoData.videoUrl })
          }
        >
          <Text style={styles.buttonText}>ASSISTIR AO VÍDEO</Text>
        </TouchableOpacity>

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
    backgroundColor: '#002250',
    flex: 1,
    padding: 10,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 35,
    fontWeight: 'bold',
    position: 'absolute',
    top: 25,
    padding: 10,
  },
  span: {
    color: '#00C2FF',
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
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#00C2FF',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002250',
  },
  loadingText: {
    marginTop: 10,
    color: '#00C2FF',
    fontSize: 16,
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
});
