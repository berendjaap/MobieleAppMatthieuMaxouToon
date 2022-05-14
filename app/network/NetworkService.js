import RequestService from './RequestService'
import axios from "axios";
import deviceStorage from "../services/deviceStorage";
import LoginScreen from "../screens/LoginScreen";
import React from 'react';

const BASE_URL = "192.168.137.1";


class NetworkService {
    async login(username, password){
        console.log(username);
        const url = 'http://'+BASE_URL+':8080/api/auth/login';
        await axios.post(url, {
            username: username,
            password: password
        }).then( (response) => {
            //save(response.data.accessToken,response.data.username);
            // App.newJWT(response.data.accessToken)
            if (response.data.accessToken){
                deviceStorage.saveToken('token',response.data.accessToken)
                    .then(r => {console.log(response.data,r)
                        console.log(response.data.accessToken);
                        deviceStorage.saveToken('mail',response.data.email)
                            .then(r => console.log(response.data.email))
                    })
                return true;
            }
            else return false;
        })


    }
    async getTargetSubjects(){
        const config = {
            headers: { Authorization: "Bearer " + await deviceStorage.loadJWT()},
            params: { mail : await deviceStorage.loadMail() }
        };
        const url = 'http://'+BASE_URL+':8080/api/v1/subject/targetsubjects';
        return await axios.get(url, config)
    }
}

export default new NetworkService()