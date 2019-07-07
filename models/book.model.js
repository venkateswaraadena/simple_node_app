const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema({
    Title : {type : String,required : true,max : 100},
    Author : {type : String,required : true,max : 100},
    AgeGroup : {type : String,required : true},
    BookCover : {type : String,required : true}
});

module.exports = mongoose.model('Book', BookSchema);