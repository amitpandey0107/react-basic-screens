import { LOGIN_LOADING, LOGIN_FAIL, LOGIN_SUCCEED } from '../Constants/ReduxConstants';

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



export const LoginAction = (username, password) => async (dispatchEvent) => {
    dispatchEvent(apiLoading());
    try {       
        console.log(username, password);   
        if (username && password) {
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
