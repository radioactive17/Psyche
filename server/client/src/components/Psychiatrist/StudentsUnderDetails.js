import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { Schedule } from './'


const StudentsUnderDetails = () => {
    const [assigndata, setAssignData] = useState([])
  
    useEffect(() => {
        fetch('/psychiatristprofile', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
          console.log(result.assigndetails)
          setAssignData(result.assigndetails)
        })
    },[])
  return (
  <div className="atc_charts">
  <div className="charts__left">
      <div className="charts__left__title">
          <div>
              <h1>Your Scheduled Meetings</h1>
              <p style={{marginLeft: "-200px"}}>List of Students</p>
          </div>
          <i className="fa fa-usd" aria-hidden="true"></i>
      </div>
      
      <div className="charts__right__cardss">
      {
            assigndata.map(item=>{
                return(
                    
                        <div className="psycheCard">
                            <h3>{item.s_name}</h3>
                            <h3>{item.s_email}</h3>
                            <h3>{item.room_code}</h3>
                            <Link to='/schedule'><button className="signin_button ghost" id="signUp">Schedule</button></Link>
                        </div>
                    
                    
                )
            })
        }      
        </div>
        

  </div>
    <div className="charts__right">
        <div className="charts__right__title">
            <div>
                <h1>Students Under you</h1>
                <p style={{marginLeft: "-130px"}}>Student Details</p>
            </div>
            <i className="fa fa-usd" aria-hidden="true"></i>
        </div>

        <div className="charts__right__cards">
            {
            assigndata.map(item=>{
                return(
                    <div className="card1">
                            <h3>{item.s_name}</h3>
                            <h3>{item.s_email}</h3>
                    </div> 
                )
            })
        }           
        </div>

    </div>
    </div>
  );
};

export default StudentsUnderDetails;
