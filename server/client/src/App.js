import React,{useEffect,createContext, useReducer, useContext, useState} from 'react';
import './components/FontawesomeIcons'
import styled from "styled-components";
import './App.css'
// import Signup from './components/Signup/Signup'
// import Signin from './components/Signin/Signin'
// import NavBar from './components/navbar/Navbar'
import { Navbar } from "./components/navbar";
import { AccountBox } from "./components/accountBox";


import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'
import Home from './components/Home/Home'
import Exercise from './components/Exercise/Exercise'
import Breathing from './components/Breathing/Breathing'
import Aspmt from './components/AspmtHomePage/AspmtHomePage'
import Test1 from './components/AspmtTests/Test1'
import Student from './components/Student/Student'

import Admin from './components/Admin/Admin'
import AddaPsychiatrist from './components/AddaPsychiatrist/AddaPsychiatrist'
import AssignPsychiatrist from './components/AssignPsychiatrist/AssignPsychiatrist'

import Psychiatrist from './components/Psychiatrist/Psychiatrist'
import Join from './components/ServerRoom/Join/Join'
import Chat from './components/ServerRoom/Chat/Chat'
import Schedule from './components/Psychiatrist/Schedule'

import PsyJoin from './components/Psy_ServerRoom/Join/Join'
import PsyChat from './components/Psy_ServerRoom/Chat/Chat'

import AdmJoin from './components/Adm_ServerRoom/Join/Join'
import AdmChat from './components/Adm_ServerRoom/Chat/Chat'



import {reducer, initialState} from './reducers/userReducer'
import {Test1Data} from './components/AspmtTests/Test1Data';
import {Test1Result} from './components/AspmtTests/Test1Result';

import {Test2Data} from './components/AspmtTests/Test2Data';
import {Test2Result} from './components/AspmtTests/Test2Result';

import {Test3Data} from './components/AspmtTests/Test3Data';
import {Test3Result} from './components/AspmtTests/Test3Result';

// import {Test4Data} from './components/AspmtTests/Test4Data';

import {Test5Data} from './components/AspmtTests/Test5Data';
import {Test5Result} from './components/AspmtTests/Test5Result';


import WatsonChat from './WatsonChat';


import Atc from './components/Atc/Atc';
import AtcSee from './components/AtcSee/AtcSee';
import AtcSeeAll from './components/AtcSeeAll/AtcSeeAll';
import AspmtTestsSeeAll from './components/AspmtTestsSeeAll/AspmtTestsSeeAll';

import CBTLessons from './components/CBTLessons/CBTLessons';
import Lesson1_1 from './components/CBTLessons/Lesson1/Lesson1_1';
import Lesson1_2 from './components/CBTLessons/Lesson1/Lesson1_2';

import Lesson2_1 from './components/CBTLessons/Lesson2/Lesson2_1';
import Lesson2_2 from './components/CBTLessons/Lesson2/Lesson2_2';

import Lesson3_1 from './components/CBTLessons/Lesson3/Lesson3_1';
import Lesson3_2 from './components/CBTLessons/Lesson3/Lesson3_2';

import Lesson4_1 from './components/CBTLessons/Lesson4/Lesson4_1';
import Lesson4_2 from './components/CBTLessons/Lesson4/Lesson4_2';

import Lesson5_1 from './components/CBTLessons/Lesson5/Lesson5_1';
import Lesson5_2 from './components/CBTLessons/Lesson5/Lesson5_2';

import Lesson6_1 from './components/CBTLessons/Lesson6/Lesson6_1';
import Lesson6_2 from './components/CBTLessons/Lesson6/Lesson6_2';

