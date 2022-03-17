const express = require('express');
const loginRouter =express.Router();
const SignupData = require('../model/signupdata');

loginRouter.get('/',function(req,res){
    res.render("login",{nav:[{link:'/',name:'Home'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'}],redirect:'/index'});
})

loginRouter.post('/redirect',function(req,res){

    const name = req.body.name;
    const pwd = req.body.pwd;
    
    console.log("In login router");
    console.log(name);
    console.log(pwd);

    SignupData.findOne({name:name,pwd:pwd})
    .then(function(data){
        if(data==null){
            res.render("login",{nav:[{link:'/',name:'Home'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'}],redirect:'/index'});
        }
        else{
            res.render("signup",{nav:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},{link:'/authors/add',name:'Add Author'}]});
        }

        console.log(data);
    })

    
})

module.exports = loginRouter;