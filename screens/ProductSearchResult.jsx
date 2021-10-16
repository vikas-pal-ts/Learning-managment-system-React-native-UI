import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import CourseCard from '../components/CourseCard'
import RingIcon from '../components/Icons/RingIcon'
import SearchInput from '../components/SearchInput'
import Heading from '../components/Typography/Heading'

const ProductSearchResult = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchHeaderWrapper}>
                <RingIcon iconName={'chevron-left'} wrapperStyle={styles.backButton} />
                <SearchInput placeholder={'Search course'} inputStyle={styles.searchInput} />
            </View>
            <View style={styles.resultCountTextWrapper}>
                <Heading title={'2 Results'} style={styles.resultCountText} />
            </View>

            <ScrollView contentContainerStyle={styles.coursesCardsWrapper} showsVerticalScrollIndicator={false}>
                <CourseCard title={'Swift'} subTitle={'Advance 10 ios apps'} duration={'1 h 20 min'} />
                <CourseCard title={'Swift'} subTitle={'Advance 10 ios apps'} duration={'1 h 20 min'} />
                <CourseCard title={'Swift'} subTitle={'Advance 10 ios apps'} duration={'1 h 20 min'} />
            </ScrollView>

        </View>
    )
}

export default ProductSearchResult

const styles = StyleSheet.create({
    container: {
       flex:1,
       marginTop:StatusBar.currentHeight,
       alignItems:'center',
    },

    resultCountTextWrapper: {
        margin:16
    },

    resultCountText: {
        alignSelf:'flex-start',
        width:341,
        height:32,
    },

    coursesCardsWrapper: {
        alignItems:'center',
    },

    searchHeaderWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        width:341,
        height:56,
        marginTop:16,
        marginBottom:12,
    },
    
    searchInput:{
         width:285,
         height:56, 
        marginLeft:8,
    },

    backButton: {
        marginTop:8
    }
})
