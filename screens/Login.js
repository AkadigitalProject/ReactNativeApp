/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */



import React, {Component} from 'react';
//import React from 'react';
import {Platform, StyleSheet, Text, View, TextInput,TouchableOpacity,StatusBar} from 'react-native';
import { NavigationContainer } from 'react-navigation';
import { createNativeStackNavigator } from '@react-navigation/native';






type Props = {};
export default class App extends Component<Props>{
    state = {
            username: '',
            password: ''
        };
    render(){
        return (
            <View style = {styles.container} >
                <StatusBar backgroundColor="#1e90ff" barStyle='dark-content'/>
                <Text style ={styles.welcome}>Login To Aka Store</Text>
                <TextInput
                 style = {styles.input}
                 placeholder= "Username"
                 placeholderTextColor="gray"
                 onChangeText={(value) => this.setState({username: value})}
                 value={this.state.username}
                 />
                <TextInput
                 style = {styles.input}
                 placeholder= "Password"
                 placeholderTextColor="gray"
                 secureTextEntry
                 onChangeText={(value) => this.setState({password: value})}
                 value={this.state.password}
                 />
                 <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.userBtn} onPress={()=>
                    {
                      if(this.state.username.localeCompare('0')!=0 || this.state.password.localeCompare('0')!=0){
                             alert("Login Fail");
                       } else {
                         const { navigate } = this.props.navigation;
                         navigate("HomeScreen", { name: "Home Screen" });
                         alert("send mail")
                       }
                       }
                         //Handle LOGIN

                     }>
                        <Text style={styles.btnTxt}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.userBtn} onPress={()=>
                        SmartechSDK.clearUserIdentity()
                    }>
                        <Text  style={styles.btnTxt}>Signup</Text>
                    </TouchableOpacity>
                 </View>
            </View>
        )
    }
}






const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        backgroundColor: '#ffc2c2',
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin:10,
        color: "#fff",
        fontFamily : "DancingScript-Bold"
    },
    input: {
        color: "black",
        margin :20,
        width: "90%",
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 10,

    },
    btnContainer: {
        margin :20,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%"
    },
    userBtn: {
        backgroundColor: "#1e90ff",
        padding: 15,
        width : "45%"
    },
    btnTxt:{
        fontSize: 18,
        textAlign:"center"
    }


});
