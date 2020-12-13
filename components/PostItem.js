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
            <View style={styles.container}>
                <View style={[styles.row, styles.row1]}>
                    <Text> image </Text>
                </View>
                <View style={[styles.row, styles.row2]}>
                    <Text numberOfLines={2} style={styles.postTitle}> {post.title} </Text>
                    <Text numberOfLines={4} style={styles.postContent}>{post.content}</Text>
                    <View style={styles.categoryAndDateContainer}>
                        <Text style={styles.postCategory} >{post.category}</Text>
                        <Text style={styles.postDate}>{post.date}</Text>
                    </View>
                    
                </View>
            </View>
            <View style={styles.postFooter}>
                <Text >34 L</Text>
                <Text > 12 C</Text>
            </View>
        </TouchableOpacity>
    )
}




const styles = StyleSheet.create({
    itemContainer:{
        marginBottom:20
    },
    container:{
        flex:1,
        flexDirection:'row',
        
 
        
    },
    postFooter:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    row:{
        borderWidth:1,
        borderColor:'black',
        padding:10
    },
    row1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    row2:{
        flex:3
    },
    categoryAndDateContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    postTitle:{
        fontWeight:'bold'
    },
    postContent:{

    },
    postDate:{
        opacity:.5,
    },
    postCategory:{
        opacity:.5
    }
})