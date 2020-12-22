import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

export default class UserProfile extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>User Profile</Text>
            </View>
        )
    }
}

const styles  = StyleSheet.create({
    container:{
        flex:1
    }
})