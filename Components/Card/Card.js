import React, { Component } from 'react'
import { Text, View,ImageBackground,StyleSheet,Dimensions,TouchableOpacity,TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Card ({value,navigation}) {
    const [iconName,setIconName]=React.useState('playlist-add')
    const [toggle,setToggle]=React.useState(false)

    const changeIcon=()=>{
        if(toggle==false){
            setIconName('playlist-add-check');
            setToggle(true);
        }
        else{
            setIconName('playlist-add');
            setToggle(false);
        }
    }
        return (<TouchableHighlight onPress={()=>navigation.navigate('DetailsScreen',value)} underlayColor='white'>
                <View style={styles.cardContainer}>
                        <ImageBackground
                            source={{uri: value.recipe.image}}
                            style={styles.imageBackground}
                        >
                        <View style={styles.gradient}>
                            <View style={styles.addIcon}>
                                <View></View>
                                <Icon name={iconName} size={35} color='black' onPress={changeIcon}/>
                            </View>
                        <View>
                        <Text style={styles.name}>{value.recipe.label}</Text>
                                <View style={styles.VegContainer}>
                        <Text style={styles.VegName}>Calories: {Math.round(value.recipe.calories)}  -  Time: {Math.round(value.recipe.totalTime)} min</Text>
                                </View>
                            </View>
                        </View>
                        </ImageBackground>
                    
                </View>
                </TouchableHighlight>
        )
    
}

const styles = StyleSheet.create({
    cardContainer:{
        alignItems:"center",
    },
    imageBackground:{
        width:Dimensions.get('window').width-10,
        height:200,
        borderRadius:10,
        overflow: 'hidden',
        margin:5,
        justifyContent: 'space-between',
        elevation:10
    },
    name:{
        fontSize:23,
        marginLeft:10,
        color: 'white',
        fontWeight: 'bold',
        letterSpacing:1,
    },
    gradient:{
        height:'100%',
        width:"100%",
        backgroundColor:'rgba(0,0,0,0.4)',
        justifyContent: 'space-between'
    },
    VegContainer:{
        alignItems:"center",
        flexDirection:"row",
        marginLeft:10,
        paddingBottom:3

    },
    VegName:{
        fontSize:12,
        marginLeft:5,
        color: 'white',
        letterSpacing:1,
    },
    addIcon:{
        marginRight:10,
        marginTop:10,
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
})
