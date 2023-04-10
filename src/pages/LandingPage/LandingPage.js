import React, {Component} from 'react'
import About from '../../comps/about/About'
import Subscription from '../../comps/subscription/Subscription'
import {MetaObjects} from '../../comps/helpers/Data'
import MetaDecorator from '../../comps/MetaDecorator/MetaDecorator'

// MohsinCode for PopUp
//import PopUp from '../../comps/popup/popup'

import PopUp from '../../comps/popup/popup'

class LandingPage extends Component
{
    render()
    {
        let MetaObject = MetaObjects.filter((obj)=> obj.For === 'LandingPage')[0]
        return(

            <div className = '_body'>
                <MetaDecorator obj={MetaObject}/>

                {/* Dangerous Code by Mohsin */}

                <PopUp />

                <About />
                <Subscription />
            </div>

            
            
        )
    }
}

export default LandingPage;
