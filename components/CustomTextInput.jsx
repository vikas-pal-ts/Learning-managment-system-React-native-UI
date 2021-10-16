import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const CustomTextInput = ({ placeholder, onChange, style }) => {
    return (
        <TextInput
        style={[styles.formInput, style]}
        onChangeText={onChange}
        placeholder={placeholder}
        />
    )
}

export default CustomTextInput

const styles = StyleSheet.create({

    formInput: {
        backgroundColor: "#FFFFFF",
         width:343,
        height:53,
        borderRadius:12,
        padding:12,
        borderWidth:1,
        borderColor:'#BEBAB3',
        marginTop: 16,
    },
})
