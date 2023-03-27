import React, {Component} from 'react'
import About from '../../comps/about/About'
import Subscription from '../../comps/subscription/Subscription'
import PageTemp from '../pageTemp/PageTemp'

class LandingPage extends Component
{
    render()
    {
        return(

            <PageTemp PageBody={
                <div className = '_body'>
                    <About />
                    <Subscription />
                </div>
            } />
            
        )
    }
}

export default LandingPage;
