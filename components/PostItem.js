import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {window} from '../assets/sizes/sizes'
export default class PostItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    postIsLiked = async (postId) => {
        //method to get if the post is liked by the connect user
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Token ${this.authToken}`);
        myHeaders.append("Cookie", "sessionid=92jccbwo7zm1q4py6aehunwdctv1szqi; csrftoken=32SnaSPitIge3XqyW4eE1Biea2RYC644xdTL6aFUl7K40cVMZTfsy0zYjv4XZEei");

        var formdata = new FormData();
        formdata.append("user", "1");
        formdata.append("post_id", `${postId}`);
        formdata.append("post", `${postId}`);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };
        fetch("https://bloginapi.herokuapp.com/post-is-liked/", requestOptions)
        .then(response => {
            return response.json()
            })
        .then(result =>{
            let post_is_liked = result.post_is_liked
            if(post_is_liked){
                this.setState({postIsLikedByUser:true});
                // console.log("--- is liked")
            }
            else{
                this.setState({postIsLikedByUser:false});
                // console.log("--- not liked")
            }
        })
        .catch(error => {
            console.log('error '+error)
        });
    }

    componentDidMount(){
        this.postIsLiked()
    }


    render() {
        const post = this.props.post 
        const authToken = this.props.authToken 
        console.log('item '+authToken)

        return(
            <TouchableOpacity 
                activeOpacity={.5} 
                style={styles.itemContainer}
                onPress={() => { this.props.navigate('PostDetail', {'post':post, 'authToken':authToken})}}
                

            >
                <View style={styles.container}>
                    <View style={[styles.row, styles.row1]}>
                        <Image source={require('../assets/images/pis.jpg')} style={styles.postImage}   resizeMode='contain' />
                    </View>
                    <View style={[styles.row, styles.row2]}>
                        <Text numberOfLines={2} style={styles.postTitle}> {post.title} </Text>
                        <Text numberOfLines={3} style={styles.postContent}>{post.content}</Text>
                        <View style={styles.categoryAndDateContainer}>
                            <Text style={styles.postCategory} >{post.category}</Text>
                            <Text style={styles.postDate}>{post.date}</Text>
                        </View>
                        
                    </View>
                </View>
                <View style={styles.postFooter}>
                
                    <View style={styles.postFooterSecondRow}>
                    
                    </View>
                    
                </View>
            </TouchableOpacity>
        )
    }
}





const styles = StyleSheet.create({
    itemContainer:{
        marginBottom:20,
    },
    container:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'white',
        // elevation:10
    },
    postFooter:{
        flexDirection:'row',
     
        // backgroundColor:'red',
    },
    row:{
        // borderWidth:1,
        borderColor:'black',

        padding:10,
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
    },
    postImage:{
        height:window.width/3
    }
  
})