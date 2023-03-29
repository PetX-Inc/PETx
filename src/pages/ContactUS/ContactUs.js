import React, {Component} from 'react'
import Faq from '../../comps/faq/Faq'
import Contact from '../../comps/contact/Contact'
import {MetaObjects} from '../../comps/helpers/Data'
import MetaDecorator from '../../comps/MetaDecorator/MetaDecorator'

class ContactUs extends Component
{
    render()
    {

        let MetaObject = MetaObjects.filter((obj)=> obj.For === 'ContactUs')[0]

        return(

            <div className = '_body'>
                <MetaDecorator obj={MetaObject}/>
                <Contact />
                <Faq />
            </div>
            
        )
    }
}

export default ContactUs;
