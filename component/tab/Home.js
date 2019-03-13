import React,{Component} from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import Swiper from 'react-native-swiper'



export default class Home extends Component{

    constructor(props){
        super(props)
        this.state={
            swiperNum:[]
        }


    }


    componentWillMount(){

      /*   fetch('')
             .then(res=>res.json())
             .then(data=>{
                 console.warn(data)
             })*/
    }



    render(){
        return <View>

            {/*<Text style={{color:'blue',fontSize:50}}>this is home</Text>*/}

            {/*轮播图外部必须要有一个View来确定他的高*/}
            <View style={{height:200}}>


                <Swiper style={styles.wrapper} showsButtons={true} autoplay={true} loop={true}>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Image source={require('../../images/1.jpg')} ></Image>
                    </View>
                </Swiper>

            </View>


            <View>



            </View>


        </View>
    }
}


const styles=StyleSheet.create({

    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})