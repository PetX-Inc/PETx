const asyncHandler = require("express-async-handler")
const Appt = require("../models/apptModel");
const Sos = require("../models/sosModel")

const createAppt = asyncHandler(async(req,res) => {
    const { name, phone, email, doctorName, desc} =  req.body;

    if(!name ||  !phone  || !email || !doctorName || !desc) {
        console.log("Please add all the fields")
        throw new Error("Please add all the fields")
    }

    const appt = Appt.create({
        name,
        phone,
        email,
        doctorName,
        desc,
    })

    if(appt){
        res.status(201).json({
            name : appt.name,
            phone : appt.phone,
            email : appt.email,
            desc : appt.desc,
            doctorName : appt.doctorName
        })
        console.log("Appointment created")
    }
    else{
        res.status(400)
        throw new Error("Failed to make appointment")
    }
})

const makeSos = asyncHandler(async(req,res) => {

    const { name, phone, email, desc, location} =  req.body;

    console.log(name)
    console.log(phone)
    console.log(email)
    console.log(desc)
    console.log(location)

    
    if(!name ||  !phone  || !email || !location || !desc) {
        throw new Error("Please add all the fields")
    }

    const sos = Sos.create({
        name,
        phone,
        email,
        desc,
        location,
    })

    if(sos){
        res.status(201).json({
            name : sos.name,
            phone : sos.phone,
            email : sos.email,
            desc : sos.desc,
            location : sos.location
        })
        console.log("SOS called")
    }
    else{
        res.status(400)
        throw new Error("Failed to make appointment")
    }
})

module.exports = {
    createAppt, makeSos
}