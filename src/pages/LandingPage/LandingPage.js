import React, {Component} from 'react'
import About from '../../comps/about/About'
import Subscription from '../../comps/subscription/Subscription'
import {MetaObjects} from '../../comps/helpers/Data'
import MetaDecorator from '../../comps/MetaDecorator/MetaDecorator'

// MohsinCode below

import PopUp from '../../comps/popup/popup'
import LoginForm from '../../comps/loginsignup/Login'

class LandingPage extends Component
{
    render()
    {
        let MetaObject = MetaObjects.filter((obj)=> obj.For === 'LandingPage')[0]
        return(

            <div className = '_body'>
                <MetaDecorator obj={MetaObject}/>

                {/* Dangerous Code by Mohsin */}

                <LoginForm />
                <PopUp />

                <About />
                <Subscription />
            </div>

            
            
        )
    }
}

export default LandingPage;
