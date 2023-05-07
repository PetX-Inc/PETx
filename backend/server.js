const express = require("express")
const colors = require('colors');
const bodyParser = require('body-parser');
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000;
const cors = require("cors")

const connectDB  = require("./config/db");
 
connectDB()
 
const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));




app.use("/api/blogs", require("./routes/blogRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/doctors", require("./routes/doctorRoutes"))
app.use("/api/appt", require("./routes/apptRoutes"))


app.listen( port , () => {
    console.log(`App running on port ${port}`)
});