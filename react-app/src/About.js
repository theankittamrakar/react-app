import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./img/logo1.png";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <style>{`@import url(${require("./styles/about.css")});`}</style>
        <header className="">
          <div className="container">
            <nav>
              <div className="logo">
                <img src={Logo} alt="" />
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

        <section className="aboutt">
          Psygenic.org is a professional user-friendly website designed to
          assist adults, adolescents and families to overcome emotional and
          behavorial difficulties. We provide non-judgemental counselling
          services along with confidentiality and privacy to our clients. We
          empower patients to maintain mental stability, overcome individual
          challenges and develop their potential. To create a wider sense of
          community, we've also made it easy for people to donate towards the
          noble cause of maintaining sound mental health around the globe.
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

export default About;
