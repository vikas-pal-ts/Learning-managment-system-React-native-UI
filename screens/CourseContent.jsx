import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import TouchableLink from '../components/TouchableLink'
import Heading from '../components/Typography/Heading'
import Paragraph from '../components/Typography/Paragraph'
import { CourseContentModuleThumb, CourseContentThumb } from '../svgs';

const CourseContentCards = ()=>{
    return (
        <View style={styles2.moduleWrapper}>
             <View style={styles2.moduleImage}>
                 <CourseContentModuleThumb />
             </View>
             
             <View style={styles2.moduleRightSideWrapper}>
                    <Heading title={'Main Tags'} style={styles2.courseNameText} />
                    <View style={styles2.completeStatus}>

                    </View>
             </View>
        </View>
    )
}

const styles2 = StyleSheet.create({

    moduleWrapper: {
        width:343,
        height:88,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        
    },

    moduleImage: {
        width:78,
        height:72,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:16,
        marginVertical:8
    },

    moduleRightSideWrapper: {
        width: 235,
        height:53,
        justifyContent:'center',
        alignItems:'flex-start',
    },

    completeStatus: {
        width:222,
        height:11,
        borderRadius:15,
        backgroundColor:'#94C0E9',
        borderWidth:1,
        borderColor:'#FFF5EE',
    },

    courseNameText: {
        fontSize:20,
        marginBottom:16,

    },

})

const CourseContent = ({ navigation }) => {
    return (
        <>
        <Header title={'HTML'} goBack={navigation.goBack} />
        <View style={styles.container}>
            <View style={styles.bannerContent}>
                <View style={styles.courseBanner}>
                    <CourseContentThumb />
                </View>
                <View style={styles.courseHeader}>
                        <Heading style={styles.heading} title={'HTML'} />
                        <Paragraph style={styles.courseParagraph}>
                            Advanced web applications
                        </Paragraph>
                </View>
            </View>
                <ScrollView contentContainerStyle={styles.courseContentWrapper} showsVerticalScrollIndicator={false}>
                    <TouchableLink textStyle={styles.roundedCards} title={
                        <CourseContentCards />
                    }

                    onClick={()=>navigation.navigate('CourseLesson')}
                    />
                        
                    <TouchableLink textStyle={styles.roundedCards} title={
                        <CourseContentCards />
                    }

                    onClick={()=>navigation.navigate('CourseLesson')}
                    />
                    
                </ScrollView>
        </View>
        </>
    )
}

export default CourseContent

const styles = StyleSheet.create({

    container: {
        flex:1,
        margin:16,
        alignItems:'center',
    },

    bannerContent: {

        width:343,
        height:440,
        borderWidth:1,
        borderColor:'#CDCDCD',
        borderRadius:8,
    },

    courseBanner: {
        width:343,
        height:334,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },

    roundedCards:{
        width:325,
        height:82,
        borderWidth:1,
        borderColor:'#BEBAB3',
        borderRadius:16,
        marginTop:16,
        alignItems:'center',
        justifyContent:'center',
    },

    courseContentWrapper: {
       
    },

    courseHeader: {
        paddingHorizontal:8,
        paddingVertical:16,
    }
})
