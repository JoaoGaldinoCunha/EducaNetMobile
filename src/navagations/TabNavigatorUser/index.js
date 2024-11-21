import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator();

import { UserCoursesScreen } from '../../screens/User/UserCoursesScreen';
import { UserHomeScreen } from '../../screens/User/UserHomeScreen/index'
import { UserProfileScreen } from '../../screens/User/UserProfileScreen';
import { UserVideoScreen } from '../../screens/User/UserVideoScreen';



import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons'

export const UserTab = () => {
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
                bottom:14,
                paddingBottom:10,
                height:70
            }
        }}
        >
            <Tab.Screen name='HOME' component={UserHomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="home" size={size} color={color} />
                        )
                    },headerShown:false
                }}
            />
            <Tab.Screen name='PROFILIE' component={UserProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="person" size={size} color={color} />)
                    }, headerShown: false
                }}
            />

            <Tab.Screen name='COURSE' component={UserCoursesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="book" size={size} color={color} />)
                    },headerShown:false
                }}
            />



            <Tab.Screen name='VIDEO' component={UserVideoScreen}

                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Entypo name="video" size={size} color={color} />)
                    },headerShown:false
                }}
            />
        </Tab.Navigator>
    )
}
export default UserTab