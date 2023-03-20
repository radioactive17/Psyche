import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./Atc.css";

export class Atc2 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="admin__container">
          <div className="atc_charts">
              
              <div className="charts__left">
                  
                  <div>
                        <h1>Your Challenge to the Thought!</h1>
                        <p> When you have a distorted thought, ask yourself “is this accurate?”. If a friend said this about himself, what would you say? You would probably offer a counter-argument. <br /><br /> Challenge yourself in the same way. Think of a more balanced and realistic thought to take the place of the distortion. </p>

                        <div className="formm">
                        <div>
                            <textarea className="inputtt" type="text" placeholder="Enter your challenge to your thought..." value={values.YourChallenge} onChange={handleChange('YourChallenge')} />
                            <br></br><br></br>
                            <button className="signin_button" onClick={this.continue} >Next</button><br></br>
                        </div>
                      </div>

                  </div>

              </div>

          </div>
        </div>
    );
  }
}

export default Atc2;



{/* <div className="signin_new_body">
      <div className="container signin_container" id="container">
          <div className="signin_form-container signin_sign-up-container">
              <div className="signin_form">
                  <h1 className='signin_h1'>Create Account</h1>
                  <div className="signin_social-container">
                      <a className="social signin_a"><i className="fab fa-facebook-f"></i></a>
                      <a className="social signin_a"><i className="fab fa-google-plus-g"></i></a>
                      <a className="social signin_a"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                  <span className="signin_span">or use your email for registration</span>
                  <input className="signin_input" type="text" placeholder="Name" />
                  <input className="signin_input" type="email" placeholder="Email" />
                  <input className="signin_input" type="password" placeholder="Password" />
                  <button className="signin_button">Sign Up</button>
              </div>
          </div>
          <div className="signin_form-container signin_sign-in-container">
          <div className="signin_overlay">
                  <div className="signin_overlay-panel signin_overlay-left">
                      <h1 className='signin_h1'>Welcome Back!</h1>
                      <p className="signin_p">To keep connected with us please login with your personal info</p>
                      <button className="signin_ghost" id="signIn">Sign In</button>
                  </div>
                  <div className="signin_overlay-panel signin_overlay-right">
                      <h1 className='signin_h1'> Your Challenge to the Thought!</h1>
                      <p className="signin_p">When you have a distorted thought, ask yourself “is this accurate?” If a friend said this about himself, what would you say? You would probably offer a counter-argument. <br /><br /> Challenge yourself in the same way. Think of a more balanced and realistic thought to take the place of the distortion.
                      </p>
                  </div>
              </div>
          </div>
          <div className="signin_overlay-container">
              <div className="signin_form">
              <a className="social signin_a"><FontAwesomeIcon icon="plus" size="4x" style={{ color: 'red' }} /></a>
                  <textarea type="text" placeholder="Enter your challenge to your thought..." className="signin_input" value={values.YourChallenge} onChange={handleChange('YourChallenge')} />
                  <br></br><br></br>
                  <button className="signin_button" onClick={this.continue} >Next</button><br></br>
                  <button className="signin_button" onClick={this.back} >Back</button>
              </div>
          </div>
      </div>
      </div> */}