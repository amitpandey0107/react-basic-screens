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
        console.log(username, password);   
        if (username==='admin' && password==="admin") {
            localStorage.setItem('username', username)
            localStorage.setItem('loggedIn', true)
            dispatchEvent(apiSucceed(true))
        } else {
            dispatchEvent(apiError(false))
            localStorage.setItem('loggedIn', false)
        }
    } catch (error) {
        console.log('error received login')
        dispatchEvent(apiError(error));
    }
};


export const auth_action = () => async (dispatchEvent) => {
    dispatchEvent(authLoading());
    try {
        var username = await localStorage.getItem('username');
        var loggedIn = await localStorage.getItem('loggedIn');
        if (username === null) {
            // console.log('userRole null', userRole);
            dispatchEvent(authError({ error: "Please login", message: "please login" }));
        } else {
            // console.log('userRole success', userRole);
            dispatchEvent(authSucceed({ username: username, loggedIn: loggedIn, message: "Success" }));
        }
    } catch (error) {
        console.log('error received auth action = ', error)
        dispatchEvent(authError(error));
    }
};