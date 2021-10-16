import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from './MainStackNavigator';
import MainTabsNavigator from './MainTabsNavigator';

const Navigation = () => {
    return (
        <NavigationContainer>
            <MainStackNavigator />
            {/* <MainTabsNavigator /> */}
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})
