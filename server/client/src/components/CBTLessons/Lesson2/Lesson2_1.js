import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import ReactPlayer from 'react-player'
import '../Lessons.css'

const Lesson2_1 = () => {
    const history = useHistory()
    return (
        <div>
        <div className="lessonHeading">
            <div>
                <h2>Cognitive Distortions - 1</h2>
                <br></br>
                    <div className="player-wrapper">
                        <ReactPlayer
                            className="react-player"
                            url="https://www.youtube.com/embed/otFrNM7PnME"
                            width="100%"
                            height="100%"
                            controls={true}
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
                                    <h3>Have you ever worn the perspective that shows an ugly side to everything; makes you look like a nightmare, make friends look like monsters and situations into catastrophes. If you have ever felt this way our experienced such a bad day, chances are that you have worn this wrong perspective which is actually called experiencing Cognitive Distortions.

                                                By eradicating and reducing these unhealthy thoughts, you can change your mood and your life.
                                                Cognitive Distortions are alleviated by Cognitive Behavioral Therapy , which improves lifes by possibly changing thoughts, beliefs and attitudes. 
                                                    “Remember it isn't the situation, but the thoughts that upset you.”
                                                We can bifercate this into 10 types of distortions:<br></br><br></br>
                                                We overgeneralise
                                                    One failure means we ll always fail, or a small mistake means the person always behaves or acts that way. This way of ‘All or Nothing’ thinking where we pigeonhole our thinking to total success or total failure without a nuance of growth causes growth of suffocating characteristic of thoughts. This could often lead to mistrust and denial.
                                                Mentally Filer and Only see the negative.
                                                    We focus on one bad grade in tests and not see all the other good scores so far. We hold to one bad mistake of a person rather than noticing all the other good deeds done by the person. This method of disqualifying the positives and consequently turning good things into bad leads us to misjudging even a genuine compliment for a manipulative or condescending statement.
                                                <br></br><br></br>
                                                Jumping to conclusions
                                                We read minds, falsely accusing that someone is thinking bad about us. We fortunetell the bad outcomes for our future.We wrongly personalise and catastrophize thinking that we are responsible for something that we had actually nothing to do with.
                                    </h3>
                                </div>

                                <div className="lessonHeading">
                                        <Link to="/cbtlessons/2_2">
                                            <button className="signin_button">Next Lesson</button>
                                        </Link>
                                </div>
                            
                            <i className="fa fa-usd" aria-hidden="true"></i>
                            </div>
                        </div> 
                    </div>
                </div>
            </main>

        <div className="col-3">
            <p>From, &nbsp;  Verywell Mind. 2021. 10 Cognitive Distortions That Can Lead to Addiction Relapse. [online] Available at: &lt;https://www.verywellmind.com/ten-cognitive-distortions-identified-in-cbt-22412&gt; [Accessed 22 April 2021].</p>
        </div>
        

        </div>
    )
}

export default Lesson2_1
