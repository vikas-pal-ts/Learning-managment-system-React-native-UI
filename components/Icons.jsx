import React from 'react'
import { StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Icons = ({ name,color,size,suffix }) => {
   const iconName= suffix ?`${name}-${suffix}` : name
    return (
        <Ionicons name={iconName} size={size} color={color} />
    )
}

Icons.defaultProps = {
    color: '#5BA092',
    size: 5,
    suffix: ''
}

export default Icons

const styles = StyleSheet.create({})
