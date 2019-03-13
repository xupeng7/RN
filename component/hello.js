import React,{Component} from 'react'
import {Platform,StyleSheet,Text,View} from 'react-native';

export default class HelloWorld extends Component{

    render(){
        let os;
        if (Platform.OS==='android'){
            os='你是安卓'

        }else {
            os='你是ios'
        }


        return(
            <View>
                <Text> hello android {os}</Text>
            </View>
        )
    }


}