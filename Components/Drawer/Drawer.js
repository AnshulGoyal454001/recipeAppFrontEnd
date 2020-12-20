import React, { Component } from 'react'
import { Text, View,StyleSheet,ImageBackground,Image,Dimensions,ScrollView ,TouchableOpacity} from 'react-native'
import DrawerCard from './DrawerCard'

export default function Drawer({navigation}) {
        return (<ScrollView style={styles.backgroundColor}>
                  <View style={styles.container}>
                    <ImageBackground
                      source={require('../../assets/gallery/img10.jpg')}
                      style={styles.userBackground}
                    >
                        <Image
                          source={require('../../assets/gallery/myimg.jpg')}
                          style={styles.userImage}
                        /> 
                  
                    </ImageBackground>  
                  </View>
                  <View style={styles.featuredContainer}>
                    <Text style={styles.featuredText}>Featured Dishes</Text>
                  </View>
                    <DrawerCard image={require('../../assets/gallery/img1.jpg')} name='Burger' navigation={navigation}/>
                    <DrawerCard image={require('../../assets/gallery/img2.jpg')} name='Fries' navigation={navigation}/>
                    <DrawerCard image={require('../../assets/gallery/img3.jpg')} name='Pizza' navigation={navigation}/>
                    <DrawerCard image={require('../../assets/gallery/img4.jpg')} name='Noodles' navigation={navigation}/>
                    <DrawerCard image={require('../../assets/gallery/img5.jpg')} name='Biryani' navigation={navigation}/>
                    <DrawerCard image={require('../../assets/gallery/img6.jpg')} name='Coffee' navigation={navigation}/>                 
                    <DrawerCard image={require('../../assets/gallery/img7.jpg')} name='Milk Shake' navigation={navigation}/> 
                    <DrawerCard image={require('../../assets/gallery/img7.jpg')} name='Milk Shake' navigation={navigation}/> 
                </ScrollView>
                                 
        )
}

const styles = StyleSheet.create({
    button:{
      padding:10,
      width:'100%',
      backgroundColor:'#43BE31',
      borderRadius:10,
      margin:5
    },
    userBackground:{
      flex:1,
      width:null,
      alignSelf:'stretch',
      alignItems: 'center',
      justifyContent:'center',
      overflow:'hidden',
      borderBottomRightRadius:20,
      borderBottomLeftRadius:20      
    },
    userImage:{
      width:100,
      height:100,
      borderRadius:50,
      borderColor:'#000',
      borderWidth:2,
    },
    container:{
      width:'100%',
      height:150,
     
    },
    featuredContainer:{
      alignItems:'center',
      
    },
    featuredText:{
      alignItems:'center',
      fontSize:21,
      fontStyle:'italic',
      letterSpacing:3,
      color:'white'
    },
    backgroundColor:{
      backgroundColor:'black'
    },
  });