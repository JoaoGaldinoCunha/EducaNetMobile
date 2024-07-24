import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import PraticingImage from '../../../../../img/atividades1.png'
export const TeacherEditCourseScreen = () => {
    return (
        <View style={styles.conteiner}>
            <Text style={styles.title}>Educa-<Text style={styles.span}>Net</Text></Text>
            <Text style={styles.subtitle}>EDIT YOUR COURSE</Text>
            <View>
                <Image source={PraticingImage} style={styles.image} />
                <TouchableOpacity style={styles.buttonreturn}>
                    <Text style={styles.buttonText}>Return Your Course</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.conteineredit}>
                <Text style={styles.conteineredittitle}>EDIT COURSE</Text>
                <TextInput
                    style={styles.input}
                    placeholder="ENUNCIADO"
                />
                <TextInput
                    style={styles.input}
                    placeholder="ALTERNATIVA"
                />
                <TextInput
                    style={styles.input}
                    placeholder="ALTERNATIVA"
                /><TextInput
                    style={styles.input}
                    placeholder="ALTERNATIVA"
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>POST</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default TeacherEditCourseScreen
const styles = StyleSheet.create({
    conteiner: {
        backgroundColor: "#002250",
        justifyContent: 'center',
        flex: 1,
        padding: 20,
        paddingBottom: 40
    },
    title: {
        color: "#FFFFFF",
        fontSize: 35,
        fontWeight: 'bold',
        position: 'absolute',
        top: 40,
        padding: 10,
    },
    subtitle: {
        color: "#FFFFFF",
        top: 80,
        fontSize: 25,
        fontFamily: 'VT323_400Regular',
        position: 'absolute',
        padding: 10,


    },
    span: {
        color: "#00C2FF",
    },
    image: {
        marginTop: 140,
        width: 360,
        height: 320,
        borderRadius: 20
    },
    buttonreturn:{
        backgroundColor: '#1977F3',
        borderRadius: 15,
        fontWeight: 'bold',
        width: '45%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        position:"absolute",
        top:425
    },
    conteineredit: {
        marginTop: 10,
        width: 360,
        height: 300,
        backgroundColor: '#00C2FF',
        borderRadius: 20,
        padding: 10
    },
    conteineredittitle: {
        color: "#FFFFFF",
        fontSize: 35,
        fontFamily: 'VT323_400Regular',
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
})