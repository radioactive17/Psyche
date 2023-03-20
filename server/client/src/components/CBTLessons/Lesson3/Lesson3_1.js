import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import '../Lessons.css'
import ReactPlayer from 'react-player'


const Lesson3_1 = () => {
    const history = useHistory()
    return (
        <div>
        <div className="lessonHeading">
            <div>
                <h2>Belief System - 1</h2>
                <br></br>
                <div className="player-wrapper">
                    <ReactPlayer
                        className="react-player"
                        url="https://www.youtube.com/embed/juNuGdd_Cc0"
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
                                    <h3>For any achievement and for any kind of challenge accomplishment, one needs to be motivated with raw and stubborn determination. He/she cannot be successful if not dogged for achieving that goal.
                                        One of the most important sources of motivation is your Belief System . Its your belief System that is your most powerful strength. Even Nelson Mendela was able to survive jail time, oppression, battering and alot of suffering . Not because of any incentive as there was nothing to incentivize him then, but because he had a strong belief system.
                                        <br></br><br></br>
                                        Mankind has only been able to make history, or achieve a feat of success because of his/her belief system. You can have a belief system which can be strong, can be weak ,can be ordinary or can be extraordinary. Once an North eastern Indian girl Mary Kom saw a boxing match between someone from her village and an international boxer. Since then she was determined and she was adamant that she wants to train hard and become an Olympic boxer that she is now. It's because of her strong will power and belief system that motivated her throughout the path of winning three gold medals and many more accolades whilst representing her country.it didnt matter that she had never boxed before nor did it matter that she was about 30 years old when she started training for the Olympic boxing journey but when someone has a strong belief system and will power they can achieve any feat of achievement and can claim victory over paths of even the highest level of difficulty no matter what the circumstances are. ordinary people generally live the ordinary life grow up to be an ordinary person and leave the world with just an ordinary history.but it's dose extraordinary people who actually leave a mark and legacy that motivates inspires others.
                                    </h3>
                                </div>

                                <div className="lessonHeading">
                                        <Link to="/cbtlessons/3_2">
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
            <p>From, &nbsp; Vivyan, C., 2021. Cognitive Behaviour Therapy. [online] Getselfhelp.co.uk. Available at: &lt;https://www.getselfhelp.co.uk/cbt.htm&gt;  [Accessed 22 April 2021].</p>
        </div>

        </div>
    )
}

export default Lesson3_1
