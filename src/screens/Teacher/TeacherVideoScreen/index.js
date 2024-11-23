import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export const TeacherVideoScreen = ({ navigation }) => {
  const [videoName, setVideoName] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [courseId, setCourseId] = useState('');
  const [description, setDescription] = useState('');
  const [videos, setVideos] = useState([]);

  // Função para buscar vídeos do backend
  const fetchVideos = async () => {
    try {
      const response = await fetch('http://192.168.0.13:8080/VideoCoursesById/{id}');
      const data = await response.json();
      console.log('Dados recebidos:', data);
      if (Array.isArray(data)) {
        setVideos(data);
      } else {
        console.error('Resposta inesperada da API:', data);
        setVideos([]);
      }
    } catch (error) {
      console.error('Erro ao buscar vídeos:', error);
      alert('Não foi possível carregar os vídeos.');
    }
  };

  // UseEffect para buscar vídeos quando a tela for carregada
  useEffect(() => {
    fetchVideos();
  }, []);

  // Função para criar um vídeo
  const handleCreateVideo = async () => {
    if (!videoName || !videoUrl || !courseId || !description) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const videoData = {
      videoName,
      videoUrl,
      courseId: parseInt(courseId, 10),
      description,
    };

    try {
      const response = await fetch('http://192.168.0.13:8080/videoCourse/videopost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(videoData),
      });

      const statusCode = response.status;
      const responseData = await response.json();

      if (statusCode === 201 || statusCode === 200) {
        alert('Vídeo criado com sucesso!');
        setVideoName('');
        setVideoUrl('');
        setCourseId('');
        setDescription('');
        fetchVideos();
      } else {
        alert(`Erro ao criar o vídeo: ${responseData.message || statusCode}`);
      }
    } catch (error) {
      console.error('Erro ao criar o vídeo:', error);
      alert('Ocorreu um erro ao criar o vídeo. Verifique sua conexão com a internet.');
    }
  };

  // Função para deletar um vídeo
  const handleDeleteVideo = async (videoId) => {
    try {
      const response = await fetch(`http://192.168.0.13:8080/videoCourse/{id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Vídeo deletado com sucesso!');
        fetchVideos();
      } else {
        alert(`Falha ao deletar o vídeo: ${response.status}`);
      }
    } catch (error) {
      console.error('Erro ao deletar o vídeo:', error);
      alert('Ocorreu um erro ao deletar o vídeo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Educa-<Text style={styles.span}>Net</Text></Text>
      <View style={styles.containerItems}>
        {/* Seção de Vídeos Criados */}
        <Text style={styles.titleVideos}>Vídeos Criados</Text>
        <ScrollView style={styles.containerVideos}>
          {videos && videos.length > 0 ? (
            videos.map((video, index) => (
              <View key={index} style={styles.containerVideo}>
                <Text style={styles.videoName}>{video.videoName || 'Nome não disponível'}</Text>
                <TouchableOpacity
                  style={styles.buttonEdit}
                  onPress={() =>
                    navigation.navigate('TeacherEditVideo', {
                      videoId: video.videoId,
                      videoName: video.videoName,
                      videoUrl: video.videoUrl,
                      courseId: video.courseId,
                      description: video.description,
                    })
                  }
                >
                  <Text style={styles.buttonText}>EDITAR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonDelete}
                  onPress={() => handleDeleteVideo(video.videoId)}
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
            value={videoName}
            onChangeText={setVideoName}
          />
          <TextInput
            style={styles.input}
            placeholder="URL do Vídeo"
            value={videoUrl}
            onChangeText={setVideoUrl}
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
            value={description}
            onChangeText={setDescription}
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
    padding: 10,
  },
  button: {
    backgroundColor: '#1977F3',
    borderRadius: 15,
    padding: 20,
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
  },
});

export default TeacherVideoScreen;
