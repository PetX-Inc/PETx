
import React, {Component} from 'react'
//import PropTypes from 'prop-types';
import Header from '../../comps/header/Header'
import Navbar from '../../comps/navbar/Navbar'
import Footer from '../../comps/footer/Footer'
import Sb from '../../comps/sb/Sb'

class PageTemp extends Component
{
    render()
    {
        return(
            <>
                <Sb />
                <div className = '_header'>
                    <Header />
                </div>

                <Navbar />

                <div className = '_body'>
                    {this.props.PageBody}
                </div>

                <div className = '_footer'>
                    <Footer />
                </div>
            </>
        )
    }
}

/* PageTemp.prototype={
    PageBody: PropTypes.element.isRequired

}; */

export default PageTemp;
