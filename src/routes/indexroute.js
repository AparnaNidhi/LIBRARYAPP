const express = require('express');

const indexRouter=express.Router();


indexRouter.get('/',function(req,res){
    res.render("index",{nav:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},{link:'/authors/add',name:'Add Author'}]});
})
module.exports = indexRouter;