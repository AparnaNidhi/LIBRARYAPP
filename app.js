const express=require('express');
const app=express();
const nav=[
    
    {
        link:'/login',name:'Login'
    },
    {
        link:'/signup',name:'Sign UP'
    },
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/addbook',name:'Add Book'
    },
    {
        link:'/authors/add',name:'Add Author'
    },
];
const authorsRouter=require('./src/routes/authorsroute')(nav)
const booksRouter=require('./src/routes/booksroute')(nav)
const adminRouter=require('./src/routes/adminroute')(nav)
const loginRouter=require('./src/routes/loginroute')(nav)
const SignupRouter=require('./src/routes/signuproute')(nav)
const indexRouter=require('./src/routes/indexroute')(nav)



app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); 
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); 
app.set('view engine','ejs');
app.set('views',__dirname+"/src/views");

app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',SignupRouter);
app.use('/index',indexRouter); 
app.use('/addbook',adminRouter);
app.use("/authors/add",authorsRouter);
app.use("/authors/addauthor",authorsRouter);

app.get('/',function(req,res){
    res.render("home",
    {
        nav,
        title:'Library'
    });
});

app.listen(5000);


