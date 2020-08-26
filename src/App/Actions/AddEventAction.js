import axios from 'axios';
import { api_live_url as API_URL } from '../../app.json';
import { ADD_EVENT_LOADING, ADD_EVENT_FAIL, ADD_EVENT_SUCCEED} from '../Constants/ReduxConstants';

const apiLoading = () => ({
    type: ADD_EVENT_LOADING
});

const apiSucceed = payload => ({
    type: ADD_EVENT_SUCCEED,
    payload,
});

const apiError = (payload) => ({
    type: ADD_EVENT_FAIL,
    payload
});

export const AddEventAction = (title, description, start, end) => async (dispatchEvent) => {
    dispatchEvent(apiLoading());
    var userID = localStorage.getItem("UserId");
    var Token = localStorage.getItem("Token");
        try {
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            const method = 'post';
            const url = API_URL + "addevent";
            var bodyFormData = new FormData();
            bodyFormData.append('user_id', userID);
            bodyFormData.append('title', title);
            bodyFormData.append('description', description);
            bodyFormData.append('start', start);
            bodyFormData.append('end', end);
            axios({
                method,
                url: proxyurl + url,
                data: bodyFormData,
                mode: 'no-cors',
                headers: {
                    "Authorization": "Bearer " + Token,
                    "Content-Type": "multipart/form-data"
                }
            }).then((response) => {
                if (response.data.status_code === 200) {
                    dispatchEvent(apiSucceed(response));
                } else {
                    dispatchEvent(apiError(response));
                }
            }).catch((error) => {
                dispatchEvent(apiError(error));
            })
        } catch (error) {
            console.log('error received ADD_EVENT')
            dispatchEvent(apiError(error));
        }
};