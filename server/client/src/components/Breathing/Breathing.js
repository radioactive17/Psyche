import React,{useEffect, useState} from 'react';
import './Breathing.css';

const Breathing = ()=> {
    const [breathingState,setbreathingState] = useState("Inhale");
    const [time, setTime] = useState(60000);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(()=> {
        let interval = null;

        if(timerOn)
        {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 10);

            }, 10)

            
        } 
        
        else if( !timerOn)
        {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timerOn]);

    if(breathingState === 'Inhale'){
        setTimeout(function(){setbreathingState("Hold");},3000);
    }

    if(breathingState === 'Hold'){
        setTimeout(function(){setbreathingState("Exhale");},3000);
    }

    if(breathingState === 'Exhale'){
        setTimeout(function(){setbreathingState("Inhale");},3000);
    }

    



    return (
        <div>
        <div className="breathing-body">
        <div id="display" style={{paddingTop: "50px"}}>
            <h5>It is recommended that you take 5 sets each of 1 minute. </h5><br></br>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div id="buttons">
        {!timerOn && time === 0 && (
          <button className="breathing_button" onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && <button className="breathing_button" onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time > 0 && (
          <button className="breathing_button" onClick={() => setTime(60000)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button className="breathing_button" onClick={() => setTimerOn(true)}>Resume</button>
        )}
      </div>
            <div className={"breathing-container"+ (breathingState==='Inhale' ? " grow" : breathingState==='Hold' ? " grow" : " shrink")} id="container">
                <div className="circle"></div>
                    <p id="text">{breathingState}</p>
                <div className="pointer-container">
                    <span className="pointer"></span>
                </div>

                <div className="gradient-circle"></div>
            </div>
        </div>
        </div>
    )
}

export default Breathing
