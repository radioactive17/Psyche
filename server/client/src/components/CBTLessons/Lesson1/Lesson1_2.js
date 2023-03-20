import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import ReactPlayer from 'react-player'
import '../Lessons.css'


const Lesson1_2 = () => {
    const history = useHistory()
    return (
        <div>
        <div className="lessonHeading">
            <div>
                <h2>Introduction - What is CBT?</h2>
                <br></br>
                <div className="player-wrapper">
                    <ReactPlayer
                        className="react-player"
                        url="https://www.youtube.com/embed/Stw9P38ePVI"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </div>

                <main style={{marginTop: "0px"}}>
                <div className="admin__container">
                    <div className="atc_charts">
                        <div className="charts__right">
                            <div>
                                <div className="lessonBody">
                                    <h3>
                                    When you start to get an understanding of your emotional difficulties, CBT encourages you to break down a specific problem you have using the ABC format, in which:
                                    <br></br><br></br>
                                        <li>Adversity or activating event.</li>
                                        <br></br>
                                        <li>Your beliefs about the event. It involves both obvious and underlying thoughts about situations, yourself, and others.</li>
                                        <br></br>
                                        <li>Consequences, which includes your behavioral or emotional response.</li>
                                    </h3>
                                    <br></br>
                                    <h3>
                                        Congratulations, You have successfully completed Lesson 1. Continue with further lessons to know more about CBT.
                                    </h3>
                                    <br></br>
                                </div>

                                <div className="lessonHeading">
                                        <Link to="/cbtlessons">
                                            <button className="signin_button">Back to CBT Lessons</button>
                                        </Link>
                                </div>
                            
                            <i className="fa fa-usd" aria-hidden="true"></i>
                            </div>
                        </div> 
                    </div>
                </div>

                
                </main>   

        <div className="col-3">
            <p>From, &nbsp; Vivyan, C., 2021. Cognitive Behaviour Therapy. [online] Getselfhelp.co.uk. Available at: &lt;https://www.getselfhelp.co.uk/cbt.htm&gt;  [Accessed 22 April 2021]. </p>
        </div>

        

        </div>
    )
}

export default Lesson1_2
