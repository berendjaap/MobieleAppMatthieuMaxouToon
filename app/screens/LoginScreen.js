import {  } from 'expo-status-bar';
import React, {Component, useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-async-storage/async-storage'
import stringifySafe from "react-native/Libraries/Utilities/stringifySafe";
import deviceStorage from '../services/deviceStorage'
import App from "../../App";
import DeviceStorage from "../services/deviceStorage";
import NetworkService from "../network/NetworkService";
//import {NavigationActions as navigation} from "react-navigation";
const state = {
    email: '',
    password: '',
    error: '',
    loading: false
};
function LoginScreen({navigation}) { //extends Component {


    useEffect(() =>{
            const constructor =()=> {
                this.state = {
                    username: '',
                    password: '',
                    error: ''
                }
                deviceStorage.removeItem("token")
                //this.loginUser = this.loginUser.bind(this);
                //this.onLoginFail = this.onLoginFail.bind(this);
            };constructor();
        },[]
    )

        const [username, setUsernameText] = React.useState(false);
        const [password, setPasswordText] = React.useState(false);

        const loginUser  = () => {
            NetworkService.login(username, password).then(r=>{
                navigation.navigate('SubjectViewer');
            }

            )
                .catch((error) => {
                    console.log(error);
                    LoginScreen.onLoginFail();
                });
            //if (bool===true) {navigation.navigate('SubjectViewer');}
            /*console.log(username);
            axios.post('http://192.168.178.181:8080/api/auth/login', {
                username: username,
                password: password
            })
                //.then(response => console.log(response.data.username));
                .then( (response) => {
                    //save(response.data.accessToken,response.data.username);
                    // App.newJWT(response.data.accessToken)
                    deviceStorage.saveToken('token',response.data.accessToken)
                        .then(r => {console.log(response.data,r)
                        console.log(response.data.accessToken);
                    deviceStorage.saveToken('mail',response.data.email)
                        .then(r => console.log(response.data.email))
                        navigation.navigate('SubjectViewer');
                    })
                })
                .catch((error) => {
                    console.log(error);
                    onLoginFail();
                });*/
        };
        const onLoginFail = () => {
            this.state.error = 'Login Failed';
        }
        const onPressHandler = () => {
            loginUser();
        }

        return(
            <SafeAreaView style={styles.container}>
                {/* <Image
                source={require('./app/assets/KULeuvenlogo.png')}
                /> */}
                <View
                    style={{
                        flex:0.5,
                        justifyContent: 'center'
                    }}
                >
                    <Icon name="user" size={150} color="#004070" />
                </View>

                <Text>Username:</Text>
                <View style={[styles.container2, styles.naastElkaar]}>
                    <Icon name="meh" size={20} color="#004070" />
                    <TextInput
                        style={styles.input}
                        placeholder="username"
                        value={username}
                        onChangeText={username => setUsernameText(username)}
                    />
                </View>
                <Text>Password:</Text>
                <View style={[styles.container2, styles.naastElkaar]}>
                    <Icon name="lock" size={20} color="#004070" />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        placeholder="password"
                        value={password}
                        onChangeText={password => setPasswordText(password)}
                    />
                </View>
                <TouchableOpacity
                    onPress={()=>onPressHandler()}>
                    <Icon name="login" size={40} color="#004070" />
                </TouchableOpacity>
                <StatusBar style="auto" backgroundColor = "#d4e7f3" />
            </SafeAreaView>
        );
}
    
const styles = StyleSheet.create({
    searchSection: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
    container: {
      flex: 1,
      backgroundColor: '#d4e7f3',
      alignItems: 'center',
      //justifyContent: 'center',
    },
    containerExtended: {
      paddingTop: Platform.OS === "android" ?StatusBar.currentHeight:0
    },
    input: {
      height: 40,
      margin: 2,
      // borderWidth: 1,
      padding: 10
    },
    searchIcon: {
      padding: 10,
    },
    naastElkaar: {
      // flex: 1,
      flexDirection: "row",
      //justifyContent: "center",
    },
    container2: {
      backgroundColor: '#d4e7f3',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default LoginScreen;