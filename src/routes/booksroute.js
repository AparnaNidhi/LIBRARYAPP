const express=require('express');
const booksRouter=express.Router();
const Bookdata=require('../model/bookdata');
function router(nav){
    // var books=[
    //     {
    //         title:'Tom And Jerry',
    //         author:'Joseph Baebera',
    //         genre:'Cartoon',
    //         img:"download.jpg"
    //     },
    //     {
    //         title:'Harry Potter',
    //         author:'Jk Rowling',
    //         genre:'Fantasy',
    //         img:"harry.jpg"
    //     },
    //     {
    //         title:'Paathummayude aadu',
    //         author:'Basheer',
    //         genre:'Drama',
    //         img:"basheer.jpg"
    //     }
    // ]
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:'Library',
                books
            });
        })
       
    });
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{
                nav,
                title:'Library',
                book
            });
        })
        
    });

    return booksRouter;
    
}
module.exports=router;