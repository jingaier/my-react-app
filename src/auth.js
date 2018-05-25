import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {login,getUserData} from './auth.redux';
import axios from 'axios';
import './config';
@connect(
   state=>state.auth,
   {login,getUserData}
)
class Auth extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:{
            }
        }
    }
    componentDidMount(){
        /* axios.get('/data').then(res =>{
            console.log(res)
            this.setState({
                data:res.data
            })
        }) */
        this.props.getUserData();
        //console.log(this.props.user);
    }
    render(){
        return (
            <div>
            <h1>{this.props.user}</h1>
                {this.props.isAuth?<Redirect to="/dashboard/"></Redirect>:null }
                <h2>您没有登录，无权查看，请先登录</h2>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}
export default Auth;