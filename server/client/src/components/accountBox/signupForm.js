import React, { useContext, useState } from "react";
import {Link, useHistory} from 'react-router-dom';
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

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const history = useHistory()
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const [gender,setGender] = useState("")
  const [phoneNo,setPhoneNo] = useState("")

  const postData = ()=>{
    if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
    {
      toast.warn('Invalid Email Id', {position: toast.POSITION.TOP_CENTER})
        return
    }
    if(!/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(phoneNo))
    {
      toast.warn('Invalid Phone No', {position: toast.POSITION.TOP_CENTER})
        return
    }
    fetch('/signup', {
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            name:name,
            password:password,
            email:email,
            gender:gender,
            phoneNo:phoneNo,
            role:"student"           
        })
    }).then(res=>res.json())
    .then(data=>{
        if(data.error){
          toast.error(data.error, {position: toast.POSITION.TOP_CENTER})
        }
        else{
            toast.success('Registration Successfully', {position: toast.POSITION.TOP_CENTER})
            history.push('/signin')
            {switchToSignin()}
        }
    }).catch(err=>{
        console.log(err)
    })
}


  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name"  value={name} onChange={(e)=>setName(e.target.value)} />
        <Input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <Input type="text" placeholder="Phone Number" value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)} />
        <Input type="text" placeholder="Gender" value={gender} onChange={(e)=>setGender(e.target.value)} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={()=>postData()}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}