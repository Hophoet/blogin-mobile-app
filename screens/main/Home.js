import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
//components
import HomeScreenHeader from '../../components/HomeScreenHeader'
import HomeScreenBody from '../../components/HomeScreenBody'

export default class Home extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.container}>
                <HomeScreenHeader/>
                <HomeScreenBody/>
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