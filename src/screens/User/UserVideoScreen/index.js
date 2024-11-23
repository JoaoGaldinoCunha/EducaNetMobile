import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

export const UserVideoScreen = ({ navigation, route }) => {
  const { userId } = route.params; // ID do usuário recebido via props
  const [courses, setCourses] = useState([]);
  const [videosSeen, setVideosSeen] = useState([]);

  // Carregar cursos e vídeos assistidos ao montar o componente
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Buscar os cursos associados ao usuário
        const response = await fetch(`http://192.168.0.13:8080/courses/${userId}`);
        if (!response.ok) throw new Error('Erro ao buscar cursos');
        const data = await response.json();
        setCourses(data); // Define os cursos no estado
      } catch (error) {
        console.error('Erro ao carregar os cursos:', error);
      }
    };

    const fetchVideosSeen = async () => {
      try {
        // Simula buscar vídeos assistidos (substitua com a rota real caso exista)
        const response = await fetch(`http://192.168.0.13:8080/videosSeen/${userId}`);
        if (!response.ok) throw new Error('Erro ao buscar vídeos assistidos');
        const data = await response.json();
        setVideosSeen(data);
      } catch (error) {
        console.error('Erro ao carregar vídeos assistidos:', error);
      }
    };

    fetchCourses();
    fetchVideosSeen();
  }, [userId]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Educa-<Text style={styles.span}>Net</Text>
        </Text>
        <Text style={styles.subtitle}>VIDEO COURSES</Text>
      </View>

      {/* Lista de Cursos */}
      <View style={styles.section}>
        {courses.map((course) => (
          <TouchableOpacity
            key={course.id}
            style={styles.videoContainer}
            onPress={() => navigation.navigate('VideoNameScreen', { courseId: course.id })}
          >
            <TextInput style={styles.videoText} value={course.nome} editable={false} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Lista de Vídeos Assistidos */}
      <View style={styles.gradeVideoSection}>
        <Text style={styles.titleVideoGrade}>VIDEOS SEEN</Text>
        {videosSeen.map((video) => (
          <View key={video.id} style={styles.row}>
            <Text style={styles.labelVideoGrade}>{video.nome}</Text>
            <TouchableOpacity
              style={styles.inputVideoGrade}
              onPress={() => navigation.navigate('VideoNameScreen', { videoId: video.id })}
            >
              <Text style={styles.alternativesText}>SEE AGAIN</Text>
            </TouchableOpacity>
          </View>
        ))}
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
    height: 40,
    marginRight: 20,
    marginLeft: 10,
    padding: 10,
    marginBottom: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  videoText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 20,
  },
  gradeVideoSection: {
    backgroundColor: '#00BFFF',
    top: 5,
    marginRight: 20,
    borderRadius: 15,
    marginLeft: 10,
    padding: 15,
    marginBottom: 40,
  },
  titleVideoGrade: {
    fontSize: 25,
    marginLeft: 10,
    color: '#fff',
    fontFamily: 'VT323_400Regular',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  labelVideoGrade: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 15,
    marginRight: 20,
    color: 'white',
  },
  inputVideoGrade: {
    height: 40,
    width: '20',
    backgroundColor: 'white',
    padding: 10,
    marginRight: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    flex: 1,
    marginRight: 10,
  },
});

export default UserVideoScreen;
