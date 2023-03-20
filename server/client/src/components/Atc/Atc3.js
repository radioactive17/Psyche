import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./Atc.css";

export class Atc3 extends Component {
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
                        <h1>Your Alternative Thought!</h1>
                        <p> Now, if the same situation is given to you again, how will you react differently without bringing any negative emotions. </p>

                        <div className="formm">
                        <div>
                            <textarea className="inputtt" placeholder="Example: 'It may be partially true, but..' " value={values.AlternativeThought} onChange={handleChange('AlternativeThought')} />
                            <br></br><br></br>
                            <button className="signin_button" onClick={this.continue} >Next</button>
                            <br></br>
                            
                        </div>
                      </div>

                  </div>

              </div>

          </div>
        </div>
        

        
    );
  }
}

export default Atc3;


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
                          <h1 className='signin_h1'>Your Alternative Thought</h1>
                          <p className="signin_p">Now, if the same situation is given to you again, how will you react differently without bringing any negative emotions.</p>
                      </div>
                  </div>
              </div>
              <div className="signin_overlay-container">
                  <div className="signin_form">
                  <a className="social signin_a"><FontAwesomeIcon icon="envelope" size="4x" style={{ color: 'red' }} /></a>
                      <textarea className="signin_input" placeholder="Example: 'It may be partially true, but..' " value={values.AlternativeThought} onChange={handleChange('AlternativeThought')} />
                      <br></br><br></br>
                      <button className="signin_button" onClick={this.continue} >Next</button>
                      <br></br>
                      <button className="signin_button" onClick={this.back} >Back</button>
                  </div>
              </div>
          </div>
        </div> */}