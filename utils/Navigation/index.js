import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from './MainStackNavigator';

const Navigation = () => {
    return (
        <NavigationContainer>
            <MainStackNavigator />
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})
