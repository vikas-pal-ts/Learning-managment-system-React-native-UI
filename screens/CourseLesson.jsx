import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import CourseLessonHeaderTags from '../components/CourseLessonHeaderTags'
import Header from '../components/Header'
import TouchableLink from '../components/TouchableLink'
import Heading from '../components/Typography/Heading'
import Paragraph from '../components/Typography/Paragraph'
import { CourseLessonBanner, VideoButtonSvg } from '../svgs'

const CourseLesson = ({ navigation }) => {
    return (
        <>
        <Header title={'Html'} goBack={navigation.goBack} />
        <View style={styles.container}>
            <Heading title={'Tags for Headers'} style={{marginVertical:8}} />
            <Paragraph style={{color:'#78746D'}} style={{marginBottom:8}}>
                3 of 11 lessons
            </Paragraph>
            <View style={styles.tagHeaderWrapper}>
                <CourseLessonHeaderTags title={'Lessons'} isActive={true} style={{ borderTopLeftRadius:16, borderBottomLeftRadius: 16}} onClick={()=>navigation.navigate('CourseLesson')}/>
                <CourseLessonHeaderTags title={'Tests'} style={{ borderTopLeftRadius:0, borderBottomLeftRadius: 0}} onClick={()=>navigation.navigate('CourseTests')} />
                <CourseLessonHeaderTags title={'Discuss'} style={{ borderTopRightRadius:16, borderBottomRightRadius: 16}} />
            </View>
            <View style={styles.videoSection}>
                <View style={styles.videoWrapper}>
                    <CourseLessonBanner />
                </View>
                    <TouchableLink title={ <VideoButtonSvg />} wrapperStyle={styles.videoPlayButton} />
            </View>

            <ScrollView contentContainerStyle={styles.lessonIntroWrapper} showsVerticalScrollIndicator={false}>
                <Heading title={'Introduction'} />
                <Paragraph style={styles.courseIntroDescrText}>
                You can launch a new career in web develop-
                ment today by learning HTML & CSS. You don't need a computer science degree or expensive software. All you need is a computer, a bit of time, 
                a lot of determination, and a teacher you trust.
                Once the form data has been validated on the client-side, it is okay to submit the form. And, since we covered validation in the previous article, we're ready to submit! This article looks at what happens when a user submits a form — where does the data go, and how do we handle it when it gets there? We also look at some of the security concerns.


                </Paragraph>
            </ScrollView>
        </View>
        </>
    )
}

export default CourseLesson

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:16,
        alignItems:'center',
        margin:16
    },

    tagHeaderWrapper: {
        flexDirection:'row',
        height: 44,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:8
    },

    videoSection: {
        backgroundColor:'#E6EDF4',
        marginVertical:8
    },

    videoWrapper: {
        width:355,
        height:138
    },

    videoPlayButton: {
        width:343,
        height:56,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        paddingBottom:23
    },

    lessonIntroWrapper:{
        alignSelf:'flex-start',
        justifyContent:'flex-start',
    },

    courseIntroDescrText: {
        color:'#78746D',
        marginVertical:8
    }
})
