const asyncHandler = require("express-async-handler")
const Appt = require("../models/apptModel");


const createAppt = asyncHandler(async(req,res) => {
    const {apptType, name, phone, email, doctorName} =  req.body;

    if(!apptType || !name ||  !phone  || !email || !doctorName) {
        console.log("Please add all the fields")
    }

    const appt = Appt.create({
        apptType ,
        name,
        phone,
        email,
        doctorName
    })

    if(appt){
        res.status(201).json({
            apptType : appt.apptType,
            name : appt.name,
            phone : appt.phone,
            email : appt.email,
            doctorName : appt.doctorName
        })
    }
    else{
        res.status(400)
        throw new Error("Failed to make appointment")
    }
})
 
module.exports = {
    createAppt
}