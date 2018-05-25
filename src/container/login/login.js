/**
 * 登录页
 */ 
import React from 'react';
import {List,WingBlank,InputItem,WhiteSpace,Button} from 'antd-mobile';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
// import 'antd-mobile/dist/antd-mobile.css';
import {login} from '../../redux/user.redux'
import Logo from '../../container/logo/logo'
@connect(
    state => state.user,
    {login}
)
 class Login extends React.Component{
     constructor(props){
         super(props);
         this.state = {
             user:'',
             pwd:''
         }
         //方法绑定
         this.register = this.register.bind(this)
         this.handleLogin = this.handleLogin.bind(this)
     }
     register(){
         console.log(this.props)
         this.props.history.push('/register')
     }
     handleChange(key,val){
        this.setState({
            [key]:val
        })
     }
     handleLogin(){
         this.props.login(this.state)
     }
     render(){
         return(
             <div>
                <Logo />
                <p>登录页</p>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
                {this.props.msg?<p>{this.props.msg}</p>:null}
                <WingBlank>
                    <List>
                        <InputItem
                        onChange={v => this.handleChange('user',v)}
                        >用户名</InputItem>
                        <WhiteSpace />
                        <InputItem
                        type='password'
                        onChange={v => this.handleChange('pwd',v)}
                        >密码</InputItem>
                    </List>
                    <Button type="primary" onClick={
                        this.handleLogin
                    }>登录</Button>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.register}>注冊</Button>
                </WingBlank>
             </div>
         )
     }
 }
 export default Login;