import axios from 'axios';
import { api_live_url as API_URL } from '../../app.json';
import { LIST_EVENT_LOADING, LIST_EVENT_FAIL, LIST_EVENT_SUCCEED } from '../Constants/ReduxConstants';


const apiLoading = () => ({
    type: LIST_EVENT_LOADING
});

const apiSucceed = payload => ({
    type: LIST_EVENT_SUCCEED,
    payload,
});

const apiError = (payload) => ({
    type: LIST_EVENT_FAIL,
    payload
});


export const GetEventAction = () => async (dispatchEvent) => {
    dispatchEvent(apiLoading());
    var Token = localStorage.getItem("Token");
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = API_URL + "getallpost";
    try {
        axios.get(proxyurl + url,
            {
                headers: {
                    'Authorization': 'Bearer ' + Token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        ).then((response) => {
            if (response.data.status_code === 200) {
                dispatchEvent(apiSucceed(response));
            } else {
                dispatchEvent(apiError(response));
            }
        }).catch((error) => {
            console.log('Error in login', error)
            dispatchEvent(apiError(error));
        })

    } catch (error) {
        console.log('error received on farm list action page')
        dispatchEvent(apiError(error));
    }
};
