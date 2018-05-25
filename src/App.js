import React from 'react';
import {connect} from 'react-redux';
import {addGun,removeGun,addGunAysnc} from './index.redux';

@connect(
  //state什么属性放到props这里
  state =>state.counter,
  //所需要的方法，放到这 自动dispatch
  {addGun,removeGun,addGunAysnc}
)

class App extends React.Component{
  render() {
    let {num,addGun,removeGun,addGunAysnc} = this.props;
    console.log(removeGun)
    return (
      <div>
        <h1>现在有枪{num}把</h1>
        <button onClick={addGun}>申请武器</button>
        <button onClick={removeGun}>上交武器</button>
        <button onClick={addGunAysnc}>延迟提供</button>
      </div>
    );
  }
}
export default App;
