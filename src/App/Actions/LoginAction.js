import axios from 'axios';
import { api_live_url as API_URL} from '../../app.json';
import { LOGIN_LOADING, LOGIN_FAIL, LOGIN_SUCCEED,  AUTH_LOADING, AUTH_FAIL, AUTH_SUCCEED } from '../Constants/ReduxConstants';

const apiLoading = () => ({
    type: LOGIN_LOADING
});

const apiSucceed = payload => ({
    type: LOGIN_SUCCEED,
    payload,
});

const apiError = (payload) => ({
    type: LOGIN_FAIL,
    payload
});


const authLoading = () => ({
    type: AUTH_LOADING
});

const authSucceed = payload => ({
    type: AUTH_SUCCEED,
    payload,
});

const authError = (payload) => ({
    type: AUTH_FAIL,
    payload
});



export const LoginAction = (username, password) => async (dispatchEvent) => {
    dispatchEvent(apiLoading());
    try {       
        const proxyurl = "https://cors-anywhere.herokuapp.com/"; 
        const url = API_URL + "login";  
        axios.post(proxyurl + url,
            {
                mode: 'no-cors',
                headers: {
                    'Access-Control-Allow-Origin': true,
                },
                email: username,
                password: password,
            }).then((response) => {
                if (response.data.status_code === 200) {
                    dispatchEvent(apiSucceed(response));
                } else {
                    dispatchEvent(apiError(response));
                    // localStorage.setItem('loggedIn', false)
                }
            }).catch((error) => {                
                dispatchEvent(apiError(error));
            })
    } catch (error) {
        console.log('error received login')
        dispatchEvent(apiError(error));
    }
};


export const auth_action = () => async (dispatchEvent) => {
    dispatchEvent(authLoading());
    try {
        var userToken = await localStorage.getItem('Token');
        var UserId = await localStorage.getItem('UserId');
        var userRole = await localStorage.getItem('role');
        if (userRole === null) {
            dispatchEvent(authError({ error: "Please login", message: "please login" }));
        } else {
            dispatchEvent(authSucceed({ userToken: userToken, userRole: userRole, UserId: UserId, message: "Success" }));
        }
    } catch (error) {
        console.log('error received auth action = ', error)
        dispatchEvent(authError(error));
    }
};