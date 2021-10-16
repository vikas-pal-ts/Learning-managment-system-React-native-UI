import React from 'react'
import { StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import TouchableLink from '../components/TouchableLink'
import { ProfileBanner } from '../svgs'

const Profile = (props) => {
    return (
        <>
        <Header title={'Profile'} goBack={props.navigation.goBack} />
        <View style={styles.container}>
            <View style={styles.profilePageWrapper}>
                <View>
                    <ProfileBanner />
                </View>
                <View style={styles.profileCardsWrapper}>
                    <TouchableLink title={"My Courses"} wrapperStyle={styles.profileCardsItem} textStyle={styles.profileCardsText} onClick={()=>{
                        props.navigation.navigate('YourCourse')
                    }}
                    />
                    <TouchableLink title={"Saved"} wrapperStyle={styles.profileCardsItem} textStyle={styles.profileCardsText} 
                    onClick={()=>{
                        props.navigation.navigate('SavedCourse')
                    }}
                    />
                    <TouchableLink title={"Payment"} wrapperStyle={styles.profileCardsItem} textStyle={styles.profileCardsText} 
                    onClick={()=>{
                        props.navigation.navigate('CoursePayment')
                    }}
                    />
                </View>
                <TouchableLink title={"Log out"}
                onClick={()=>{
                    props.navigation.navigate('Login')
                }}
                />
            </View>
        </View>
        </>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
  
    },

    profilePageWrapper: {
        marginTop:32,
        justifyContent:'center',
        alignItems:'center',
    },
    profileCardsWrapper:{

    },

    profileCardsItem:{
        width:343,
        height:80,
        borderWidth:1,
        borderColor:'#BEBAB3',
        borderRadius:16,
        marginTop:16,
        alignItems:'center',
    },

    profileCardsText:{
        fontFamily: "Rubik_500Medium",
        fontSize:24,
        color:'#3C3A36',
        height:32,
        width:311,
    },

    bottomMenuContainer: {
        justifyContent:'flex-end',
        alignItems:'center',
    },

    bottomMenuWrapper: {
        width:375,
        height: 98,
        paddingLeft:8,
        borderWidth:1,
        borderColor:'#BEBAB3',
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row',
       
    },

    menuItemWrapper: {
        // marginRight:60
        alignItems:'center',
        justifyContent:'center'
    } ,

    bottomMenuTitle: {
        textAlign:'center',
        fontFamily:'Rubik_400Regular',
        fontSize:14,
        color:"#BEBAB3",
        paddingTop:10
    }
})
