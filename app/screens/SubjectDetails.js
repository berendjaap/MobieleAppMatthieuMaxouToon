import {
    StyleSheet,
    Text,
    SafeAreaView,
    StatusBar,
    View,
    Platform,
    ScrollView
} from "react-native";
import React, {useEffect,useState} from "react";


export default function SubjectDetails({navigation}) {

    useEffect(() => {

        },[]
    )
    let campussen;
    if (navigation.getParam("campussen").length !=0 ){
        campussen = (
            <View >
                {navigation.getParam("campussen").map(function(d, idx){
                    return (<Text key={idx} style={styles.text}>{d.name}</Text>)
                })}
            </View>
        )
    }
    let copromotoren;
    if (navigation.getParam("copromotoren").length !=0 ){
        copromotoren = (
            <View >
                {navigation.getParam("copromotoren").map(function(d, idx){
                    return (<Text key={idx} style={styles.text}>{d.name}</Text>)
                })}
            </View>
        )
    } else {copromotoren=(
        <View >
            <Text style={styles.tussenzin}>There are no co-promotors for this subject</Text>
        </View>
    )}
    let promotor;
    if (navigation.getParam("promotor")!=null ){
        promotor = (
            <View >
                <Text style={styles.tussenzin}>
                    {navigation.getParam("promotor").username}
                </Text>
            </View>
        )
    } else {promotor=(
        <View >
            <Text style={styles.tussenzin}>There is no promotor for this subject yet</Text>
        </View>
    )}
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.containerExtended}>
                    <Text style={styles.title}>
                        {navigation.getParam("name")}
                    </Text>
                    <Text style={styles.text}>
                        {navigation.getParam("description")}
                    </Text>
                    <Text style={styles.subTitle}>
                        Promotor:
                    </Text>
                    <Text>
                        {promotor}
                    </Text>
                    <Text style={styles.subTitle}>
                        Co-promotors:
                    </Text>
                    <Text>
                        {copromotoren}
                    </Text>
                    <Text style={styles.subTitle}>
                        Campusses:
                    </Text>
                    <Text>
                        {campussen}
                    </Text>
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