import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Courses from '../../screens/Courses';
import Profile from '../../screens/Profile';

const sampleTabNavigation = createBottomTabNavigator();

const TestComp = () => {
    return (
        <View>
            <Text>Hey 12</Text>
        </View>
    )
}

const Test = () => {
    return (
        <sampleTabNavigation.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if (route.name === 'Home') {
            iconName = 'md-home-sharp';
            } else if (route.name === 'about') {
            iconName = 'md-reader-outline';
            }
            
            return <Ionicons name = {iconName} size={size} color={color} />;
            },
            })}
            screenOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'gray',
            }}
            >
            <sampleTabNavigation.Screen name="Home" component={Profile} />
        </sampleTabNavigation.Navigator>
    )
}

export default Test

const styles = StyleSheet.create({})
