import React, {Component} from 'react'
import Blog from '../../comps/blogs/Blog' 
import {MetaObjects} from '../../comps/helpers/Data'
import MetaDecorator from '../../comps/MetaDecorator/MetaDecorator'

class Blogs extends Component
{
    render()
    {

        let MetaObject = MetaObjects.filter((obj)=> obj.For === 'Blogs')[0]

        return(

            <div className = '_body'>
                <MetaDecorator obj={MetaObject}/>
                <Blog />
            </div>
            
        )
    }
}

export default Blogs;
