//操作数据库 模型概念
const mongoose = require('mongoose');
//连接mongo 并使用imooc 这个集合（没有会新建）
const BD_URL = 'mongodb://localhost:27017/imooc-chat';
mongoose.connect(BD_URL);

const models = {
    user:{
        'user':{
            type:String,
            Require:true
        },
        'pwd':{
            type:String,
            Require:true
        },
        'type':{
            type:String,
            Require:true
        },
        'avatar':{
            type:String
        },
        'desc':{
            type:String
        },
        'title':{
            type:String
        },
        'comppany':{
            type:String
        },
        'money':{
            type:String
        }

    },
    chat:{
          
    }
}
//批量 动态生成model
for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}
module.exports = {
    getModel:function(name){
        return mongoose.model(name)
    }
}