import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

export default (props) => {
    const comment = props.comment

    return (
        <View style={styles.container}>
            <View style={styles.userInfoContainer}>
                <View style={styles.userProfileContainer}>
                    <Text>{comment.user}</Text>
                </View>
                
            </View>
            <View style={styles.commentContentContainer}>
                <Text style={styles.commentContent}>{comment.content}</Text>
            </View>
            
        </View>
    )


}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:5,
        padding:5
    },
    userProfileContainer:{
        backgroundColor:'#2323',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        borderRadius:20,
        padding:10
    },
    userInfoContainer:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    commentContentContainer:{
        flex:5,
        justifyContent:'center',
        
    }

})