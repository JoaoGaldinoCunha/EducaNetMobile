import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator();

import { TeacherCourseScreen } from '../../screens/Teacher/TeacherCoursesScreen';
import TeacherHomeScreen from '../../screens/Teacher/TeacherHomeScreen';
import { TeacherPraticingScreen } from '../../screens/Teacher/TeacherPraticingScreen/index';
import { TeacherProfileScreen } from '../../screens/Teacher/TeacherProfileScreen';
import { TeacherVideoScreen } from '../../screens/Teacher/TeacherVideoScreen';

import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons'

export const TeacherTab = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor:'#00C2FF',
            tabBarStyle:{
                backgroundColor:"#000000",
                borderRadius:9,
                position:'absolute',
                borderTopWidth:0,
                left:14,
                right:14,
                elevation:0,
                bottom:5,
                paddingBottom:10,
                height:70
            }
        }}
            >
            <Tab.Screen name='HOME' component={TeacherHomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="home" size={size} color={color} />
                        )
                    },headerShown:false

                }}
            />
            <Tab.Screen name='PROFILIE' component={TeacherProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="person" size={size} color={color} />)
                    },headerShown:false
                }}
            />
            <Tab.Screen name='PRATICING' component={TeacherPraticingScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <AntDesign name='edit' size={size} color={color} />)
                    },headerShown:false
                }}
            />
            <Tab.Screen name='COURSES' component={TeacherCourseScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="book" size={size} color={color} />)
                    },headerShown:false
                }}
            />
            <Tab.Screen name='VIDEO' component={TeacherVideoScreen}
            options={{
                tabBarIcon:({color,size})=>{
                    return(
                        <Entypo name="video" size={size} color={color}/>                    )
                },headerShown:false
            }}
            />
        </Tab.Navigator>
    )
}
export default TeacherTab