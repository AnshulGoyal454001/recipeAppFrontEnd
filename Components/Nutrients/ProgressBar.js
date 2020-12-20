import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function Nutrients({nutrient}){

        return (
            <View style={styles.container}>
                <AnimatedCircularProgress
                    size={75}
                    width={8}
                    fill={nutrient.quantity}
                    tintColor="#43BE31"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#3d5875" >
                        {
                            ()=>(
                                <View>
                                    <Text style={styles.text}>{Math.round(nutrient.quantity)}%</Text>
                                </View>
                                )
                        }
                    </AnimatedCircularProgress>
                    <Text style={styles.label}>{nutrient.label}</Text>
            </View>
        )
    
}

const styles = StyleSheet.create({
    container: {
        margin:10,
        alignItems:'center'
    },
    text:{
        margin:-3,
        fontSize:12
    },
    label:{
        // margin:-3,
        fontSize:12,

    }
})