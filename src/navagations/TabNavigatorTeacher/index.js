import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator();

import { TeacherCourseScreen } from '../../screens/Teacher/TeacherCoursesScreen';
import { TeacherHomeScreen } from '../../screens/Teacher/TeacherHomeScreen'
import { TeacherPraticingScreen } from '../../screens/Teacher/TeacherPraticingScreen';
import { TeacherProfileScreen } from '../../screens/Teacher/TeacherProfileScreen';
import { TeacherVideoScreen } from '../../screens/Teacher/TeacherVideoScreen';

import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons'

export const TeacherTab = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarStyle:{
                position:'absolute',
                backgroundColor:"#000000"
            }
        }}
            >
            <Tab.Screen name='HOME' component={TeacherHomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="home" size={size} color={color} />
                        )
                    },headerStyle:{
                        backgroundColor:"#000000",
                        height:80,
                    },
                    headerTitleStyle:{
                        color:"#d3d3d3",textAlign:'center'
                    }

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
                    }
                }}
            />
            <Tab.Screen name='COURSES' component={TeacherCourseScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="book" size={size} color={color} />)
                    }
                }}
            />
            <Tab.Screen name='VIDEO' component={TeacherVideoScreen}
            options={{
                tabBarIcon:({color,size})=>{
                    return(
                        <Entypo name="video" size={size} color={color}/>                    )
                }
            }}
            />
        </Tab.Navigator>
    )
}
export default TeacherTab