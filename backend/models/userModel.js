const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name :{
        type: String,
    },
    email :{
        type :String,
        required : [true, "Please add the email address"]
    },
    password : {
        type : String,
        required : [true, "Enter your password "]
    },
    avatar : {
        type : Buffer,
    },
    // Foreign keys
    fiatId : {
        type : String
    },
    cryptoId : {
        type : String
    }
},{
    timestamps : true
})



module.exports = mongoose.model("User", userSchema);