import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';

export const UserVideoScreen = ({ navigation, route }) => {
  // Acessando courseId e courseName da rota
  const courseId = route.params?.courseId;
  const courseName = route.params?.courseName;

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // UseEffect para buscar vídeos relacionados ao curso
  useEffect(() => {
    if (!courseId) {
      setError('Course ID não está definido. Retornando para a tela anterior...');
      setTimeout(() => {
        navigation.goBack(); // Volta para a tela anterior
      }, 3000);
      return;
    }

    const fetchVideos = async () => {
      try {
        const response = await fetch(`http://192.168.0.17:8080/allVideoCourses`);
        if (!response.ok) throw new Error('Erro ao buscar vídeos');
        const data = await response.json();
        setVideos(data || []); // Define os vídeos recebidos
      } catch (error) {
        setError(error.message);
        console.error('Erro ao carregar os vídeos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [courseId]); // Reexecuta o useEffect se courseId mudar

  // Exibe o carregamento enquanto os vídeos são buscados
  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#00C2FF" />
        <Text style={styles.loaderText}>Carregando vídeos...</Text>
      </View>
    );
  }

  // Exibe erro caso ocorra durante a requisição
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Erro: {error}</Text>
        <Text style={styles.errorSubtitle}>Por favor, tente novamente mais tarde.</Text>
      </View>
    );
  }

  // Exibe a lista de vídeos
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Educa-<Text style={styles.span}>Net</Text>
        </Text>
        <Text style={styles.subtitle}>Vídeos do Curso: {courseName}</Text>
      </View>

      {/* Mostra o Course ID para debug */}
      <Text style={{ color: '#fff', textAlign: 'center', marginTop: 20 }}>
        Course ID: {courseId}
      </Text>

      <View style={styles.section}>
        {videos.length > 0 ? (
          videos.map(video => (
<TouchableOpacity
  key={video.videoCourseId} // Chave única
  style={styles.videoContainer}
  onPress={() =>
    navigation.navigate('VideoNameScreen', {
      videoUrl: video.videoCourseUrlId, // Passa o URL correto
      videoTitle: video.videoCourseName,
      videoDescription: video.videoCourseDescription,
    })
  }
>
  <Text style={styles.videoText}>Nome: {video.videoCourseName}</Text>
  <Text style={styles.videoDescription}>
    Descrição: {video.videoCourseDescription}
  </Text>
  <Text style={styles.videoUrl}>URL ID: {video.videoCourseUrlId}</Text>
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
  container: { backgroundColor: '#002250', flex: 1, padding: 10 },
  header: { marginBottom: 30 },
  title: { color: '#FFFFFF', fontSize: 35, fontWeight: 'bold', position: 'absolute', top: 25, padding: 10 },
  span: { color: '#00C2FF' },
  subtitle: { fontSize: 25, marginLeft: 10, top: 80, color: '#fff', marginBottom: 1, fontFamily: 'VT323_400Regular' },
  section: { marginTop: 60 },
  videoContainer: { backgroundColor: '#fff', padding: 10, marginBottom: 10, borderRadius: 10 },
  videoText: { fontSize: 18, color: '#000', fontWeight: 'bold' },
  videoDescription: { fontSize: 14, color: '#555', marginTop: 5 },
  videoUrl: { fontSize: 12, color: '#007ACC', marginTop: 5 },
  courseIdText: { fontSize: 12, color: '#555', marginTop: 5 },
  noVideos: { color: '#fff', textAlign: 'center', marginTop: 20, fontSize: 18 },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#002250' },
  loaderText: { color: '#fff', marginTop: 10 },
  errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#002250' },
  errorText: { color: '#FF5C5C', fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  errorSubtitle: { color: '#fff', fontSize: 16 },
});

export default UserVideoScreen;
