import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator();

import { UserCourseScreen } from '../../screens/User/UserCoursesScreen';
import { UserHomeScreen } from '../../screens/User/UserHomeScreen/index'
import { UserPraticingScreen } from '../../screens/User/UserPraticingScreen';
import { UserProfileScreen } from '../../screens/User/UserProfileScreen';
import { UserVideoScreen } from '../../screens/User/UserVideoScreen';

import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons'

export const UserTab = () => {
    return (
        <Tab.Navigator >
            <Tab.Screen name='HOME' component={UserHomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="home" size={size} color={color} />
                        )
                    }
                }}
            />
            <Tab.Screen name='PROFILIE' component={UserProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="person" size={size} color={color} />)
                    },headerShown:false
                }}
            />
            <Tab.Screen name='PRATICING' component={UserPraticingScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <AntDesign name='edit' size={size} color={color} />)
                    }
                }}
            />
            <Tab.Screen name='COURSES' component={UserCourseScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="book" size={size} color={color} />)
                    }
                }}
            />
            <Tab.Screen name='VIDEO' component={UserVideoScreen}
                
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Entypo name="video" size={size} color={color} />)
                    }
                }}
            />
        </Tab.Navigator>
    )
}
export default UserTab