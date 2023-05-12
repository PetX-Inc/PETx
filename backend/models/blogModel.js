const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    // user : {
    //     type : mongoose.Schema.Types.ObjectId,
    //     required : true,
    //     ref : "User"
    // },
    blogTitle : {
        type : String,
        required : [true, "Please add Blog title "]
    },
    blogBody : {
        type : String,
        required : [true , "Place some text in the body of blog"]
    },
    // upVotes : {
    //     type : Number
    // },
    // downVotes : {
    //     type : Number
    // }

},{
    timestamps : true
})

module.exports = mongoose.model("Blog",blogSchema);