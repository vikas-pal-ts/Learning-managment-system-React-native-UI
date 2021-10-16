import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import Button from '../components/Button'
import Header from '../components/Header'
import Heading from '../components/Typography/Heading'
import Paragraph from '../components/Typography/Paragraph'
import { SingleCourseSvg } from '../svgs'

const SingleCourse = ({ navigation}) => {
    return (
        <View style={styles.container}>
           <Header title={'HTML'} goBack={navigation.goBack} />
           <View style={styles.courseBanner}>
                <SingleCourseSvg />
           </View>
           <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.courseContent}>
                    <Heading style={styles.heading} title={'About the course'} />
                    <Paragraph style={styles.courseParagraph}>
                            You can launch a new career in web develop-
                            ment today by learning HTML & CSS. You don't need a computer science degree or expensive software. All you need is a computer, a bit of time, a lot of determination, and a teacher you trust.
                    </Paragraph>
                    <View style={styles.courseDurationWrapper}>
                            <Heading style={styles.heading} title={'Duration'} />
                            <Paragraph style={styles.courseParagraph}>
                            1 h 30 min
                    </Paragraph>
                    </View>
                </View>
                <View style={styles.addCartBtnWrapper}>
                        <Button title={'Add to cart'} onClick={()=>navigation.navigate('CourseContent')} />
                </View>
           </ScrollView>


        </View>
    )
}

export default SingleCourse

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        flex:1
     },

    courseBanner: {
        width:375,
        height:257
    },

    courseContent: {
        width:347,
        margin:16,
        marginBottom:37
    },

    heading: {
        marginBottom: 4,
    },

    courseParagraph: {
        width:347,
        marginBottom: 8,
    },

    courseDurationWrapper: {
        marginTop:16,

    },

    addCartBtnWrapper: {
        justifyContent:'center',
        alignItems:'center',
        marginVertical:21
    }
})
