const express = require('express');
const router = express.Router()

const {
    registerUser, loginUser, getMe
} = require("../controllers/userController")

const {protect} = require("../middleware/authMiddleware")
 
router.route("/createUser").post(registerUser)
router.route("/login").post(loginUser)

router.get("/getme", protect, getMe)



module.exports = router