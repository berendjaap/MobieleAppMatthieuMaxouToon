import {  } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, Image,TouchableOpacity } from 'react-native';
import { Platform } from 'react-native-web';
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import * as SecureStore from "expo-secure-store";
import stringifySafe from "react-native/Libraries/Utilities/stringifySafe";
import AsyncStorage from "@react-native-async-storage/async-storage";



function WelcomeScreen({navigation}) {

  return(
      <SafeAreaView  style={styles.container}>
        <View>
          <Text>
            Goed gewerkt!
          </Text>
        </View>
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
export default WelcomeScreen;