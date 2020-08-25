import { RESET_STATE_FAIL, RESET_STATE_LOADING, RESET_STATE_RELOAD, RESET_STATE_SUCCEED, } from '../Constants/ReduxConstants';
import { LOADING, SUCCESS, ERROR, RELOADING, NONE } from '../Constants/Misc';



export default function ResetReducer(state = {}, action) {
    switch (action.type) {

        case RESET_STATE_FAIL:
            return Object.assign({}, state, { status: ERROR, value: action.payload, });

        case RESET_STATE_LOADING:
            return Object.assign({}, state, { status: LOADING });

        case RESET_STATE_SUCCEED:
            return Object.assign({}, state, { status: SUCCESS, value: action.payload });

        case RESET_STATE_RELOAD:
            return Object.assign({}, state, { status: RELOADING, value: action.payload });

        default:
            return Object.assign({}, state, { status: NONE });
    }
}