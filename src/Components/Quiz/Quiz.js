import React, { useState } from 'react';
import Options from '../Options/Options';
import './Quiz.css'
const Quiz = ({data,sl}) => {
    const {id,name,question,correctAnswer,options}=data
      const [selected,setSelected]=useState(false);
    return (
        <div className='quiz-container'>
            <div className='quistion'>
            <h3>Quiz-{sl} {question}</h3>
            </div>
            <div className='options-container'>
             {
                options.map((option,index)  =><Options selected={selected} setSelected={setSelected} correctAnswer= 
                 {correctAnswer} key={index} 
                 option={option}/>)
             } 
            </div>
        </div>
    );
};

export default Quiz;