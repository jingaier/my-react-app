import Axios from 'axios';
const USER_LIST = 'USER_LIST'

const initState = {
    userList:[]
}
export function chatUser(state=initState,action){
    switch(action.type){
        case USER_LIST:
            return {...state,userList:action.payload}
        default:
            return state
    }
}

function userList (data){
    return {type:USER_LIST,payload:data}
}
export function getUserList(type){
    return dispatch => {
        Axios.get('/user/list?type=genius')
        .then(res=>{
            console.log(res);
            if(res.status === 200){
                //console.log(this.state.data);
                //this.setState({data:res.data})
                dispatch(userList(res.data))
            }
        })
    }
}