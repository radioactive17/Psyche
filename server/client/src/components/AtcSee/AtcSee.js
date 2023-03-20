import React,{useState, useEffect} from 'react'
import "./AtcSee.css";


const AtcSee = ()=> {
    const [data,setData] = useState([])

    useEffect(() => {
        fetch('/getatc', {
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
                                        <h1>Automatic Thought Challenge {i+1} </h1>
                                    </div>
                                    <i className="fa fa-usd" aria-hidden="true"></i>
                                </div>


                                <div className="charts__right__cards">
                                    <div className="cardd1">
                                        <h3><u>Automatic Thought</u></h3>
                                        <h3>{item.AutomaticThought}</h3>
                                    </div>

                                    <div className="cardd2">
                                    <h3><u>Challenge Thought</u></h3>
                                        <h3>{item.YourChallenge}</h3>
                                    </div>

                                    <div className="cardd3">
                                    <h3><u>Alternative Thought</u></h3>
                                        <h3>{item.AlternativeThought}</h3>
                                    </div>

                                    <div className="cardd4">
                                    <h3><u>Feelings </u></h3>
                                        <h3>{item.Feeling}</h3>
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
                          <h1>You have not submitted any thoughts yet.</h1>
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

export default AtcSee