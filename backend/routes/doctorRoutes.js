const express = require('express');
const router = express.Router()

const {
    registerDoctor, loginDoctor,
} = require("../controllers/doctorController")


router.route("/createDoctor").post(registerDoctor)
router.route('/login').post(loginDoctor)



module.exports = router
