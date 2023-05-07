const asyncHandler = require("express-async-handler")

const Doctor = require("../models/doctorModel")
const User = require("../models/userModel")

const registerDoctor =  asyncHandler (async (req,res) => {
    
    const { name, email, /*password ,qualification, fee*/ } = req.body

    if (!name || !email /*|| !password*/) {
      res.status(401)
      throw new Error('Please add all fields')
    }
  
    // Check if user exists
    const doctorExists = await ( Doctor.findOne({ email }) || User.findOne({ email }) )
  
    if (doctorExists) {
      res.status(400)
      throw new Error('Email already registered')
    }
  
 
    // Create user
    const doctor = await Doctor.create({
      name,
      email,
      // password ,
      // qualification, 
      // fee
    })
  
    if (doctor) {
      res.status(201).json({
        _id: doctor.id,
        name: doctor.name,
        email: doctor.email,
      })
    } else {
      res.status(400)
      throw new Error('Invalid doctor data')
    }
})


const loginDoctor = asyncHandler(async(req,res) => {

    const {email ,password } = req.body

    const doctor = await Doctor.findOne({email})
    if(doctor && doctor.password === password){
        res.status(200).json({
            message : "Doctor logged in "
        })
    }
    res.status(400)
    throw new Error("Doctor not found")
})


module.exports = {
    registerDoctor, loginDoctor,  
}