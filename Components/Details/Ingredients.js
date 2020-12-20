import React, { Component } from 'react'
import { Text, View ,StyleSheet,Dimensions } from 'react-native'


export default function Ingredients({ingredients}) {
    let index=1;
        return (<View>
                    <View style={styles.container}>
                    <Text style={styles.heading}>Ingredients</Text>
                            {ingredients.map((ingredient)=>{
                                return(
                                <View style={styles.ingredientContainer} key={index++}>
                                    <Text>{index++}</Text>
                                    <View style={styles.detailContainer}>
                                        <Text style={styles.detail} >{ingredient}</Text>
                                    </View>                            
                                </View>
                                );
                            })}
                        </View>
                </View>
               
        )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:Dimensions.get('window').width,
        // margin:10,
        padding:10,
        // borderWidth:1,
        // borderColor:'#43BE31',
        borderRadius:10,
        elevation:5,
    },
    ingredientContainer:{
        flexDirection: 'row',
        borderBottomWidth:1,
        borderColor:'#43BE31',
    },
    detailContainer:{
        marginLeft:40,
        flexDirection: 'row'
    },
    detail:{
        flexShrink:1
    },
    heading:{
        fontSize:16,
        marginLeft:20,
        marginLeft:6,
        marginBottom:10
    }
})