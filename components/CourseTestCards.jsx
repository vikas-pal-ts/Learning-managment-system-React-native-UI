import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CourseTestsSvg from '../svgs/CourseTestsSvg'
import Button from './Button'
import Heading from './Typography/Heading'
import Paragraph from './Typography/Paragraph'

const CourseTestCards = ({ title, quizNumber, descr, beginTest }) => {
    const [buttonBgColor, setButtonBgColor] = useState('transparent')
    return (
        <View style={styles.container}>
            <View style={styles.testBanner}>
                <CourseTestsSvg />
            </View>
            <View style={styles.testContent}>
                <Paragraph style={styles.testNumberText}>Quiz {quizNumber}</Paragraph>
                <Heading style={styles.courseTitle} title={ title } />
                <Paragraph style={styles.testShortDescr}>
                { descr }
                </Paragraph>
            </View>
            <Button title={'Begin'} btnWrapperStyle={{backgroundColor:buttonBgColor, borderWidth:1, borderColor:'#E3562A', width:270}} btnTextStyle={{color:'#3C3A36'}}
            onClick={beginTest}
            />
        </View>
    )
}

export default CourseTestCards

const styles = StyleSheet.create({

    container: {
        margin:16,
        alignItems:'center',
        borderWidth:2,
        borderColor: '#BEBAB3',
        paddingBottom:32,
        paddingTop:24,
        borderRadius:8,
    },

    testContent: {
        marginBottom:16
    },

    testNumberText: {
        color:'#E3562A',
        marginBottom:4
    },

    courseTitle: {
        marginBottom:8
    },

    testShortDescr: {
        color:'#78746D',
        width:295,
        marginBottom:16
    },
})
