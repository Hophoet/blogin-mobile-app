
import React from 'react'
import {StyleSheet, View , Text, Dimensions, TouchableOpacity, Modal} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {window} from '../assets/sizes/sizes'
import { connect } from 'react-redux'
//redux actions
import { REMOVE_AUTHENFICATION_TOKEN, REMOVE_USER_PROFILE } from '../redux/store/actions'

import UserProfile from '../screens/main/UserProfile'

class HomeScreenHeader extends React.Component {
    constructor(props){
        super(props)
        this.state = { userProfileModalIsShow:false }
    }
    toggleUserProfileModal = () => {
        if(this.props.userProfile)
            this.setState({userProfileModalIsShow:!this.state.userProfileModalIsShow})
    }

    logout = () => {
        this.toggleUserProfileModal()
        let removeAuthenficationTokenAction = {type:REMOVE_AUTHENFICATION_TOKEN, value:{}}
        let removeProfileAction = {type:REMOVE_USER_PROFILE, value:{}}
        this.props.dispatch(removeAuthenficationTokenAction)
        this.props.dispatch(removeProfileAction)
        this.props.navigate('Loader', {})
    }

    render(){
        // console.log('home screen header component')
        // console.log(this.props.userProfile)
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
                    <UserProfile logout={this.logout} userProfile={this.props.userProfile} toggleUserProfileModal={this.toggleUserProfileModal}/>
                </Modal>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => {dispatch(action)}
    }
}

const mapStateToProps = (state) => {
    return {
        authentificationToken:state.authentificationToken,
        userProfile:state.userProfile
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenHeader)


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