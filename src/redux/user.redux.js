import Axios from "axios";
import {getRedirectPath} from '../util'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const initState = {
    redirectTo:'',
    isAuth:'',
    msg:'',
    user:'',
    pwd:'',
    type:''
}
//reducer
export function user(state = initState,action){
    switch(action.type){
        case REGISTER_SUCCESS:
            return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
        case LOGIN_SUCCESS:
            return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
        case AUTH_SUCCESS:
            return {...state,msg:'',redirectTo:getRedirectPath(action.payload),...action.payload}
        case LOAD_DATA:
            return {...state,...action.payload}
        case ERROR_MSG:
            return {...state,msg:action.msg,isAuth:false}
        default:
            return state;
    }
    
}
function updateSuccess (data) {
    return {type:AUTH_SUCCESS,payload:data}
}
function registerSuccess(data) {
    return {type:REGISTER_SUCCESS,payload:data}
}
function loginSuccess(data){
    return {type:LOGIN_SUCCESS,payload:data}
}
function errorMsg(msg){
    return {msg,type:ERROR_MSG}//等同于{msg:msg,type:ERROR_MSG}
}
//登录
export function login({user,pwd}){
    if(!user||!pwd){
        return errorMsg('用户名或密码不能为空！')
    }else{
        //return errorMsg('用户名或密码输入错误！')
    }
    return dispatch => {
        Axios.post('/user/login',{user,pwd})
        .then(res => {
            console.log(res);
            if(res.status === 200 && res.data.code === 0){
                dispatch(loginSuccess(res.data.data))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}
//注册
export function register({user,pwd,repwd,type}){
    if(!user||!pwd||!repwd||!type){
        return errorMsg('用户名或密码输入错误！')
    }
    if(pwd!==repwd){
        return errorMsg('密码和确认密码不同')
    }
    return dispatch => {
        Axios.post('/user/register',{user,pwd,type})
        .then(res => {
            console.log(res);
            if(res.status === 200 && res.data.code === 0){
                dispatch(registerSuccess({user,pwd,type}))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}
//登录后刷新
export function load(userinfo){
    return {type:LOAD_DATA,payload:userinfo}
}
//更新数据（用户信息等）
export function update(data){
    return dispatch => {
        Axios.post('/user/update',data)
        .then(res => {
            console.log(res);
            if(res.status === 200 && res.data.code === 0){
                dispatch(updateSuccess(res.data.data))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}