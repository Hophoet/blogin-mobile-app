import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
//components
import HomeScreenHeader from '../../components/HomeScreenHeader'
import HomeScreenBody from '../../components/HomeScreenBody'

export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.posts = require('../../data/posts.json')
    }

    navigate = (screenName, data) => {
        this.props.navigation.navigate(screenName, data)
    }

    render(){
        return (
            <View style={styles.container}>
                <HomeScreenHeader/>
                <HomeScreenBody navigate={this.navigate} posts={this.posts} />
                <Text>home screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})