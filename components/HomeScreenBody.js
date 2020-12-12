import React from 'react'
import {StyleSheet, View , Text, Dimensions} from 'react-native'

export default () => {

    return (
        <View style={styles.container}>
           <Text>body</Text>
        </View>
    )
}

const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#9999',
        justifyContent:'space-between',
        padding:height/40,
        flexDirection:'row',
        flex:1
        
    }
})