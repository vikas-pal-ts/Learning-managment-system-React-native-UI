import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import CourseCard from '../components/CourseCard'
import Header from '../components/Header'

const YourCourses = ({navigation}) => {
    return (
        <>
            <Header title={'My Courses'} pageHeaderStyle={{marginBottom:16}} goBack={navigation.goBack} /> 
            <ScrollView contentContainerStyle={styles.coursesCardsWrapper} showsVerticalScrollIndicator={false}>
                <CourseCard title={'Swift'} subTitle={'Advance 10 ios apps'} duration={'1 h 20 min'} />
                <CourseCard title={'Swift'} subTitle={'Advance 10 ios apps'} duration={'1 h 20 min'} />
                <CourseCard title={'Swift'} subTitle={'Advance 10 ios apps'} duration={'1 h 20 min'} />
            </ScrollView>
        </>
    )
}

export default YourCourses;

const styles = StyleSheet.create({
    coursesCardsWrapper: {
        alignItems:'center',
    },
})
