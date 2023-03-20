import React from 'react';
import {Link} from 'react-router-dom';
import './AspmtHomePage.css';

const Aspmt = ()=> {
    return (
        <div className="exercise_body">
        <div className="exercise_container">
            
            <Link to="/exercise/aspmts/test1">
                <div className="exercise_card">
                    <div className="exercise_box">
                        <div className="exercise_content">
                            <h2>01</h2>
                            <h3>Patient Health Questionare PHQ-9</h3>
                            <br></br>
                            <p>Take this 9-question instrument which is a primary care setting to screen for the presence and severity of depression.</p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to="/exercise/aspmts/test2">
                <div className="exercise_card">
                    <div className="exercise_box">
                        <div className="exercise_content">
                            <h2>02</h2>
                            <h3>Generalized Anxiety Disorder GAD-7</h3>
                            <br></br>
                            <p>This is a 7-item instrument that is used to measure or assess the severity of generalised anxiety disorder.</p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to="/exercise/aspmts/test3">
                <div className="exercise_card">
                    <div className="exercise_box">
                        <div className="exercise_content">
                            <h2>03</h2>
                            <h3>Obsessive Compulsive Inventory OCI-R</h3>
                            <br></br>
                            <p>This is a self-rating scale that is designed to assess the severity and type of symptoms of those potentially dealing with OCD.</p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to="/exercise/aspmts/test5">
                <div className="exercise_card">
                    <div className="exercise_box">
                        <div className="exercise_content">
                            <h2>04</h2>
                            <h3>Insomnia Severity Index ISI</h3>
                            <br></br>
                            <p>It is an instrument that assesses the severity of both nighttime and daytime components of insomnia</p>
                        </div>
                    </div>
                </div>
            </Link> 
        </div>
    </div>
    )
}

export default Aspmt
