import React, {Component} from 'react'
import Doctors from '../../comps/doctors/Doctors'
import PageTemp from '../pageTemp/PageTemp'

class LandingPage extends Component
{
    render()
    {
        return(

            <PageTemp PageBody={
                <div className = '_body'>
                    <Doctors />
                </div>
            } />
            
        )
    }
}

export default LandingPage;
