import React, { Component} from 'react'
import { Text, View,TextInput,StyleSheet,TouchableOpacity,Modal,KeyboardAvoidingView,TouchableWithoutFeedback,Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/EvilIcons'
import Login from '../Login/Login'

export default function Header(props){
    const [modalVisible,setModalVisible]=React.useState(false)
    const [isLoggedIn,setIsLoggedIn]=React.useState(false)

    const [search,setSearch] =React.useState('')
    const getFoodDetails=()=>{
      // console.log(search)
      fetch(`https://api.edamam.com/search?app_id=accd8ca8&app_key=ce55b5f21b7d84c5360024b9ef95af2d&q=${search}`)
      .then((response) => response.json())
      .then((json)=>{
        // console.debug(json);
        props.searchHandler(json)
        setSearch('')
      }).catch((error)=>{
        console.debug(error);
        setSearch('')
      })
    }

    return (
      <View style={styles.container}>

        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}
          onRequestClose={()=>{
            console.log('Modal Closed')
            setModalVisible(false)
          }}
          >
            <TouchableWithoutFeedback onPress={()=>{setModalVisible(false)}}>
              <View style={styles.modalOverlay}>
                <View style={styles.modalStyle}>
                  <Login setModalVisible={setModalVisible} setIsLoggedIn={setIsLoggedIn}/> 
                </View>                
              </View>
            </TouchableWithoutFeedback>          
          </Modal>


        <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
          <Icon name='menu' size={41} color='#000'/>
        </TouchableOpacity>
        <TextInput placeholder='Search' style={styles.searchStyle} onChangeText={(text)=>setSearch(text)} value={search}/>
        <TouchableOpacity onPress={getFoodDetails}>
          <Icon name='send' size={33} color='#000'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setModalVisible(true)}}>
          {
            !isLoggedIn?<Icon2 name='user' size={37} color='#000'/>: 
                      <Image source={require('../../assets/gallery/myimg.jpg')} style={styles.avatarImage}/>
          }
          
         
        </TouchableOpacity>
      </View>
    )
  
}

const styles= StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop:40
  },
  searchStyle:{
    width:'65%',
    height:35,
    backgroundColor:'white',
    opacity:1,
    paddingLeft:15,
    borderRadius:100,
    borderWidth:1,
    borderColor:'#000',
  },
  modalStyle:{
    justifyContent:'center',
    backgroundColor:'white',
    elevation:10,
    margin:60,
    marginTop:100,
    padding:10,
    borderRadius:20,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  avatarImage:{
    height:30,
    width:30,
    borderRadius:15,
  }
})