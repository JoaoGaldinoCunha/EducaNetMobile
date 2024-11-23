import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';

export const UserVideoScreen = ({ navigation, route }) => {
  const courseId = route.params?.courseId; // Recebendo o ID do curso pela rota
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para carregamento
  const [error, setError] = useState(null); // Estado para capturar erros

  // Buscar os vídeos vinculados ao courseId
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        if (courseId) {
          const response = await fetch(`http://192.168.0.10:8080/videoCourse/VideoCoursesById/${courseId}`);
          if (!response.ok) throw new Error('Erro ao buscar vídeos');
          const data = await response.json(); // Obtém os dados como JSON
          const videosArray = JSON.parse(data); // Converte a string JSON em um array de objetos
          setVideos(videosArray || []); // Garante que o estado seja sempre um array
        } else {
          throw new Error('Course ID não está definido');
        }
      } catch (error) {
        setError(error.message);
        console.error('Erro ao carregar os vídeos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [courseId]);

  // Exibe um indicador de carregamento enquanto busca dados
  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#00C2FF" />
        <Text style={styles.loaderText}>Carregando vídeos...</Text>
      </View>
    );
  }

  // Exibe uma mensagem de erro, se ocorrer
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Erro: {error}</Text>
        <Text style={styles.errorSubtitle}>Por favor, tente novamente mais tarde.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Educa-<Text style={styles.span}>Net</Text>
        </Text>
        <Text style={styles.subtitle}>VIDEOS DO CURSO</Text>
      </View>

      {/* Lista de Vídeos */}
      <View style={styles.section}>
        {videos.length > 0 ? (
          videos.map((video) => (
            <TouchableOpacity
              key={video.id}
              style={styles.videoContainer}
              onPress={() => navigation.navigate('VideoDetailScreen', { videoId: video.id })}
            >
              {/* Nome do Vídeo */}
              <Text style={styles.videoText}>{video.videoCourseName}</Text>
              {/* Descrição do Vídeo */}
              <Text style={styles.videoDescription}>{video.description}</Text>
              {/* URL do Vídeo */}
              <Text style={styles.videoUrl}>URL: {video.videoUrl}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noVideos}>Nenhum vídeo encontrado para este curso.</Text>
        )}
      </View>
    </ScrollView>
  );
};

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
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  videoText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  videoDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  videoUrl: {
    fontSize: 12,
    color: '#007ACC',
    marginTop: 5,
  },
  noVideos: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002250',
  },
  loaderText: {
    color: '#fff',
    marginTop: 10,
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
    marginBottom: 10,
  },
  errorSubtitle: {
    color: '#fff',
    fontSize: 16,
  },
});

export default UserVideoScreen;
