import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./img/logo1.png";
import p1 from "./img/p1.png";
import p2 from "./img/p2.png";
import p3 from "./img/p3.png";
import axios from "axios";

class Testimonials extends Component {
  validate(e) {
    e.preventDefault();
    axios.post("http://localhost:8000/testimonials", {
      name: document.getElementById("name").value,
      subject: document.getElementById("post").value
    });
    alert("Submitted Successfully!");
    return true;
  }

  render() {
    return (
      <React.Fragment>
        <style>{`@import url(${require("./styles/testimonials.css")});`}</style>
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

        <section id="testimonial">
          <div className="container">
            <h1>see what patients are saying?</h1>
            <p>
              Read about our patient's experience.
              <br />
            </p>

            <div className="row">
              <div className="col-md-3">
                <div className="card-image">
                  <img className="property-01" src={p1} alt="..." />
                </div>
                <div className="testimonial-detail">
                  <h3>John Mayer</h3>
                  <p>
                    PsyGenic helped me fight my depression. Absolutely grateful
                    towards medical and developers team.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-image">
                  <img className="property-01" src={p2} alt="..." />
                </div>
                <div className="testimonial-detail">
                  <h3>Jennifer Lawrence</h3>
                  <p>
                    This website is my husband's lifesaver. Excellent services
                    and very informative. THANK YOU PSYGENIC!!!
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-image">
                  <img className="property-01" src={p3} alt="..." />
                </div>
                <div className="testimonial-detail">
                  <h3>Anne Marie</h3>
                  <p>
                    I learned about ADHD through this site. Thanks to that , my
                    son was properly diagnosed and nopw is living a healthy
                    life.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="wide">
            <h1>Tell Us about your experience</h1>
            <form method="post" id="testimonials" onSubmit={this.validate}>
              <div className="input_field">
                <input type="text" placeholder="Name" id="name" required />
              </div>

              <div className="input_field">
                <textarea
                  type="text"
                  placeholder="How was your experience with PsyGenic?"
                  id="post"
                  required
                />
              </div>

              <div className="btn">
                <input type="submit" />
              </div>
            </form>
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

export default Testimonials;
