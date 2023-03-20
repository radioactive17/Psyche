import React,{useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./Student.css";
import hello from "../../images/hello.svg";
import StudentChart from "./StudentChart";
import {Link,useHistory} from 'react-router-dom';

const Profile = ()=> {
    const [data,setData] = useState([])
    const [score1,setScore1] = useState(0)
    const [score2,setScore2] = useState(0)
    const [score3,setScore3] = useState(0)
    const [score4,setScore4] = useState(0)
    const [score5,setScore5] = useState(0)

    useEffect(() => {
        fetch('/studentprofile', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            // console.log(result.score[result.score.length - 1].score)
            console.log(result.testDetails)
            setData(result.details)
            if(result.testDetails.length > 0) {
                for(var x = 0; x < result.testDetails.length; x++) {
                    var testId = result.testDetails[x].testId;
                    var score = result.testDetails[x].score;
                    if(testId === 1) 
                        setScore1(score)
                    else if(testId === 2)
                        setScore2(score)
                    else if(testId === 3) 
                        setScore3(score)
                    else if(testId === 4)
                        setScore4(score)
                    else if(testId === 5)
                        setScore5(score)
                }
            }
        })
    },[])
    return (
        <main>
        {
            data.map(item=>{
                return(
                    <div className="admin__container">
                        <div className="admin__title">
                            <img src={hello} alt="hello" />
                            <div className="admin__greeting">
                                <h1>Hello {item.name}</h1>
                                <p>Welcome to your Dashboard</p>
                            </div>
                        </div>

                        <div className="admin__cards">
                            
                            <div className="student_card">
                                <div className="student_card__inner">
                                    <FontAwesomeIcon icon="user" size="2x" style={{ color: '#35a4ba', marginTop: "5px" }}/>
                                    <span className="font-bold text-title">{item.name}</span>
                                </div>
                            </div>

                            <div className="student_card">
                                <div className="student_card__inner">
                                    <FontAwesomeIcon icon="venus-mars" size="2x" style={{ color: '#35a4ba' }}/>
                                    <span className="font-bold text-title">{item.gender}</span>
                                </div>
                            </div>

                            <div className="student_card">
                                <div className="student_card__inner">
                                    <FontAwesomeIcon icon="envelope" size="2x" style={{ color: '#35a4ba' }}/>
                                    <span className="font-bold text-title">{item.email}</span>
                                </div>
                            </div>

                            <div className="student_card">
                                <div className="student_card__inner">
                                <FontAwesomeIcon icon="phone" size="2x" style={{ color: '#35a4ba' }}/>
                                    <span className="font-bold text-title">{item.phoneNo}</span>
                                </div>
                            </div>

                        </div>


                        <div className="atc_charts">
                            <div className="charts__left">
                                <div className="charts__left__title">
                                    <div>
                                        <h1> Your Progress</h1>
                                        <p>based on Mental Health</p>
                                    </div>
                                    <i className="fa fa-usd" aria-hidden="true"></i>
                                </div>
                                <div className="charts__right__cards_graph">
                                    <StudentChart />
                                </div>
                                
                                
                            </div>

                        </div>

                        <div className="atc_charts">
                            <div className="charts__left">
                                <div className="charts__left__title">
                                    <div>
                                        <h1 style={{marginLeft: "-50px"}}> Test Reports</h1>
                                        <p>Mental Health Assessments</p>
                                    </div>
                                    <i className="fa fa-usd" aria-hidden="true"></i>
                                </div>


                                <div className="charts__right__cardss">
                                    <div className="carddd1">
                                        <h3>Patient Health Questionaire</h3>
                                        <h3>{score1}</h3>
                                    </div>

                                    <div className="carddd1">
                                        <h3>Insomnia Severity Index</h3>
                                        <h3>{score5}</h3>
                                    </div>

                                    <div className="carddd3">
                                        <h3>Generalized Anxiety Disorder</h3>
                                        <h3>{score2}</h3>
                                    </div>

                                    <div className="carddd3">
                                        <h3>Obsessesive Compulsive Inventory</h3>
                                        <h3>{score3}</h3>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <Link to='/seeatc' style={{textDecoration: "none"}}>
                        <div className="atc_charts" style={{textDecoration: "none"}}>
                            <div className="charts__right" style={{textDecoration: "none"}}>
                                <div className="charts__right__title" style={{textDecoration: "none"}}>
                                    <div style={{textDecoration: "none"}}>
                                        <h1 style={{textDecoration: "none"}}>Check my Automatic Thought Challenges</h1>
                                    </div>
                                    <i className="fa fa-usd" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        </Link>


                    </div>
                )
            })
        }
    </main>
    )
}

export default Profile