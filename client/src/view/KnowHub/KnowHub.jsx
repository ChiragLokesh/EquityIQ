import React from 'react';
import { useNavigate } from 'react-router-dom';
import './KH.css';

function KnowHub() {
    const navigate = useNavigate();

    const handleEvent = async (event) => {
        event.preventDefault();
        try {
          console.log('Event handled');
          navigate('/LoginSuccessPage');
        } catch (error) {
          console.error('Error:', error);
        }
    };

    const handleClick = (event) =>{
        try{
            console.log("Back to login for now.");
            navigate('/');
        }
        catch(error){
            console.log("Error:", error);
        }
        
    }

    return (
        <div className="grid grid-cols-4 gap-4">
            <div class = "mains">
                <h1 class = "EquityIQ" onClick={handleClick}>EquityIQ</h1>
            </div>
            <div class = "common">
                <div class = "modules">
                    <div>
                        <h1 class = "headings">The stockmarket</h1>
                    </div>
                </div>
                <div class = "modules">02</div>
                <div class = "modules">03</div>
                <div class = "modules">04</div>
                <div class = "modules">05</div>
                <div class = "modules">06</div>
                <div class = "modules">07</div>
                <div class = "modules">08</div>
                <div class = "modules">09</div>
            </div>
        </div>
           
    );
}

export default KnowHub;
