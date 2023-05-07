const express = require('express');
const router = express.Router()

const {
     createAppt
} = require("../controllers/apptController")

 
router.route("/createAppt").post(createAppt)


module.exports = router