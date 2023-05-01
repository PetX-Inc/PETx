import React, {Component} from 'react'
import About from '../../comps/about/About'
import Subscription from '../../comps/subscription/Subscription'
import {MetaObjects} from '../../comps/helpers/Data'
import MetaDecorator from '../../comps/MetaDecorator/MetaDecorator'

// MohsinCode below

import PopUp from '../../comps/popup/popup2'
//import PopUp from '../../comps/popup/popup'

//import LoginForm from '../../comps/loginsignup/Accounts'
//import LoginForm from '../../comps/loginsignup/Accounts2'
import LoginSignUpButton from '../../comps/loginsignup/Accounts2'


class LandingPage extends Component
{
    render()
    {
        let MetaObject = MetaObjects.filter((obj)=> obj.For === 'LandingPage')[0]
        return(

            <div className = '_body'>
                <MetaDecorator obj={MetaObject}/>

                {/* Dangerous Code by Mohsin */}

                {/* <LoginSignUpButton /> */}
                {/* <PopUp
                    type= 'sos' 
                 /> */}

                 <PopUp/>
                <About />
                <Subscription />
            </div>

            
            
        )
    }
}

export default LandingPage;
