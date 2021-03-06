const express = require('express');

const authorsRouter=express.Router();
const AuthorsData = require('../model/authordata');


authorsRouter.get('/add',function(req,res){
  res.render("addauthor",{nav:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},{link:'/authors/add',name:'Add Author'}]})
});


authorsRouter.get('/',function(req,res){
    AuthorsData.find()
    .then(function(authors){
        res.render("authors",{nav:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},{link:'/authors/add',name:'Add Author'}],authors});

    })
    
})

authorsRouter.get('/:id',function(req,res){

    const id = req.params.id;
    AuthorsData.findOne({_id:id})
    .then(function(author){
        res.render("author",{nav:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},{link:'/authors/add',name:'Add Author'}],author:author});
    })
    
})



authorsRouter.post('/addauthor',function(req,res){
  
   //for POST
     var item={
      title: req.body.title,
      about:req.body.about,
      image:req.body.image
    }
   
    var author = AuthorsData(item);
    author.save();
    res.redirect("/authors");
  
  });

  
authorsRouter.post("/update",function(req,res){

  var img;
 
  if(req.body.image==""){
   img=req.body.imgdb;
 }
 else{
   img=req.body.image;
 }

  var item = {
      title:req.body.title,
      about:req.body.about,
      image: img
  }

 const id= req.body.objectid;
 console.log(id);

var author = AuthorsData(item);


AuthorsData.findByIdAndUpdate({_id:id},item)
          .then(function(){
  console.log("Update success");
  res.redirect("/authors");
 })

});

  

authorsRouter.post("/delete",function(req,res){

  const id= req.body.objectid;
    
  AuthorsData.findOneAndDelete({_id:id}).then(function(){
    console.log("Delete success"); 
    res.redirect("/authors");
    
  })
 });
module.exports = authorsRouter;