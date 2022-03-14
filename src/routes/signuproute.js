const express=require('express');
const signupRouter=express.Router();
const Signupdata=require('../model/signupdata');
function router(nav){
    signupRouter.get('/',function(req,res){
        res.render('signup',{
            nav,
            title:'Library'
        });
    })
    signupRouter.post('/signup',function(req,res){
        console.log(req.body);
        var item={
            name:req.body.name,
            pwd:req.body.pwd,
            mail:req.body.mail,
            address:req.body.address,
            state:req.body.state
            }
        var signup=Signupdata(item);
        signup.save();
        res.redirect("/login");
    });

    return signupRouter;   
}

module.exports=router;
