import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import "./Join.css";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [data, setData] = useState([])


    useEffect(() => {
        fetch('/studentroom', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
          if(result.assigndetails.length == 0)
          {
              setName("")
              setRoom("")
              setData(result.assigndetails)
            
          }
          else
          {
              setData(result.assigndetails)
              setName(result.assigndetails[0].s_name)
              setRoom(result.assigndetails[0].room_code)
          }
          
        })
    },[])

    const requestPsychiatrist = ()=>{
        fetch('/requestPsych', {
            method:"POST",
            headers:{
                "Content-Type" : "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                toast.warn(data.error, {position: toast.POSITION.TOP_CENTER})
            }
            else{
                toast.success('Your request has been sent to the admin. Please check your mail in some time to see your allotment.', {position: toast.POSITION.TOP_CENTER})
               
            }
        }).catch(err=>{
            console.log(err)
        })
    }


    return (
        <main>
        {
            data.length >= 1 ? (

                <div className="admin__container">
          <div className="atc_charts">
              
              <div className="charts__left">
                  
                  <div>
                        <h1>Join your Chatroom with your Assigned Psychiatrist!</h1>
                        <p> Look for the schedule set by your Psychiatrist on your email and join the chatroom at the allotted time. </p>

                        <div className="formm">
                        <div>
                            <br></br> <br></br>
                            <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}><button className="signin_button">Join</button></Link>
                        </div>
                      </div>

                  </div>

              </div>

          </div>
        </div>

    ): (
        <div className="admin__container">
          <div className="atc_charts">
              <div className="charts__right">
                  <div className="charts__right__title">
                      <div>
                          <h1>You have not been assigned a Psychiatrist yet.</h1> <br/>
                            <button className="signin_button" onClick={()=>requestPsychiatrist()}>Request A Psychiatrist</button>
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

export default Join



// <div className="signin_new_body">
//         <div className="container signin_container" id="container">
//             <div className="signin_form-container signin_sign-up-container">
//                 <div className="signin_form">
//                     <h1 className='signin_h1'>Create Account</h1>
//                     <div className="signin_social-container">
//                         <a className="social signin_a"><i className="fab fa-facebook-f"></i></a>
//                         <a className="social signin_a"><i className="fab fa-google-plus-g"></i></a>
//                         <a className="social signin_a"><i className="fab fa-linkedin-in"></i></a>
//                     </div>
//                     <span className="signin_span">or use your email for registration</span>
//                     <input className="signin_input" type="text" placeholder="Name" />
//                     <input className="signin_input" type="email" placeholder="Email" />
//                     <input className="signin_input" type="password" placeholder="Password" />
//                     <button className="signin_button">Sign Up</button>
//                 </div>
//             </div>
//             <div className="signin_form-container signin_sign-in-container">
//                 <div className="signin_form">
//                     <h1 className='signin_h1'>Chat Room</h1>
//                     <div className="signin_social-container">
//                     <a className="social signin_a"><FontAwesomeIcon icon="stethoscope" size="1.7x" /></a>
//                         <a className="social signin_a"><FontAwesomeIcon icon="star" size="1.7x" /></a>
//                         <a className="social signin_a"><FontAwesomeIcon icon="plus" size="1.7x" /></a>
//                     </div>
//                     <br></br>
//                     <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}><button className="signin_button">Join</button></Link>
//                 </div>
//             </div>
//             <div className="signin_overlay-container">
//                 <div className="signin_overlay">
//                     <div className="signin_overlay-panel signin_overlay-left">
//                         <h1 className='signin_h1'>Welcome Back!</h1>
//                         <p className="signin_p">To keep connected with us please login with your personal info</p>
//                         <button className="signin_ghost" id="signIn">Sign In</button>
//                     </div>
//                     <div className="signin_overlay-panel signin_overlay-right">
//                         <h1 className='signin_h1'>Join a Chatroom!</h1>
//                         <p className="signin_p">Join the room at the time alloted and chat with the Psychiatrist assigned to you.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>