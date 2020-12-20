import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import ProgressBar from './ProgressBar'
import food from '../../foodObject.json'

export default function Nutrients({foodObj}){
        let daily=foodObj.recipe

        return (
            <View>
                <View style={styles.container}>
                    <ProgressBar nutrient={daily.totalDaily.ENERC_KCAL}/>
                    <ProgressBar nutrient={daily.totalDaily.FAT}/>
                    <ProgressBar nutrient={daily.totalDaily.CHOCDF}/>
                    <ProgressBar nutrient={daily.totalDaily.PROCNT}/>
                </View>
                <View style={styles.container}>                    
                    <ProgressBar nutrient={daily.totalDaily.CHOLE}/>
                    <ProgressBar nutrient={daily.totalDaily.FIBTG}/>
                </View>
            </View>
            
        )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
    }
})
