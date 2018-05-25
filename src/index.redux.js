//redux 管理文件
//处理Reducer

const ADD_GUN = '加机关枪';
const REMOVE_GUN = '减机关枪';

//新建reducer 根据新的state和action 生成新的state
export function counter(state=10,action){
    switch (action.type) {
        case 'ADD_GUN':
            return state+1;
        case 'REMOVE_GUN':
            return state-1;
        default:
            return state;
    }
}
//action creator
export function addGun() {
    return {type:ADD_GUN}
}

export function removeGun() {
    return {type:REMOVE_GUN}
}

//异步
export function addGunAysnc() {
    return dispatch => {
        setTimeout(()=>{
            dispatch(addGun())
        },2000)
    }
}