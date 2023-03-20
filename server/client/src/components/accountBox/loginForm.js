import React, { useContext, useState } from "react";
import {Link, useHistory} from 'react-router-dom';
import {UserContext} from '../../App'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

toast.configure()

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const {state,dispatch} = useContext(UserContext)
  const history = useHistory()
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")

  const postData = ()=>{
    if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
    {
      toast.warn('Invalid Email', {position: toast.POSITION.TOP_CENTER})
        return
    }
    fetch('/signin', {
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            password:password,
            email:email
        })
    }).then(res=>res.json())
    .then(data=>{
        if(data.error){
          toast.warn(data.error, {position: toast.POSITION.TOP_CENTER})
        }
        else{
            localStorage.setItem("jwt", data.token)
            localStorage.setItem("user", JSON.stringify(data.user))
            dispatch({type:"USER", payload:data.user})
            toast.success('Signed In Successfully', {position: toast.POSITION.TOP_CENTER})
            if(data.user.role === 'student')
            {
                history.push('/student')
            }

            else if(data.user.role === 'admin')
            {
                history.push('/admin')
            }

            else if(data.user.role === 'psychiatrist')
            {
                history.push('/psychiatrist')
            }

        }
    }).catch(err=>{
        console.log(err)
    })
}


  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <Input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={()=>postData()}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}