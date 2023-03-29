import React, {Component} from 'react'
import About from '../../comps/about/About'
import Subscription from '../../comps/subscription/Subscription'
import {MetaObjects} from '../../comps/helpers/Data'
import MetaDecorator from '../../comps/MetaDecorator/MetaDecorator'

class LandingPage extends Component
{
    render()
    {
        let MetaObject = MetaObjects.filter((obj)=> obj.For === 'LandingPage')[0]
        return(

            <div className = '_body'>
                <MetaDecorator obj={MetaObject}/>
                <About />
                <Subscription />
            </div>
            
        )
    }
}

export default LandingPage;
