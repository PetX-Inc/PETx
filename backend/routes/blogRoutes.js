const express = require('express');
const router = express.Router()

const {
     createBlog, updateBlog, deleteBlog,getBlogs
} = require("../controllers/blogController")

const { protect } = require("../middleware/authMiddleware")


router.route("/createBlog").post(createBlog)
router.route("/updateBlog/:id").put(protect, updateBlog)

router.route("/deleteBlog/:id").delete(protect, deleteBlog)
router.route("/getAll").get(getBlogs)


module.exports = router