import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Screens/HomeScreen'
import DetailsScreen from './Screens/DetailsScreen'
import AboutScreen from './Screens/AboutScreen'
import FeaturedScreen from './Screens/FeaturedScreen'
import Drawer from './Components/Drawer/Drawer'
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./features/listSlice";

const store = configureStore({
  reducer: rootReducer
});

const DrawerMenu=({navigation})=>{
  // console.log(navigation)
  return(<Drawer navigation={navigation}/>)
}

export default function App() {
  
  const Drawer = createDrawerNavigator();
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator 
            initialRouteName="HomeScreen"
            drawerContentOptions={{
              activeTintColor: '#e91e63',
              itemStyle: {marginVertical: 5},
            }}
            drawerContent={(props) => <DrawerMenu {...props}/>}
            >
            <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{header: () => null}}/>
            <Drawer.Screen name="DetailsScreen" component={DetailsScreen} options={{header: () => null}}/>
            <Drawer.Screen name="AboutScreen" component={AboutScreen} options={{header: () => null}}/>
            <Drawer.Screen name="FeaturedScreen" component={FeaturedScreen} options={{header: () => null}}/>

          </Drawer.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  drawerContainer:{
    marginTop:40,
    marginLeft:5,
    marginRight:5,
    alignItems: 'center',
  },
  button:{
    padding:20,
    width:'100%',
    backgroundColor:'#eee',
    borderRadius:10,
    margin:5
  }
});
