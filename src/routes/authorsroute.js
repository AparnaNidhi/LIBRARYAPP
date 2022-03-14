const express=require('express');
const authorsRouter=express.Router();
const Authorsdata=require('../model/authordata');
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
    authorsRouter.get('/add',function(req,res){
        res.render('addauthor',{
            nav,
            title:'Library'
        });
    })
    authorsRouter.get('/',function(req,res){
        Authorsdata.find()
        .then(function(authors){
            res.render("authors",{
                nav,
                title:'Library',
                authors
            });
        })
       
    });
    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id;
        Authorsdata.findOne({_id:id})
        .then(function(author){
            res.render('author',{
                nav,
                title:'Library',
                author
            });
        })
        
    });
    authorsRouter.post('/addauthor',function(req,res){
        var item={
            title:req.body.title,
            about:req.body.about,
            image:req.body.image,
        }
        var author=Authorsdata(item);
        author.save();
        res.redirect("/authors");
    });

    return authorsRouter;
    
}
module.exports=router;