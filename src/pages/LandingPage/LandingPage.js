import React, {Component} from 'react'
import About from '../../comps/about/About'
import Subscription from '../../comps/subscription/Subscription'

class LandingPage extends Component
{
    render()
    {
        return(

            <div className = '_body'>
                <About />
                <Subscription />
            </div>
            
        )
    }
}

export default LandingPage;
