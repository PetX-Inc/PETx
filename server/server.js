require("dotenv").config()
const express = require("express")
const colors = require('colors');
const bodyParser = require('body-parser');
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)
const cors = require("cors")



const connectDB  = require("../backend/config/db");
 
connectDB()

const app = express()

app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));


app.post("/process-payment", async (req,res) => {
    console.log("server listened")
    
    try
    {
        //console.log(req.body)
        const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: [req.body.stripePaymentObj],
        success_url:`http://localhost:3000/${req.body.redirectUrl}`,
        cancel_url:`http://localhost:3000/${req.body.redirectUrl}`
    })
    console.log("session Created")
    res.json( {url:session.url} )
    }
    catch (e)
    {
        res.status(500).json({error: e.message})
    }
    
})




app.use("/api/blogs", require("../backend/routes/blogRoutes"))
app.use("/api/users", require("../backend/routes/userRoutes"))
app.use("/api/doctors", require("../backend/routes/doctorRoutes"))
app.use("/api/appt", require("../backend/routes/apptRoutes"))



app.listen(8080)
