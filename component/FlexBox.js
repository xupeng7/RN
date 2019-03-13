import React,{Component} from 'react'
import {View,StyleSheet,Text,TextInput,Image,Button,ScrollView} from 'react-native'


export default class FlexBox extends Component{

    render(){

        return <View style={{
            flex :1,
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center'
        }}>

            {/*<ScrollView style={{width:'100%'}}>*/}

                <View style={{height:50,width:50,backgroundColor :'red'}}></View>
                <View style={{height:50,width:50,backgroundColor:'yellow' }}></View>
                <View style={{height:50,width:50,backgroundColor:'blue'}}></View>
                <Text>123</Text>

                {/*  本地引入图片*/}
                <Image source={require('../images/1.jpg')} ></Image>
                <Image source={require('../images/1.jpg')} ></Image>
                <Image source={require('../images/1.jpg')} ></Image>
                <Image source={require('../images/1.jpg')} ></Image>
                <Image source={require('../images/1.jpg')} ></Image>

                <Image source={{uri:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2052904330,2913619960&fm=58&bpow=500&bpoh=446'}} style={{width :200,height:160}}>

                </Image>
                <Button title='点击' onPress={()=>{console.warn('123')}}> </Button>

                <TextInput></TextInput>


         {/*   </ScrollView>*/}

        </View>

    }
}