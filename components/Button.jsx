import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({ title, onClick, btnWrapperStyle, btnTextStyle, onFocus, onBlur }) => {
    return (
        <TouchableOpacity onPress={ onClick}  style={[styles.buttonWrapper, btnWrapperStyle]} 
        onFocus={onFocus}
        onBlur={onBlur}
        >
            <Text style={[styles.buttonText, btnTextStyle]}>{ title }</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    buttonWrapper: {
        backgroundColor:'#E3562A',
        width:311,
        height:56,
        borderRadius:16,
        justifyContent:'center',
        alignItems:'center',
        
    },

    buttonText: {
        color: '#FFFFFF',
        fontFamily:'Rubik_400Regular',
        fontSize:14,
        fontWeight: "500",
        lineHeight: 18,
    },
})
