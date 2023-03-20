import React,{useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link, useHistory} from 'react-router-dom';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Schedule = () => {
    const [studentemail, setStudentEmail] = useState("")
    const [datetime,setDateTime] = useState("")
    const user = JSON.parse(localStorage.getItem("user"))

    const postData = ()=>{
        fetch('/confirmSchedule', {
            method:"POST",
            headers:{
                "Authorization": "Bearer " + localStorage.getItem("jwt"),
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                p_name: user.name,
                p_email: user.email,
                s_email: studentemail,
                datetime: datetime
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                toast.warn(data.error, {position: toast.POSITION.TOP_CENTER})
            }
            else{
                toast.success("Schedule Comfirmed", {position: toast.POSITION.TOP_CENTER})
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="signin_new_body">
        <div className="container signin_container" id="container">
            <div className="signin_form-container signin_sign-up-container">
                <div className="signin_form">
                    <h1 className='signin_h1'>Create Account</h1>
                    <div className="signin_social-container">
                        <a className="social signin_a"><i className="fa fa-usd" aria-hidden="true"></i></a>
                        <a className="social signin_a"><i className="fab fa-google-plus-g"></i></a>
                        <a className="social signin_a"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span className="signin_span">or use your email for registration</span>
                    <input className="signin_input" type="text" placeholder="Name" />
                    <input className="signin_input" type="email" placeholder="Email" />
                    <input className="signin_input" type="password" placeholder="Password" />
                    <button className="signin_button">Sign Up</button>
                </div>
            </div>
            <div className="signin_form-container signin_sign-in-container">
                <div className="signin_form">
                    <h1 className='signin_h1'>Schedule your Meet Now!</h1>
                    <div className="signin_social-new-container">
                        <a className="social signin_a"><FontAwesomeIcon icon="stethoscope" size="1.7x" /></a>
                        <a className="social signin_a"><FontAwesomeIcon icon="star" size="1.7x" /></a>
                        <a className="social signin_a"><FontAwesomeIcon icon="plus" size="1.7x" /></a>
                    </div>
                    <input className="signin_input" type="text" placeholder="Enter Student Email" value={studentemail} onChange={(e)=>setStudentEmail(e.target.value)} />
                    <input className="signin_input" type="datetime-local" value={datetime} onChange={(e)=>setDateTime(e.target.value)} />
                    <button className="signin_button" onClick={()=>postData()}>Schedule</button>
                </div>
            </div>
            <div className="signin_overlay-container">
                <div className="signin_overlay">
                    <div className="signin_overlay-panel signin_overlay-left">
                        <h1 className='signin_h1'>Welcome Back!</h1>
                        <p className="signin_p">To keep connected with us please login with your personal info</p>
                        <button className="signin_ghost" id="signIn">Sign In</button>
                    </div>
                    <div className="signin_overlay-panel signin_overlay-right">
                        <h1 className='signin_h1'>Hello, Friend!</h1>
                        <p className="signin_p">Enter your personal details and start your journey with us</p>
                        <Link to='/signup'><button className="signin_button ghost" id="signUp">Sign Up</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Schedule;