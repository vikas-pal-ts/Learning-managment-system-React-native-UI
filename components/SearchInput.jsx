import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomTextInput from './CustomTextInput'

const SearchInput = ({ placeholder, wrapperStyle, inputStyle }) => {
    return (
    <View style={[styles.searchWrapper,wrapperStyle]}>
        <CustomTextInput placeholder={placeholder} style={[inputStyle]} />
    </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    searchWrapper: {
        width:343,
        // height:56,
        // justifyContent:'center',
        // alignItems:'center',
        // flexDirection:'column'
    },
})
