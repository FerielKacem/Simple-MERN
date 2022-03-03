const mongoose = require ("mongoose");

const UserSchema = new mongoose.Schema({
name : {
    type : String,
    required : false , 
}, 
age :{
    type : Number,
    required : false
},
username : {
    type : String,
    required : false, 
}

});

const UserModel = mongoose.model("users",UserSchema);
module.exports = UserModel ;