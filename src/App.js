
import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState,useEffect } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';




const App = () => {
    
 
    return (
        <>

            <div className="container">
                <h2>Jhelum AI</h2>
                <br/>
                <p>At your Service</p>

                <div className="main-content">
                User:
                <div contentEditable='true' data-text=" Ask anything, your words will appear here" >{transcript}</div>

               
                    
                </div>
                <div className="user-content">
                Jhelum : 
                <div className="result" contentEditable='true' data-text="Processing your Request..." >{Result}</div>
                </div>
                <div className="author">Made By Hanan</div>



            </div>
            <div className="btn-style">
                

                <button onClick={startListening}>Listen</button>
                <button onClick={stopListening}>Flow</button>
                <Link  to="/" className="link">
            <button className="start">
            go back
        </button></Link>


            </div>

        </>
    );


};
export default App;

