import React, { useState } from 'react';
import Options from '../Options/Options';
import './Quiz.css'
import { EyeIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Quiz = ({ data, sl }) => {
    const { id, name, question, correctAnswer, options } = data
    const [selected, setSelected] = useState(false);
    const [openA, SetOpenA] = useState(false)
    console.log(openA)
    const currectAnswer = () => {
        // toast.info(`The Currect Answer is " ${correctAnswer} "`, {
        //     position: "top-center",
        //     autoClose: 2000,

        //     theme: "light",

        //     });


    }
    return (
        <div className={`quiz-container `}>
            <div onClick={currectAnswer} >
                {/* EyeIcon bar  */}
                <div className={`show-currect-ans ${openA ? 'block1' : 'block2'} `} >
                    <div className='iconx' onClick={() => { SetOpenA(false) }} >
                        <XMarkIcon />
                    </div>
                    <div className='show-contents'>
                        <h3>Q:- <small>{question}</small></h3>
                        <h4>The Currect Answer is" {correctAnswer} "</h4>
                    </div>

                </div>
                <div onClick={() => { SetOpenA(!openA) }}>
                    <EyeIcon className='icon' />
                </div>

            </div>
            <div className='question'>
                <h3>Quiz-{sl} {question}</h3>
            </div>

            <div className='options-container'>
                {
                    options.map((option, index) => <Options selected={selected} setSelected=
                        {setSelected} correctAnswer=
                        {correctAnswer} key={index}
                        option={option} />)
                }
            </div>
        </div>
    );
};

export default Quiz;