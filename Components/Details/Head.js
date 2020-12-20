import React, { Component } from 'react'
import { Text, View,Image, Dimensions,StyleSheet,ImageBackground,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Head ({foodObj,navigation}){
        return (
            <View style={styles.container}>                
                        <ImageBackground
                                source={{uri:`${foodObj.recipe.image}`}}
                                style={styles.image}
                        >
                            <View style={styles.gradient}>
                                <TouchableOpacity>
                                    <Icon name="arrow-back" size={30} style={styles.backIcon} onPress={()=>navigation.goBack()}/>
                                </TouchableOpacity>
                                <Text style={styles.headerText}>{foodObj.recipe.label}</Text>
                            </View>
                            
                        </ImageBackground>                    
            </View>
        )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
    },
    image:{
        width:Dimensions.get('window').width,
        height:300,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        overflow: 'hidden',
        // margin:5,
        justifyContent: 'space-between',
        elevation:5
    },
    gradient:{
        height:'100%',
        width:"100%",
        backgroundColor:'rgba(0,0,0,0.3)',
        justifyContent: 'space-between'
    },
    headerText:{
        fontSize:23,
        marginLeft:20,
        marginBottom:5,
        color: 'white',
        fontWeight: 'bold',
        letterSpacing:1,
    },
    backIcon:{
        marginTop:50,
        marginLeft:15,
        color:'rgba(250,250,250,1)'
    }
})