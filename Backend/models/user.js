//creating the schema of the user collection where all the data is going to be stored

var mongoose = require('mongoose');

//defining the schema of the user table

var user_schema=mongoose.Schema;
var userSchema=new user_schema({
    userName: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    email: { type: String, unique: true},
    password: { type: String},
    image: { type: String},
    created_at: { type: Date, default: Date.now()},
    updated_at: { type: Date}
});


//creating the collection with the defined schema
var User = mongoose.model('user',userSchema);

module.exports=User;