import React from 'react'
import {Text, StyleSheet, View, ActivityIndicator} from 'react-native'
//colors
import {colors} from '../../assets/colors/colors'


export default class Loader extends React.Component{
    constructor(props){
        super(props)
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