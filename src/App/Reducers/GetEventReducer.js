import { LOADING, SUCCESS, ERROR, RELOADING, NONE } from '../Constants/Misc';
import { LIST_EVENT_LOADING, LIST_EVENT_FAIL, LIST_EVENT_SUCCEED, LIST_EVENT_RELOAD } from '../Constants/ReduxConstants';

export default function GetEventReducer(state = {}, action) {

    switch (action.type) {

        case LIST_EVENT_FAIL:
            return Object.assign({}, state, { status: ERROR, error: action.payload, });

        case 'AUTH_EXPIRE':
            return Object.assign({}, state, { status: 'AUTH_EXPIRE', value: 'AUTH_EXPIRE', });

        case LIST_EVENT_LOADING:
            return Object.assign({}, state, { status: LOADING });

        case LIST_EVENT_SUCCEED:
            return Object.assign({}, state, { status: SUCCESS, value: action.payload });

        case LIST_EVENT_RELOAD:
            return Object.assign({}, state, { status: RELOADING, value: action.payload });

        default:
            return Object.assign({}, state, { status: NONE });
    }
}