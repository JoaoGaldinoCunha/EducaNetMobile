import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export const TeacherEditCourseScreen = ({ route, navigation }) => {
  const { courseId, courseName, workload, theme, description } = route.params;

  const [newCourseName, setNewCourseName] = useState(courseName);
  const [newWorkload, setNewWorkload] = useState(workload.toString());
  const [newTheme, setNewTheme] = useState(theme);
  const [newDescription, setNewDescription] = useState(description);

  // Função para atualizar o curso
  const handleUpdateCourse = async () => {
    const updatedCourse = {
      courseId,
      courseName: newCourseName,
      workload: parseInt(newWorkload, 10),
      courseClass: newTheme,
      description: newDescription,
    };

    try {
      const response = await fetch(`http://192.168.0.17:8080/course/${courseId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCourse),
      });

      if (response.ok) {
        alert('Curso atualizado com sucesso!');
        navigation.goBack();
      } else {
        alert(`Erro ao atualizar o curso: ${response.status}`);
      }
    } catch (error) {
      console.error('Erro ao atualizar o curso:', error);
      alert('Ocorreu um erro ao atualizar o curso.');
    }
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Educa-<Text style={styles.span}>Net</Text></Text>
      <Text style={styles.title}>Editar Curso</Text>
      

      <TextInput
        style={styles.input}
        placeholder="Nome do Curso"
        value={newCourseName}
        onChangeText={setNewCourseName}
      />
      <TextInput
        style={styles.input}
        placeholder="Carga Horária"
        value={newWorkload}
        onChangeText={setNewWorkload}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Tema do Curso"
        value={newTheme}
        onChangeText={setNewTheme}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={newDescription}
        onChangeText={setNewDescription}
      />

      <TouchableOpacity style={styles.button} onPress={handleUpdateCourse}>
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

export default TeacherEditCourseScreen;
