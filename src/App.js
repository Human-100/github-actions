
import "./App.css"

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
                <div contentEditable='true' data-text=" Ask anything, your words will appear here" ></div>

               
                    
                </div>
                <div className="user-content">
                Jhelum : 
                <div className="result" contentEditable='true' data-text="Processing your Request..." ></div>
                </div>
                <div className="author">Made By Hanan</div>



            </div>
            <div className="btn-style">
                

                <button >Listen</button>
                <button >Flow</button>
                <Link  to="/" className="link">
            <button className="start">
            go back
        </button></Link>


            </div>

        </>
    );


};
export default App;

