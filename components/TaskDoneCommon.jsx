import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CourseSavedTestSvg } from '../svgs'
import Button from './Button'
import Heading from './Typography/Heading'
import Paragraph from './Typography/Paragraph'

const TaskDoneCommon = ({ title, descr, onClick }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.savedBanner}>
                    <CourseSavedTestSvg />
                </View>
                <View style={styles.saveStatusWrapper}>
                    <Heading style={styles.heading} title={title} />
                    <Paragraph style={styles.content}>
                       { descr }
                    </Paragraph>
                </View>
                <Button title={'Continue'} btnWrapperStyle={{backgroundColor:'#E3562A', borderWidth:1, borderColor:'#E3562A', marginHorizontal:33, width:290}} btnTextStyle={{color:'#FFFFFF'}}
                onClick={onClick}
                />
        </View>
        </>
    )
}

export default TaskDoneCommon

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
    },  

    savedBanner: {
        width:375,
        height:253,
        marginTop:60
    },
    
    saveStatusWrapper:{
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:17,
        marginVertical:32,

    },

    heading:{
        marginBottom:8
    },

    content: {
        alignSelf:'center',
        width:180,
        textAlign:'left',
        color: '#78746D'
    }
})
