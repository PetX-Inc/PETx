import React, {Component} from 'react'
import Faq from '../../comps/faq/Faq'
import Contact from '../../comps/contact/Contact'
import PageTemp from '../pageTemp/PageTemp'

class LandingPage extends Component
{
    render()
    {
        return(

            <PageTemp PageBody={
                <div className = '_body'>
                    <Contact />
                    <Faq />
                </div>
            } />
            
        )
    }
}

export default LandingPage;
