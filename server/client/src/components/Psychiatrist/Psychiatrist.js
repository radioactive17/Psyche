import React,{useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./Psychiatrist.css";
import hello from "../../images/hello.svg";
import Chart from "../charts/Chart";
import StudentsUnderDetails from "./StudentsUnderDetails";

const Psychiatrist = ()=> {
  const [data,setData] = useState([])
  const [assigndata, setAssignData] = useState([])

  useEffect(() => {
      fetch('/psychiatristprofile', {
          headers: {
              "Authorization": "Bearer " + localStorage.getItem("jwt")
          }
      }).then(res=>res.json())
      .then(result=>{
        console.log(result)
        setData(result.details)
        setAssignData(result.assigndetails)
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
                              <p>Welcome to your Psychiatrist Dashboard</p>
                          </div>
                      </div>

                      <div className="admin__cards">
                          
                          <div className="student_card">
                              <div className="student_card__inner">
                              <FontAwesomeIcon icon="user" size="2x" style={{ color: '#35a4ba' }}/>
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

                          <StudentsUnderDetails />
                      </div>
              )
          })
      }
  </main>
  )
}

export default Psychiatrist
