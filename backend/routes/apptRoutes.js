const express = require('express');
const router = express.Router()

const {
     createAppt,makeSos
} = require("../controllers/apptController")

 
router.route("/createAppt").post(createAppt)
router.route("/makeSoS").post(makeSos)

module.exports = router