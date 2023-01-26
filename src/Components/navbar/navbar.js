import React from "react";
import './navbar.css';
import MainLogo from 'D:/GitHub Tests/PETx-FYP/src/Assets/MainLogo.png';

const Navbar = () => {
    return (
            <div className='mainNavBarDiv'>
                <div className='nbitem logoDiv'>
                    <a href="" className="logoLinkDesign">
                        <img className="mainlogo" src={MainLogo} alt="PETx Main Logo" />
                    </a>
                    
                    {/* why anchor tag here?
                    I want to redirect user to main page of site when he clicks on logo
                    Link will be added later
                    */}
                </div>

                <div className="nbitem titlenslogan">
                    <div className='titleDiv'>
                        PETx
                    </div>

                    <div className="sloganDiv">
                        One stop Shop for your pets
                    </div>
                </div>


                <div className="nbitem loginbutton">
                    <a href="">Login</a>
                    {/* Login */}
                    {/* button code here */}
                </div>

                <div className="nbitem signupbutton">
                    <a href="">Sign Up</a>
                    {/* Sign Up */}
                    {/* signup button code */}
                </div>
                <div className="nbitem pagelink">
                    <a href="">Home</a>
                </div>
                <div className="nbitem pagelink">
                    <a href="">About Us</a>
                </div>

            {/* <div className="navBg">
                    <p className="item">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
            </div> */}
        </div>
    );
};

export default Navbar;