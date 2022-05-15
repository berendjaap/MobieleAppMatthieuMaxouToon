import { SwipeItem, SwipeButtonsContainer, SwipeProvider } from 'react-native-swipe-item';
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
import Icon from "react-native-vector-icons/AntDesign";
import axios from "axios";
import React, {useEffect, useState} from 'react';
import NetworkService from "../services/NetworkService";


export default function SubjectsViewer({navigation}) {

    const [onderwerpen, setOnderwerpen] = useState([]);

    useEffect(()=>{
            const getOnderwerpen = async () => {
                NetworkService.getTargetSubjects()
                .then(response => {
                    setOnderwerpen(response.data);
                })
            };getOnderwerpen();
        },[]
    )

    const onPressHandler = async (i) => {
        navigation.navigate("SubjectDetails",onderwerpen[i]);
    }

    const leftButton = (promotor) => (
        <SwipeButtonsContainer
            style={{
                alignSelf: 'center',
                aspectRatio: 1,
                flexDirection: 'column',
                padding: 30,
            }}
        >
            <TouchableOpacity
                onPress={() => {
                    if (promotor !=null){
                        Clipboard.setString(promotor.email);
                        Alert.alert("Email copied to clipboard!")
                    }else Alert.alert("There is no promotor for this subject yet")

                }}
            >
                <Icon name="mail" size={40} color="#004070" />
            </TouchableOpacity>
        </SwipeButtonsContainer>
    );

    const rightButton = (i) => (
        <SwipeButtonsContainer
            style={{
                alignSelf: 'center',
                aspectRatio: 1,
                flexDirection: 'column',
                padding: 20,
            }}
        >
            <TouchableOpacity
                onPress={async () => await onPressHandler(i)}
            >
                <Icon name="questioncircleo" size={40} color="#004070" />
            </TouchableOpacity>
        </SwipeButtonsContainer>
    );

    return (
        <SafeAreaView style={styles.containerExtended}>
            <ScrollView style={styles.scrollView}>
                {onderwerpen.map( (onderwerp,i) =>
                <View
                    style={{
                        flex: 0.5,
                        justifyContent: 'center'
                    }}
                >
                    <SwipeProvider>
                        <SwipeItem
                            style={styles.button}
                            swipeContainerStyle={styles.swipeContentContainerStyle}
                            leftButtons={leftButton(onderwerp.promotor)}
                            key={i}
                            rightButtons={rightButton(i)}
                        >
                            <Text key={i} style={styles.title}>
                                {onderwerp.name}
                            </Text>
                            <Text key={i} style={styles.text}>
                                {onderwerp.description}
                            </Text>
                        </SwipeItem>
                    </SwipeProvider>
                </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '98%',
        height: 200,
        alignSelf: 'center',
        marginVertical: 5,
    },
    swipeContentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        borderColor: '#e3e3e3',
        borderWidth: 1,

    },
    containerExtended: {
        flex: 1,
        backgroundColor: '#d4e7f3',
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ?StatusBar.currentHeight:0
    },
    scrollView: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    text: {
        marginHorizontal: 20,
        textAlign:"justify"
    }
});