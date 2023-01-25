import React, { Component } from "react";
import './HomePage.css';
import Navbar from "../../Components/navbar/navbar";

class HomePage extends Component {

    render () {
        console.log("HomePage Called.");

        return(
            <>
            <Navbar/>
            </>
        );
    }
};

export default HomePage;