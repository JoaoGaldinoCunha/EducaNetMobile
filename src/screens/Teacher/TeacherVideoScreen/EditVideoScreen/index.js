import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export const TeacherEditVideoScreen = ({ route, navigation }) => {
  const {
    videoId,
    videoCourseName,
    videoCourseUrlId,
    courseId,
    videoCourseDescription,
  } = route.params;

  const [newVideoName, setNewVideoName] = useState(videoCourseName || '');
  const [newVideoUrlId, setNewVideoUrlId] = useState(videoCourseUrlId || '');
  const [newCourseId, setNewCourseId] = useState(courseId?.toString() || '');
  const [newVideoDescription, setNewVideoDescription] = useState(videoCourseDescription || '');

  // Função para atualizar o vídeo
  const handleUpdateVideo = async () => {
    const updatedVideo = {
      videoCourseId: videoId,
      videoCourseName: newVideoName,
      videoCourseUrlId: newVideoUrlId,
      courseId: parseInt(newCourseId, 10),
      videoCourseDescription: newVideoDescription,
    };

    try {
      const response = await fetch(`http://192.168.0.17:8080/videoCourse/${videoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedVideo),
      });

      if (response.ok) {
        alert('Vídeo atualizado com sucesso!');
        navigation.goBack();
      } else {
        alert(`Erro ao atualizar o vídeo: ${response.status}`);
      }
    } catch (error) {
      console.error('Erro ao atualizar o vídeo:', error);
      alert('Ocorreu um erro ao atualizar o vídeo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Educa-<Text style={styles.span}>Net</Text>
      </Text>
      <Text style={styles.title}>Editar Vídeo</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Vídeo"
        value={newVideoName}
        onChangeText={setNewVideoName}
      />
      <TextInput
        style={styles.input}
        placeholder="ID do Vídeo (URL)"
        value={newVideoUrlId}
        onChangeText={setNewVideoUrlId}
      />
      <TextInput
        style={styles.input}
        placeholder="ID do Curso"
        value={newCourseId}
        onChangeText={setNewCourseId}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição do Vídeo"
        value={newVideoDescription}
        onChangeText={setNewVideoDescription}
      />

      <TouchableOpacity style={styles.button} onPress={handleUpdateVideo}>
        <Text style={styles.buttonText}>ATUALIZAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002250',
    padding: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 35,
    marginBottom: 20,
  },
  span: {
    color: '#1977F3',
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
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
  },
});

export default TeacherEditVideoScreen;
