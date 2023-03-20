import React from 'react';
import "./Questionare.css";

const Questionaire = ({ 
    selectedAnswer,
    showAnswers,
    handleAnswer, 
    handleNextQuestion,
    testName,
    reference,
    index,
    data: { question, options },
}) => {
    return (
        <div>
        <div style={{height: "100vh"}}>
            <div className="atc_charts">
                    <h1>{testName}</h1>
                    
                    <div className="charts__right">        
                        <div className="charts__right__title">
                            <div>
                                <h3>Q{index+1}. {question}</h3>
                            </div>
                            <i className="fa fa-usd" aria-hidden="true"></i>
                        </div>

                        <div className="charts__right__cards">
                            {options.map((answer) => {
                                    const textColor = showAnswers 
                                    ? answer === selectedAnswer 
                                        ? 'text-white' 
                                        : 'text-warning'
                                    : 'text-dark';

                                return(
                                    <div key={answer} className={`cardd1 ${textColor}`} onClick={() => handleAnswer(answer)}>
                                        <label className={`radio`}> 
                                            <input type="radio" />
                                            <span>{answer}</span>
                                        </label>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="charts_right_cards">
                            {showAnswers && (
                                <div style={{margin: "auto", marginTop: "20px"}}>
                                    <button className="signin_button" type="button" onClick = {handleNextQuestion}>Next</button>
                                </div>
                                
                            )}
                        </div>    
                    </div>
                </div>
            </div>
            <div className="col-3">
                <p>From, &nbsp; {reference} </p>
            </div>
        </div>
                
)};

export default Questionaire;


