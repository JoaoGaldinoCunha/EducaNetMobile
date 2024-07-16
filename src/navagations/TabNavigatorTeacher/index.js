import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator();

import { TeacherCourseScreen } from '../../screens/Teacher/TeacherCoursesScreen';
import { TeacherHomeScreen } from '../../screens/Teacher/TeacherHomeScreen'
import { TeacherPraticingScreen } from '../../screens/Teacher/TeacherPraticingScreen';
import { TeacherProfileScreen } from '../../screens/Teacher/TeacherProfileScreen';
import { TeacherVideoScreen } from '../../screens/Teacher/TeacherVideoScreen';


export const TeacherTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='HOME' component={TeacherHomeScreen} />
            <Tab.Screen name='PROFILIE' component={TeacherProfileScreen} />
            <Tab.Screen name='PRATICING' component={TeacherPraticingScreen} />
            <Tab.Screen name='COURSES' component={TeacherCourseScreen} />
            <Tab.Screen name='VIDEO' component={TeacherVideoScreen} />
        </Tab.Navigator>
    )
}
export default TeacherTab