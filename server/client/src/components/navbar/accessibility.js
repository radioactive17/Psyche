import React, {useContext} from 'react'
import styled from "styled-components";
import {Link,useHistory} from 'react-router-dom';
import {UserContext} from '../../App'

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: linear-gradient(45deg, #b95ce4, #4f29cd);
  background-image: linear-gradient(45deg, #b95ce4, #4f29cd);
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #00c9ff;
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #00c9ff;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #00c9ff;
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  const {state,dispatch} = useContext(UserContext)
  const history = useHistory()

  const renderList = ()=>{
    if(state)
    {
      if(state.role == 'admin')
      {
        return [
          <LoginButton><Link to="/signin"style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}} onClick={()=>{
            localStorage.clear()
            dispatch({type:"CLEAR"})
            history.push('/signin')
        }} >SignOut</Link></LoginButton>
              ]
      }

      else if(state.role == 'psychiatrist')
      {
        return [
          
          <LoginButton><Link to="/signin"style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}} onClick={()=>{
            localStorage.clear()
            dispatch({type:"CLEAR"})
            history.push('/signin')
        }} >SignOut</Link></LoginButton>
              ]
      }

      else if(state.role == 'student')
      {
        return [
          <LoginButton><Link to="/signin"style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}} onClick={()=>{
            localStorage.clear()
            dispatch({type:"CLEAR"})
            history.push('/signin')
        }} >SignOut</Link></LoginButton>

              ]
      }
        
    }

    else
    {
        return [
          <RegisterButton><Link to="/signup"style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}} >Join our Community</Link></RegisterButton>,
              ]
    }

}

  return (
    <AccessibilityContainer>
      {/* <RegisterButton>Register</RegisterButton>
      <LoginButton>Login</LoginButton>
       */}
       {renderList()}
    </AccessibilityContainer>
  );
}