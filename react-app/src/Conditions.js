import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./img/logo1.png";

class Conditions extends Component {
  render() {
    return (
      <React.Fragment>
        <style>{`@import url(${require("./styles/index.css")});`}</style>
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

        <section className>
          <h1>
            <p>Conditions</p>
          </h1>
          <br />
          <div className="test">
            <p>
              <h3>Addictions</h3>
            </p>
            <p>Substance abuse(Alcohol, drugs or cigarettes)</p>
          </div>
          <br />

          <p>
            <h3>Anxiety</h3>
          </p>
          <p>Panic attacks and Phobias</p>
          <br />

          <p>
            <h3>ADHD</h3>
          </p>
          <p>Attention Deficiet Hyperactivity Disorder</p>

          <br />

          <p>
            <h3>Autism</h3>
          </p>

          <p>Autism Spectrum Disorder</p>
          <br />

          <p>
            <h3>Bipolar disorder</h3>
          </p>
          <p>Mania or Depression</p>
          <br />

          <p>
            <h3>Eating disorders</h3>
          </p>
          <p>Anorexia , Binge eating and Bulimia</p>
          <br />

          <p>
            <h3>OCD</h3>
          </p>
          <p>Compulsive Disorder</p>
          <br />

          <p>
            <h3>Personality</h3>
          </p>
          <p>Personality Disorders</p>
          <br />

          <p>
            <h3>PTSD</h3>
          </p>
          <p>Post-traumatic Stress Disorder</p>
          <br />

          <p>
            <h3>Schizophenia</h3>
          </p>
          <p>Schizophrenia and Psychosis</p>
          <br />

          <p>
            <h3>Sex</h3>
          </p>
          <p>Common Sexual Issues</p>
          <br />

          <p>
            <h3>Sleep</h3>
          </p>
          <p>Sleep Disorders and Problems</p>
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

export default Conditions;
