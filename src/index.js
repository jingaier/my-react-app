
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
// import Auth from './auth';
// import Dashboard from './dashboard';
import AuthRoute from './component/authRoute/authRoute'
import reducers from './reducer';
import Login from './container/login/login';
import Register from './container/register/register';
import Bossinfo from './container/bossinfo/bossinfo';
import Geniusinfo from './container/geniusinfo/geniusinfo';
import Dashboard from './component/dashboard/dashboard';
//判断devToolsExtension是否存在
const devTools = window.devToolsExtension?window.devToolsExtension():f=>f;
//新建store
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    devTools
)
)
console.log(store.getState())
//===========================
//redux方法
/* function render() {
    ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun} addGunAysnc={addGunAysnc}/>, document.getElementById('root'));
}
render();
store.subscribe(render) */
//=====================
//react-redux方法

/* class Test extends React.Component{
    render(){
        console.log(this.props);
        console.log(this.props.match.params.location);
        //this.props.history.push('/')
        return <h2>測試組件</h2>
    }
} */
ReactDOM.render(
    (<Provider store={store}>     
        <BrowserRouter>
            <div> 
                <AuthRoute>
                {/* 检验路由 */}  
                </AuthRoute>
                <Switch>
                    <Route path='/bossinfo' component={Bossinfo}></Route>
                    <Route path='/geniusinfo' component={Geniusinfo}></Route>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route component={Dashboard}></Route>
                </Switch>
                
            </div>      
        </BrowserRouter>            
    </Provider>), document.getElementById('root')
);

// <Route path="/dashboard" component={Dashboard}></Route>
// <Redirect to="/dashboard" ></Redirect>