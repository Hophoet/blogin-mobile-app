import React from 'react'
import {StyleSheet, View , Text, Dimensions, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
//sizes
import {window} from '../assets/sizes/sizes'

export default (props) => {
    const headerData = props.headerData
    return (
        <View style={styles.container}>
            <View style={[styles.header]}>
                <TouchableOpacity 
                    onPress={() => {props.navigate("Home",{})}}
                    style={styles.backButtonContainer}>
                    <Icon name='arrow-back-outline' size={window.width/15} />
                </TouchableOpacity>
                <View style={styles.postHeaderTitleContainer}>
                    <Text numberOfLines={1} style={styles.postHeaderTitle}> {headerData.postTitle}</Text>
                </View>
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
        justifyContent:'space-between',
        flexDirection:'row',
        padding:window.width/20,
        
    },
    header:{
        flexDirection:'row',
        flex:1,
    },
    column:{
        // backgroundColor:'#584739',
        margin:2
    },
    backButtonContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    postHeaderTitle:{
       
    },
    postHeaderTitleContainer:{
        flex:5,
        justifyContent:'center'
    },

})