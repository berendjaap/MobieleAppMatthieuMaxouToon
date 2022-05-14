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


export default function SubjectDetails({navigation}) {


    useEffect(() => {
        },[]
    )

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerExtended}>
                {/*onderwerpen.map( (onderwerp,i) =>*/}
                    <Text style={styles.title}>
                        {navigation.getParam("name")}
                    </Text>
                    <Text style={styles.text}>
                        {navigation.getParam("description")}
                    </Text>
                {/*)}*/}
            </View>
        </SafeAreaView>
    );
}

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