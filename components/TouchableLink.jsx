import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const TouchableLink = ({ title, onClick, wrapperStyle, textStyle }) => {
    return (
        <TouchableOpacity onPress={onClick} style={wrapperStyle}>
            <Text style={[styles.linkText,textStyle]}>{ title }</Text>
        </TouchableOpacity>
    )
}

export default TouchableLink

const styles = StyleSheet.create({
    linkText: {
        height:16,
        color:"#78746D",
        fontFamily: "Rubik_500Medium",
        textAlign:'center',
        fontSize:14,
        fontWeight:"100",
        marginVertical:16
    },
})
