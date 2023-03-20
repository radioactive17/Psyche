import React from 'react'
import man from '../../images/man.png'
import {Link} from 'react-router-dom';
import elements from '../../images/elements.png'
import './Home.css'


const Home = ()=> {
    return (
        <div>
        <div className="hero">
            <nav></nav>
            <div className="row">
                <div className="col-1">
                    <img src={man} ></img>
                    <img src={elements} className="elements"></img>
                </div>

                <div className="col-2">
                    <h1> Psyche <br></br><span className="spann">Mental Health Application</span></h1>
                    <p> An initiative for Final year Project, Psyche, which is a mental health application based on Cognitive Behavorial Therapy for Students dealing with Exam Stress. </p>
                     <a class="btn">Contact Us</a>
                </div>
            </div>

            <div className="container">
                <div className="lines">
                    <div className="circle"></div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home
