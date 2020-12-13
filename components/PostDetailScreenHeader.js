import React from 'react'
import {StyleSheet, View , Text, Dimensions} from 'react-native'

export default (props) => {
    const headerData = props.headerData
    return (
        <View style={styles.container}>
            <View style={[styles.column]}>
                <Text numberOfLines={1}>{'<'}  {headerData.postTitle}</Text>
            </View>
            <View style={[styles.column]}>
                <Text></Text>
            </View>
        </View>
    )
}

const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        backgroundColor:'gray',
        justifyContent:'space-between',
        padding:height/40,
        flexDirection:'row',
        
    },
    column:{
        // backgroundColor:'#584739',
        margin:2
    }
})