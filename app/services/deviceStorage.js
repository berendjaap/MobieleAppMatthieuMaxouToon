import AsyncStorage from "@react-native-async-storage/async-storage";


const deviceStorage = {
    async saveSubjectName(value){
        try{
            await AsyncStorage.setItem('subjectName', value);
        }catch(error){
            console.log('AsyncStorage Error: ' + error.message);
        }
    },
    async saveSubjectDescription(value){
        try{
            await AsyncStorage.setItem("subjectDescription", value);
        }catch(error){
            console.log('AsyncStorage Error: ' + error.message);
        }
    },
    async saveToken(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },
    async loadSubjectName() {
        try {
            const value = await AsyncStorage.getItem('subjectName');
            if (value !== null) {
                return value;
            } else {
                return '';
            }
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },
    async loadSubjectDescription() {
        try {
            const value = await AsyncStorage.getItem('subjectDescription');
            if (value !== null) {
                return value;
            } else {
                return '';
            }
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },
    async loadJWT() {
        try {
            const value = await AsyncStorage.getItem('token');
            if (value !== null) {
                return value;
            } else {
                return '';
            }
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },
    async loadMail() {
        try {
            const value = await AsyncStorage.getItem('mail');
            if (value !== null) {
                return value;
            } else {
                return '';
            }
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },
    async loadSubject() {
        try {
            const value = await AsyncStorage.getItem('subject');
            if (value !== null) {
                return value;
            } else {
                return '';
            }
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },
    async deleteJWT() {
        try{
            await AsyncStorage.removeItem('token')
                .then(
                    () => {
                        this.setState({
                            jwt: ''
                        })
                    }
                );
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    }
};

export default deviceStorage;