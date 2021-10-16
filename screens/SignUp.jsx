import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { SignUpBanner } from '../svgs'
import Button from '../components/Button';
import TouchableLink from '../components/TouchableLink';
import CustomTextInput from '../components/CustomTextInput';
import EvilIcon from '../components/Icons/EvilIcon';

const SignUp = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SignUpBanner />
            <View style={styles.publicTextWrapper}>
                <View style={styles.textWrapper}>
                    <Text style={styles.pageTitle}>Sign up</Text>
                    <Text style={styles.pageDescription}>Create your account</Text>
                </View>
            </View>
            <View style={styles.loginFormWrapper}>

                    <CustomTextInput placeholder={'Name'} />

                    <CustomTextInput placeholder={'E-mail'} />

                    <View style={styles.passwordInputWrapper}>
                        <CustomTextInput placeholder={'Password'} />
                    </View>

                    <Button title={'Sign up'} btnWrapperStyle={styles.submitButton} />

                    <TouchableLink title={'Log in'} onClick={()=>{
                        navigation.navigate('Login')
                    }} />
                    
            </View>
        </View>
    )
}

export default SignUp

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

    loginFormWrapper: {
        justifyContent:'center',
        alignItems:'center',
    },

    passwordInputWrapper:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },

    submitButton:{
        marginTop: 16
    }
})
