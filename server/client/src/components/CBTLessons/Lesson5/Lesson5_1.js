import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import '../Lessons.css'
import ReactPlayer from 'react-player'


const Lesson5_1 = () => {
    const history = useHistory()
    return (
        <div>
        <div className="lessonHeading">
            <div>
                <h2>Cognitive and Behavorial Strategies - 1</h2>
                <br></br>

                <div className="player-wrapper">
                    <ReactPlayer
                        className="react-player"
                        url="https://www.youtube.com/embed/fGCvKQY2g_w"
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
                                    <h3>Guided imagery helps you use your imagination to take you to a calm, peaceful place.

                                        Because of the way the mind and body are connected, guided imagery can make you feel like you are experiencing something just by imagining it.
                                        You can do guided imagery with audio recordings, an instructor, or a script (a set of written instructions) to lead you through the process.
                                        You use all of your senses in guided imagery. 
                                        <br></br><br></br>
                                        For example, if you want a tropical setting, you can imagine the warm breeze on your skin, the bright blue of the water, the sound of the surf, the sweet scent of tropical flowers, and the taste of coconut so that you actually feel like you are there.
                                        Imagining yourself in a calm, peaceful setting can help you relax and relieve stress.
                                    </h3>
                                </div>

                                <div className="lessonHeading">
                                        <Link to="/cbtlessons/5_2">
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
            <p>From, &nbsp; Uofmhealth.org. 2021. Stress Management: Doing Guided Imagery to Relax | Michigan Medicine. [online] Available at: &lt;https://www.uofmhealth.org/health-library/uz2270&gt; [Accessed 22 April 2021]. </p>
        </div>

        </div>
    )
}

export default Lesson5_1
