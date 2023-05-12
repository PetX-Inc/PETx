const express = require('express');
const router = express.Router()

const {
    registerDoctor, loginDoctor,getAllDoctors
} = require("../controllers/doctorController")


router.route("/createDoctor").post(registerDoctor)
router.route('/login').post(loginDoctor)
router.route("/getAllDoctors").get(getAllDoctors)

module.exports = router
