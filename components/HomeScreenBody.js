import React from 'react'
import {StyleSheet, View , Text, Dimensions, FlatList} from 'react-native'
//colors
import {colors} from '../assets/colors/colors'
//components
import PostItem from '../components/PostItem'

export default class HomeScreenBody extends React.Component{
    constructor(props){
        super(props);
        this.authToken = this.props.authToken
    }
    componentDidMount(){
    }
    render(){
    //get posts list from props
    const posts = this.props.posts
    // console.log('home screen '+this.authToken)

    // console.log('Home screen body posts props')
    // console.log(typeof posts)
    return (
        <View style={styles.container}>
           <View style={styles.postsContainer}>
               <Text>Posts</Text>
               <FlatList
                
                    data={posts}
                    keyExtractor={({index, item}) => index}
                    renderItem={({index, item}) => <PostItem authToken={this.authToken} navigate={this.props.navigate} post={item}/>  }

                 />
           </View>
           
        </View>
    )
    }
}

const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        margin:width/20
        
    },
    postsContainer:{
     
    },
    postsFlatList:{
      
    }
})