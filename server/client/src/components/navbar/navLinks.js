import React, {useContext} from 'react'
import styled from "styled-components";
import {Link,useHistory} from 'react-router-dom';
import {UserContext} from '../../App'

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-top: 2px solid #2ecc71;
  }
`;

const TestLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function NavLinks(props) {
  const {state,dispatch} = useContext(UserContext)
  const history = useHistory()

  const renderList = ()=>{
    if(state)
    {
      if(state.role == 'admin')
      {
        return [
          <LinkItem><TestLink><Link to="/admin" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>Dashboard</Link></TestLink></LinkItem>,
          <LinkItem><TestLink><Link to="/admin/add" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>Add a Psychiatrist</Link></TestLink></LinkItem>,
          <LinkItem><TestLink><Link to="/admin/assign" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>Assign a Psychiatrist</Link></TestLink></LinkItem>,
          <LinkItem><TestLink><Link to="/admjoin" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>Chatroom</Link></TestLink></LinkItem>,
              ]
      }

      else if(state.role == 'psychiatrist')
      {
        return [
          <LinkItem><TestLink><Link to="/psychiatrist" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>Profile</Link></TestLink></LinkItem>,
          <LinkItem><TestLink><Link to="/allatc" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>Analyse User's ATC</Link></TestLink></LinkItem>,
          <LinkItem><TestLink><Link to="/alltests" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>Analyse User's Tests</Link></TestLink></LinkItem>,
          <LinkItem><TestLink><Link to="/psyjoin" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>Chatroom</Link></TestLink></LinkItem>,
              ]
      }

      else if(state.role == 'student')
      {
        return [
            <LinkItem><TestLink><Link to="/student" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>Profile</Link></TestLink></LinkItem>,
            <LinkItem><TestLink><Link to="/cbtlessons" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>CBT Lessons</Link></TestLink></LinkItem>,
            <LinkItem><TestLink><Link to="/exercise" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>CBT Exercises</Link></TestLink></LinkItem>,
            <LinkItem><TestLink><a target="_blank" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}} href="https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=eu-gb&integrationID=a8d84f78-f956-44ab-8180-76b9a2f25023&serviceInstanceID=dac2ad4d-8952-413d-b955-7a18712f6007">Virtual Psychiatrist</a></TestLink></LinkItem>,
            <LinkItem><TestLink><Link to="/join" style={{textDecoration:"none", color: "inherit", fontSize: "inherit"}}>Psychiatrist</Link></TestLink></LinkItem>,

              ]
      }
        
    }

}


  return (
    <NavLinksContainer>
      <LinksWrapper>
        {renderList()}
      </LinksWrapper>
    </NavLinksContainer>
  );
}