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

    togglePostLike = ()=>{
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "sessionid=92jccbwo7zm1q4py6aehunwdctv1szqi; csrftoken=32SnaSPitIge3XqyW4eE1Biea2RYC644xdTL6aFUl7K40cVMZTfsy0zYjv4XZEei");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://bloginapi.herokuapp.com/toggle-post-like/", requestOptions)
        .then(response => {
            return response.json()
            })
        .then(result =>{
            this.posts = result
            let state = result.state
            if(state == "post liked"){
                this.setState({postIsLiked:true});
            }
            else{
                this.setState({postIsLiked:false});
            }
        })
        .catch(error => {
            this.setState({postsGettingIsLoading:false})
            console.log('error '+error)
        });
                
        }

 

    // togglePostLike = () => {
    //     this.setState({postIsLiked:!this.state.postIsLiked});
    // }

    navigate = (screenName, data) => {
        this.props.navigation.navigate(screenName, data)
    }


    render(){
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
                    <TouchableOpacity style={styles.postLikeIconContainer}  onPress={() => {this.togglePostLike()}} >
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