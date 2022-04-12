const mongoose=require('mongoose');
//database connection
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.ej6hq.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');


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
var signupData=mongoose.model('signupData',signupSchema);
module.exports=signupData;