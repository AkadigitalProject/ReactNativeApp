import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { NavigationContainer } from 'react-navigation';
import { createNativeStackNavigator } from '@react-navigation/native';

export function RegisterScreen({navigation}){

    const [username, setUsername] = useState('');
    const [password, setPass] = useState('');
    const [firstName, setName] = useState('');
    const [mobile, setMobile] = useState('');

            return (
                <View style={styles.container} >
                    <StatusBar backgroundColor="#ffc2c2" barStyle='dark-content' />
                    <Text style={styles.welcome}>Register To Aka Store</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="gray"
                        onChangeText={(value) => setUsername(value)}
                        value={username}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="gray"
                        secureTextEntry
                        onChangeText={(value) => setPass(value)}
                        value={password}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="First Name"
                        placeholderTextColor="gray"
                        onChangeText={(value) => setName(value)}
                        value={firstName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Mobile"
                        placeholderTextColor="gray"
                        onChangeText={(value) => setMobile(value)}
                        value={mobile}
                    />
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.userBtn} onPress={() => {
                            if (this.state.username === "" || this.state.password === "" || this.state.mobile === "") {
                                alert("Register Fail");
                            } else {
                                navigation.navigate("Products");
                                alert("Register success")
                            }
                        }
                            //Handle REGISTER

                        }>
                            <Text style={styles.btnTxt}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Login");
                    }}>
                        <Text style={styles.btnTxt}>Have account, back to {''}
                            <Text style={styles.btnTxtRegister}>Login
                            </Text></Text>

                    </TouchableOpacity>
                </View>
            )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#ffc2c2',
    },
    welcome: {
        fontSize: 45,
        textAlign: 'center',
        margin: 10,
        color: "#fff",
        fontFamily: "DancingScript-Bold"
    },
    input: {
        color: "black",
        margin: 20,
        width: "90%",
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 10,

    },
    btnContainer: {
        justifyContent: "space-between",
        width: "100%",
        alignItems: 'center',
        padding: 15,
    },
    userBtn: {
        backgroundColor: "#1e90ff",
        padding: 15,
        width: "45%"
    },
    btnTxt: {
        fontSize: 18,
        textAlign: "center"
    },
    btnTxtRegister: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }


});