//axios拦截器功能
import axios from 'axios';
import {Toast} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

//拦截请求
//显示loading
axios.interceptors.request.use(function (config) {
    Toast.loading('loading',0)
    return config;
})

//loading关闭
axios.interceptors.response.use(function (config) {
    setTimeout(()=>{
        Toast.hide();
    },1000)
    
    return config;
})