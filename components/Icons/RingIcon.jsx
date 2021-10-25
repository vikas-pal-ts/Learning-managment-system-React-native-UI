import React from 'react'
import { StyleSheet, Text } from 'react-native'
import EvilIcon from './EvilIcon'

const RingIcon = ({ wrapperStyle,iconName, iconColor, iconSize, IconComponent, goBack}) => {
    return (
        <EvilIcon size={iconSize} name={iconName} color={iconColor} isClickable={true} wrapperStyle={[styles.backButtonWrapper,wrapperStyle]} IconComponent={IconComponent} goBack={goBack} />
    )
}

RingIcon.defaultProps = {
    iconColor:'#3C3A36',
    iconSize:30,
    isEvilIcon:true,
    goBack:()=>{},
    IconComponent:'EvilIcon'
}

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

export default RingIcon


