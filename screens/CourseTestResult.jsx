import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CourseTestResultSvg from '../svgs/CourseTestResultSvg'
import Header from '../components/Header';
import Heading from '../components/Typography/Heading'
import Paragraph from '../components/Typography/Paragraph'

const CourseTestResult = ({ navigation }) => {
    return (
        <>
        <Header title={'Result'} goBack={navigation.goBack}/>
        <View style={styles.container}>
            <View style={{marginTop:139, marginBottom:32}}>
                <CourseTestResultSvg />
            </View>
            <View style={styles.textWrapper}>
                <Heading title={'Congratulations'} />
                <Paragraph style={{width:300, textAlign:'center', marginTop:8}}>
                Congratulations for getting all the answers correct!
                </Paragraph>
            </View>
        </View>
        </>
    )
}

export default CourseTestResult

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
    },

    textWrapper:{
        alignItems: 'center'
    },

});

   
