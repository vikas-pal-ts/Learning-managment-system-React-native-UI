import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Heading = ({ title, style }) => {
    return (
        <Text style={[styles.heading, style]}>
            { title }
        </Text>
    )
}

export default Heading

const styles = StyleSheet.create({
    heading: {
        fontSize:24,
        fontFamily: "Rubik_500Medium",
        lineHeight:32,
        color:'#3C3A36'
    },
})
