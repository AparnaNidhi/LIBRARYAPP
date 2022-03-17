const express = require('express');

const signupRouter =express.Router();
const SignupData = require('../model/signupdata');

signupRouter.get('/',function(req,res){
    res.render("signup",{nav:[{link:'/',name:'Home'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'}],redirect:'/index'});
})

signupRouter.post('/register',function(req,res){
    console.log(req.body);
    var item = {
        name:req.body.name,
        pwd:req.body.pwd,
        mail:req.body.mail,
        address:req.body.address,
        state:req.body.state
    }

    var signup = SignupData(item);
    signup.save();
    res.redirect("/login");

})


module.exports = signupRouter;