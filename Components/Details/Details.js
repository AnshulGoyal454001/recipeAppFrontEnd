import React, { Component } from 'react'
import { Text, View,Image, Dimensions,StyleSheet } from 'react-native'
import food from '../../foodObject.json'
import Head from './Head'
import Ingredients from './Ingredients'
import DietLabels from './DietLabels'
import HealthLabels from './HealthLabels'
import Cautions from './Cautions'
import Nutrients from '../Nutrients/Nutrients'

export default function Details ({value,navigation}){
        let foodObj=value
        return (
            <View style={styles.container}>
                <Head foodObj={foodObj} navigation={navigation}/>
                <View style={styles.ingredientContainer}>
                    <DietLabels foodObj={foodObj}/>
                    <HealthLabels foodObj={foodObj}/>
                    <Cautions foodObj={foodObj}/>
                </View>
                <Nutrients foodObj={foodObj}/>            
                {/* <Ingredients ingredients={foodObj.recipe.ingredientLines}/> */}
                
            </View>
        )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(255,255,255,1)'
    },
    ingredientContainer:{
        alignItems:"center"
    }
})