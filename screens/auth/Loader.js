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
                if(params.authToken){
                    tokenIsSend = true
                }
            }
            return tokenIsSend
        }
        _saveTokenExists = async () => {
            const keys = await AsyncStorage.getAllKeys()
            const values = await AsyncStorage.multiGet(keys)
            let tokenExists = false 
            values.forEach( item => {
                if(item){
                    if(item[0] === 'authToken'){
                        tokenExists = true
                        
                    }
                }
            })
            return tokenExists
        }
        _getSendTokenFromAuth = () =>{
            let params = this.props.navigation.state.params
            let token = false
            if(params){
                if(params.authToken){
                    token = params.authToken
                }
            }
            return token
        }
        _getSaveToken = async () => {
            const keys = await AsyncStorage.getAllKeys()
            const values = await AsyncStorage.multiGet(keys)
            let tokenExists = false 
            values.forEach( item => {
                if(item){
                    if(item[0] === 'authToken'){
                        tokenExists = item[1]
                    }
                }
            })
            return tokenExists
        }
        //save token
        _saveToken = (token) => {
            AsyncStorage.setItem('authToken', token)
            .then(()=>{
                //save case
            })
        }

        _navigate = (toScreen, data) => {
            this.props.navigation.navigate(toScreen, data)
        }
        _manager = () => {
            console.log('manager')
            if(this._saveTokenExists().d){
                console.log('save token exists')
                if(this._getSaveToken()){
                    let token = this._getSaveToken()
                    console.log(token)
                    // this._navigate('Home', {'authToken':token})
                }
                else{
                    // this._navigate('SignIn', {})
                }
            }
            else{
                console.log('not saved')
                if(this._tokenIsSends()){
                    console.log('token is sends!')
                    if(this._getSendTokenFromAuth()){
                        let token = this._getSendTokenFromAuth()
                        console.log('token sends:', token)
                        this._saveToken(token)
                        this._navigate('Home', {'authToken':token})
                    }
                    else{
                        // this._navigate('SignIn', {})
                    }
                  
                }
                else{
                    // this._navigate('SignIn', {})
                }
            }
         
            
        }
        componentDidMount(){
            this._manager()
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