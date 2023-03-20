import React,{useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./AspmtTestsSeeAll.css";

const AspmtTestsSeeAll = ()=> {
    const [data,setData] = useState([])

    useEffect(() => {
        fetch('/alltests', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setData(result.details)
            console.log(result.details)
        })
    },[])


    return (
        <main>
        {
            data.length >= 1 ? (
            data.map((item,i)=>{
                return(
                    <div className="admin__container" key={i}>
                        <div className="atc_charts">
                            <div className="charts__right">


                                <div className="charts__right__title">
                                    <div>
                                        <h1>Student Name : {item.takenBy.name}</h1>
                                        <h3>Student Test Score : {item.score}</h3>
                                    </div>
                                    <i className="fa fa-usd" aria-hidden="true"></i>
                                </div>


                                <div className="charts__right__cards">
                                    <div className="cardd1">
                                        <h3><u>Test Type</u></h3>
                                        <h3>{item.testName}</h3>
                                    </div>

                                    <div className="cardd2">
                                    <h3><u>Student Age</u></h3>
                                        <h3>{item.takenBy.age}</h3>
                                    </div>

                                    <div className="cardd3">
                                    <h3><u>Student Phone Number</u></h3>
                                        <h3>{item.takenBy.phoneNo}</h3>
                                    </div>

                                    <div className="cardd4">
                                    <h3><u>Student Gender </u></h3>
                                        <h3>{item.takenBy.gender}</h3>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                )
            })
            ):
            (
                <div className="admin__container">
          <div className="atc_charts">
              <div className="charts__right">
                  <div className="charts__right__title">
                      <div>
                          <h1>Students have not taken any ASPMT Assesments yet.</h1>
                      </div>
                      <i className="fa fa-usd" aria-hidden="true"></i>
                  </div>
              </div> 
          </div>
        </div>   
            )
        }
    </main>
    )
}

export default AspmtTestsSeeAll