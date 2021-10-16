import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SplashsScreenSvg from '../svgs/SplashsScreenSvg'

const SplashScreen = () => {
    return (
        <View style={styles.container}>
           <SplashsScreenSvg />
            
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems: 'center'
    }
})
