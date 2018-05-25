import axios from 'axios';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const USER_DATA = 'USER_DATA';
const initState = {
    isAuth:false,
    user:'李雲龍',
    age:18
}
//reducer

export function auth(state=initState,action) {
    // console.log(state);
    // console.log('/////')
    // console.log(action);
    switch (action.type) {
        case LOGIN:
            return {...state,isAuth:true}
        case LOGOUT:
            return {...state,isAuth:false}
        case USER_DATA:
            return {...state,user:action.payload.user,age:action.payload.age}
        default:
            return state;
    }
    
}

//action creator
export function getUserData() {
    //
    return dispatch => {
        axios.get('/data').then(res =>{
        console.log(res)
        
            dispatch(userData(res.data[0]))
        })                                                                                              
    }
}
export function userData(data) {
    return {type:USER_DATA,payload:data}
}
export function login() {
    return {type:LOGIN}
}
export function logout() {
    return {type:LOGOUT}
}