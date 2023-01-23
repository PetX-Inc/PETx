import React, { Component } from "react";
import logo from '../../Assets/logo.svg';
import './HomePage.css';

class HomePage extends Component {

    render () {
        console.log("HomePage Called.");

        return(
            <div className= "app">
                <header className="header">
                    <img src={logo} className="logo" alt="logo" />
                    <p>
                    Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                    className="link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                    </a>
                </header>
            </div>
        );
    }
};

export default HomePage;