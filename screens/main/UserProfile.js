import React from 'react'
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import {window} from '../../assets/sizes/sizes'
export default class UserProfile extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.closeBarContainer}>
                    <TouchableOpacity 
                        style={styles.closeButtonContainer}
                        onPress={this.props.toggleUserProfileModal}
                        >
                        <Icon name='close' size={25}/>
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.header}>
                    <View style={styles.imageContainer}>
                        <Image resizeMode='contain' style={styles.image} source={require('../../assets/images/profile.jpg')}/>
                    </View>
                    <View style={styles.indentityContainer}>
                        <Text style={styles.userName}>Hophoet KE..</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.infoItemContainer}>
                            <Text style={styles.infoTitle}>Posts</Text>
                            <Text style={styles.infoValue}>34</Text>
                        </View>
                        <View style={styles.infoItemContainer}>
                            <Text style={styles.infoTitle}>LIkes</Text>
                            <Text style={styles.infoValue}>234</Text>
                        </View>
                        <View style={styles.infoItemContainer}>
                            <Text style={styles.infoTitle}>Comments</Text>
                            <Text style={styles.infoValue}>19</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>

                </View>
            </View>
        )
    }
}

const styles  = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        // backgroundColor:'white',
    },
    imageContainer:{
        margin:10, 
        alignItems:'center'
     
    },  
    image:{
        height:window.width/1.5,
        
    
    },
    header:{
        flex:3,
        backgroundColor:'white',
        justifyContent:'center',
        // alignItems:'center'
    },
    footer:{
        flex:2,
        backgroundColor:'white'
    },
    indentityContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10
    },
    infoContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        // backgroundColor:'red',
        // paddingHorizontal:30
        alignItems:'center',
        alignSelf:'center',
        width:window.width/1.5,
    
    },
    infoItemContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    infoTitle:{
        // fontSize:window.width/20
        opacity:.5
    },
    infoValue:{
        fontWeight:'bold',
        // color:'black',
        fontSize:window.width/20,
        opacity:.5
    },
    userName:{
        fontWeight:'bold'
    },
    closeBarContainer:{
        // backgroundColor:'red',
        height:window.width/8,
        flexDirection:'row',
        justifyContent:'flex-end',
        // alignItems:'center'
    },
    closeButtonContainer:{
        // backgroundColor:'green',
        width:window.width/8,
        justifyContent:'center',
        alignItems:'center'
    }
})