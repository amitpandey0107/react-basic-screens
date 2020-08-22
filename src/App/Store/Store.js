import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import LoginReducer from '../Reducers/LoginReducer';
import history from '../History/History';
import { connectRouter, routerMiddleware } from 'connected-react-router';

const rootReducer = combineReducers({
    LoginReducer: LoginReducer,  
})
const appReducer = {

}
export default createStore(rootReducer, appReducer, applyMiddleware(thunk))