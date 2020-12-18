import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default (props) => {
    const post = props.post 
    return(
        <TouchableOpacity 
            activeOpacity={.5} 
            style={styles.itemContainer}
            onPress={() => { props.navigate('PostDetail', {'post':post})}}
            
        >
        
        </TouchableOpacity>
    )
}




const styles = StyleSheet.create({
    itemContainer:{
        marginBottom:20,
       
       
     

    }
  
})