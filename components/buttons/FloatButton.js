
import React from 'react'
import {View, Text, StyleSheet, TouchableWithoutFeedback, Dimensions, Animated, TouchableOpacity, Alert} from 'react-native'

//import {Ionicons} from '@expo/vector-icons'
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Ionicons";

export default class FloatButton extends React.Component {

    animation = new Animated.Value(0)
    
    toggleMenu = () => {
        const toValue = this.open ? 0 : 1
        Animated.spring(this.animation, {
            toValue,
            friction:5,
            useNativeDriver:false,
        }).start()

        this.open = !this.open
    }
    render(){
        const pinStyle = {
            transform: [
                {scale:this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -70]
                    })
                }
            ]
        }
        const rotation = {
            transform:[
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '45deg']
                    })
                }
            ]
        }

        //get color props
        const color = this.props.color
        return (
            <View style={[styles.container]}>
                 <TouchableWithoutFeedback onPress={this.props.toggleAddContactModal}>
                    <Animated.View useNativeDriver={true} style={[styles.second, pinStyle, {backgroundColor:color}]}>
                    <Icon name="chatbubble-ellipses-outline" color={'black'} size={40}/>   
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, rotation, {backgroundColor:'black'}]}>
                        <Icon size={30} name='add-outline' color='white'/>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
          
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        position:'absolute',
        bottom:32,
        right:32,
    
       
       
    },
    button:{
        width:60,
        height:60,
   
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        elevation:10,
        borderWidth:2,
        borderColor:'white',
      
        
      
    },
    plus:{
        fontSize:30,
        color:'white',
    },
    second:{
        width:48,
        height:48,
        backgroundColor:'gray',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        // position:'absolute',

    }
})