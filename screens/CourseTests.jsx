import React from 'react'
import { StyleSheet, Text, View, PixelRatio, ScrollView } from 'react-native'
import CourseLessonHeaderTags from '../components/CourseLessonHeaderTags'
import CourseTestCards from '../components/CourseTestCards'
import Header from '../components/Header'
import Heading from '../components/Typography/Heading'
import Paragraph from '../components/Typography/Paragraph'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const CourseTests = ({ navigation }) => {
    return (
        <>
         <Header title={'HTML'} goBack={navigation.goBack} />
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
            <View style={{flex:1}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <CourseTestCards title={'Tags For Headers'} quizNumber={'1'} descr={
                    'Let’s put your memory on this topic test. Solve tasks and check your knowledge.'
                } 
                beginTest={()=>navigation.navigate('TestBegin')}
                />

                <CourseTestCards title={'Tags For Headers'} quizNumber={'1'} descr={
                    'Let’s put your memory on this topic test. Solve tasks and check your knowledge.'
                }
                beginTest={()=>navigation.navigate('TestBegin')}
                />
                </ScrollView>

            </View>
        </View>
        </>
    )
}

export default CourseTests

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:16,
        alignItems:'center',
        marginHorizontal:5
    },


    tagHeaderWrapper: {
        flexDirection:'row',
        height: 44,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:8
    },
})
