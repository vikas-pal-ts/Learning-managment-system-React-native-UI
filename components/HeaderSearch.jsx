import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import CustomTextInput from './CustomTextInput'
import RingIcon from './Icons/RingIcon'
import SearchInput from './SearchInput'

const HeaderSearch = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerInfoWrapper}>
                <View style={styles.textWrapper}>
                    <Text style={styles.greetingText}>Hello,</Text>
                    <Text style={styles.userNameText}>Akash Pal</Text>
                </View>
                <RingIcon IconComponent={'Ionicons'} iconName={'notifications-outline'} iconSize={24} wrapperStyle={styles.notificationsBtnWrapper} />
            </View>

            <View style={{marginRight:16}}>
                    <SearchInput placeholder={'Search course'} />
                </View>
            
            <View style={styles.categoryTagWrapper}>
                <Text style={styles.categoryTitle}>
                    Category:
                </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
                    <View style={styles.catTagItem}>
                        <Text style={styles.catTagTitle}>#CSS</Text>
                    </View>

                    <View style={styles.catTagItem}>
                        <Text style={styles.catTagTitle}>#PHP</Text>
                    </View>

                    <View style={styles.catTagItem}>
                        <Text style={styles.catTagTitle}>#JS</Text>
                    </View>

                    <View style={styles.catTagItem}>
                        <Text style={styles.catTagTitle}>#PYTHON</Text>
                    </View>

                    <View style={styles.catTagItem}>
                        <Text style={styles.catTagTitle}>#JAVA</Text>
                    </View>
                </ScrollView>
 
            </View>
        </View>
    )
}

export default HeaderSearch

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:12,
        width:375,
        height:192,
        marginVertical:20
    },

    greetingText: {
        width:271,
        height:26,
        fontFamily: "Rubik_400Regular",
        fontSize:16,
        lineHeight:26,
        color: '#3C3A36'
    },

    userNameText: {
        width:271,
        height:42,
        fontFamily: "Rubik_700Bold",
        fontSize:32,
        lineHeight:42,
        color:'#333333'
    },

    headerInfoWrapper: {
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        marginRight:16
        // width:343,
        // height:72,
    },

    textWrapper: {
        width:271,
        height:72
    },

    notificationsBtnWrapper: {
        width:48,
        height:48,
        marginLeft:24,
    },

    categoryTagWrapper: {
        flexDirection:'row',
        width:343,
        height:24,
        marginTop:12,
    },

    categoryTitle: {
        fontSize:14,
        lineHeight:21,
        width:66,
        height:21,
        color:'#3C3A36',
        textAlign:'center',
    },

    catTagItem: {
        marginHorizontal:8,
        backgroundColor:'#65AAEA',
        // width:54,
        height:24,
        borderRadius:12,
        paddingHorizontal:7,
        paddingVertical:11,
        justifyContent:'center',
        alignItems:'center',
    },

    catTagTitle: {
        fontFamily: 'Rubik_500Medium',
        fontSize:12,
        lineHeight:18,
        color:'#F2F2F2'
    }
})
