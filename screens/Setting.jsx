import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Header from '../components/Header'
import Icons from '../components/Icons'
import TouchableLink from '../components/TouchableLink'
import { SettingBanner } from '../svgs';
import RoundedCards from '../components/RoundedCards'

 RoundedCards.defaultProps = {
    leftIconSize: 12,
    leftIconColor: '#FFFFFF',
    rightIconSize: 12,
    rightIconColor: '#FFFFFF'
 }

const Setting = (props) => {
    return (
        <>
            <Header title={'Settings'} goBack={props.navigation.goBack} />
            <View style={styles.container}>
                <View style={styles.banner}>
                    <SettingBanner />
                </View>
                <TouchableLink title={ 
                <RoundedCards
                leftIconName={"notifications"} leftIconSize={12} cardTitle={'Notifications'} rightIconName={"toggle"} rightIconSize={32} rightIconColor={"#5BA092"}
                /> 
                } wrapperStyle={styles.roundedCards} />
                <View style={styles.actInfoTextWrapper}>
                    <Text style={styles.actInfoText}>Account information</Text>
                </View>

                <ScrollView style={styles.accountInforCards} showsVerticalScrollIndicator={false}>
                    <TouchableLink 
                    title={ 
                        <RoundedCards
                        leftIconName={"person"} leftIconSize={12} cardTitle={'Name'} rightIconName={"chevron-forward"} rightIconSize={24} rightIconColor={"#BEBAB3"} cardSubtitle={'Akash Pal'}
                        /> 
                    } 
                    wrapperStyle={styles.roundedCards} 
                    />

                    <TouchableLink 
                    title={ 
                        <RoundedCards
                        leftIconName={"person"} leftIconSize={12} cardTitle={'Email'} rightIconName={"chevron-forward"} rightIconSize={24} rightIconColor={"#BEBAB3"} cardSubtitle={'akash@gmail.com'}
                        /> 
                    } 
                    wrapperStyle={styles.roundedCards} 
                    />

                    <TouchableLink 
                    title={ 
                        <RoundedCards
                        leftIconName={"person"} leftIconSize={12} cardTitle={'Password'} rightIconName={"chevron-forward"} rightIconSize={24} rightIconColor={"#BEBAB3"} cardSubtitle={'changed 2 weeks ago'}
                        /> 
                    } 
                    wrapperStyle={styles.roundedCards} 
                    />
                </ScrollView>
            </View>
        </>
    )
}

export default Setting

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
    },

    banner: {
        marginTop:24,
    },

    roundedCards:{
        width:343,
        height:82,
        borderWidth:1,
        borderColor:'#BEBAB3',
        borderRadius:16,
        marginTop:16,
        alignItems:'center',
        // justifyContent:'center',
    },

    

    actInfoTextWrapper: {
        margin:16,
        width:343,
        height:21
    },

    actInfoText: {
        fontFamily:'Rubik_500Medium',
        color:'#3C3A36',
        fontSize:20,
        lineHeight:26,
    },
    
    accountInforCards: {
        marginBottom:16
    }
})
