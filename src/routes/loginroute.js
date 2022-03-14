const express=require('express');
const { redirect } = require('express/lib/response');
const loginRouter=express.Router();
const Signupdata=require('../model/signupdata');

function router(nav){
    loginRouter.get('/',function(req,res){
        res.render('login',{
            nav,
            title:'Library',
            redirect:'/index'
        })
    })
    loginRouter.post('/redirect',function(req,res){

        const name = req.body.name;
        const pwd = req.body.pwd;
        
        console.log("login router");
        console.log(name);
        console.log(pwd);
    
        RegistrationData.findOne({name:name,pwd:pwd})
        .then(function(data){
            if(data==null){
                res.render("login",{
                    nav,
                    title:'Library',
                    redirect:'/index'
                });
            }
            else{
                res.render("index",{
                    nav,
                    title:'Library'
                });
            }
    
            console.log(data);
        })
    
        
    })
    return loginRouter;   
}

module.exports=router;
