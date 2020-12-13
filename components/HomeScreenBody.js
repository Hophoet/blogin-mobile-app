import React from 'react'
import {StyleSheet, View , Text, Dimensions, FlatList} from 'react-native'
//colors
import {colors} from '../assets/colors/colors'
//components
import PostItem from '../components/PostItem'

export default (props) => {
    
    //get posts list from props
    const posts = props.posts
    return (
        <View style={styles.container}>
           <View style={styles.postsContainer}>
               <FlatList
                    style={styles.postsFlatList}
                    data={posts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({index, item}) => <PostItem navigate={props.navigate} post={item}/> }


                 />
           </View>
           
        </View>
    )
}

const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.body,
        // justifyContent:'space-between',
        padding:height/40,
        flexDirection:'row',
        flex:1
        
    },
    postsContainer:{
        flex:1,
    },
    postsFlatList:{
        flex:1,
        backgroundColor:'#6666'
    }
})