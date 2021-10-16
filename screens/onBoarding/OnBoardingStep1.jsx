import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import OnBoardingSvgStep1 from '../../svgs/onBoarding/OnBoardingSvgStep1'
import OnBoardingSvgStep2 from '../../svgs/onBoarding/OnBoardingSvgStep2'

const OnBoardingStep1 = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{}} style={styles.topTextWrapper}>
                <Text>Skip</Text>
            </TouchableOpacity>
            <View style={styles.step1Svg} >
                <OnBoardingSvgStep1 />
                <View style={styles.boardingTextWrapper}>
                <Text style={styles.title}>Learn anytime and anywhere</Text>
                <Text style={styles.boardingBriefText}>
                    Quarantine is the perfect time to spend your day learning something new, 
                    from anywhere!
                </Text>
                <View style={styles.onBoardingIndicators}>
                    <View style={styles.onBoardingIndicatorsItem}></View>
                    <View style={styles.onBoardingIndicatorsItemActive}></View>
                    <View style={styles.onBoardingIndicatorsItem}></View>
                </View>
                
            </View>
            <TouchableOpacity onPress={()=>{}} style={styles.boardingBottomBtn}>
                <Text style={styles.boardingBtnText}>Next</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default OnBoardingStep1

const styles = StyleSheet.create({
    container: {
        // marginTop:16
    },

    topTextWrapper: {
        justifyContent: 'flex-end',
        alignItems:'center',
        flexDirection:'row',
        paddingRight:16,
        height:16,
    },

    step1Svg: {
        justifyContent:'center',
        alignItems:'center',
        marginTop:112
    },

    title: {
        color: '#3C3A36',
        textAlign:'center',
        fontWeight: "500",
        fontSize: 24,
        lineHeight: 32,
        fontFamily:'Rubik_500Medium',
        width:200,
    } ,
    
    boardingBriefText: {
        // textAlign:'left',
        fontFamily:'Rubik_400Regular',
        color: '#78746D',
        marginTop:8
    },

    boardingTextWrapper: {
        marginTop:16,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        width:347,
    },

    boardingBottomBtn: {
        backgroundColor:'#E3562A',
        width:311,
        height:56,
        borderRadius:16,
        justifyContent:'center',
        alignItems:'center',
        marginTop:72
        
    },

    boardingBtnText: {
        color: '#FFFFFF',
        fontFamily:'Rubik_400Regular',
        fontSize:14,
        fontWeight: "500",
        lineHeight: 18,
    },

    onBoardingIndicators: {
        flexDirection:'row',
        marginTop:16,
        
    },

    onBoardingIndicatorsItem: {
        width:6,
        height: 6,
        borderRadius:6,
        backgroundColor:'#D5D4D4', //#65AAEA
        marginRight:12
    },

    onBoardingIndicatorsItemActive: {
        width:16,
        height: 6,
        borderRadius:4,
        backgroundColor:'#65AAEA',
        marginRight:12
    }
})
