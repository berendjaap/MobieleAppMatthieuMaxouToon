import {
    StyleSheet,
    TouchableOpacity,
    Text,
    SafeAreaView,
    StatusBar,
    View,
    Platform,
    ScrollView
} from "react-native";
import React, {useEffect,useState} from "react";
import NetworkService from "../services/NetworkService";
import Icon from "react-native-vector-icons/AntDesign";


export default function BoostStudent({navigation}) {
    const [studentenEerste,setStudentenEerste] = useState([]);
    const [studentenTweede,setStudentenTweede] = useState([]);
    const [studentenDerde,setStudentenDerde] = useState([]);


    let subjectNaam = navigation.getParam("name");


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
        await NetworkService.postBoostStudent(subjectNaam, email);
    }

    const buttonCheck = async (student) => {
        let button;
        //let boostedFor = student.geboostVoor;
        if(student.find(subject => subject.name == subjectNaam) !== null){
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
                                    {studentEerste.username}
                                    {"\t\t\t\t"}
                                    {buttonCheck(studentEerste)}
                                </Text>
                            </View>
                        )}
                        <Text style={styles.subTitle}>tweede keuze</Text>
                        {studentenTweede.map( (studentTweede) =>
                            <View>
                                <Text style={styles.text}>
                                    {studentTweede.username}
                                    {"\t\t\t\t"}
                                    {buttonCheck(studentTweede)}
                                </Text>
                            </View>
                        )}
                        <Text style={styles.subTitle}>derde keuze</Text>
                        {studentenDerde.map( (studentDerde) =>
                            <View>
                                <Text style={styles.text}>
                                    {studentDerde.username}
                                    {"\t\t\t\t"}
                                    {buttonCheck(studentDerde)}
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
    },

    containerExtended: {
        flex: 1,
        backgroundColor: '#d4e7f3',
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