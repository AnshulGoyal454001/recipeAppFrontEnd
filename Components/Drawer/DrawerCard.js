import React, { Component } from 'react'
import { Text, View,ImageBackground,StyleSheet,TouchableOpacity } from 'react-native'

export default function DrawerCard({image,name,navigation}) {

        return (
            <TouchableOpacity onPress={()=>navigation.navigate('FeaturedScreen',{name:name})}>
                <View style={styles.containerBig} >
                    <View style={styles.container}>
                        <ImageBackground
                            source={image}
                            style={styles.imagebg}
                        >
                        <View style={styles.gradient}>
                            <Text style={styles.text}>{name}</Text>
                        </View>
                        
                        </ImageBackground>
                    </View>
                </View>
            </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    containerBig:{
        alignItems: 'center',
        borderColor:'#000',
        borderBottomWidth:2
    },
    container:{
        width:'100%',
        borderRadius:100,
    },
    imagebg:{
        width: '100%',
        height:70,
        overflow: 'hidden',
        backgroundColor:'rgba(0,0,0,0.4)',

    },
    text:{
        color:'white',
        fontSize:25,
        fontWeight: 'bold',
        letterSpacing:2,
    },
    gradient:{
        backgroundColor:'rgba(0,0,0,0.4)',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    }
})