const express = require('express');
const userRouter = require('./user');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const mongoose = require('mongoose');
// const DB_URL = 'mongodb://localhost:27017/imooc-chat';
// mongoose.connect(DB_URL);

const app = express();
//解析cookie
app.use(cookieParser());
//解析post过来的json参数
app.use(bodyParser.json());
app.use('/user',userRouter);//app.use()開啓一個中間件
/* app.get('/',function (req,res) {
    res.send('<h1>hello world</h1>')
}) */

app.listen(9093,function () {
    console.log('监听9093')
})