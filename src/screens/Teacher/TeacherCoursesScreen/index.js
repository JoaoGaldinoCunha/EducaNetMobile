import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export const TeacherCourseScreen = ({ navigation }) => {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.title}>Educa-<Text style={styles.span}>Net</Text></Text>
      <View style={styles.conteinerItens}>
        <Text style={styles.titlecourses}>Courses Created</Text>
        <ScrollView style={styles.conteinercourses}>
          <View style={styles.conteinercourse}>
            <Text style={styles.coursename}>COURSE NAME</Text>
            <TouchableOpacity style={styles.buttonEdit} onPress={() => navigation.navigate('TeacherEditCourse')}>
              <Text style={styles.buttonText}>EDIT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDelete}>
              <Text style={styles.buttonText}>DELETE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.conteinercourse}>
            <Text style={styles.coursename} >COURSE NAME</Text>
            <TouchableOpacity style={styles.buttonEdit}>
              <Text style={styles.buttonText}>EDIT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDelete}>
              <Text style={styles.buttonText}>DELETE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.conteinercourse}>
            <Text style={styles.coursename} >COURSE NAME</Text>
            <TouchableOpacity style={styles.buttonEdit}>
              <Text style={styles.buttonText}>EDIT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDelete}>
              <Text style={styles.buttonText}>DELETE</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.conteinercreated}>
          <Text style={styles.titleconteinercreated}>CREATED COURSE</Text>
          <TextInput
            style={styles.input}
            placeholder="COURSE NAME"
          />
          <TextInput
            style={styles.input}
            placeholder="WORKLOAD"
          />
          <TextInput
            style={styles.input}
            placeholder="THEME COURSE"
          />
          <TextInput
            style={styles.input}
            placeholder="DESCRIPTION"
            />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>POST</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: "#002250",
    justifyContent: 'center',
    flex: 1,
    padding: 10,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 35,
    fontWeight: 'bold',
    position: 'absolute',
    top: 60,
    padding: 10
  },
  span: {
    color: "#00C2FF",
  },
  conteinerItens: {
    marginTop: 20
  },
  conteinercourses: {
    paddingBottom: 50,
    height: 200
  },
  titlecourses: {
    color: '#FFFFFF',
    fontSize: 35,
    marginBottom: 15,
    fontFamily: 'VT323_400Regular',

  },
  conteinercourse: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  coursename: {
    color: "#FFFFFF",
    paddingRight: 10,
    fontSize: 20
  },
  buttonEdit: {
    backgroundColor: '#23C02A',
    borderRadius: 15,
    fontWeight: 'bold',
    width: 90,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2
  },
  buttonDelete: {
    backgroundColor: '#C02323',
    borderRadius: 15,
    fontWeight: 'bold',
    width: 90,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2
  },
  conteinercreated: {
    width: '100%',
    height: 320,
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
    height: 40,
    width: "100%",
    padding: 4
  },
  button: {
    backgroundColor: '#1977F3',
    borderRadius: 15,
    fontWeight: 'bold',
    width: '100%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15
  },
})
