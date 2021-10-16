import React from 'react';
import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';
import { 
  Rubik_300Light,
  Rubik_300Light_Italic,
  Rubik_400Regular,
  Rubik_400Regular_Italic,
  Rubik_500Medium,
  Rubik_500Medium_Italic,
  Rubik_700Bold,
  Rubik_700Bold_Italic,
  Rubik_900Black,
  Rubik_900Black_Italic 
} from '@expo-google-fonts/rubik';

import { useFonts } from 'expo-font';

import AppLoading from 'expo-app-loading';
import Navigation from './utils/Navigation';

export default function App() {

  let [fontLoaded, error] = useFonts({
    Rubik_300Light,
    Rubik_300Light_Italic,
    Rubik_400Regular,
    Rubik_400Regular_Italic,
    Rubik_500Medium,
    Rubik_500Medium_Italic,
    Rubik_700Bold,
    Rubik_700Bold_Italic,
    Rubik_900Black,
    Rubik_900Black_Italic 
  });

  if(!fontLoaded){
    return <AppLoading />
  }

  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Rubik_400Regular",
    flex:1,
    marginTop: StatusBar.height
  },
});
