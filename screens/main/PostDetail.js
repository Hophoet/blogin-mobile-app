import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
//color
import {colors} from '../../assets/colors/colors'
//components
import PostDetailScreenHeader from '../../components/PostDetailScreenHeader'

export default class PostDetail extends React.Component{
    constructor(props){
        super(props)
        this.post = this.props.navigation.state.params.post
    }

    navigate = (screenName, data) => {
        this.props.navigation.navigate(screenName, data)
    }

    render(){
       const headerData = { 'postTitle':this.post.title}
        return (
            <View style={styles.container}>
                <PostDetailScreenHeader headerData={headerData}  />
                <Text>{this.post.title}</Text>
                <Text style={styles.postContent}>{this.post.content}</Text>
                <Text onPress={() => this.navigate('Home') }>GOBACK</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{

    }
})