import React, {Component} from 'react'
import LandingPage from './pages/LandingPage/LandingPage' 

class App extends Component
{
    
    render()
    {
        console.log("App.Js Called");
        return(

            <div className = '_body'>
                <LandingPage />
            </div>
            
        )
    }
}

export default App;
