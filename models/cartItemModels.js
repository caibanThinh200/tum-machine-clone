
const Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var schema = new Schema({
    imageURL:{type:String,required:true},
    imageTitle:{type:String,required:true},
    imagePrice:{type:Number,required:true}
});
module.exports = Mongoose.model("cartItem",schema);