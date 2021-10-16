import React from 'react'
import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from 'react-native'
import CourseCard from '../components/CourseCard'
import Header from '../components/Header'
import HeaderSearch from '../components/HeaderSearch'

const Courses = ({ navigation }) => {
    return (
        <>
         {/* <Header title={'My Courses'} pageHeaderStyle={{marginBottom:16}} /> */}
         <HeaderSearch />
         <ScrollView contentContainerStyle={styles.coursesCardsWrapper} showsVerticalScrollIndicator={false}>
             <CourseCard title={'Swift'} subTitle={'Advance 10 ios apps'} duration={'1 h 20 min'} onClick={()=>{
                 navigation.navigate('SingleCourse')
             }} />
             <CourseCard title={'Swift'} subTitle={'Advance 10 ios apps'} duration={'1 h 20 min'} onClick={()=>{
                 navigation.navigate('SingleCourse')
             }} />
             <CourseCard title={'Swift'} subTitle={'Advance 10 ios apps'} duration={'1 h 20 min'} onClick={()=>{
                 navigation.navigate('SingleCourse')
             }} />
        </ScrollView>
        </>
    )
}

export default Courses

const styles = StyleSheet.create({
    coursesCardsWrapper: {
        alignItems:'center',
    },

   
})
