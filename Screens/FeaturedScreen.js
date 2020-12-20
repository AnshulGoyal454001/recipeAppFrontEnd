import React, { Component,useEffect  } from 'react'
import { Text, View,StyleSheet,ImageBackground,Image,ScrollView,TouchableOpacity } from 'react-native'
import FeaturedCard from '../Components/FeaturedCard/FeaturedCard'
import json2 from '../foodObject.json' 
import Icon from 'react-native-vector-icons/EvilIcons'
import Icon1 from 'react-native-vector-icons/MaterialIcons'

export default function Featured({route,navigation}){
        const [headingQuote,setHeadingQuote]=React.useState('')
        const [headingImage,setHeadingImage]=React.useState(require('../assets/gallery/img1.jpg'))
        const [foodObj,setFoodObj]=React.useState(json2);

        var key=0;
        const name=route.params;
    
        const getFoodDetails=()=>{
            fetch(`https://api.edamam.com/search?app_id=accd8ca8&app_key=ce55b5f21b7d84c5360024b9ef95af2d&q=${name.name}`)
            .then((response) => response.json())
            .then((json)=>{
                setFoodObj(json) 
            }).catch((error)=>{
                console.log(error);
            })
        }

        useEffect(()=>{
            if(name.name=='Burger'){
                setHeadingQuote('~it’s burger o’clock')
                setHeadingImage(require('../assets/gallery/img1.jpg'))
            }
            else if(name.name=='Fries'){
                setHeadingQuote('~it’s Fries o’clock')
                setHeadingImage(require('../assets/gallery/img2.jpg'))
            }
            else if(name.name=='Pizza'){
                setHeadingQuote('~it’s Pizza o’clock')
                setHeadingImage(require('../assets/gallery/img3.jpg'))
            }
            else if(name.name=='Noodles'){
                setHeadingQuote('~it’s Noodles o’clock')
                setHeadingImage(require('../assets/gallery/img4.jpg'))
            }
            else if(name.name=='Biryani'){
                setHeadingQuote('~it’s Biryani o’clock')
                setHeadingImage(require('../assets/gallery/img5.jpg'))
            }
            else if(name.name=='Coffee'){
                setHeadingQuote('~it’s Coffee o’clock')
                setHeadingImage(require('../assets/gallery/img6.jpg'))
            }
            else if(name.name=='Milk Shake'){
                setHeadingQuote('~it’s Milk Shake o’clock')
                setHeadingImage(require('../assets/gallery/img7.jpg'))
            }
            
            getFoodDetails();

        },[name])
    
        
        return (
            <ScrollView style={styles.container}>
                <View style={styles.heaginContainer}>
                    <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                        <Icon1 name='menu' size={41} color='#000'/>
                    </TouchableOpacity>
                    <Text style={styles.headingText}>{headingQuote}</Text>
                    <TouchableOpacity>
                        <Icon name='user' size={44} color='#000'/>
                    </TouchableOpacity>
                    
                </View>
                <Image
                    source={headingImage}
                    style={styles.headerImage}
                />
                <View style={styles.overlapTextContainer}>
                    <View style={styles.overlapText}>
                        <Text style={styles.overlapTextText}>{name.name} Dishes</Text>
                    </View>
                </View>
                <ScrollView horizontal={true} style={styles.horizontalListContainer} key={name.name}>
                    {
                        foodObj.hits.map((value)=>{
                            return(
                                <FeaturedCard value={value} navigation={navigation} key={key++}/>
                            );
                        })
                    }
                    
                </ScrollView>
            </ScrollView>
        )   
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
    },
    heaginContainer:{
        marginTop:40,
        alignItems:"center",
        justifyContent: 'space-between',
        flexDirection:'row',
        backgroundColor:'white',
    },
    headingText:{
        fontStyle:'italic',
        fontSize:20,
        marginBottom:10
    },  
    headerImage:{
        width:'100%',
        height:300,
        overflow: 'hidden',
    },
    overlapTextContainer:{
        alignItems:'center',
    },
    overlapText:{
        backgroundColor:'white',
        width:300,
        height:50,
        borderRadius:100,
        marginTop:-25,
        elevation:2,
        alignItems:'center',
        justifyContent:'center'
    },
    overlapTextText:{
        fontSize:20,
        fontStyle:'italic',
        letterSpacing:1
    },
    horizontalListContainer:{
        backgroundColor:'white',
        elevation:10,
        flexWrap: 'wrap',
        padding:5,
        marginTop:20,
        marginBottom:30
    }
})