import React from 'react'
import {StyleSheet, View, Text, Image, Dimensions, ActivityIndicator, FlatList} from 'react-native'

import { connect } from 'react-redux'
//components
import HomeScreenHeader from '../../components/HomeScreenHeader'
import HomeScreenBody from '../../components/HomeScreenBody'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Home extends React.Component {
    constructor(props){
        super(props)
        let params = this.props.navigation.state.params
        this.posts = []
        this.state = {
            postsGettingIsLoading:true
        }
    }
    
    getPosts = ()=>{
        this.setState({postsGettingIsLoading:true})
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "sessionid=92jccbwo7zm1q4py6aehunwdctv1szqi; csrftoken=32SnaSPitIge3XqyW4eE1Biea2RYC644xdTL6aFUl7K40cVMZTfsy0zYjv4XZEei");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
        if(!this.posts.length){
            console.log('call')
            console.log(this.posts)
            fetch("https://bloginapi.herokuapp.com/posts/", requestOptions)
            .then(response => {
                return response.json()
                })
            .then(result =>{
                this.posts = result
                // console.log(this.posts)
                this.setState({postsGettingIsLoading:false})
            })
            .catch(error => {
                this.setState({postsGettingIsLoading:false})
                console.log('error '+error)
            });
        }
        else{
            this.setState({postsGettingIsLoading:false})
            
        }
                
        }


    showScreen = () => {
        if(this.state.postsGettingIsLoading){
            return (
            <View style={styles.emptyCaseContainer}>
                <View style={styles.imageContainer}>
                    <Image  resizeMode='contain' style={styles.image} source={require('../../assets/images/pis.jpg')}/>
                </View>
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator color='gray' size='large' style={styles.activityIndicator}/>
                </View>
            </View>
            )
        }

        if(this.posts.length > 0){
            // console.log('posts')
            // console.log(this.posts)
            return (
                <View>
                    <HomeScreenBody authToken={this.authToken} navigate={this.navigate} posts={this.posts} />
                </View>
            )
        }

        return (
         
            <View style={styles.emptyCaseContainer}>
                <View style={styles.imageContainer}>
                    <Image  resizeMode='contain' style={styles.image} source={require('../../assets/images/pis.jpg')}/>
                </View>
                <View>
                    <Text>check your connexion</Text>
                </View>

            </View>
        )
 
    }
 
    navigate = (screenName, data) => {
        this.props.navigation.navigate(screenName, data)
    }

    componentDidMount(){
        this.authToken = this.props.navigation.state.params.authToken 
        // console.log(this.authToken)
        this.getPosts()
    }


    render(){
        // console.log("home "+this.authToken)
        return (
            <View style={styles.container}>
                <HomeScreenHeader/>
		        {this.showScreen()}
            </View>
        )
    } 
}

//maps with the state global
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => {dispatch(action)}
    }
}

const mapStateToProps = (state) => {
    return {
        authentificationToken:state.authentificationToken
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


const {height, width} = Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    emptyCaseContainer:{
    	flex:1,
        // justifyContent:'center',
        // marginTop:50,
        alignItems:'center',
        backgroundColor:'white',
    },
    image:{
        height:width/1.5,

    },
    activityIndicatorContainer:{
        backgroundColor:'white',
        borderRadius:40,
        elevation:10
    }
})
