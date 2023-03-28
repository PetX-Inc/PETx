import React, {Component} from 'react'
import Faq from '../../comps/faq/Faq'
import Contact from '../../comps/contact/Contact'

class ContactUs extends Component
{
    render()
    {
        return(

            <div className = '_body'>
                <Contact />
                <Faq />
            </div>
            
        )
    }
}

export default ContactUs;
