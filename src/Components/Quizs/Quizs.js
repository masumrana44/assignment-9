import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import  './Quizs.css'

const Quizs = () => {
    const quizs=useLoaderData()
    const quizsData=quizs.data.questions;
    // console.log(quizs.data)
    const {name}=quizs.data
     
    return (
        <div className= 'quiz_main'>
           
           <h1> Quiz of {name}</h1>
            
           <div className='all-quiz-container'>
           {
                quizsData.map((data,index)=><Quiz data={data} sl={index+1} key={data.id}/>)
            }
           </div>

        </div>
    );
};

export default Quizs;