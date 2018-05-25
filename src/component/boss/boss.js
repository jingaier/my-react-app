/**
 * boss列表页
 */ 
import React from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';
import {getUserList} from '../../redux/chatuser.redux';
//import {Card, WingBlank, WhiteSpace } from 'antd-mobile';
import UserCard from '../usercard/usercard';
@connect(
    state => state.chatUser,
    {getUserList}
)
class Boss extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount() {
        //不用redux管理数据时候
        /* Axios.get('/user/list?type=genius')
        .then(res=>{
            console.log(res);
            if(res.status === 200){
                console.log(this.state.data);
                this.setState({data:res.data})
            }
        }) */
        this.props.getUserList('genius')
    }
    render(){
        
        
        //console.log(this.state.data);
        
        return (
            <UserCard userList={this.props.userList}/>
        )
    }
    
}
export default Boss;
