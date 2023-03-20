import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import ReactPlayer from 'react-player'
import '../Lessons.css'


const Lesson1_1 = () => {
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
                        url="https://www.youtube.com/embed/9c_Bv_FBE-c"
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
                                    <h3>Cognitive Behavorial Therapy is a form of psychotherapy that talk about: How you think about yourself, the world and other people?, How what you do affects your thoughts and feelings?<br/><br />
                                    CBT can help you to change how you think ("Cognitive") and what you do ("Behavior"). These changes can help you to feel better. Unlike some of the other talking treatments, it focuses on the "here and now" problems and difficulties. Whilst it is often useful to discuss the past and understand how our pasts have influenced our lives and how problems have arisen, CBT mostly focuses on looking for ways to improve your mental wellbeing now. CBT says that it's not the event which causes our emotions, but how we interpret that event - what we think or what meaning we give that event or situation.
                                    <br/><br/>
                                    For instance, if someone you know passes you in the street without acknowledging you, you can interpret it several ways. You might think they don't want to know you because no-one likes you (which may lead you to feel depressed), your thought may be that you hope they don't stop to talk to you, because you won't know what to say and they'll think you're boring and stupid (anxiety), you may think they're being deliberately snotty (leading to anger).
                                    <br/><br/>
                                    A healthier response might be that they just didn't see you. Another example may be someone who's depressed might wake up in the morning and think: "This is going to be another awful day", "I'm going to mess up again", or "What's the point of anything?", which will make them feel even more depressed (feelings), and may prompt them to pull the covers over their head and stay in bed (behaviors). It's very likely that this will increase their negative thoughts, which in turn will increase the feelings of depression, and make them even less likely to get out of bed. A vicious cycle is the result - continuing to think and act the same way will help maintain our depression.
                                    </h3>
                                </div>

                                <div className="lessonHeading">
                                        <Link to="/cbtlessons/1_2">
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
            <p> From, &nbsp; Vivyan, C., 2021. Cognitive Behaviour Therapy. [online] Getselfhelp.co.uk. Available at: &lt;https://www.getselfhelp.co.uk/cbt.htm&gt;  [Accessed 22 April 2021].</p>
        </div>

        </div>
    )
}

export default Lesson1_1
