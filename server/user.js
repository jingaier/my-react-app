const express = require('express');
const Router = express.Router();
const model = require('./module');
const User = model.getModel('user');
const utils = require('utility');
//加盐【就是在随机添加一个字符串拼接，更为安全】
function md5Pwd(pwd){
    const salt = 'jianger_20180328@#HDKHKaskdksf~~~';
    return utils.md5(utils.md5(pwd+salt));
}
//过滤 【res请求返回的data中不显示】
const _filter = {'pwd':0,'__v':0};
Router.get('/list',function(req,res){
    //清空数据库的数据
    //User.remove({},function(err,doc){});
    const {type} = req.query; //get接口用query,post 接口 是baody
    User.find({type},function(err,doc){
        return res.json(doc)
    })
})

Router.post('/register',function(req,res){
    console.log(req.body);
    const {user,pwd,type} = req.body;
    User.findOne({user},function(err,doc){//{user:user}
        if(doc){
            return res.json({code:1,msg:'用户名重复'})
        }
        //一下两种方法：方法一有残缺
        /* User.create({user,pwd:md5Pwd(pwd),type},function(err,doc){
            if(err){
                return res.json({code:1,msg:'后台故障'})
            }
            return res.json({code:0})
        }) */
        const userModel = new User({user,pwd:md5Pwd(pwd),type});
        userModel.save(function(e,d){
            console.log(111);
            console.log(d);
            const {user,type,_id} = d;
            if(e){
                return res.json({code:1,msg:'后台故障'})
            }
            
            //别忘记cookies
            res.cookie('userId',_id);
            return res.json({code:0,data:{user,type,_id}})
        })
    })
})

Router.post('/login',function(req,res){
    console.log(req.body);
    const {user,pwd} = req.body;
    User.findOne({user,pwd},_filter,function(err,doc){//{user:user}
        if(!doc){
            return res.json({code:1,msg:'用户名或密码错误'})
        }
        res.cookie('userId',doc._id);//登录成功后设置cookies缓存
        return res.json({code:0,data:doc})
    })
})

Router.post('/update',function(req,res){
    const userId = req.cookies.userId;
    if(!userId){
        return res.json({code:1})//如果没有缓存就报错
    }
    const body = req.body;
    //findByIdAndUpdate--是查找并更新数据
    User.findByIdAndUpdate(userId,body,function(err,doc){
        
        const data = Object.assign({},{
            user:doc.user,
            type:doc.type
        },body)
        return res.json({code:0,data:data})
    })
})

Router.get('/info',function(req,res){
    const {userId} = req.cookies;
    if(!userId){
        //用户有没有cookie
        return res.json({code:1})
    }
    User.findOne({'_id':userId},_filter,function(err,doc){
        if(err){
            return res.json({code:1,msg:'后端服务器出错'})
        }
        if(doc){
            return res.json({code:0,data:doc})
        }
    })
    
})
module.exports = Router;