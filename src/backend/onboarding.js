
import axios from 'axios';
import uuid from 'react-native-uuid';
import { getAccessToken, getAuthTokens, setAuthTokens } from './session';
import { encryptData } from './encrypt';

export const sendOtp = async (mobileNumber) => {
    try {
        const baseURL = 'https://abhasbx.abdm.gov.in/abha/api/v3/phr/app/login/request/otp'
        const accessToken = await getAccessToken()
        const encryptedData = await encryptData(mobileNumber)
        const body = {
            otpSystem: 'abdm',
            scope: ['abha-address-login', 'mobile-verify'],
            loginHint: 'mobile-number',
            loginId: encryptedData,
        }
        const response = await axios.post(baseURL, body, {
            validateStatus: () => true,
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'timestamp': new Date().toISOString(),
                'request-id': uuid.v4(),
                'X-CM-ID': 'sbx'
            }
        });
        console.log('Send OTP: ', response.data)
        return response
    } catch (err) {
        console.log('Send OTP: ', err.toString())
    }
}

export const verifyOTP = async (transactionID, otp) => {
    const baseURL = 'https://abhasbx.abdm.gov.in/abha/api/v3/phr/app/login/verify'
    const accessToken = await getAccessToken()
    const encryptedData = await encryptData(otp)
    const body = {
        "authData": {
            "authMethods": [
                "otp"
            ],
            "otp": {
                "txnId": transactionID,
                "otpValue": encryptedData
            }
        },
        "scope": [
            "abha-address-login",
            "mobile-verify"
        ]
    }
    const response = await axios.post(baseURL, body, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'timestamp': new Date().toISOString(),
            'request-id': uuid.v4(),
            'X-CM-ID': 'sbx'
        }
    });
    setAuthTokens(response.data.tokens.token, "")
    return response
}

export const verifyUser = async (transactionID, abhaAddress) => {
    const [authToken] = getAuthTokens()
    const baseURL = 'https://abhasbx.abdm.gov.in/abha/api/v3/phr/app/login/verify/user'
    const accessToken = await getAccessToken()
    const body = {
        "abhaAddress": abhaAddress,
        "txnId": transactionID
    }
    const response = await axios.post(baseURL, body, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'T-token': `Bearer ${authToken}`,
            'timestamp': new Date().toISOString(),
            'request-id': uuid.v4(),
            'X-CM-ID': 'sbx'
        }
    });
    setAuthTokens(response.data.token, response.data.refreshToken)
    return response
}