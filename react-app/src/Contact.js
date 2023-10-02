import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./img/logo1.png";
import axios from "axios";

class Contact extends Component {
  validate(e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if (name.length < 5) {
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if (subject.length < 5) {
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }
    if (isNaN(phone) || phone.length !== 10) {
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if (email.indexOf("@") === -1 || email.length < 6) {
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if (message.length <= 20) {
      text = "Please Enter More Than 20 Characters";
      error_message.innerHTML = text;
      return false;
    }
    axios.post("http://localhost:8000/form", {
      name: document.getElementById("name").value,
      subject: document.getElementById("subject").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    });
    alert("Form Submitted Successfully!");
    return true;
  }

  render() {
    return (
      <React.Fragment>
        <style>{`@import url(${require("./styles/contact.css")});`}</style>
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

        <section className="txt">
          <h2>Contact Us</h2>
          <div className="text-block">
            <p>
              We love to hear from our clients. If you have any feedback or
              suggestion to share, <br />
              feel free to reach out by emailing{" "}
              <Link to="psygenicfeedback@gmail.com">
                psygenicfeedback@gmail.com
              </Link>
            </p>
            <p>
              For any business inquiries, email us at{" "}
              <Link to="psybusiness@gmail.com">psybusiness@gmail.com</Link>.
            </p>
            <p>
              If you would prefer to call us or send us a letter, you can reach
              us at:
            </p>
            <p>
              PsyGenic Inc.
              <br />
              Jyatha Amrit Marga, Thamel <br />
              Kathmandu 44600
              <br />
              01-5555555
            </p>
          </div>
        </section>

        <hr />

        <section>
          <div className="wrapper">
            <h2>Contact us</h2>
            <div id="error_message"></div>
            <form method="post" id="myform" onSubmit={this.validate}>
              <div className="input_field">
                <input type="text" placeholder="Name" id="name" />
              </div>

              <div className="input_field">
                <input type="text" placeholder="Subject" id="subject" />
              </div>

              <div className="input_field">
                <input type="text" placeholder="Phone" id="phone" />
              </div>

              <div className="input_field">
                <input type="text" placeholder="Email" id="email" />
              </div>

              <div className="input_field">
                <textarea placeholder="Message" id="message"></textarea>
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

export default Contact;
