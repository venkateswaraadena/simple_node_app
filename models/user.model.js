const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserScheme = new Schema({
    Email : {type : String,required : true,trim : true,index:true, unique:true,sparse:true},
    UserName : {type : String,unique : true,required : true,trim : true},
    Password : {type : String,required : true,min : 8,max : 12},
    UserType : {type : String,required : true},
    UserRole : {type : Array,required : true}
});

module.exports = mongoose.model("User" , UserScheme);