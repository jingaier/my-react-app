import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import{load} from '../../redux/user.redux';
import {connect} from 'react-redux';
@withRouter
@connect(
    null,
    {load}
)
class AuthRoute extends React.Component{
    componentDidMount() {
        /*
        用户信息
        1，是否登录
        2，现在的url地址，login是不要跳转的
        3，用户的type 身份是boss还是牛人
        4，用户信息是否完善（如 头像，个人简介）
        */ 
       const publicList = ['/login','/register'];
       const pathname = this.props.location.pathname;
       if(publicList.indexOf(pathname)>-1){
           return null;
       }
        axios.get('/user/info').then(res => {
            if(res.status === 200){
                console.log(res.data);
                if(res.data.code === 0){
                    this.props.load(res.data.data)
                }else{
                    console.log(this.props);
                    console.log(this.props.history);//undefinde [import {withRouter} from 'react-router-dom';]就可以了。
                    this.props.history.push('/login')
                }
                // console.log(res.data);
            }
        })
        
    }
    render(){
        return null
        /* (
            <div>校验路由页面</div>
        ) */
    }
    
}
export default AuthRoute;