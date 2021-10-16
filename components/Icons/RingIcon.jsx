import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icons from '../Icons'
import EvilIcon from './EvilIcon'

const RingIcon = ({ wrapperStyle,iconName, iconColor, iconSize, IconComponent, goBack}) => {
    console.clear()
    return (
        <EvilIcon size={iconSize} name={iconName} color={iconColor} isClickable={true} wrapperStyle={[styles.backButtonWrapper,wrapperStyle]} IconComponent={IconComponent} goBack={goBack} />
    )
}

RingIcon.defaultProps = {
    iconColor:'#3C3A36',
    iconSize:30,
    isEvilIcon:true
}

export default RingIcon

const styles = StyleSheet.create({
    
    backButtonWrapper: {    
        width:48,
        height:48,
        borderWidth:1,
        borderColor:"#BEBAB3",
        borderRadius:48 / 2,
        alignItems:'center',
        justifyContent:'center',
    },
})
