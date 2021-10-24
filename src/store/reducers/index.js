import  { combineReducers } from 'redux';
import loggedReducer from './isLogged';
import profileReducer from './profile';
import tokenReducer from './token'
const allReducers = combineReducers({
    islogged: loggedReducer,
    token: tokenReducer,
    profile: profileReducer
});
export default allReducers;