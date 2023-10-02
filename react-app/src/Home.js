import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./img/logo1.png";
import Aboutus from "./img/about_us.jpg";
import Overview from "./img/overview.jpg";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <style>{`@import url(${require("./styles/index.css")});`}</style>
        <header className="header">
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

        <section className="about_us">
          <div className="container">
            <h2>About PsyGenic</h2>
            <div className="about_flex">
              <div className="about_detail">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis consequatur dolore id maxime et obcaecati cum
                  voluptatibus commodi similique officia asperiores accusamus
                  fugit, ipsa esse excepturi ipsam. Aspernatur, nemo nam. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Harum
                  consequuntur totam eius recusandae repellat fugit asperiores
                  doloremque eaque animi explicabo tempore architecto enim
                  dolorum esse, odio itaque! Nemo, dicta pariatur. Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Consectetur
                  temporibus ut ipsa qui dignissimos aut vero accusamus
                  reiciendis quas eos ullam, maxime voluptate amet fuga est cum
                  neque esse ad.
                </p>
              </div>
              <div className="about_img">
                <img src={Aboutus} alt="..." />
              </div>
            </div>
          </div>
        </section>

        <section className="overview">
          <div className="container">
            <h2>Mental Health Overview</h2>
            <div className="overview_flex">
              <div className="overview_img">
                <img src={Overview} alt="..." />
              </div>
              <div className="overview_detail">
                <p>
                  Mental health disorders or mental illness, refers to a wide
                  range of mental health conditions; disorders that affect your
                  mood, thinking and behavior. Depression, anxiety,
                  schizophrenia, ADHD, PTSD and addictive behaviors. Almost all
                  people suffer from mental health condition at some point
                  throughout their life. But, the condition becomes a mental
                  illness when signs and symptoms hampers and affect your
                  properability to function. SUffering from a mental disorder
                  can make us miserable and can cause problems in our daily
                  life, at work or in relationships. In most cases, symptoms can
                  be managed with a combination of medications and psychological
                  therapy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="mental_health">
          <div className="container">
            <h2>Mental Health</h2>

            <div className="mental_health">
              <div className="content_1">
                <h2>Symptoms</h2>
                <p>
                  Symptoms and signs of mental illness can differ, based on the
                  type of the disorder, circumstances and other surrounding
                  factors. Mental illness can affect us emotionally.
                </p>
                <ol>
                  <li>Feeling sad or down</li>
                  <li>Reduced ability to concentrate</li>
                  <li>Excessive fears or worries</li>
                  <li>Extreme feelings of guilt</li>
                  <li>Being angry, hostile or violent frequently</li>
                  <li>
                    Trouble understanding and relating to situations and to
                    people
                  </li>
                  <li>Frequent and extreme mood changes</li>
                  <li>Changes in sex drive</li>
                  <li>Withdrawal from friends and activities</li>
                  <li>Constant tiredness,decrease in energy</li>
                  <li>Insomnia</li>
                  <li>Delusional, paranoid or experiencing hallucinations</li>
                  <li>Inability to cope with daily problems or stress</li>
                  <li>Drugs,alcohol or substance use</li>
                  <li>Major changes in eating habits</li>
                  <li>Suicidal tendecies</li>
                </ol>
              </div>

              <div className="content_2">
                <h2>Causes</h2>
                <p>
                  Exact causes of mental illnesses are still not known and are
                  yet to be discovered by today's medical and science
                  advancement.A variety of genetic and environmental factors
                  have been found related with mental disorders.
                </p>
                <ol>
                  <li>
                    <strong>Inherited traits.</strong> Mental illness is found
                    to be common in people whose blood relatives also have/had a
                    mental illness/condition. Studies show that certain genes
                    may increase your risk of developing a mental illness, and
                    your life situation may trigger it.
                  </li>
                  <li>
                    <strong>Environmental exposures before birth.</strong>{" "}
                    Exposure to radiations, toxins, alcohol or drugs while in
                    the womb can sometimes be linked to mental illness.
                  </li>
                  <li>
                    <strong>Brain chemistry.</strong> Neurotransmitters consists
                    of naturally occurring brain chemicals that carry neural
                    signals to other parts of your brain and body. When the
                    neural networks involving these chemicals are damaged, the
                    function of nerve receptors and nerve systems change,and may
                    lead to depression and other emotional disorders.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section id="mental_health">
          <div className="container">
            <div className="mental_health">
              <div className="content_1">
                <h2>Risk factors</h2>
                <p>Mental illness can be caused by following factors:</p>
                <ol>
                  <li>
                    History of mental illness in a blood relative, such as a
                    parent or sibling
                  </li>
                  <li>
                    Stressful life situations, such as economical problems,
                    death of a loved one or a divorce
                  </li>
                  <li>Chronic medical condition, such as asthma or diabetes</li>
                  <li>Traumatic brain injury</li>
                  <li>Traumatic experiences, such as war,sexual abuse,etc.</li>
                  <li>Use of alcohol or recreational drugs</li>
                  <li>A childhood history of abuse or neglect</li>
                  <li>Unhealthy relationships</li>
                  <li>Previous record of mental illness</li>
                </ol>
                <p>
                  Mental illness is very common. People can suffer from mental
                  illness at any stage of their life. ost observed cases are of
                  adolescents who are going through puberty and old aged people.
                  The effects of mental illness can be both long lasting or
                  temporary. You also suffer from more than one mental health
                  condition at the same time. For example, you may have ADHD and
                  anxiety disorder.
                </p>
              </div>

              <div className="content_2">
                <h2>Do you have suicidal thoughts?</h2>
                <p>
                  Suicidal thoughts and behavior are common symptoms for some
                  mental conditions. If you think you may hurt yourself or
                  attempt suicide, get help right away:
                </p>
                <ol>
                  <li>Call 100 or your local emergency number immediately.</li>
                  <li>Call your mental health specialist.</li>
                  <li>
                    Call a suicide hotline number. In Nepal, call the
                    <ul>
                      <li>TUTH Suicide Hotline: 9840 021 600</li>
                      <li>
                        Transcultural Psychosocial Organization Nepal-
                        <br />
                        Crisis Hotline: 1660 010 2005
                      </li>
                      <li>Mental Health Helpline Nepal: 1660 013 3666</li>
                    </ul>
                  </li>
                  <li>Seek help from your parents or guardian.</li>
                  <li>Reach out to a close friend or loved one.</li>
                  <li>
                    Contact a spiritual leader or someone else in your faith
                    community.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section id="mental_health">
          <div className="container">
            <div className="mental_health">
              <div className="content_1">
                <h2>Complications</h2>
                <p>
                  Mental illness is often conisdered as a disbabilty. Untreated
                  mental illness can have severe emotional, behavioral and
                  physical health effects. Complications due to mental illness
                  include:
                </p>
                <ol>
                  <li>Unhappiness and decreased enjoyment of life</li>
                  <li>Family conflicts</li>
                  <li>Difficulties in relationship</li>
                  <li>Anti-social behaviour</li>
                  <li>Problems with alcohol,drugs or tobacco</li>
                  <li>
                    Missed work or school, or other problems related to work or
                    school
                  </li>
                  <li>Legal and financial problems</li>
                  <li>Poverty and homelessness</li>
                  <li>
                    Attempt to harm ownself(suicide) or to harm other (homicide)
                  </li>
                  <li>Immune system of the ill person becomes weak.</li>
                  <li>Heart disease and other medical conditions</li>
                </ol>
              </div>

              <div className="content_2">
                <h2>Prevention</h2>
                <p>
                  There's no proper and surefire way to prevent mental illness.
                  But, following steps to control stress and to boost
                  self-esteem may help control your systems.
                </p>
                <ol>
                  <li>
                    <strong>Pay attention to warning signs.</strong>
                    Work with your doctor or therapist to learn what might
                    trigger your symptoms. Make a plan so that you know what to
                    do if symptoms return. Contact your doctor or therapist if
                    you notice any changes in symptoms or how you feel. Consider
                    involving family members or friends to watch for warning
                    signs.
                  </li>
                  <li>
                    <strong>Get routine medical care.</strong>
                    Don't neglect checkups or skip visits to your primary care
                    provider, especially if you aren't feeling well. You may
                    have a new health problem that needs to be treated, or you
                    may be experiencing side effects of medication.
                  </li>
                  <li>
                    <strong>Get help when you need it.</strong>
                    Mental health conditions can be harder to treat if you wait
                    until symptoms get bad. Long-term maintenance treatment also
                    may help prevent a relapse of symptoms.
                  </li>
                  <li>
                    <strong>Take good care of yourself.</strong>
                    Sufficient sleep, healthy eating and regular physical
                    activity are important. Try to maintain a regular schedule.
                    Talk to your primary care provider if you have trouble
                    sleeping or if you have questions about diet and physical
                    activity.
                  </li>
                </ol>
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

export default Home;
