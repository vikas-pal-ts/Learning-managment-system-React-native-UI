import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { LoginBanner } from '../svgs'
import Button from '../components/Button';
import TouchableLink from '../components/TouchableLink';
import CustomTextInput from '../components/CustomTextInput';
import EvilIcon from '../components/Icons/EvilIcon';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <LoginBanner />
            <View style={styles.publicTextWrapper}>
                <View style={styles.textWrapper}>
                    <Text style={styles.pageTitle}>Log in</Text>
                    <Text style={styles.pageDescription}>Login with social networks</Text>
                </View>
                <View style={styles.socialMediaWrapper}>
                    <EvilIcon size={22} name="sc-facebook" color="white" wrapperStyle={styles.socialMediItem} isClickable={true} />
                    <EvilIcon size={22} name="sc-instagram" color="white" wrapperStyle={styles.socialMediItem} isClickable={true} />
                    <EvilIcon size={22} name="sc-google-plus" color="white" wrapperStyle={styles.socialMediItem} isClickable={true} />
                </View>
            </View>
            <View style={styles.loginFormWrapper}>

                    <CustomTextInput placeholder={'Email'} />

                    <View style={styles.passwordInputWrapper}>
                        <CustomTextInput placeholder={'Password'} />
                    </View>

                    <TouchableLink title={'Forgot Password?'} />

                    <Button title={'Log in'} onClick={()=>{
                        navigation.navigate('MainScreen')
                    }} />

                    <TouchableLink title={'Sign up'} onClick={()=>{
                        navigation.navigate('SignUp')
                    }} />
                    
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        marginTop:96
    },

    publicTextWrapper: {
        marginTop: 16
    },

    pageTitle: {
        color: "#3C3A36",
        marginBottom:8,
        fontFamily: "Rubik_500Medium",
        fontSize:24,
        textAlign:'center'
    },

    pageDescription: {
        fontSize:14,
        color: "#78746D",
        marginBottom:8
    },

    socialMediaWrapper:{
        flexDirection:'row',
    },

    socialMediItem: {
        width:40,
        height:40,
        backgroundColor:'#65AAEA',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        marginRight:12
    },

    loginFormWrapper: {
        justifyContent:'center',
        alignItems:'center',
    },

    passwordInputWrapper:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
})
