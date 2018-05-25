/**
 * 注冊页
 */ 
import React from 'react';
import {List,InputItem,WhiteSpace,Button,Radio} from 'antd-mobile'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {register} from '../../redux/user.redux';
@connect(
    state => state.user,
    {register}
)
class Register extends React.Component{
    constructor(props) {
       super(props)
       this.state={
           user:'',
           pwd:'',
           repwd:'',
           type:''
       }
       this.handleRegister = this.handleRegister.bind(this)
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    handleRegister(){
        this.props.register(this.state)
        console.log(this.state);
    }
    render(){
        const RadioItem = Radio.RadioItem;
        //console.log(this.props.redirectTo);
         return(
             <div>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
                <List>
                {this.props.msg?<p>{this.props.msg}</p>:null}
                    <InputItem 
                    onChange={v => this.handleChange('user',v)}
                    >用户名</InputItem>
                    <WhiteSpace/>
                    <InputItem 
                    type='password'
                    onChange={v => this.handleChange('pwd',v)}
                    >密码</InputItem>
                    <WhiteSpace/>
                    <InputItem
                    type='password'
                    onChange={v => this.handleChange('repwd',v)}
                    >确认密码</InputItem>
                    <WhiteSpace/>
                    <RadioItem 
                    onChange={() => this.handleChange('type','genius')}
                    checked={this.state.type==="genius"}>牛人</RadioItem>
                    <WhiteSpace/>
                    <RadioItem 
                    onChange={() => this.handleChange('type','boss')}
                    checked={this.state.type==="boss"}>BOSS</RadioItem>
                    <Button 
                    type="primary"
                    onClick={this.handleRegister}
                    >注册</Button>
                </List>
             </div>
         )
    }
 }
 export default Register;