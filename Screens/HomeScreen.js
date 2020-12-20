import React, { Component } from 'react'
import { Text, View,ScrollView,StyleSheet } from 'react-native'
import Header from '../Components/Header/Header'
import Card from '../Components/Card/Card'

export default function HomeScreen({navigation}){
    const [values,setValues] =React.useState([]);

    const searchHandler=(data)=>{
        setValues(data.hits)
        cards()
    }
        let count=0;

        const cards=()=>{
            return values!=[]?values.map((value)=><Card key={count++} value={value} navigation={navigation}/>):<Text>Search</Text>
        }

        return (
            <ScrollView style={styles.container}>
                <Header searchHandler={searchHandler} navigation={navigation}/>
                {
                    cards()
                }
            </ScrollView>
        )
}
const styles= StyleSheet.create({
    container:{
        backgroundColor:'white'
    }
})