const mongoose=require('mongoose');
//database connection
mongoose.connect('mongodb://localhost:27017/library');

//schema definition
const schema=mongoose.Schema;

const signupSchema=new schema({
    name:String,
    pwd:String,
    mail:String,
    address:String,
    state:String
});

//model creation
var signupdata=mongoose.model('signupdata',signupSchema);
module.exports=signupdata;