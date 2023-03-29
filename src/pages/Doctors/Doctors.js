import React, {Component} from 'react'
import Doctor from '../../comps/doctors/Doctor'
import {MetaObjects} from '../../comps/helpers/Data'
import MetaDecorator from '../../comps/MetaDecorator/MetaDecorator'

class Doctors extends Component
{
    render()
    {
        let MetaObject = MetaObjects.filter((obj)=> obj.For === 'Doctors')[0]

        return(

            <div className = '_body'>
                <MetaDecorator obj={MetaObject}/>
                <Doctor />
            </div>
            
        )
    }
}

export default Doctors;
