import RequestService from './RequestService'


class NetworkService {
    getUser(){
        var url = 'https://localhost:3000/'
        return RequestService.getRequest(url);
    }

    doLogin(data){
        var url="https://localhost:3000/api/auth/login"
        return RequestService.postRequest(url,data);
    }
}

export default new NetworkService()