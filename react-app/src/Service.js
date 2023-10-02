import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./img/logo1.png";

class Service extends Component {
  render() {
    return (
      <React.Fragment>
        <style>{`@import url(${require("./styles/service.css")});`}</style>
        <header className="">
          <div className="container">
            <nav>
              <div className="logo">
                <img src={Logo} alt="..." />
              </div>
              <input type="checkbox" id="chk" />
              <label htmlFor="chk" className="show-menu-btn">
                <i className="fas fa-ellipsis-h"></i>
              </label>
              <div className="menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>

                  <li>
                    <Link to="/About">About</Link>
                  </li>

                  <li>
                    <Link to="/Service">Services</Link>
                  </li>

                  <li>
                    <Link to="/Conditions">Conditions</Link>
                  </li>

                  <li>
                    <Link to="/Contact">Contact Us</Link>
                  </li>

                  <li>
                    <Link to="/Testimonials">Testimonials</Link>
                  </li>

                  <label htmlFor="chk" className="hide-menu-btn">
                    <i className="fas fa-times"></i>
                  </label>
                </ul>
              </div>
            </nav>
          </div>
        </header>

        <section id="service" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h2 className="ser-title">Our Services</h2>
                <hr className="botm-line" />
                <p>
                  We provide proper counselling and guidance to those who seek
                  or require help.
                </p>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="service-info">
                  <div className="icon">
                    <i className="fa fa-stethoscope"></i>
                  </div>
                  <div className="icon-info">
                    <h4>24 Hour Support</h4>
                    <p>
                      Our counsellors and therapists are always ready to help.
                    </p>
                  </div>
                </div>
                <div className="service-info">
                  <div className="icon">
                    <i className="fa fa-ambulance"></i>
                  </div>
                  <div className="icon-info">
                    <h4>Emergency Services</h4>
                    <p>
                      We also provide emergency health support and hotline
                      number.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="service-info">
                  <div className="icon">
                    <i className="fa fa-user-md"></i>
                  </div>
                  <div className="icon-info">
                    <h4>Medical Counselling</h4>
                    <p>
                      Are you feeling mentally unwell? Need help for your
                      medications? We are here for you.
                    </p>
                  </div>
                </div>
                <div className="service-info">
                  <div className="icon">
                    <i className="fa fa-medkit"></i>
                  </div>
                  <div className="icon-info">
                    <h4>Premium Healthcare</h4>
                    <p>
                      We provide information about premium health care services
                      around your location.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="footer_nav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/About">About</Link>
                </li>

                <li>
                  <Link to="/Services">Services</Link>
                </li>

                <li>
                  <Link to="/Conditions">Conditions</Link>
                </li>

                <li>
                  <Link to="/Contact">Contact Us</Link>
                </li>

                <li>
                  <Link to="/Testimonials">Testimonials</Link>
                </li>
              </ul>
            </div>
            <hr className="line-break" />
            <div className="footer_logo">
              <h2>
                <Link to="/">PsyGenic</Link>
              </h2>
            </div>
            <div className="footer_bottom">
              <div className="bottom_copyright">
                <p className="desktop-only">
                  Copyright 2019 - PsyGenic
                  <br />
                  PsyGenic Limited Company No. 12345678 VAT No. 12345678
                </p>
              </div>
              <div className="bottom_social">
                <ul>
                  <li>
                    <Link to="/">Facebook</Link>
                  </li>
                  <li>
                    <Link to="/">Twitter</Link>
                  </li>
                  <li>
                    <Link to="/">Google+</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Service;
