import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export const UserCoursesScreen = ({ navigation }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = 'http://192.168.0.13:8080/course/AllCourses';

    // Realiza a requisição para buscar os cursos
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Confirme se a resposta é realmente um array
        if (Array.isArray(data)) {
          setCourses(data);
        } else {
          setError('Formato de dados inesperado.');
        }
        setLoading(false);
      })
      .catch(err => {
        setError('Erro ao carregar os cursos.');
        setLoading(false);
      });
  }, []);
 
  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>


        <Text style={styles.title}>
          Educa-<Text style={styles.span}>Net</Text>
        </Text>
        <Text style={styles.subtitle}>Cursos Disponíveis</Text>
      </View>

      {/* Lista de cursos */}
      <View style={styles.section}>
        {courses.map(course => (
          <TouchableOpacity 
            key={course.courseId} 
            style={styles.coursesContainer}
            onPress={() => navigation.navigate('CourseNameScreen', { courseId: course.courseId })}
          >
            <Text style={styles.coursesText}>{course.courseName}</Text>
          </TouchableOpacity>
        ))}

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#002250",
    flex: 1,
    padding: 10,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 35,
    fontWeight: 'bold',
    padding: 10,
  },
  span: {
    color: "#00C2FF",
  },
  subtitle: {
    fontSize: 25,
    marginLeft: 10,
    marginTop: 20,
    color: '#fff',
  },
  section: {
    marginTop: 20,
  },
  coursesContainer: {
    backgroundColor: '#fff',
    marginTop: 2,
    padding: 10,
    marginBottom: 8,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  coursesText: {
    fontSize: 18,
    color: '#000',
  },
  loadingText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
  },
  backButton: {
    padding: 10,
    backgroundColor: '#00C2FF',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  exitContainer: {
    position: 'bottom',
    color: '#FF0000',


  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserCoursesScreen;
