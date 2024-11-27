import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';

export const TeacherVideoScreen = ({ navigation }) => {
  const [videoCourseName, setVideoCourseName] = useState('');
  const [videoCourseUrlId, setVideoCourseUrlId] = useState('');
  const [courseId, setCourseId] = useState('');
  const [videoCourseDescription, setVideoCourseDescription] = useState('');
  const [videos, setVideos] = useState([]);

  // Função para buscar vídeos do backend
  const fetchVideos = async () => {
    try {
      const response = await fetch('http://192.168.0.17:8080/allVideoCourses');
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      const data = await response.json();
      if (Array.isArray(data)) {
        setVideos(data);
      } else {
        console.error('Resposta inesperada da API:', data);
        setVideos([]);
      }
    } catch (error) {
      console.error('Erro ao buscar vídeos:', error);
      Alert.alert('Erro', 'Não foi possível carregar os vídeos.');
    }
  };

  // Atualiza os vídeos quando a tela for focada
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchVideos();
    });

    return unsubscribe;
  }, [navigation]);

  // Função para criar um vídeo
  const handleCreateVideo = async () => {
    if (!videoCourseName || !videoCourseUrlId || !courseId || !videoCourseDescription) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
      return;
    }

    const videoData = {
      videoCourseName,
      videoCourseUrlId,
      courseId: parseInt(courseId, 10),
      videoCourseDescription,
    };

    try {
      const response = await fetch('http://192.168.0.17:8080/videoCourse/videopost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(videoData),
      });

      const responseData = await response.text();

      if (response.ok) {
        Alert.alert('Sucesso', responseData || 'Vídeo criado com sucesso!');
        setVideoCourseName('');
        setVideoCourseUrlId('');
        setCourseId('');
        setVideoCourseDescription('');
        fetchVideos();
      } else {
        Alert.alert('Erro', `Erro ao criar o vídeo: ${responseData || response.status}`);
      }
    } catch (error) {
      console.error('Erro ao criar o vídeo:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao criar o vídeo. Verifique sua conexão com a internet.');
    }
  };

  // Função para deletar um vídeo
  const handleDeleteVideo = async (videoId) => {
    try {
      const response = await fetch(`http://192.168.0.17:8080/videoCourse/${videoId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Vídeo deletado com sucesso!');
        fetchVideos();
      } else {
        Alert.alert('Erro', `Falha ao deletar o vídeo: ${response.status}`);
      }
    } catch (error) {
      console.error('Erro ao deletar o vídeo:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao deletar o vídeo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Educa-<Text style={styles.span}>Net</Text>
      </Text>
      <View style={styles.containerItems}>
        {/* Seção de Vídeos Criados */}
        <Text style={styles.titleVideos}>Vídeos Criados</Text>
        <ScrollView style={styles.containerVideos}>
          {videos.length > 0 ? (
            videos.map((video, index) => (
              <View key={index} style={styles.containerVideo}>
                <Text style={styles.videoName}>{video.videoCourseName || 'Nome não disponível'}</Text>
                <TouchableOpacity
                  style={styles.buttonEdit}
                  onPress={() =>
                    navigation.navigate('TeacherEditVideo', {
                      videoId: video.videoCourseId,
                      videoCourseName: video.videoCourseName,
                      videoCourseUrlId: video.videoCourseUrlId,
                      courseId: video.tbCourse?.courseId,
                      videoCourseDescription: video.videoCourseDescription,
                    })
                  }
                >
                  <Text style={styles.buttonText}>EDITAR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonDelete}
                  onPress={() => handleDeleteVideo(video.videoCourseId)}
                >
                  <Text style={styles.buttonText}>DELETAR</Text>
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <Text style={styles.noVideosText}>Nenhum vídeo disponível.</Text>
          )}
        </ScrollView>

        {/* Seção de Criação de Vídeo */}
        <View style={styles.containerCreated}>
          <Text style={styles.titleContainerCreated}>Criar Vídeo</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome do Vídeo"
            value={videoCourseName}
            onChangeText={setVideoCourseName}
          />
          <TextInput
            style={styles.input}
            placeholder="ID do Vídeo (URL)"
            value={videoCourseUrlId}
            onChangeText={setVideoCourseUrlId}
          />
          <TextInput
            style={styles.input}
            placeholder="ID do Curso"
            value={courseId}
            onChangeText={setCourseId}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Descrição"
            value={videoCourseDescription}
            onChangeText={setVideoCourseDescription}
          />
          <TouchableOpacity style={styles.button} onPress={handleCreateVideo}>
            <Text style={styles.buttonText}>POSTAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#002250',
    flex: 1,
    padding: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 35,
    fontWeight: 'bold',
    position: 'absolute',
    top: 60,
  },
  span: {
    color: '#00C2FF',
  },
  containerItems: {
    marginTop: 100,
  },
  containerVideos: {
    height: 200,
  },
  titleVideos: {
    color: '#FFFFFF',
    fontSize: 35,
  },
  containerVideo: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#003366',
    borderRadius: 10,
  },
  videoName: {
    color: '#FFFFFF',
    fontSize: 20,
    flex: 1,
  },
  buttonEdit: {
    backgroundColor: '#23C02A',
    borderRadius: 15,
    padding: 10,
  },
  buttonDelete: {
    backgroundColor: '#C02323',
    borderRadius: 15,
    padding: 10,
  },
  containerCreated: {
    height: 300,
    width: '100%',
    backgroundColor: '#00C2FF',
    borderRadius: 20,
    padding: 10,
  },
  titleContainerCreated: {
    color: '#FFF',
    fontSize: 25,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 10,
    padding: 5,
  },
  button: {
    backgroundColor: '#003366',
    padding: 10,
    borderRadius: 20,
    marginTop: 1,
  },
  buttonText: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noVideosText: {
    color: '#FFF',
    textAlign: 'center',
  },
});

export default TeacherVideoScreen;
