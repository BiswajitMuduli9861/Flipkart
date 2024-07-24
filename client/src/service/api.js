import axios from 'axios';
const URL = '';
export const authenticateSignup = async(data) =>{
    try {
       return await axios.post(`${URL}/av1/signup`, data);
    } catch (error) {
        console.log('Error while calling signup api ', error);
    }
}

export const authenticateLogin = async(data) =>{
    try {
       return await axios.post(`${URL}/av1/login`, data);
    } catch (error) {
        console.log('Error while calling login api ', error);
        return error.response;
    }
}

export const payUsingPaytm = async(data) =>{
    try {
        const response = await axios.post(`${URL}/av1/payment`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling payment api ', error);
    }
}