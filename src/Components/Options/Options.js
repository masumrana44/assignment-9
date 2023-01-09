import React, { useEffect, useState } from 'react';
import './Options.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// let selected=false;
const Options = ({ option, correctAnswer }) => {
    const [selected, setSelected] = useState(false);
    //  console.log( 'hello')
    const CheakValue = (event) => {
         
        // console.log(selected)
        if(selected){
            return
        }
        
        if (option === correctAnswer) {

            event.currentTarget.classList.add(
                'css2',

            );
            toast.success(' Yea. Right Answer!', {
                position: "top-center",
                autoClose: 1700,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                
                });
        }
        else {
            
            event.currentTarget.classList.add(
                'css1'

            );
            toast.warn(' Wrong Answer!', {
                position: "top-center",
                autoClose: 1700,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
       setSelected(true);
    }
     
    return (

        <div onClick={ CheakValue} className={`option-container`}>
            <p >{option}</p>
            <ToastContainer
                 
            />

        </div>

    );

};

export default Options;