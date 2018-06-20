import {combineReducers} from 'redux';
import task from './task';
import account from './account';


export default combineReducers({
    account, task
});
