import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Button from '../components/Button'
import Header from '../components/Header'
import TouchableLink from '../components/TouchableLink'
import Heading from '../components/Typography/Heading'
import Paragraph from '../components/Typography/Paragraph'
import { CourseLessonBanner } from '../svgs'

const CourseTestPage = ({ navigation }) => {
    return (
        <>
        <Header title={''} goBack={navigation.goBack} />
        <View style={styles.container}>
            <View style={styles.testHeader}>
                <Paragraph style={styles.questionNumberText}>
                    1 of 20
                </Paragraph>
                <Heading title={'Which tag for the biggest header? '} style={styles.questionTitle} />
            </View>
            <View style={styles.testBanner}>
                <CourseLessonBanner />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:16}}>
            <TouchableLink title={
                    <>
                   <Text style={styles.answerItem}>{'<h5>'}</Text>
                   </>
                }
                textStyle={styles.answerWrapper}
                />

                <TouchableLink title={
                    <>
                   <Text style={styles.answerItem}>{'<p>'}</Text>
                   </>
                }
                textStyle={styles.answerWrapper}
                />


                <TouchableLink title={
                    <>
                   <Text style={styles.answerItem}>{'<h1>'}</Text>
                   </>
                }
                textStyle={styles.answerWrapper}
                />
                <Button title={'Submit'} onClick={()=>navigation.navigate('CourseTestResult')} />
            </ScrollView>
               
        </View>
        </>
    )
}

export default CourseTestPage

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        marginHorizontal:16
    },

    questionNumberText: {
        marginVertical:8,
        color:'#78746D'
    },  

    questionTitle: {
        textAlign:'center'
    },

    testHeader: {
        alignItems:'center',
        marginBottom:16,
        width:343,
        paddingVertical:8
    },

    testBanner: {
        width:343,
        backgroundColor:'#F8F2EE',
        paddingVertical:8,
        paddingHorizontal:16,
        alignItems:'center',
    },

    answerWrapper: {
        width:325,
        height:58,
        borderWidth:1,
        borderColor:'#BEBAB3',
        borderRadius:16,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        paddingVertical:20,
        paddingLeft:16
       
    },
    
    answerItem: {
        padding:5,
        margin:5
    },
})
