import RequestService from './RequestService'
import axios from "axios";
import deviceStorage from "../services/deviceStorage";
import LoginScreen from "../screens/LoginScreen";
import React from 'react';

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
    async getTargetSubjectsPromotor(){
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

        return axios.post("http://"+BASE_URL+":8080/api/v1/person/boost",data, config );
    }
    async getSperSub(subjectName) {
        const config = {
            headers: { Authorization: "Bearer " + await deviceStorage.loadJWT() },
            params: { subjectName : subjectName }
        };

        return axios.get("http://"+BASE_URL+":8080/api/v1/person/studentenpersubkeuze", config);
    }
    async getUser(mail) {
        const config = {
            headers: { Authorization: "Bearer " + await deviceStorage.loadJWT() },
            params: { mail: mail}
        };

        return axios.get("http://"+BASE_URL+":8080/api/v1/person/getuser", config);
    }
}

export default new NetworkService()