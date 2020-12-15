import React from 'react'
import {Text, StyleSheet, View, ActivityIndicator} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';import Icon from "react-native-vector-icons/Ionicons";
//colors
import {colors} from '../../assets/colors/colors'


export default class Loader extends React.Component{
    constructor(props){
        super(props)
    }

    
            
        
     

        _tokenIsSends = () => {
            let tokenIsSend = false
            let params = this.props.navigation.state.params
            if(params){
                if(params.token){
                    tokenIsSend = true
                }
            }
            return tokenIsSend
        }

        _tokenExists = () => {
            const keys = await AsyncStorage.getAllKeys()
            const values = await AsyncStorage.multiGet(keys)
            let tokenExists = false 
            values.forEach( item => {
                if(item){
                    if(item[0] === 'token'){
                        tokenExists = true
                        
                    }
                }
            })
            return tokenExists
        }

        _getSendTokenFromAuth = () =>{
            let params = this.props.navigation.state.params
            token = false
            if(params){
                if(params.token){
                    token = params.token
                }
            }
            return token
        }

        _getSaveToken = () => {
            const keys = await AsyncStorage.getAllKeys()
            const values = await AsyncStorage.multiGet(keys)
            let tokenExists = false 
            values.forEach( item => {
                if(item){
                    if(item[0] === 'token'){
                        tokenExists = item[1]
                    }
                }
            })
            return tokenExists
        }


        //save token
        _saveToken = (token) => {
            AsyncStorage.setItem('token', token)
            .then(()=>{
                //save case
            })
        }

        componentDidMount(){
           
        }


    render(){
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.loadingText}>loading...</Text>
                    <Text style={styles.loadingText}>please wait</Text> 
                </View>
                
                <View style={styles.loadingIndicatorContainer}>
                    <ActivityIndicator size='large' color={colors.core}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    loadingText:{
    alignSelf:'center',
    textAlign:'center',
    },
    loadingIndicatorContainer:{
        elevation:10,
        backgroundColor:'white',
        borderRadius:60,
        justifyContent:'center',
        alignItems:'center',
        margin:10
    }
})