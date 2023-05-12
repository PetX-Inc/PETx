import React, {Component} from 'react'
import Blog from '../../comps/blogs/Blog' 
import AddBlog from '../../comps/blogs/BlogForm' 
import {top_blogs, recent_blogs} from '../../comps/helpers/Data'
import { useEffect, useState } from "react";


import {MetaObjects} from '../../comps/helpers/Data'
import MetaDecorator from '../../comps/MetaDecorator/MetaDecorator'


const Blogs = () => {
    //this is the problem by Mohsin
  const [blogs1, setBlogs] = useState([]);

  const handleAddBlog = (newBlog) => {
    setBlogs([...top_blogs, newBlog]);
  };


// class Blogs extends Component
// {


    // render()
    // {


        let MetaObject = MetaObjects.filter((obj)=> obj.For === 'Blogs')[0]

        return(

            <div className = '_body'>
                <MetaDecorator obj={MetaObject}/>

                <Blog blogs={top_blogs} />
                <AddBlog addBlog={handleAddBlog} />
            </div>
            
        )
    }

export default Blogs;