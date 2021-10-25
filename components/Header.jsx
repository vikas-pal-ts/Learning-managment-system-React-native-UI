import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RingIcon from './Icons/RingIcon'
import Heading from './Typography/Heading'

const Header = ({ title, pageHeaderStyle, goBack}) => {
    return (
    <View style={[styles.pageHeader, pageHeaderStyle]}>
        <View style={styles.pageHeaderLeft}>
            <RingIcon iconName={'chevron-left'} goBack={goBack}  />
        </View>
        <View style={styles.pageTitleWrapper}>
           <Heading title={title} />
        </View>
    </View>
    )
}

Header.defaultProps = {
    goBack:()=>{}
}

export default Header

const styles = StyleSheet.create({
    pageHeader: {
        marginTop:60,
        flexDirection:'row',
        alignItems:'center',
        //  marginLeft:16
    },

    pageHeaderLeft: {
        justifyContent:'flex-end',
        marginLeft:16
    },

    pageTitleWrapper: {
        alignItems:'center', 
        justifyContent:'center', 
        textAlign:'center', 
        width: 263 
    },
})
