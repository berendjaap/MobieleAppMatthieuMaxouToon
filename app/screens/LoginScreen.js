import {  } from 'expo-status-bar';
import React, {useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import 'react-native-gesture-handler';
import deviceStorage from '../services/deviceStorage';
import NetworkService from "../services/NetworkService";



function LoginScreen({navigation}) {


    useEffect(() =>{
            const constructor =()=> {
                this.state = {
                    username: '',
                    password: '',
                    error: ''
                }
                deviceStorage.removeItem("token")
            };constructor();
        },[]
    )

        const [username, setUsernameText] = React.useState(false);
        const [password, setPasswordText] = React.useState(false);

        const loginUser  = () => {
            NetworkService.login(username, password).then(response=>{
                const resp = response.data.roles;
                if (resp.includes("ROLE_STUDENT")) navigation.navigate("SubjectViewer")
                else if (resp.includes("ROLE_PROMOTOR")) navigation.navigate("SubjectsViewerPromotoren")
                else if (resp.includes("ROLE_BEDRIJF")) navigation.navigate("SubjectsViewerBedrijf")
                else if (resp.includes("ROLE_COORDINATOR")) navigation.navigate("SubjectsViewerCoordinator")
                else navigation.navigate("WelcomeScreen")
            })
                .catch((error) => {
                    console.log(error);
                    onLoginFail();
                });
        };
        const onLoginFail = () => {
            this.state.error = 'Login Failed';
        }
        const onPressHandler = () => {
            loginUser();
        }

        return(
            <SafeAreaView style={styles.container}>
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
    },
    containerExtended: {
      paddingTop: Platform.OS === "android" ?StatusBar.currentHeight:0
    },
    input: {
      height: 40,
      margin: 2,
      padding: 10
    },
    searchIcon: {
      padding: 10,
    },
    naastElkaar: {
      // flex: 1,
      flexDirection: "row",
    },
    container2: {
      backgroundColor: '#d4e7f3',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default LoginScreen;