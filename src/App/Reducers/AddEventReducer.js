import { LOADING, SUCCESS, ERROR, RELOADING, NONE } from '../Constants/Misc';
import { ADD_EVENT_LOADING, ADD_EVENT_FAIL, ADD_EVENT_SUCCEED, ADD_EVENT_RELOAD } from '../Constants/ReduxConstants';

export default function AddEventReducer(state = {}, action) {

    switch (action.type) {

        case ADD_EVENT_FAIL:
            return Object.assign({}, state, { status: ERROR, error: action.payload, });

        case 'AUTH_EXPIRE':
            return Object.assign({}, state, { status: 'AUTH_EXPIRE', value: 'AUTH_EXPIRE', });

        case ADD_EVENT_LOADING:
            return Object.assign({}, state, { status: LOADING });

        case ADD_EVENT_SUCCEED:
            return Object.assign({}, state, { status: SUCCESS, value: action.payload });

        case ADD_EVENT_RELOAD:
            return Object.assign({}, state, { status: RELOADING, value: action.payload });

        default:
            return Object.assign({}, state, { status: NONE });
    }
}