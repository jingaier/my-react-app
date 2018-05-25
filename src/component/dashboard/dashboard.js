/**
 * 
 */
import React from 'react';
import {connect} from 'react-redux';
import { NavBar, Icon ,TabBar } from 'antd-mobile';
import NavLinkBar from '../navLinkBar/navLinkBar';
import {Switch, Route} from 'react-router-dom';
import Boss from '../../component/boss/boss';
import Genius from '../../component/genius/genius';
import User from '../../component/user/user';

function Msg() {
    return <h2>Msg</h2>
}

@connect(
    state=>state
)
class Dashboard extends React.Component{
    render(){
        const {user} = this.props;
        const {pathname} = this.props.location
        alert(pathname)
        const navList = [
            {
                path:'/boss',
                text:'牛人',
                icon:'boss',
                title:'牛人列表',
                component:Boss,
                hide:user.type === 'genius'
            },{
                path:'/genius',
                text:'boss',
                icon:'job',
                title:'BOSS列表',
                component:Genius,
                hide:user.type === 'boss'
            },{
                path:'/msg',
                text:'消息',
                icon:'msg',
                title:'消息列表',
                component:Msg
            },{
                path:'/me',
                text:'我',
                icon:'user',
                title:'个人中心',
                component:User
            }

        ]
        return (
            <div>
                <NavBar mode='dard'>
                    {navList.find(v=>v.path===pathname).title}
                </NavBar>
                <Switch>
                    {navList.map(v=>(
                        <Route key={v.path} path={v.path} component={v.component}></Route>
                    ))}
                    
                </Switch>
                <NavLinkBar navList ={navList}></NavLinkBar>
            </div>
        )
    }
}
export default Dashboard;