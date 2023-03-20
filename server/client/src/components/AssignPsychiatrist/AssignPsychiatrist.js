import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const AddaPsychiatrist = ()=> {
    const history = useHistory()
    const [p_name,setPName] = useState("")
    const [p_email,setPEmail] = useState("")
    const [s_name,setSName] = useState("")
    const [s_email,setSEmail] = useState("")

    const postData = ()=>{
        if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(p_email))
        {
            toast.warn("Invalid Psychiatrist Email", {position: toast.POSITION.TOP_CENTER})
            return
        }
        if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(s_email))
        {
            toast.warn("Invalid Student Email", {position: toast.POSITION.TOP_CENTER})
            return
        }
        fetch('/assign', {
            method:"POST",
            headers:{
                "Content-Type" : "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                p_name:p_name,
                p_email:p_email,
                s_name:s_name,
                s_email:s_email
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                toast.warn(data.error, {position: toast.POSITION.TOP_CENTER})
            }
            else{
                toast.success("Student has successfully been assigned a Psychiatrist", {position: toast.POSITION.TOP_CENTER})
                history.push('/admin')
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="admin__container">
          <div className="atc_charts">
              
              <div className="charts__left">
                  
                  <div>
                        <h1>Assign a Psychiatrist!</h1>
                        

                        <div className="formm">
                        <div>
                              <input className="inputtt" type="text" style = {{marginTop: "2%"}} placeholder="Psychiatrist Name" value={p_name} onChange={(e)=>setPName(e.target.value)} />
                              <input className="inputtt" type="email" style = {{marginTop: "2%"}} placeholder="Psychiatrist Email" value={p_email} onChange={(e)=>setPEmail(e.target.value)} />
                              <input className="inputtt" type="text" style = {{marginTop: "2%"}} placeholder="Student Name" value={s_name} onChange={(e)=>setSName(e.target.value)} />
                              <input className="inputtt" type="email" style = {{marginTop: "2%"}} placeholder="Student Email" value={s_email} onChange={(e)=>setSEmail(e.target.value)} />
                            <br></br><br></br>
                              <button className="signin_button" onClick={()=>postData()}>Assign</button>
                        </div>
                      </div>

                  </div>

              </div>

          </div>
        </div>
    )
}

export default AddaPsychiatrist


{/* <div className="signin_new_body">
        <div className="container signin_container right-panel-active" id="container">
            <div className="signin_form-container signin_sign-up-container">
                <div className="signin_form">
                    <h1 className='signin_h1'>Assign a Psychiatrist to a Student</h1>
                    <br></br>
                    <input className="signin_input" type="text" placeholder="Psychiatrist Name" value={p_name} onChange={(e)=>setPName(e.target.value)} />
                    <input className="signin_input" type="email" placeholder="Psychiatrist Email" value={p_email} onChange={(e)=>setPEmail(e.target.value)} />
                    <br></br>
                    <input className="signin_input" type="text" placeholder="Student Name" value={s_name} onChange={(e)=>setSName(e.target.value)} />
                    <input className="signin_input" type="email" placeholder="Student Email" value={s_email} onChange={(e)=>setSEmail(e.target.value)} />
                    <br></br>
                    <button className="signin_button" onClick={()=>postData()}>Assign</button>
                </div>
            </div>
            <div className="signin_form-container signin_sign-in-container">
                <div className="signin_form">
                    <h1 className='signin_h1'>Assign a Psychiatrist to a Student</h1>
                    <br></br>
                    <input className="signin_input" type="text" placeholder="Psychiatrist Name" value={p_name} onChange={(e)=>setPName(e.target.value)} />
                    <input className="signin_input" type="email" placeholder="Psychiatrist Email" value={p_email} onChange={(e)=>setPEmail(e.target.value)} />
                    <br></br>
                    <input className="signin_input" type="text" placeholder="Student Name" value={s_name} onChange={(e)=>setSName(e.target.value)} />
                    <input className="signin_input" type="email" placeholder="Student Email" value={s_email} onChange={(e)=>setSEmail(e.target.value)} />
                    <br></br>
                    <button className="signin_button" onClick={()=>postData()}>Assign</button>
                </div>
            </div>
            <div className="signin_overlay-container">
                <div className="signin_overlay">
                    <div className="signin_overlay-panel signin_overlay-left">
                        <h1 className='signin_h1'>Admin Panel</h1>
                        <p className="signin_p">Assign a Psychiatrist to a Student</p>
                    </div>
                    <div className="signin_overlay-panel signin_overlay-right">
                        <h1 className='signin_h1'>Hello, Friend!</h1>
                        <p className="signin_p">Enter your personal details and start your journey with us</p>
                        <Link to='/signup'><button className="signin_button ghost" id="signUp">Sign Up</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div> */}