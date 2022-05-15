import deviceStorage from "./deviceStorage";
import React from 'react';
import axios from "axios";

//Aan te passen naar IP-adres van de machine
const BASE_URL = "192.168.137.1";


class NetworkService {
    async login(username, password){
        const url = 'http://'+BASE_URL+':8080/api/auth/login';
        await axios.post(url, {
            username: username,
            password: password
        }).then( (response) => {
            if (response.data.accessToken){
                deviceStorage.saveToken('token',response.data.accessToken)
                    .then(r => {
                        deviceStorage.saveToken('mail',response.data.email)
                    })
            }
        })
        return await axios.post(url, {username: username, password: password })

    }

    async getTargetSubjects(){
        const config = {
            headers: { Authorization: "Bearer " + await deviceStorage.loadJWT()},
            params: { mail : await deviceStorage.loadMail() }
        };
        const url = 'http://'+BASE_URL+':8080/api/v1/subject/targetsubjects';
        return await axios.get(url, config)
    }

    async getTargetSubjectsPromotor(){
        const config = {
            headers: { Authorization: "Bearer " + await deviceStorage.loadJWT()},
            params: { mail : await deviceStorage.loadMail() }
        };
        const url = 'http://'+BASE_URL+':8080/api/v1/subject/subjectsprom';
        return await axios.get(url, config)
    }

    async getTargetSubjectsBedrijf(){
        const config = {
            headers: { Authorization: "Bearer " + await deviceStorage.loadJWT()},
            params: { mail : await deviceStorage.loadMail() }
        };
        const url = 'http://'+BASE_URL+':8080/api/v1/subject/onderwerpperbedrijf';
        return await axios.get(url, config)
    }

    async getTargetSubjectsCoordinator(){
        const config = {
            headers: { Authorization: "Bearer " + await deviceStorage.loadJWT()},
            params: { mail : await deviceStorage.loadMail() }
        };
        const url = 'http://'+BASE_URL+':8080/api/v1/subject/getAllTargetSubs';
        return await axios.get(url, config)
    }

    async postBoostStudent(subjectName, studentMail){
        const config = {
            headers: { Authorization: "Bearer " + await deviceStorage.loadJWT() },
            params: { subjectName : subjectName, studentMail: studentMail }
        };
        const data = {};
        return await axios.post("http://"+BASE_URL+":8080/api/v1/person/boost",data, config );
    }
    async getSperSub(subjectName) {
        const config = {
            headers: { Authorization: "Bearer " + await deviceStorage.loadJWT() },
            params: { subjectName : subjectName }
        };
        return await axios.get("http://"+BASE_URL+":8080/api/v1/person/studentenpersubkeuze", config);
    }
}

export default new NetworkService()