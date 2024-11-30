import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import axios from "axios";

let currentAccessToken = "";
let currentAccessTokenTime = false;

let currentAuthToken = "";
let currentRefreshToken = ""
let currentAuthTokenTime = false

export const getAccessToken = async () => {
    if (currentAccessTokenTime) {
        const currentTime = new Date()
        const checkTime = new Date(currentAccessTokenTime)
        checkTime.setMinutes(checkTime.getMinutes() + 15)
        if(checkTime > currentTime) {
            return currentAccessToken
        }
    }
    try {
        const res = await axios.post('https://dev.abdm.gov.in/api/hiecm/gateway/v3/sessions', {
            clientId: 'SBXID_008168',
            clientSecret: 'f57e59de-289e-4009-a056-ab9573fb0f67',
            grantType: 'client_credentials',
        }, {
            headers: {
                'timestamp': new Date().toISOString(),
                'request-id': uuid.v4(),
                'X-CM-ID': 'sbx'
            }
        });
        console.log(res.data)
        currentAccessToken = res.data.accessToken
        currentAccessTokenTime = new Date()
        return currentAccessToken;
    } catch (err) {
        console.log('here: ', err.toString())
    }
}

export const refreshAuthToken = async () => {
    if (currentAuthTokenTime) {
        const currentTime = new Date()
        const checkTime = new Date(currentAuthTokenTime)
        checkTime.setMinutes(checkTime.getMinutes() + 2)
        if(checkTime > currentTime) {
            return currentAuthToken
        }
    }
    const baseURL = "https://abhasbx.abdm.gov.in/abha/api/v3/phr/app/login/profile/request/token"
    const headers = {
        headers: {
            'R-Token': `Bearer ${currentRefreshToken}`,
            'Authorization': `Bearer ${accessToken}`,
            'timestamp': new Date().toISOString(),
            'request-id': uuid.v4(),
            'X-CM-ID': 'sbx'
        }
    }
    const res = await axios.get(baseURL, {headers});
    currentAuthToken = res.data.accessToken
    currentRefreshToken = res.data.refreshToken
    currentAuthTokenTime = new Date()
    await AsyncStorage.setItem('@authToken', json.Stringify(res.data))
    return currentAuthToken;
}

export const setAuthTokens = (accessToken, refreshToken) => {
    currentAuthToken = accessToken
    currentRefreshToken = refreshToken
}

export const getAuthTokens = () => {
    return [currentAuthToken, currentRefreshToken]
}