import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TouchableLink from './TouchableLink'

const CourseLessonHeaderTags = ({ title, isActive, style, onClick }) => {
    return (
            <TouchableLink title={
                <Text style={[styles.tagsTitle, isActive ? { color:'#3C3A36' } : '']}>{ title }</Text>
            } 
            textStyle={[styles.tagsItemWrapper, style]}
            onClick={onClick}
            />

    )
}

CourseLessonHeaderTags.defaultProps = {
    isActive:false
}

export default CourseLessonHeaderTags

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    tagsItemWrapper: {
       paddingHorizontal:22,
       paddingVertical:8,
        backgroundColor:'#F8F2EE',
        minWidth:114,
        minHeight:42,
        alignItems:'center',
        marginRight:4
    },

    tagsTitle: {
        fontSize:16,
        lineHeight:26,
        color:'#78746D',
        fontFamily:'Rubik_400Regular',
    },

    tagsTitleActive: {
        color:'#3C3A36'
    }
})
