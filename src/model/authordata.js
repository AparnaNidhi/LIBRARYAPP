const mongoose=require('mongoose');
//database connection
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.ej6hq.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

//schema definition
const schema=mongoose.Schema;

const authorSchema=new schema({
    title:String,
    about:String,
    image:String
});

//model creation
var authordata=mongoose.model('authordata',authorSchema);
module.exports=authordata;