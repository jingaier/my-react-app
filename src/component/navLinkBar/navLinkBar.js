/**
 * 自己封装的底部菜单
 */ 
import React from 'react';
import {TabBar} from 'antd-mobile';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import '../../index.css'
@withRouter
class NavLinkBar extends React.Component{
    /* static propTypes = {
        data:PropTypes.array.isRequired
    } */
    render(){
        const navList = this.props.navList.filter(v=>!v.hide);
        console.log(navList);
        const {pathname} = this.props.location;
        return (
            <TabBar>
               {navList.map(v => (
                   
                   <TabBar.Item
                    title={v.text}
                    key = {v.path}
                    icon = {{uri: require(`../../assets/tabbar/${v.icon}.png`)}}
                    selectedIcon = {{uri: require(`../../assets/tabbar/${v.icon}-active.png`)}}
                    selected={pathname === v.path}
                    onPress={()=>{
                        this.props.history.push(v.path)
                    }}
                   >
                   
                   </TabBar.Item>
               ))}
            </TabBar>
        )
    }
}
export default NavLinkBar;