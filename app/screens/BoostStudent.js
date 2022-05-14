import {
    StyleSheet,
    TouchableOpacity,
    Text,
    SafeAreaView,
    StatusBar,
    View,
    Platform,
    ScrollView,
    Clipboard,
    Alert
} from "react-native";
import axios from "axios";
import deviceStorage from "../services/deviceStorage";
import React, {useEffect,useState} from "react";
import {useRoute} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetworkService from "../network/NetworkService";


export default function BoostStudent({navigation}) {
    const [studenten,setStudenten] = useState([]);
    useEffect(() => {
        const getStudenten = async () => {
            await NetworkService.getSperSub(navigation.getParam("name"))
                .then(response => setStudenten(response.data))
        };getStudenten();
        },[]
    )
    const handleBoost = (event, subjectName, email) => {
        NetworkService.postBoostStudent(subjectName, email);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.containerExtended}>
                    {studenten.map( (student,i) =>
                        <View>
                            <Text>
                                {student.name}
                            </Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#d4e7f3',
        //alignItems: 'center',
        //justifyContent: 'center',
    },

    containerExtended: {
        flex: 1,
        backgroundColor: '#d4e7f3',
        //alignItems: 'center',
        paddingTop: Platform.OS === "android" ?StatusBar.currentHeight:0
    },
    title: {
        fontSize: 30,
        alignItems: 'center',
        fontWeight: "bold",
        padding: 10,
    },
    subTitle: {
        fontSize: 16,
        padding: 10,
        paddingTop: 30,
        fontWeight: "bold"
    },
    text: {
        marginHorizontal: 20,
        textAlign:"justify"
    },
    tussenzin: {
        marginHorizontal: 20,
        textAlign:"justify"
    }
})