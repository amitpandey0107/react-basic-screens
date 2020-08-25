import { RESET_STATE_SUCCEED, } from '../Constants/ReduxConstants';

const apiSucceed = payload => ({
    type: RESET_STATE_SUCCEED,
    payload,
});


export const ResetAction = () => async (dispatchEvent) => {
    dispatchEvent(apiSucceed('reset action dispatched from action screen'));
};