
import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState,useEffect } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';


// const greet = ()=>{
//     const msg1 = new SpeechSynthesisUtterance()
// msg1.text = "Welcome Sir What Can i Help You with Today"
// window.speechSynthesis.speak(msg1)  


// }



const App = () => {
    
    const msg = new SpeechSynthesisUtterance()

    const [Result,setResult] = useState("")
    // const [Count,setCount] = useState(0)

    // function speaknow(){


    // }

    const startListening = () => {
        SpeechRecognition.startListening({ language: 'en-IN' });

}
const getCustomersData = async () => {
    await axios
        .get(`https://jhelumaibackend.onrender.com/Act like Your name is Jhelum an Artifiical intellegence created by Hanan, a Software developer.Now With That in Mind answer just give answer according to my query,dont include Asterisks(*) in answer, And just answer my quetsion, Here is My Query: " ${transcript}".`)
        .then(res => setResult(res.data.message.toString()  ))


        .catch(error => console.log(error));

  };
useEffect(()=>{       

    msg.text = Result
    window.speechSynthesis.speak(msg)

  

},[Result])


    let { transcript ,listening, browserSupportsSpeechRecognition } = useSpeechRecognition();


    const stopListening = () => {

// const getCustomersData = () => {
//     axios
//         .get("http://localhost:4000/what is a humaniod")
//         .then(res => console.log(res.data.message.toString()  ))
//         .catch(error => console.log(error));
//   };
//   getCustomersData();
        SpeechRecognition.stopListening();
        getCustomersData();

        console.log(transcript)






        // const handleOnEnd = () => {
        //     if (!listening) { // Ensure listening has stopped
        //       if (transcript) {
        //         msg.text = transcript
        //         window.speechSynthesis.speak(msg)
                
        //       }
        //     }
        //   };
        
        //   useEffect(() => {
        //     const recognition = SpeechRecognition.recognition;
        //     recognition.onend = handleOnEnd;
        
        //     return () => {
        //       recognition.onend = null;
        //     };
        //   }, []);




    }
    if (!browserSupportsSpeechRecognition) {
        return null
    }
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

