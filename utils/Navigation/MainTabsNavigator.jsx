import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet } from 'react-native';
import CourseContent from '../../screens/CourseContent';
import CourseLesson from '../../screens/CourseLesson';
import Courses from '../../screens/Courses';
import CourseTestPage from '../../screens/CourseTestPage';
import CourseTestResult from '../../screens/CourseTestResult';
import CourseTests from '../../screens/CourseTests';
import CourseSaved from '../../screens/Other/CourseSaved';
import Profile from '../../screens/Profile';
import Setting from '../../screens/Setting';
import SingleCourse from '../../screens/SingleCourse';
import YourCourses from '../../screens/YourCourses';
import Tabs from './Tabs';

const ProfileStack = createStackNavigator();

const ProfileStackScreen = ()=>{
 return (
   <ProfileStack.Navigator>
        <ProfileStack.Screen name="Home" component={Profile} options={{headerShown: false}} />
        <ProfileStack.Screen name="YourCourse" component={YourCourses} options={{headerShown: false}}/>
        <ProfileStack.Screen name="SavedCourse" component={CourseSaved} options={{headerShown: false}}/>
        <ProfileStack.Screen name="CoursePayment" component={CourseSaved} options={{headerShown: false}}/>
   </ProfileStack.Navigator>
  );
}

const CourseStack = createStackNavigator()

const CoursesStackScreen = () => {
  return (
    <CourseStack.Navigator>
        <CourseStack.Screen name="Home" component={Courses} options={{headerShown: false}} />
        <CourseStack.Screen name="SingleCourse" component={SingleCourse} options={{headerShown: false}}/>
        <CourseStack.Screen name="CourseContent" component={CourseContent} options={{headerShown: false}}/>
        <CourseStack.Screen name="CourseLesson" component={CourseLesson} options={{headerShown: false}}/>
        <CourseStack.Screen name="CourseTests" component={CourseTests} options={{headerShown: false}}/>
        <CourseStack.Screen name="TestBegin" component={CourseTestPage} options={{headerShown: false}}/>
        <CourseStack.Screen name="CourseTestResult" component={CourseTestResult} options={{headerShown: false}}/>
    </CourseStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();


const MainTabsNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Courses" tabBar={props => <Tabs {...props} />}>
            <Tab.Screen name="Courses" component={CoursesStackScreen} options={{headerShown: false}} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} options={{headerShown: false}} />
            <Tab.Screen name="Settings" component={Setting} options={{headerShown: false}} />
        </Tab.Navigator>
    )
}

export default MainTabsNavigator

const styles = StyleSheet.create({})
