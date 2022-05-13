import {  } from 'expo-status-bar';
// import react from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, Image,TouchableOpacity } from 'react-native';
// import { Platform } from 'react-native-web';
// import Icon from 'react-native-vector-icons/AntDesign';
// import { loginScreen } from "./app/screens/loginScreen";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import 'react-native-gesture-handler';
import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import SubjectViewer from "./app/screens/SubjectsViewer";
import SubjectDetails from "./app/screens/SubjectDetails";
import HomeStack from './app/routes/HomeStack';
import { TransitionSpecs } from 'react-navigation-stack';
import React, {Component, useEffect, useState} from "react";
import axios from "axios";
import deviceStorage from "./app/services/deviceStorage";

//const Stack = createStackNavigator();

export default function App() {

    const [jwt, setJwt] = React.useState(false);

    useEffect(()=>{
        const constructor =()=> {
        setJwt("");

        this.newJWT = newJWT.bind(this);
        this.deleteJWT = deviceStorage.deleteJWT.bind(this);
        this.loadJWT = deviceStorage.loadJWT.bind(this);
        this.loadJWT();
            };constructor();
        },[]
    )
    const newJWT = (JWT) =>{
        this.setState({
            jwt: this.loadJWT()
        });
    }

    if (!jwt){
        return(
            <HomeStack newJWT={newJWT}
                       options={{
                           headerShown: false,
                       }}
                //style={{backgroundColor: '#d4e7f3'}}
            />
        )}
    else{
        return (
            <SubjectViewer jwt={jwt} deleteJWT={this.deleteJWT}/>
        )
    };

}






