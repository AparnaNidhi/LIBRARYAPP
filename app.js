const express=require('express');
const app=express();

const authorsRouter=require('./src/routes/authorsroute');
const booksRouter=require('./src/routes/booksroute');
const adminRouter=require('./src/routes/adminroute');
const loginRouter=require('./src/routes/loginroute');
const SignupRouter=require('./src/routes/signuproute');
const indexRouter=require('./src/routes/indexroute');



app.use(express.urlencoded({extended:true}));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); 
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use(express.static(__dirname+'/public')); 
app.set("view engine","ejs");
app.set("views",__dirname+"/src/views");

app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',SignupRouter);
app.use('/index',indexRouter); 
app.use('/addbook',adminRouter);
// app.use("/authors/add",authorsRouter);
app.use("/authors/addauthor",authorsRouter);

app.get('/',function(req,res){
    res.render("home",{nav:[{link:'/',name:'Home'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'}]});
});

app.listen(5000);


