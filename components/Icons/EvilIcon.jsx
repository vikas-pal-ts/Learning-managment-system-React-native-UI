import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

 const EvilIcon = ({ name, size, color, wrapperStyle, isClickable, IconComponent, goBack} ) => {

    const findIconComponent = ()=>{
        if(IconComponent=='EvilIcon'){
           return <EvilIcons style={styles.socialMediaIcon} size={size} name={name} color={color} />
        }else if(IconComponent=='Ionicons'){
           return <Ionicons style={styles.socialMediaIcon} size={size} name={name} color={color} />
        }
    }

     const component= ()=>{
        if(isClickable){
            return (
               <TouchableOpacity style={[styles.socialMediItem,wrapperStyle]} onPress={()=>{
                goBack ? goBack() : ''
               }}>
                   { findIconComponent() }
               </TouchableOpacity>
            )
        }else{
            return (
                findIconComponent() 
            )
        }
     }
 
    return (
        component()
    )
}

EvilIcon.defaultProps = {
    IconComponent:'EvilIcon'
}

export default EvilIcon

const styles = StyleSheet.create({
})
