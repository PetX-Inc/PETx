const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const User = require("../models/userModel");



// Generate JWT 

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}



// @desc    Register new user // signup
// @route   POST /api/user
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  console.log(req)
  const {  email, password } = req.body

  if (!email || !password) {
    res.status(401)
    throw new Error('Please add all fields')
  }

  // Check if user exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    if(res.status === (400))
    {
      res._write("User already exists")
    }
    throw new Error('User already exists')



  }

  // HASH Password 
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  
  // Create user
  const user = await User.create({
    email,
    password : hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      // name: user.name,
      email: user.email,
      token : generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})




// @desc    Login User // signin 
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler (async(req,res) => {

  const {email, password } = req.body

  const user = await User.findOne({email})

  if (user && (await bcrypt.compare(password, user.password))){
    res.json({
      email : user.email,
      password : user.password,
    })
  }
  else{
    res.status(400)
    throw new Error("Invalid credentials ")
  }
  
})


// @desc    Get User Details
// @route   POST /api/users/getme
// @access  Private

const getMe = asyncHandler (async (req,res) => {
  const {_id, name, email} = await User.findById(req.user.id)

  res.status(200).json({
    id : _id,
    name ,
    email
  })
})


 
module.exports = {
    registerUser,
    loginUser,
    getMe
}