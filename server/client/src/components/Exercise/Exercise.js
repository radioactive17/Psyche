import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import './Exercise.css';

const Exercise = ()=> {
    const history = useHistory()
    return (
    <div>
    <div className="exercise_body">
        <div className="exercise_container">

            <Link to="/exercise/aspmts">
            <div className="exercise_card">
                <div className="exercise_box">
                    <div className="exercise_content">
                        <h2>01</h2>
                        <h3>Cognitive Mental Health Tests</h3>
                        <br></br>
                        <p>Verified Cognitive Mental Health Tests including of PHQ-9, GAD-7, OCI-R, ISI.</p>
                        <a>Take Tests Now!</a>
                    </div>
                </div>
            </div>
            </Link>

            
            <Link to="/exercise/atc">
            <div className="exercise_card">
                <div className="exercise_box">
                    <div className="exercise_content">
                        <h2>02</h2>
                        <h3>Automatic Thoughts Challenges</h3>
                        <br></br>
                        <p>Recognize and Challenge your automatic thoughts by expressing yourself</p>
                        <a>Challenge now!</a>
                    </div>
                </div>
            </div>
            </Link>

            <Link to="/exercise/breathing">
            <div className="exercise_card">
                <div className="exercise_box">
                    <div className="exercise_content">
                        <h2>03</h2>
                        <h3>Deep Breathing Therapy Session</h3>
                        <br></br>
                        <p>Calm down yourself and relieve stress using Deep Breathing Techniques.</p>
                        <a>Deep Breaths now!</a>
                    </div>
                </div>
            </div>
            </Link>

        </div>
    </div>

    </div>    
    )
}

export default Exercise
