const asyncHandler = require("express-async-handler")

const Doctor = require("../models/doctorModel")
const User = require("../models/userModel")

const registerDoctor =  asyncHandler (async (req,res) => {
    
    const { name, email, fee /*password ,qualification, */ } = req.body

    if (!name || !email  || !fee/*|| !password*/) {
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
      fee
    })
  
    if (doctor) {
      res.status(201).json({
        _id: doctor.id,
        name: doctor.name,
        email: doctor.email,
        fee : doctor.fee,
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


const getAllDoctors = asyncHandler(async(req,res) => {

  const doctors = await Doctor.find()
    if (doctors)
    {
        console.log(doctors)
    }
    res.status(200).json(doctors);

})


module.exports = {
    registerDoctor, loginDoctor,  getAllDoctors
}