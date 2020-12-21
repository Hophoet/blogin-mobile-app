import React from 'react'
import {View, Text, StyleSheet, Image, ScrollView, Dimensions, FlatList, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'
//color
import {colors} from '../../assets/colors/colors'
//sizes
import  {window} from '../../assets/sizes/sizes'
//
import Icon from 'react-native-vector-icons/Ionicons'
//components
import PostDetailScreenHeader from '../../components/PostDetailScreenHeader'
import PostCommentItem from '../../components/PostCommentItem'
import FloatButton from '../../components/buttons/FloatButton'
export default class PostDetail extends React.Component{
    constructor(props){
        super(props)
        this.post = this.props.navigation.state.params.post
        this.authToken = this.props.navigation.state.params.authToken
        this.state = {
            postIsLiked:false
        }
    }

    getPostLikeIconLabel = () => {
        if(this.state.postIsLiked){
            return 'heart'
        }
        return 'heart-outline'
    }

    togglePostLike = (postId)=>{
        // console.log(postId)
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

        fetch("https://bloginapi.herokuapp.com/toggle-post-like/", requestOptions)
        .then(response => response.json())
        .then(result => {
            let state = result.state 
            if(state == 'post liked'){
                this.setState({postIsLiked:true});
                // console.log('post liked')
            }
            else{
                this.setState({postIsLiked:false});
                // console.log(result.state)
                // console.log('post not liked')

            }
        })
        .catch(error => {

        });
                
        }

    postIsLiked = (postId) => {
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
        // console.log("cl")
        fetch("https://bloginapi.herokuapp.com/post-is-liked/", requestOptions)
        .then(response => {
            // console.log("cone")
            return response.json()
            })
        .then(result =>{
            // console.log(result)
            this.posts = result
            let post_is_liked = result.post_is_liked
            if(post_is_liked){
                this.setState({postIsLiked:true});
                // console.log("--- is liked")
            }
            else{
                this.setState({postIsLiked:false});
                // console.log("--- not liked")
            }
        })
        .catch(error => {
            console.log('error '+error)
        });
    }



    navigate = (screenName, data) => {
        this.props.navigation.navigate(screenName, data)
    }

    componentDidMount(){
        this.postIsLiked(this.post.id)
    }


    render(){
        // console.log('post detail authtoken '+this.authToken)
     
       const headerData = { 'postTitle':this.post.title}
        return (
            <View style={styles.container}>
                <PostDetailScreenHeader navigate={this.navigate} headerData={headerData}  />
           
                
                <ScrollView 
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.imageContainer}>
                        <Image resizeMode='contain' style={styles.image} source={require('../../assets/images/pis.jpg')}/>
                    </View>
              
                    <View style={styles.bodyContainer}>
                    <TouchableOpacity style={styles.postLikeIconContainer}  onPress={() => {this.togglePostLike(this.post.id)}} >
                        <Icon name={this.getPostLikeIconLabel()} size={window.width/7} />
                    </TouchableOpacity>
            
                        <Text style={styles.title}>{this.post.title}</Text>
                        <Text style={styles.content}>{this.post.content}</Text>
                        <Text style={styles.content}>{this.post.content}</Text>
                        <View style={styles.commentsContainer}>
                            {/* <Text style={styles.commentsPartTitle}>comments</Text>
                            <FlatList
                                style={styles.commentsFlatList}
                                data={this.post.comments}
                                keyExtractor={(item) => item.user.toString()}
                                renderItem={({index, item}) => <PostCommentItem comment={item}/> }


                            /> */}
                        </View>
                    </View>
                </ScrollView>
                <FloatButton/>
            </View>
        )
    }
}

const {height, width} = Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    image:{
        height:width
    },
    imageContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    bodyContainer:{
        marginHorizontal:7,
        backgroundColor:'white',
    },
    title:{
        alignSelf:'center',
        textAlign:'center',
        margin:10,
        fontSize:20,
        fontWeight:'bold'
    },
    content:{
        alignSelf:'center',
        // textAlign:'center',
        margin:5
    },
    commentsContainer:{
        // backgroundColor:'gray',

    },
    commentsPartTitle:{
        alignSelf:'center',
        textAlign:'center',
    },
    scrollView:{
        flex:1
    },
    postLikeIconContainer:{
        // backgroundColor:'red',
        // position:'absolute',
        elevation:5,
        justifyContent:'center',
        alignItems:'center',
        // right:window.width/10,
        // bottom:window.width/10,
        
        
    }
})