/**
 * 图像设置组件
 */ 
import React from 'react';
import {Grid,List} from 'antd-mobile';
import propTypes from 'prop-types';
class AvatarSelector extends React.Component{
    static propTypes = {
        AvatarSelector:propTypes.func //isRequired 必chuan标识
    }
    constructor(){
        super();
        this.state = {
            
        }
    }
    render(){
        const avatarList = 'boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'.split(',').map((v) =>(
            {
                icon:require(`../img/${v}.png`),
                text:v
            }
        ));
        //console.log(avatarList);
        //判断是否以选择头像
        const grildHeader = this.state.icon?<div>
            <span>头像：</span>
            <img style={{width:20}} src={this.state.icon}/>
        </div>:'请选择头像';
        return (
            <div>
                <List renderHeader={() =>
                    grildHeader
                }>
                    <Grid data={avatarList}
                        columnNum={5}
                        onClick={elm => {
                            this.setState(elm)
                            this.props.selectAvatar(elm.text)
                        }} >      
                    </Grid>
                </List>           
                
            </div>
        )
    }
}
export default AvatarSelector;