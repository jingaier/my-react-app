/**
 * boss 详情页
 */ 
import React from 'react';
import {connect} from 'react-redux';
import {update} from '../../redux/user.redux';
import {NavBar,InputItem,TextareaItem,Button} from 'antd-mobile';
import AvatarSelector from '../../component/avatar-selector/avatar-selector';
@connect(
    state=>state.user,
    {update}
)
class Bossinfo extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            title:'',
            company:'',
            money:'',
            desc:''
        }
        this.selectAvatar = this.selectAvatar.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }
    onChange(key,val){
        this.setState({
            [key]:val
        })
    }
    selectAvatar(elm){
        this.setState({
            avatar:elm
        })
    } 
    handleUpdate(){
        this.props.update(this.state)
    }
    render(){
        return(
            <div>
                <NavBar mode='dark'>Boss完善信息</NavBar>
                <AvatarSelector selectAvatar={this.selectAvatar}></AvatarSelector>
                <InputItem onChange={v => this.onChange('title',v)}>招聘职位</InputItem>
                <InputItem onChange={v => this.onChange('company',v)}>公司名称</InputItem>
                <InputItem onChange={v => this.onChange('money',v)}>职位薪水</InputItem>
                <TextareaItem onChange={v => this.onChange('desc',v)}
                rows={3}
                autoHeight
                title='职位要求'
                ></TextareaItem>
                <Button type="primary" onClick={this.handleUpdate}>保存</Button>
            </div>
        )
    }
}
export default Bossinfo;