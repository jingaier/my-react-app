import React from 'react';
import {connect} from 'react-redux';
import {
    Link,
    Route, 
    BrowserRouter, 
    Redirect
} from 'react-router-dom';
import App from './App';
import {logout} from './auth.redux';

function Paoying() {
    return <h2>炮营</h2>
}

function Erying() {
    return <h2>二营</h2>
}
function Qibinglian() {
    return <h2>骑兵连</h2>
}
@connect(
    state=>state.auth,
    {logout}
)
class Dashboard extends React.Component{
    render(){
        console.log(this.props);
        let container =<div>
        
             <ul>
                <li>
                    <Link to="/dashboard/">炮营</Link>
                </li>
                <li>
                    <Link to="/dashboard/erying">二营</Link>
                </li>
                <li>
                    <Link to="/dashboard/qibinglian">骑兵连</Link>
                </li>   
            </ul>
            <Route path="/dashboard/" exact component={App}></Route>
            <Route path="/dashboard/erying" component={Erying}></Route>
            <Route path="/dashboard/qibinglian" component={Qibinglian}></Route>
        </div>
        return (
            <div>
              {this.props.isAuth?container:<Redirect to="/login"></Redirect>}  
               <button onClick={this.props.logout}>注销</button> 
            </div>
        )
    }
}
export default Dashboard;
// <Route path="/dashboard/"  component={App}></Route>
// <Route path="/dashboard/erying" component={Erying}></Route>
// <Route path="/dashboard/qibinglian" component={Qibinglian}></Route>