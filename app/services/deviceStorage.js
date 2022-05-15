import AsyncStorage from "@react-native-async-storage/async-storage";


const deviceStorage = {
    async removeItem(key) {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        }
        catch(exception) {
            return false;
        }
    },

    async saveToken(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
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