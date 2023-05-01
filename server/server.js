require("dotenv").config()
const express = require("express")
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)
const cors = require("cors")

const app = express()

app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json())
app.use(express.static("public"))


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

app.listen(8080)
