const asyncHandler = require("express-async-handler")

const Blog = require("../models/blogModel")
const User = require("../models/userModel")


const createBlog = asyncHandler (async (req,res) => {
    const {blogTitle, blogBody, /*upVotes, downVotes*/ } = req.body

    if (!blogTitle || !blogBody  /*|| upVotes || downVotes*/){
        res.status(400)
        throw new Error ("Please add all the fields")
    }

    const blog = await Blog.create({
        blogTitle : req.body.blogTitle,
        blogBody: req.body.blogBody ,
        // upVotes : req.body.upVotes ,
        // downVotes : req.body.downVotes ,
        // user : req.user.id
    })

    if(blog){
        res.status(200).json({
            blogTitle : blog.blogTitle,
            blogBody : blog.blogBody,
            // upVotes : blog.upVotes,
            // downVotes : blog.downVotes
        })
    }
    else{
        res.status(400)
        throw new Error("Invalid Blog Data")
    }
})


const deleteBlog = asyncHandler (async (req,res) => {

    const blog = await Blog.findByIdAndRemove(req.params.id)

    
    if (!blog) {
        res.status(400).json({
            error : "Blog with Id not found"
        })
    }

    // check user 
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error("User not found")
    }
    

    // make sure the user is really the one who created the goal
    if (blog.user.toString() !== user.id){
        res.status(401)
        throw new Error("User not authorized")
    }
    

    res.status(200).json({ id: req.params.id })
})


const updateBlog = asyncHandler (async(req,res) => {

    const blog = await Blog.findById(req.params.id)
    if (!blog){
        res.status(400)
        throw new Error('Blog not found')
    }
    
    // check user 
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error("User not found")
    }
    

    // make sure the user is really the one who created the goal
    if (blog.user.toString() !== user.id){
        res.status(401)
        throw new Error("User not authorized")
    }


    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedBlog)

})

 
const getBlogs = asyncHandler (async (req,res) => {
    const blogs = await Blog.find()
    if (blogs)
    {
        console.log(blogs)
    }
    res.status(200).json(blogs);
})


module.exports = {
    createBlog, deleteBlog , updateBlog, getBlogs
}