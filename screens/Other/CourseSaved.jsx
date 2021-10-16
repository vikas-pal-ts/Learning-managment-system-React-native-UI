import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'
import TaskDoneCommon from '../../components/TaskDoneCommon';

const CourseSaved = ({ navigation }) => {
    return (
        <>
       <Header title={'Saved'} goBack={navigation.goBack} />
        <TaskDoneCommon title={'Course not saved'} descr={
            'Try saving the course again in a few minutes'
        } />
        </>
    )
}

export default CourseSaved

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
    },  

    savedBanner: {
        width:375,
        height:253,
        marginTop:60
    },
    
    saveStatusWrapper:{
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:17,
        marginVertical:32,

    },

    heading:{
        marginBottom:8
    },

    content: {
        alignSelf:'center',
        width:180,
        textAlign:'left',
        color: '#78746D'
    }
})
