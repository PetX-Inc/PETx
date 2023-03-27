import React, {Component} from 'react'
import Blogs from '../../comps/blogs/Blogs' 
import PageTemp from '../pageTemp/PageTemp'

class LandingPage extends Component
{
    render()
    {
        return(

            <PageTemp PageBody={
                <div className = '_body'>
                    <Blogs />
                </div>
            } />
            
        )
    }
}

export default LandingPage;
