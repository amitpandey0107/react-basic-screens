import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import LoginReducer from '../Reducers/LoginReducer';
import ResetReducer from '../Reducers/ResetReducer';
import AddEventReducer from '../Reducers/AddEventReducer';
import AuthReducer from '../Reducers/AuthReducer';
import GetEventReducer from '../Reducers/GetEventReducer';

const rootReducer = combineReducers({
    LoginReducer: LoginReducer,  
    ResetReducer: ResetReducer,  
    AddEventReducer: AddEventReducer,  
    AuthReducer: AuthReducer,  
    GetEventReducer: GetEventReducer,  
})
const appReducer = {

}
export default createStore(rootReducer, appReducer, applyMiddleware(thunk))