import React, {useContext, useState} from 'react'
import styled from "styled-components";
import {Link,useHistory} from 'react-router-dom';
import {UserContext} from '../../App'
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 100;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 15px;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
`;

const TestLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const Marginer = styled.div`
  height: 1em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);
  const {state,dispatch} = useContext(UserContext)
  const history = useHistory()

  const renderList = ()=>{
    if(state)
    {
      if(state.role == 'admin')
      {
        return [
          <LinkItem onClick={()=>setOpen(false)}><TestLink><Link to="/admin" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>Dashboard</Link></TestLink></LinkItem>,
          <LinkItem onClick={()=>setOpen(false)}><TestLink><Link to="/admin/add" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>Add a Psychiatrist</Link></TestLink></LinkItem>,
          <LinkItem onClick={()=>setOpen(false)}><TestLink><Link to="/admin/assign" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>Assign a Psychiatrist</Link></TestLink></LinkItem>,
          <LinkItem onClick={()=>setOpen(false)}><TestLink><Link to="/admjoin" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>Chatroom</Link></TestLink></LinkItem>,
          <LinkItem onClick={()=>setOpen(false)}><TestLink><Link to="/signin" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}} onClick={()=>{
                                            localStorage.clear()
                                            dispatch({type:"CLEAR"})
                                            history.push('/signin')
                                      }} >SignOut</Link></TestLink></LinkItem>,
              ]
      }

      else if(state.role == 'psychiatrist')
      {
        return [
          <LinkItem onClick={()=>setOpen(false)}><TestLink><Link to="/psychiatrist" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>Profile</Link></TestLink></LinkItem>,
          <LinkItem onClick={()=>setOpen(false)}><TestLink><Link to="/allatc" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>Analyse User's ATC</Link></TestLink></LinkItem>,
          <LinkItem onClick={()=>setOpen(false)}><TestLink><Link to="/alltests" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>Analyse User's Tests</Link></TestLink></LinkItem>,
          <LinkItem onClick={()=>setOpen(false)}><TestLink><Link to="/psyjoin" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>Chatroom</Link></TestLink></LinkItem>,
          <LinkItem onClick={()=>setOpen(false)}><TestLink><Link to="/signin" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}} onClick={()=>{
                                            localStorage.clear()
                                            dispatch({type:"CLEAR"})
                                            history.push('/signin')
                                      }}>SignOut</Link></TestLink></LinkItem>,
              ]
      }

      else if(state.role == 'student')
      {
        return [
            <LinkItem onClick={()=>setOpen(false)}><TestLink><Link to="/student" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>Profile</Link></TestLink></LinkItem>,
            <LinkItem onClick={()=>setOpen(false)}><TestLink><Link to="/cbtlessons" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>CBT Lessons</Link></TestLink></LinkItem>,
            <LinkItem onClick={()=>setOpen(false)}><TestLink><Link to="/exercise" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>CBT Exercises</Link></TestLink></LinkItem>,
            <LinkItem onClick={()=>setOpen(false)}><TestLink><a target="_blank" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}} href="https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=eu-gb&integrationID=a8d84f78-f956-44ab-8180-76b9a2f25023&serviceInstanceID=dac2ad4d-8952-413d-b955-7a18712f6007">Virtual Psychiatrist</a></TestLink></LinkItem>,
            <LinkItem onClick={()=>setOpen(false)}><TestLink><Link to="/join" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>Psychiatrist</Link></TestLink></LinkItem>,
            <LinkItem onClick={()=>setOpen(false)}><TestLink><Link to="/signin" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}} onClick={()=>{
                                localStorage.clear()
                                dispatch({type:"CLEAR"})
                                history.push('/signin')
                            }}>SignOut</Link></TestLink></LinkItem>,

              ]
      }
        
    }

}

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          {renderList()}
          <Marginer />
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}