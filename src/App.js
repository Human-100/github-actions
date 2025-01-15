import "./App.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const App = () => {
    const [result, setResult] = useState("");
    const [transcript, setTranscript] = useState("");
    const [isSpeaking, setIsSpeaking] = useState(false); // Track speaking state

    const startListening = () => {
        SpeechRecognition.startListening({ language: 'en-IN' });
    };

    const getCustomersData = async () => {
        try {
            const response = await axios.get(`https://jhelumaibackend.onrender.com/Act like Your name is Jhelum an Artifiical intellegence created by Hanan, a Software developer.Now With That in Mind answer just give answer according to my query,dont include Asterisks(*) in answer, And just answer my quetsion, Here is My Query: " ${transcript}".`);
            setResult(response.data.message.toString());
        } catch (error) {
            console.error("Error fetching data:", error);
            setResult("Error fetching response from server."); // Provide user feedback
        }
    };

    useEffect(() => {
        if (result && !isSpeaking) { // Only speak if there's a result and not already speaking
            const msg = new SpeechSynthesisUtterance();
            msg.text = result;
            msg.onstart = () => setIsSpeaking(true); // Set speaking state to true
            msg.onend = () => setIsSpeaking(false);   // Set speaking state back to false
            msg.onerror = (event) => {
                console.error("Speech synthesis error:", event);
                setIsSpeaking(false); // Ensure isSpeaking is reset on error
            };
            window.speechSynthesis.speak(msg);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result]);

    let { listening, browserSupportsSpeechRecognition } = useSpeechRecognition();

    const stopListening = () => {
        SpeechRecognition.stopListening();
        getCustomersData();
        setTranscript(transcript); // Update transcript state
    };

    if (!browserSupportsSpeechRecognition) {
        return <div>Browser doesn't support speech recognition.</div>;
    }

    return (
        <div className="container">
            <h2>Jhelum AI</h2>
            <br />
            <p>At your Service</p>

            <div className="main-content">
                User:
                <div contentEditable='true' data-text=" Ask anything, your words will appear here" onChange={(e) => setTranscript(e.target.innerText)}>{transcript}</div>
            </div>
            <div className="user-content">
                Jhelum:
                <div className="result" contentEditable='true' data-text="Processing your Request..." >{result}</div>
            </div>
            <div className="author">Made By Hanan</div>

            <div className="btn-style">
                <button onClick={startListening} disabled={listening}> {/* Disable button while listening */}
                    {listening ? "Listening..." : "Listen"}
                </button>
                <button onClick={stopListening} disabled={!transcript}>Flow</button>
                <Link to="/" className="link">
                    <button className="start">Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default App;