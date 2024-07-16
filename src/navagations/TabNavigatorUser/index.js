import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator();

import { UserCourseScreen } from '../../screens/User/UserCoursesScreen';
import { UserHomeScreen } from '../../screens/User/UserHomeScreen/index'
import { UserPraticingScreen } from '../../screens/User/UserPraticingScreen';
import { UserProfileScreen } from '../../screens/User/UserProfileScreen';
import { UserVideoScreen } from '../../screens/User/UserVideoScreen';


export const UserTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='HOME' component={UserHomeScreen} />
            <Tab.Screen name='PROFILIE' component={UserProfileScreen} />
            <Tab.Screen name='PRATICING' component={UserPraticingScreen} />
            <Tab.Screen name='COURSES' component={UserCourseScreen} />
            <Tab.Screen name='VIDEO' component={UserVideoScreen} />
        </Tab.Navigator>
    )
}
export default UserTab