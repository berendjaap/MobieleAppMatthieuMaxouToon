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
    Alert,
    navigation
} from "react-native";
import axios from "axios";
import deviceStorage from "../services/deviceStorage";
import React, {useEffect,useState} from "react";
//import {useRoute} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


async function SubjectDetails({navigation}) {
    const [onderwerpen, setOnderwerpen] = useState([]);


    useEffect(() => {
        const getOnderwerp = async () => {
            console.log("voor versturen.");
            console.log(await deviceStorage.loadSubject())
            axios.get('http://192.168.137.1:8080/api/v1/subject/subjectdetails', {
                headers: { 'Authorization': "Bearer " + await deviceStorage.loadJWT()},
                params: { subjectName: await AsyncStorage.getItem('subject') }
            }).then(response => {
                setOnderwerpen(response.data);
            })
        };getOnderwerp();
        },[]
    )

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerExtended}>
                {onderwerpen.map( (onderwerp,i) =>
                    <Text key={i} style={styles.title}>
                        {onderwerp.name}
                    </Text>,
                    <Text key={i} style={styles.text}>
                        {onderwerp.description}
                    </Text>
                )}
            </View>
        </SafeAreaView>
    );
}
export default SubjectDetails;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#d4e7f3',
        alignItems: 'center',
        //justifyContent: 'center',
    },

    containerExtended: {
        flex: 1,
        backgroundColor: '#d4e7f3',
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ?StatusBar.currentHeight:0
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    text: {
        marginHorizontal: 20,
        textAlign:"justify"
    }
})