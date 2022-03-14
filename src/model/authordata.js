const mongoose=require('mongoose');
//database connection
mongoose.connect('mongodb://localhost:27017/library');

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