import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';

export const TeacherCourseScreen = ({ navigation }) => {
  const [courseName, setCourseName] = useState('');
  const [workload, setWorkload] = useState('');
  const [theme, setTheme] = useState('');
  const [description, setDescription] = useState('');
  const [courses, setCourses] = useState([]);

  // Função para buscar os cursos do backend
  const fetchCourses = async () => {
    try {
      const response = await fetch('http://192.168.0.13:8080/course/AllCourses');
      const data = await response.json();
      console.log('Dados recebidos:', data);
      if (Array.isArray(data)) {
        setCourses(data);
      } else {
        console.error('Resposta inesperada da API:', data);
        setCourses([]);
      }
    } catch (error) {
      console.error('Erro ao buscar cursos:', error);
      alert('Não foi possível carregar os cursos.');
    }
  };

  // UseEffect para buscar cursos quando a tela for carregada
  useEffect(() => {
    fetchCourses();
  }, []);


// Função para criar um curso
const handleCreateCourse = async () => {
  if (!courseName || !workload || !theme || !description) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Estrutura correta dos dados
  const courseData = {
    courseName: courseName,
    workload: parseInt(workload, 10),
    courseClass: theme,
    description: description,
  };
  

  try {
    const response = await fetch('http://192.168.0.13:8080/course/coursesave', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(courseData),
    });

    // Verificar o status da resposta
    const statusCode = response.status;
    const contentType = response.headers.get('Content-Type');

    let responseData;
    if (contentType && contentType.includes('application/json')) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }

    if (statusCode === 201 || statusCode === 200) {
      alert('Curso criado com sucesso!');
      setCourseName('');
      setWorkload('');
      setTheme('');
      setDescription('');
      fetchCourses();
    } else if (statusCode === 409) {
      alert(responseData.message || 'Erro: Curso já existe. Escolha um nome diferente.');
    } else {
      alert(`Falha ao criar o curso: ${responseData.message || statusCode}`);
    }
  } catch (error) {
    console.error('Erro ao criar o curso:', error);
    alert('Ocorreu um erro ao criar o curso. Verifique sua conexão com a internet.');
  }
};

  


  // Função para deletar um curso
  const handleDeleteCourse = async (courseId) => {
    try {
      const response = await fetch(`http://192.168.0.13:8080/course/deleteCourse/${courseId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Curso deletado com sucesso!');
        fetchCourses();
      } else {
        alert(`Falha ao deletar o curso: ${response.status}`);
      }
    } catch (error) {
      console.error('Erro ao deletar o curso:', error);
      alert('Ocorreu um erro ao deletar o curso.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Educa-<Text style={styles.span}>Net</Text></Text>
      <View style={styles.containerItems}>
        {/* Seção de Cursos Criados */}
        <Text style={styles.titleCourses}>Cursos Criados</Text>
        <ScrollView style={styles.containerCourses}>
          {courses && courses.length > 0 ? (
            courses.map((course, index) => (
              <View key={index} style={styles.containerCourse}>
                <Text style={styles.courseName}>{course.courseName || 'Nome não disponível'}</Text>
                <TouchableOpacity
  style={styles.buttonEdit}
  onPress={() =>
    navigation.navigate('TeacherEditCourse', {
      courseId: course.courseId,
      courseName: course.courseName,
      workload: course.workload,
      theme: course.courseClass,
      description: course.description,
    })
  }
>
  <Text style={styles.buttonText}>EDITAR</Text>
</TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonDelete}
                  onPress={() => handleDeleteCourse(course.courseId)}
                >
                  <Text style={styles.buttonText}>DELETAR</Text>
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <Text style={styles.noCoursesText}>Nenhum curso disponível.</Text>
          )}
        </ScrollView>

        {/* Seção de Criação de Curso */}
        <View style={styles.containerCreated}>
          <Text style={styles.titleContainerCreated}>Criar Curso</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome do Curso"
            value={courseName}
            onChangeText={setCourseName}
          />
          <TextInput
            style={styles.input}
            placeholder="Carga Horária"
            value={workload}
            onChangeText={setWorkload}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Tema do Curso"
            value={theme}
            onChangeText={setTheme}
          />
          <TextInput
            style={styles.input}
            placeholder="Descrição"
            value={description}
            onChangeText={setDescription}
          />
          <TouchableOpacity style={styles.button} onPress={handleCreateCourse}>
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
  containerCourses: {
    height: 200,
  },
  titleCourses: {
    color: '#FFFFFF',
    fontSize: 35,
  },
  containerCourse: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#003366',
    borderRadius: 10,
  },
  courseName: {
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
  conteinercreated: {
    width: '100%',
    height: 350,
    backgroundColor: "#00C2FF",
    borderRadius: 20,
    padding: 10,
    position: 'fixed'

  },
  titleconteinercreated: {
    color: "#FFF",
    fontSize: 25,
    marginBottom: 5
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
  },
});

export default TeacherCourseScreen;
