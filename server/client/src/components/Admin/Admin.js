import React,{useState, useEffect} from 'react'
import "./Admin.css";
import "../Student/Student.css";
import hello from "../../images/hello.svg";
import Chart from "./AdminChart";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Admin = () => {
  const [data,setData] = useState([])

  useEffect(() => {
      fetch('/allusers', {
          headers: {
              "Authorization": "Bearer " + localStorage.getItem("jwt")
          }
      }).then(res=>res.json())
      .then(result=>{
        console.log(result)
        setData(result.details)
      })
  },[])

  return (
    <main>
      <div className="admin__container">
        <div className="admin__title">
          <img src={hello} alt="hello" />
          <div className="admin__greeting">
            <h1>Hello Admin</h1>
            <p>Welcome to your Admin dashboard</p>
          </div>
        </div>

        <div className="admin__cards">
          <div className="student_card">
            <div className="student_card__inner">
              <FontAwesomeIcon icon="users" size="2x" style={{ color: '#35a4ba' }}/>
              <p className="text-primary-p">Total Users</p>
              <span className="font-bold text-title">39</span>
            </div>
          </div>

          <div className="student_card">
            <div className="student_card__inner">
            <FontAwesomeIcon icon="user-nurse" size="2x" style={{ color: '#35a4ba' }}/>
              <p className="text-primary-p">Number of Psychiatrists</p>
              <span className="font-bold text-title">2</span>
            </div>
          </div>

          <div className="student_card">
            <div className="student_card__inner">
            <FontAwesomeIcon icon="user" size="2x" style={{ color: '#35a4ba' }}/>
              <p className="text-primary-p">Number of Students</p>
              <span className="font-bold text-title">37</span>
            </div>
          </div>

          <div className="student_card">
            <div className="student_card__inner">
            <FontAwesomeIcon icon="bell" size="2x" style={{ color: '#35a4ba' }}/>
              <p className="text-primary-p">Number of Tests taken</p>
              <span className="font-bold text-title">35</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="atc_charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>User Reports</h1>
                <p>Total Users and Active Users</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <div className="charts__right__cards_graph">
                <Chart />
            </div>
          </div>
        </div>

        <div className="atc_charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>User Reports</h1>
                <p>Different Users</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cardss">
            {
            data.map(item=>{
              return(
              <div className="carddd1">
                <h3>{item.name}</h3>
                <h3>{item.role}</h3>
              </div>
              )
            })
          }
              

            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Admin;
