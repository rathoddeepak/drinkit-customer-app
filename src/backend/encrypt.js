import axios from 'axios';
import uuid from 'react-native-uuid';
import { getAccessToken } from './session';

export const encryptData = async (data) => {
    const url = 'https://abhasbx.abdm.gov.in/abha/api/v3/phr/app/enrollment/encrypt'
    try {        
        const accessToken = await getAccessToken()
        const body = { data }
        const response = await axios.post(url, body, {
            validateStatus: () => true,
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'timestamp': new Date().toISOString(),
                'request-id': uuid.v4(),
                'Content-Type': 'application/json'
            }
        });
        return response.data.encryptedData
    } catch (err) {
        console.log('Encrypt: ',url, err.toString())
    }
}