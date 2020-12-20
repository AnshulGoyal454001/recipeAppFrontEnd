import React, { Component } from 'react'
import { Text, View,TextInput,StyleSheet,TouchableOpacity } from 'react-native'
import axios from 'axios';

export default function Login({setModalVisible,setIsLoggedIn}){
    const [username,setUsername]=React.useState('')
    const [password,setPassword]=React.useState('')
    const [login,setLogin]=React.useState(true);
    const [signup,setSignup]=React.useState(false);
    const [actionText,setActionText]=React.useState('Login')
    const [altActionText,setAltActionText]=React.useState('Signup')
    const [warning,setWarning]=React.useState('')
    const [waringColor,setWaringColor]=React.useState('red')
    var userToken;

    const loginFunction=()=>{
        if(login){
            axios.post('http://10.0.2.2:3000/Login',{
                username:username,
                password:password
            }).then(function(response){
                if(response.data=='You are not a user, please register'){
                    setWarning('Incorrect credentials')
                    setWaringColor('red')
                    
                }else{
                    userToken=response.data
                    setWarning('Logged In successfully')
                    setWaringColor('#43BE31')
                    setTimeout(()=>{
                        setModalVisible(false)
                        setIsLoggedIn(true)
                    },1000)
                }                
                
            }).catch(function(error){
                console.log(error)
            })
        }
        else{
            axios.post('http://10.0.2.2:3000/SignUp',{
            username:username,
            password:password
            }).then(function(response){
                if(response.data=='Username Already Exists'){
                    setWarning('Username Already Exists')
                    setWaringColor('red')
                }
                else{
                    setWarning('Signed Up, Please login')
                    setWaringColor('#43BE31')
                    toggleAction()
                }                
            }).catch(function(error){
                console.log('error')
                console.log(error)
            })
        }
        

        
    }
    const toggleAction=()=>{
        if(login){
            setLogin(false);
            setSignup(true);
            setActionText('Signup')
            setAltActionText('Login')
        }
        else{
            setLogin(true);
            setSignup(false);
            setActionText('Login')
            setAltActionText('Signup')
        }
    }
        return (
            <View>
                <TextInput placeholder='Username' style={styles.textInput} onChangeText={(text)=>{setUsername(text)}}/>
                <TextInput placeholder='Password' style={styles.textInput} onChangeText={(text)=>{setPassword(text)}}/>
                
                <TouchableOpacity style={styles.signInUpContainer} onPress={loginFunction}>
                    <View style={styles.buttonStyle}><Text style={styles.buttonText}>{actionText}</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signInUpContainer}>
                    <Text onPress={toggleAction}>{altActionText}</Text>
                    <Text style={{color:waringColor}}>{warning}</Text>
                </TouchableOpacity>
            </View>
        )
    
}

const styles = StyleSheet.create({
    textInput: {
        margin:10,
        padding:5,
        paddingLeft:15,
        borderRadius:20,
        borderColor: '#43BE31',
        borderWidth:1
    },
    signInUpContainer:{
        alignItems:"center"
    },
    buttonStyle:{
        width:'95%',
        backgroundColor:'#43BE31',
        margin:10,
        padding:5,
        borderRadius:20,
        alignItems:"center",
        fontSize:20
    },
    buttonText:{
        fontSize:18,
        color:'white'
    }
})