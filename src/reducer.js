/**
 * 合并所有reducer 并且返回
 */ 
import {combineReducers} from 'redux';
// import {auth} from './auth.redux';
// import {counter} from './index.redux';
import { user } from './redux/user.redux';
import { chatUser } from './redux/chatuser.redux';
export default combineReducers({
    /* counter,
    auth */
    user,
    chatUser
});