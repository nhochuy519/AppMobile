import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getJwt = async () => {
    try {
        const token = await AsyncStorage.getItem('jwt');
        return token;
    } catch (error) {
        return null;
    }
}

const instance = axios.create({
    baseURL: 'https://qhn-api.onrender.com/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${await getJwt()}` // Sử dụng await để lấy giá trị token
    }
})

export default instance;