export const UserContext = createContext()

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 0em;
  padding-bottom: 3em;
  background-image: linear-gradient(45deg, #b95ce4, #4f29cd);
`;

const Routing = () =>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user)
    {
      if(user.role == 'student'){
        dispatch({type:"USER", payload:user})
        history.push('/student')
      }
      else if(user.role == 'admin'){
        dispatch({type:"ADMIN", payload:user})
        history.push('/admin')
      }
      else if(user.role == 'psychiatrist'){
        dispatch({type:"PSYCHIATRIST", payload:user})
        history.push('/psychiatrist')
      }
    }
   
    else{
      history.push('/')
    }
  },[])
  return (
        <Switch>
          <Route path="/" exact >
              <Home />
            </Route>

            <Route path="/exercise" exact >
              <Exercise />
            </Route>

            <Route path="/exercise/breathing" exact >
              <Breathing />
            </Route>

            <Route path="/exercise/aspmts" exact >
              <Aspmt />
            </Route>

            <Route path="/exercise/aspmts/test1" exact>
              <Test1 
                data={Test1Data}
                routeForTest={"/test1"}
                testName={"PHQ-9 Test"}
                testResult={Test1Result}
                reference={"Kroenke K, Wu J, Yu Z, et al. Patient Health Questionnaire Anxiety and Depression Scale: Initial Validation in Three Clinical Trials. Psychosom Med. 2016;78(6):716-727. doi:10.1097/PSY.0000000000000322"}/>
            </Route>

            <Route path="/exercise/aspmts/test2" exact>
              <Test1 
                data={Test2Data}
                routeForTest={"/test2"}
                testName={"GAD-7 Test"}
                testResult={Test2Result}
                reference={"Kroenke K, Wu J, Yu Z, et al. Patient Health Questionnaire Anxiety and Depression Scale: Initial Validation in Three Clinical Trials. Psychosom Med. 2016;78(6):716-727. doi:10.1097/PSY.0000000000000322"}/>
            </Route>

            <Route path="/exercise/aspmts/test3" exact>
              <Test1 
                data={Test3Data}
                routeForTest={"/test3"}
                testName={"OCI-R Test"}
                testResult={Test3Result} 
                reference={"Foa, E. B., Huppert, J. D., Leiberg, S., Langner, R., Kichic, R., Hajcak, G., & Salkovskis, P. M. (2002). The Obsessive-Compulsive Inventory: Development and validation of a short version. Psychological Assessment, 14(4), 485–496. https://doi.org/10.1037/1040-3590.14.4.485"}/>
            </Route>

            {/* <Route path="/exercise/aspmts/test4" exact>
              <Test1 
                data={Test4Data}
                routeForTest={"/test4"}
                testName={"EBPS Test"}/>
            </Route> */}

            <Route path="/exercise/aspmts/test5" exact>
              <Test1 
                data={Test5Data}
                routeForTest={"/test5"}
                testName={"ISI Test"}
                testResult={Test5Result}
                reference={"Morin, C. M. (1993). Insomnia Severity Index (ISI) [Database record]. APA PsycTests. https://doi.org/10.1037/t07115-000"} />
            </Route>

            
            <Route path="/schedule" exact component={Schedule}>
            </Route>


            <Route path="/signin" exact >
              <AppContainer>
                  <AccountBox />
              </AppContainer>
            </Route>

            <Route path="/signup" exact >
              <AppContainer>
                  <AccountBox />
              </AppContainer>
            </Route>

            <Route path="/student" exact >
              <Student />
            </Route>

            <Route path="/admin" exact >
              <Admin />
            </Route>

            <Route path="/admin/add" exact >
              <AddaPsychiatrist />
            </Route>
            
            <Route path="/admin/assign" exact >
              <AssignPsychiatrist />
            </Route>
            
            <Route path="/psychiatrist" exact >
              <Psychiatrist />
            </Route>

            <Route path="/join" exact component={Join}>
            </Route>

            <Route path="/chat" component={Chat}>
            </Route>

            <Route path="/psyjoin" exact component={PsyJoin}>
            </Route>

            <Route path="/psychat" component={PsyChat}>
            </Route>


            <Route path="/admjoin" exact component={AdmJoin}>
            </Route>

            <Route path="/admchat" component={AdmChat}>
            </Route>

            <Route path="/watson" exact >
              <WatsonChat />
            </Route>

            <Route path="/exercise/atc" exact >
              <Atc />
            </Route>

            <Route path="/seeatc" exact >
              <AtcSee />
            </Route>

            <Route path="/allatc" exact >
              <AtcSeeAll />
            </Route>

            <Route path="/alltests" exact>
              <AspmtTestsSeeAll />
            </Route>
            

            <Route path="/cbtlessons" exact >
              <CBTLessons />
            </Route>
            
            <Route path="/cbtlessons/1_1" exact >
              <Lesson1_1 />
            </Route>

            <Route path="/cbtlessons/1_2" exact >
              <Lesson1_2 />
            </Route>

            <Route path="/cbtlessons/2_1" exact >
              <Lesson2_1 />
            </Route>

            <Route path="/cbtlessons/2_2" exact >
              <Lesson2_2 />
            </Route>

            <Route path="/cbtlessons/3_1" exact >
              <Lesson3_1 />
            </Route>

            <Route path="/cbtlessons/3_2" exact >
              <Lesson3_2 />
            </Route>

            <Route path="/cbtlessons/4_1" exact >
              <Lesson4_1 />
            </Route>

            <Route path="/cbtlessons/4_2" exact >
              <Lesson4_2 />
            </Route>

            <Route path="/cbtlessons/5_1" exact >
              <Lesson5_1 />
            </Route>

            <Route path="/cbtlessons/5_2" exact >
              <Lesson5_2 />
            </Route>

            <Route path="/cbtlessons/6_1" exact >
              <Lesson6_1 />
            </Route>

            <Route path="/cbtlessons/6_2" exact >
              <Lesson6_2 />
            </Route>
            
        </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routing />
      </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

