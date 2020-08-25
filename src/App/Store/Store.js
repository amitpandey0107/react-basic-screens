import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import LoginReducer from '../Reducers/LoginReducer';
import ResetReducer from '../Reducers/ResetReducer';

const rootReducer = combineReducers({
    LoginReducer: LoginReducer,  
    ResetReducer: ResetReducer,  
})
const appReducer = {

}
export default createStore(rootReducer, appReducer, applyMiddleware(thunk))