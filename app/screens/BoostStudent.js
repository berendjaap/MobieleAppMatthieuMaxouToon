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
import Icon from "react-native-vector-icons/AntDesign";


export default function BoostStudent({navigation}) {
    const [studentenEerste,setStudentenEerste] = useState([]);
    const [studentenTweede,setStudentenTweede] = useState([]);
    const [studentenDerde,setStudentenDerde] = useState([]);
    let bool;
    if (navigation.getParam("geboostVoor")===0) {
        bool = true;
    }
    else bool = false;
    let subject = navigation.getParam("name");
    console.log(navigation)

    useEffect(() => {
        const getStudenten = async () => {

            await NetworkService.getSperSub(navigation.getParam("name"))
                .then(response => {
                    let antwoord = response.data;
                    setStudentenEerste(antwoord["1"])
                    setStudentenTweede(antwoord["2"])
                    setStudentenDerde(antwoord["3"])
                })
        };getStudenten();
        },[]
    )
    const handleBoost = async (email) => {
        await NetworkService.postBoostStudent(subject, email);
    }

    const buttonCheck = async (student) => {
        let button;
        if(student.geboostVoor.find(subject => subject.name === navigation.getParam("name")) ){
            button = (
                    <TouchableOpacity
                        onPress={()=>handleBoost(student.email)}>
                        <Icon name="totop" size={20} color="#004070" />
                    </TouchableOpacity>
                );
        }
        else{
            button = (
                    <Icon name="totop" size={20} color="#BEBEBE" />
                );

        }
        return button;
    }

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.containerExtended}>
                        <Text style={styles.subTitle}>Eerste keuze</Text>
                        {studentenEerste.map( (studentEerste) =>
                            <View>
                                <Text style={styles.text}>
                                    { studentEerste.username}
                                    {"\t\t\t\t"}
                                    {buttonCheck(student)}
                                </Text>
                            </View>
                        )}
                        <Text style={styles.subTitle}>tweede keuze</Text>
                        {studentenTweede.map( (studentTweede) =>
                            <View>
                                <Text style={styles.text}>
                                    {studentTweede.username}
                                    {"\t\t\t\t"}
                                    {buttonCheck(student)}
                                </Text>
                            </View>
                        )}
                        <Text style={styles.subTitle}>derde keuze</Text>
                        {studentenDerde.map( (student) =>
                            <View>
                                <Text style={styles.text}>
                                    {student.username}
                                    {"\t\t\t\t"}
                                    {buttonCheck(student)}
                                </Text>
                            </View>
                        )}
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    /*
    else {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.containerExtended}>
                        <Text style={styles.subTitle}>Eerste keuze</Text>
                        {studentenEerste.map( (studentEerste) =>
                            <View>
                                <Text style={styles.text}>
                                    { studentEerste.username}
                                    {"\t\t\t\t"}
                                    <TouchableOpacity
                                        onPress={()=>handleBoost(studentEerste.email)}>
                                        <Icon name="totop" size={20} color="#004070" />
                                    </TouchableOpacity>
                                </Text>
                            </View>
                        )}
                        <Text style={styles.subTitle}>tweede keuze</Text>
                        {studentenTweede.map( (studentTweede) =>
                            <View>
                                <Text style={styles.text}>
                                    {studentTweede.username}
                                    {"\t\t\t\t"}
                                    <TouchableOpacity
                                        onPress={()=>handleBoost(studentTweede.email)}>
                                        <Icon name="totop" size={20} color="#004070" />
                                    </TouchableOpacity>
                                </Text>
                            </View>
                        )}
                        <Text style={styles.subTitle}>derde keuze</Text>
                        {studentenDerde.map( (studentDerde) =>
                            <View>
                                <Text style={styles.text}>
                                    {studentDerde.username}
                                    {"\t\t\t\t"}
                                    <TouchableOpacity
                                        onPress={()=>handleBoost(studentDerde.email)}>
                                        <Icon name="totop" size={20} color="#004070" />
                                    </TouchableOpacity>
                                </Text>
                            </View>
                        )}
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }*/

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