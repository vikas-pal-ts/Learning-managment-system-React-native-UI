import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icons from './Icons'

const RoundedCards = ({ leftIconName, leftIconSize, leftIconColor, cardTitle, rightIconName, rightIconSize, rightIconColor, cardSubtitle })=>{
    return (
    <View style={styles.cardIconLeftWrapper}>
        <View style={styles.cardIconLeft}>
            <Icons name={leftIconName} size={leftIconSize} color={leftIconColor} />
        </View>
        <View style={styles.cardTextWrapper}>
            <Text style={styles.cardText}>{cardTitle}</Text>
            {cardSubtitle && (
                <Text style={styles.cardSubtitle}t>{cardSubtitle}</Text>
            )}
            
        </View>
        <View style={styles.cardIconRight}>
            <Icons name={rightIconName} size={rightIconSize} color={rightIconColor} />
        </View>
    </View>
    )
 }

 RoundedCards.defaultProps = {
    leftIconSize: 12,
    leftIconColor: '#FFFFFF',
    rightIconSize: 12,
    rightIconColor: '#FFFFFF'
 }

export default RoundedCards

const styles = StyleSheet.create({
    cardIconLeftWrapper: {
        justifyContent:'center',
        flexDirection:'row',
    },
    
    cardIconLeft: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width: 32,
        height: 32,
        borderRadius: 32,
        backgroundColor:'#65AAEA',
        marginRight:12,
        marginLeft:16
    },

    cardTextWrapper: {
        width:219,
        // height:66,
        // marginVertical:21,
        justifyContent:'center',
        // flexDirection:'row',
    },

    cardText: {
        fontFamily:'Rubik_500Medium',
        color:'#3C3A36',
        fontSize:16,
    },

    cardSubtitle: {
        fontFamily:'Rubik_400Regular',
        fontSize:14,
        lineHeight: 21,
        color: "#78746D"
    },

    cardIconRight: {
        width: 40,
        height:40,
        marginLeft:8,
        marginRight:21,
    },
})
