import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SM.css'
function StockMarket() {
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

    const login = (event) =>{
        try{
            console.log("Back to login for now.");
            navigate('/');
        }
        catch(error){
            console.log("Error:", error);
        } 
    }

    const module = (event) =>{
        try{
            console.log("Back to login for now.");
            navigate('/');
        }
        catch(error){
            console.log("Error:", error);
        } 
    }

    return (
        <div class = "main">
            <div class = "EquityIQ"><b>EquityIQ</b></div>            
        </div>  
    );
}

export default StockMarket;
