import React, { Component } from 'react'
import { Text, View, ScrollView,SafeAreaView,StyleSheet } from 'react-native'
import Details from '../Components/Details/Details'

export default function DetailsScreen({route,navigation}){
        const value=route.params
        // console.log(value)
        return (
            <SafeAreaView>
                <ScrollView >
                        <Details value={value} navigation={navigation}/>
                </ScrollView>
            </SafeAreaView>
        )
    
}