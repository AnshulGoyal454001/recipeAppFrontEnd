import React, { Component } from 'react'
import { Text, View,StyleSheet,Dimensions } from 'react-native'

export default function Cautions({foodObj}){
    var key=0;
        return (
            <View style={styles.container}>
                <Text style={styles.heading}> Cautions </Text>
                <View style={styles.badgesContainer}>
                   
                    {foodObj.recipe.cautions.map((item) => {
                        return(
                            <Text style={styles.dietInfo} key={key++}>{item}</Text>
                        );
                    })}
                   
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        // elevation: 1,
        backgroundColor:'white',
        width:Dimensions.get('window').width,
        padding:10,
        // borderRadius:10
    },
    badgesContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    dietInfo:{
        backgroundColor: '#43BE31',
        padding:10,
        margin:6,
        borderRadius:20,
        color:'white',
        elevation:5,
        paddingLeft:15,
        paddingRight:15
    },
    heading:{
        fontSize:16
    }
})
