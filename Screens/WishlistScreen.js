import React, { Component } from 'react'
import { Text, View, TouchableOpacity} from 'react-native'
import { useDispatch,useSelector } from "react-redux";
import { increment, decrement } from "../features/listSlice";

export default function WishList(){
        const dispatch = useDispatch();
        const {value} = useSelector(state=>state)

        return (
            <View>
                <Text> {value} </Text>
                <TouchableOpacity onPress={()=>{dispatch(increment())}}><Text>||||||||||inc|||||||||||</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{dispatch(decrement())}}><Text>||||||||||dec|||||||||||</Text></TouchableOpacity>
            </View>
        )
}
