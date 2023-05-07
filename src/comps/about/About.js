import React, { Component } from 'react';
import './About.css';
import about from '../../images/pics/sosLight.svg';
import PopUp from '../../comps/popup/popupsos';

class About extends Component {
  state = {
    isOpen: false,
  };

  handleOnClick = () => {
    this.setState({ isOpen: true });
  };

  closePopUp = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <section className="about py-5 my-5" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="c col-md-6 col-12">
              <div className="left-side text-md-start text-center mb-lg-0 mb-5">
                <h3 className="about-name">
                  <span>P</span>E<span>T</span>x
                </h3>
                <p className="about-description text-muted">
                  Contact our Rescue Service
                </p>
                <p className="about-text">
                  Our pet rescue service at PETx is dedicated to saving the
                  lives of abandoned, neglected, and abused animals in our
                  community. Our team of volunteers and staff provide care,
                  shelter, and medical attention to animals in need, and offer
                  adoption, foster care, and low-cost spay and neuter services.
                  We also provide education and outreach to promote responsible
                  pet ownership. We are proud of our work and committed to
                  helping as many animals as we can.
                </p>
              </div>
            </div>
            <div className="c col-md-6 col-12">
              <div
                className="right-side text-lg-end text-center"
                onClick={this.handleOnClick}>
                  <img
                    className="btn buttonimage text-capitalize btn-sm img-fluid w-75 about"
                    // className="btn button text-capitalize btn-sm img-fluid w-75 shadow-lg about"

                    src={about}
                    alt="about"
                  />
              </div>
            </div>
          </div>
          {isOpen && <PopUp onClose={this.closePopUp} />}
        </div>
      </section>
    );
  }
}

export default About;
