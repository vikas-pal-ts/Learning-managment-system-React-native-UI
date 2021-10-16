import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Paragraph = ({ children, style }) => {
    return (
       <Text style={[styles.paragraph, style]}>
           { children }
       </Text>
    )
}

export default Paragraph

const styles = StyleSheet.create({
    paragraph: {
        fontSize:14,
        color: "#3C3A36",
        lineHeight:21
    }
})
