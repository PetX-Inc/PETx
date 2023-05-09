const mongoose = require("mongoose")

const sosSchema = mongoose.Schema({
    name  :{
        type : String,
    },
    phone : {
        type: String
    },
    email : {
        type: String
    },
    desc : {
        type : String
    },
    location :{
        type : String
    }
    
},{
    timestamps : true
})

module.exports = mongoose.model("Sos",sosSchema);