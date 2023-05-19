import React, {Component} from 'react'
import Blog from '../../comps/blogs/Blog' 
import AddBlog from '../../comps/blogs/BlogForm' 
//import {top_blogs, recent_blogs} from '../../comps/helpers/Data'
import { useEffect, useState } from "react";


import {MetaObjects} from '../../comps/helpers/Data'
import MetaDecorator from '../../comps/MetaDecorator/MetaDecorator'


const Blogs = () => {
    //this is the problem by Mohsin
  const [blogs1, setBlogs] = useState([]);

  const handleAddBlog = (newBlog) => {
    setBlogs([...blogs1, newBlog]);
  };

  
//   useEffect(() => {
//     axios.get('http://localhost:8080/api/blogs/getAll')
//       .then(response => {
//         setBlogs(response.data);
//         console.log(blogs)
//         console.log("BEfore blogs")
//         // console.log(blogs)
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

  


// class Blogs extends Component
// {


    // render()
    // {


        let MetaObject = MetaObjects.filter((obj)=> obj.For === 'Blogs')[0]

        return(

            <div className = '_body'>
                <MetaDecorator obj={MetaObject}/>

                <Blog blogs={blogs1} />
                <AddBlog addBlog={handleAddBlog} />
            </div>
            
        )
    }

export default Blogs;