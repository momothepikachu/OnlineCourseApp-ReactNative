/** @format */

import {AppRegistry} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import ReactCourses from './src/components/ReactCourses';
import NativeCourses from './src/components/NativeCourses';
import {name as appName} from './app.json';

const courses = createBottomTabNavigator({
    ReactCourses: { screen: ReactCourses },
    NativeCourses: { screen: NativeCourses }
}, {
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: '#80cbc4',
        swipeEnabled: true,      
        style: {
            backgroundColor: '#25a69a'
        }
    }
})

AppRegistry.registerComponent(appName, () => courses);
