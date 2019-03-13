import React,{Component} from'react'
import {Platform,Text,View,AppRegistry,StyleSheet} from 'react-native'



export default class StyleTest extends Component{
    render(){

        return<View>

            <Text style={style.bigred}>123</Text>
            <Text style={style.smallred}>345</Text>
        </View>


    }
}

const style=StyleSheet.create({
    bigred:{
         color:'red',
        fontSize:30
    },
    smallred:{
         color:'red'
    }
})