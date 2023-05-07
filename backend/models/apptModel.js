const mongoose = require("mongoose")

const apptSchema = mongoose.Schema({
    apptType : {
        type : String,
    },
    name  :{
        type : String,
    },
    phone : {
        type: String
    },
    email : {
        type: String
    },
    doctorName : {
        type: String
    },
    desc : {
        type : String
    }
 
},{
    timestamps : true
})

module.exports = mongoose.model("Appt",apptSchema);