import React, { Component } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {UserContext} from '../../App'
import "./Atc.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export class Atc1 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
        <div className="admin__container">
          <div className="atc_charts">
              
              <div className="charts__left">
                  
                  <div>
                        <h1>Automatic Thought Challenge!</h1>
                        <p> In your current capacity, what are the first immediate thoughts that are coming to your mind. <br /><br /> Automatic Thoughts can be negative and irrational, so feel free to express any thought that comes to you. </p>

                        <div className="formm">
                        <div>
                            <textarea className="inputtt" placeholder="Example: 'I am not good enough for this job' " value={values.AutomaticThought} onChange={handleChange('AutomaticThought')} />
                              <br></br><br></br>
                            <button className="signin_button" onClick={this.continue} >Next</button>
                        </div>
                      </div>

                  </div>

              </div>

          </div>
        </div>
      );
  }
}

export default Atc1;





{/* <div className="signin_new_body">
          <div className="container signin_container" id="container">
              <div className="signin_form-container signin_sign-up-container">
                  
              </div>


              <div className="signin_form-container signin_sign-in-container">
              <div className="signin_overlay">
                      <div className="signin_overlay-panel signin_overlay-left">
                          <h1 className='signin_h1'>Welcome Back!</h1>
                          <p className="signin_p">To keep connected with us please login with your personal info</p>
                          <button className="signin_ghost" id="signIn">Sign In</button>
                      </div>
                      <div className="signin_overlay-panel signin_overlay-right">
                          <h1 className='signin_h1'>Automatic Thought Challenge!</h1>
                          <p className="signin_p">In your current capacity, what are the first immediate thoughts that are coming to your mind. <br /><br /> Automatic Thoughts can be negative and irrational, so feel free to express any thought that comes to you.</p>
                      </div>
                  </div>
              </div>

              <div className="signin_overlay-container">
                  <div className="signin_form">
                  <a className="social signin_a"><FontAwesomeIcon icon="stethoscope" size="4x" style={{ color: 'red' }} /></a>
                      <textarea className="signin_input" placeholder="Example: 'I am not good enough for this job' " value={values.AutomaticThought} onChange={handleChange('AutomaticThought')} />
                      <br></br><br></br>
                      <button className="signin_button" onClick={this.continue} >Next</button>
                  </div>
              </div>
          </div>
          </div> */}