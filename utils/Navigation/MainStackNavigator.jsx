import React from 'react'
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabsNavigator from './MainTabsNavigator';
import Login from '../../screens/Login';
import SignUp from '../../screens/SignUp';
import OnBoarding from '../../screens/onBoarding/OnBoarding';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
    	<Stack.Navigator initialRouteName="OnBoarding">
            <Stack.Screen name="OnBoarding" component={OnBoarding} options={{headerShown: false}} />
            <Stack.Screen name="MainScreen" component={MainTabsNavigator} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default MainStackNavigator

const styles = StyleSheet.create({})
