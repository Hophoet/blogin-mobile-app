
import React from 'react'
import {StyleSheet, View , Text, Dimensions, TouchableOpacity, Modal} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {window} from '../assets/sizes/sizes'

import UserProfile from '../screens/main/UserProfile'

export default class HomeScreenHeader extends React.Component {
    constructor(props){
        super(props)
        this.state = { userProfileModalIsShow:false }
    }
    toggleUserProfileModal = () => {
        this.setState({userProfileModalIsShow:!this.state.userProfileModalIsShow})
    }
    render(){
        return (
            <View style={styles.container}>
                    <View style={styles.appNameContainer}>
                        <Text style={styles.appName}>BlogIn</Text>
                    </View>  

                <View style={styles.userProfileColumn}>
                    <TouchableOpacity 
                        activeOpacity={.5} 
                        style={styles.userProfileIconContainer}
                        onPress={this.toggleUserProfileModal}
                        >
                        <Icon color='white' name='person' size={window.width/14}/>
                    </TouchableOpacity>
                </View>
                <Modal 
                    visible={this.state.userProfileModalIsShow}
                   
                      >
                    <UserProfile toggleUserProfileModal={this.toggleUserProfileModal}/>
                </Modal>
            </View>
        )
    }
}

const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        flexDirection:'row',
        padding:window.width/30,
        
        
    },
    column:{
        // backgroundColor:'#584739',
        
    },
    userProfileIconContainer:{
        backgroundColor:'gray',
        borderRadius:60,
        padding:5,
        opacity:.7
        
    },
    appNameContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    userProfileColumn:{
        justifyContent:'center',
        alignItems:'center',
    },
    appName:{
        fontSize:20,
        fontWeight:"bold",
        color:'gray'
    }
})