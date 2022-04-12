// Accessing mongoose package
const mongoose=require('mongoose');
//database connection
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.ej6hq.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');


//schema definition
const schema=mongoose.Schema;

const bookSchema=new schema({
    title:String,
    author:String,
    genre:String,
    image:String
});

//model creation
var bookdata=mongoose.model('bookdata',bookSchema);
module.exports=bookdata;