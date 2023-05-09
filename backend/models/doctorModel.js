const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    name :{
        type: String,
        required : [true, "Please enter the name"]
    },
    email :{
        type :String,
        required : [true, "Please add the email address"]
    },
    qualification : {
        type : String,
        // required : [true, "Enter your qualification "],
    },
    rating: {
        type: Number,
        // required : [true, "Rating of Doctor"]
    },
    fee : {
        type : Number,
        required : [true, "Enter your payment fee"]
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

module.exports  = mongoose.model("Doctor",doctorSchema);