import React, {Component} from 'react'
import { Route, Routes } from 'react-router';
import PageTemp from './pages/pageTemp/PageTemp';
import LandingPage from './pages/LandingPage/LandingPage' 
import Doctors from './pages/Doctors/Doctors' 
import Blogs from './pages/Blogs/Blogs' 
import ContactUs from './pages/ContactUs/ContactUs' 

class App extends Component
{
    
    render()
    {
        console.log("App.Js Called");
        return(

            <PageTemp PageBody={
                <Routes>
                    <Route path='/' element={<LandingPage/>} />
                    <Route path='/doctors' element={<Doctors/>} />
                    <Route path='/blogs' element={<Blogs/>} />
                    <Route path='/contact' element={<ContactUs/>} />
                </Routes>
            } />
            
        )
    }
}

export default App;
