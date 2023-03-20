import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  submit = (e) => {
    const { values: { AutomaticThought, YourChallenge, AlternativeThought,  Feeling } } = this.props;
    
    fetch('/atc', {
      method: "POST",
      headers:{
        "Content-Type" : "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
      body:JSON.stringify({
        AutomaticThought:AutomaticThought,
        YourChallenge:YourChallenge,
        AlternativeThought:AlternativeThought,
        Feeling:Feeling
      })
    }).then(res=>res.json())
    .then(data=>{
        
    }).catch(err=>{
      console.log(err)
    })

    this.props.nextStep()
  };


  render() {
    const {
      values: { AutomaticThought, YourChallenge, AlternativeThought,  Feeling }
    } = this.props;
    return (
      <div className="admin__container">
      <div className="atc_charts">
          
          <div className="charts__left">
              
              <div>
                    <h1>Take note of your emotions!</h1>
                    <p> You will start to notice that distorted thoughts trigger negative emotions like guilt, sadness or anger. <br/>In time, you will see that being kind and fair to yourself results in more positive emotions. </p>

                    <br></br><br></br>
                    
                    <h4>Your Automatic Thought</h4>
                    <p> {AutomaticThought} </p>
                    <br></br>

                    <h4>Your Challenge</h4>
                    <p> {YourChallenge}  </p>
                    <br></br>

                    <h4>Your Alternative Thought</h4>
                    <p> {AlternativeThought} </p>
                    <br></br>

                    <h4>Your Feelings</h4>
                    <p> {Feeling} </p>
                    <br></br>

          
                        <br></br>
                      <button className="signin_button" onClick={this.submit} >Submit</button>
              </div>

          </div>

      </div>
    </div>
    );
  }
}

export default Confirm;


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
                          <h1 className='signin_h1'>Take note of your emotions!</h1>
                          <p className="signin_p"> You will start to notice that distorted thoughts trigger negative emotions like guilt, sadness or anger. <br/>In time, you will see that being kind and fair to yourself results in more positive emotions.</p>
                      </div>
                  </div>
              </div>
              <div className="signin_overlay-container">
                  <div className="signin_form">
                      <a className="social signin_a"><FontAwesomeIcon icon="smile" size="4x" style={{ color: 'green' }} /></a>
                      <span className="signin_span">{AutomaticThought}</span>
                      <br></br>
                      <span className="signin_span">{YourChallenge}</span>
                      <br></br>
                      <span className="signin_span">{AlternativeThought}</span>
                      <br></br>
                      <span className="signin_span">{Feeling}</span>
                        <br></br>
                        <br></br>
                      <button className="signin_button" onClick={this.submit} >Next</button>
                      <br></br>
                      <button className="signin_button" onClick={this.back} >Back</button>
                  </div>
              </div>
          </div>
        </div> */}