const mongoose = require("mongoose")

const apptSchema = mongoose.Schema({
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