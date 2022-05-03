import {  } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, Image,TouchableOpacity } from 'react-native';
import { Platform } from 'react-native-web';
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

function LoginScreen({navigation}) {
    
    const onPressHandler = () => {
      navigation.navigate('WelcomeScreen');
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
        />
        </View>
        <Text>Password:</Text>
        <View style={[styles.container2, styles.naastElkaar]}>
        <Icon name="lock" size={20} color="#004070" />
        <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="password"
        />
        </View>
        <TouchableOpacity 
        onPress={onPressHandler}>
          <Icon name="login" size={40} color="#004070" />
        </TouchableOpacity>
        <StatusBar style="auto" backgroundColor = "#d4e7f3" /> 
    </SafeAreaView>
    )
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