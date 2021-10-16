import React, { useState } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import { OnBoardingSvgStep1, OnBoardingSvgStep2, OnBoardingSvgStep3 } from '../../svgs'
import OnBoardingModule from './OnBoardingModule'

const OnBoarding = ({ navigation }) => {

    const [onBordingPageNumber, setonBordingPageNumber] = useState(1);

    let totalPageNumber = [1,2,3] 

    const nextPage = ()=>{
        if(totalPageNumber.length>onBordingPageNumber){
            setonBordingPageNumber(onBordingPageNumber+1)
        }
    }

    const previousPage = (clickedPageNumber)=>{
        if(clickedPageNumber<onBordingPageNumber){
            setonBordingPageNumber(clickedPageNumber);
        }
    }

    const skillAllPages = ()=>{
        navigation.navigate('Login')
    }

    const submitOnBoard = ()=>{
        navigation.navigate('Login')
    }
    

    const boardingComponents = () => {
        if(onBordingPageNumber===1){
            return (
                <OnBoardingModule
                title={'Learn anytime and anywhere'}
                description={'Quarantine is the perfect time to spend your day learning something new, from anywhere!'}
                svgComponent={<OnBoardingSvgStep1 />}
                nextPage={nextPage}
                previousPage={previousPage}
                currentPageNumber = {onBordingPageNumber}
                totalPageNumber = {totalPageNumber}
                skillAllPages={skillAllPages}
                />
            )
        }else if (onBordingPageNumber===2){

            return (
                <OnBoardingModule
                title={'Title 2'}
                description={'Quarantine is the perfect time to spend your day learning something new, from anywhere!'}
                svgComponent={<OnBoardingSvgStep2 />}
                nextPage={nextPage}
                previousPage={previousPage}
                currentPageNumber = {onBordingPageNumber}
                totalPageNumber = {totalPageNumber}
                skillAllPages={skillAllPages}
                />
            )

        }else if (onBordingPageNumber===3){

            return (
                <OnBoardingModule
                title={'Title 3'}
                description={'Quarantine is the perfect time to spend your day learning something new, from anywhere!'}
                svgComponent={<OnBoardingSvgStep3 />}
                nextPage={submitOnBoard}
                previousPage={previousPage}
                currentPageNumber = {onBordingPageNumber}
                totalPageNumber = {totalPageNumber}
                skillAllPages={skillAllPages}
                />
            )

        }
    }

    return (
        <View>
           { boardingComponents() }
        </View>
    )
}

export default OnBoarding

const styles = StyleSheet.create({})
