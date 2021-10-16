import React from 'react'
import { StyleSheet } from 'react-native'

const If = ({ show, children }) => {
    return (
    <>
         { show == true ? children : null }
    </>
       
    )
}

export default If

const styles = StyleSheet.create({})
