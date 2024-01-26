import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Test.css';
import Logo from './img.jpg';
function Test() {
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
        <div class = "test"> 
            <div class = "EquityIQ">
                <h1 onClick={login}>EquityIQ</h1>
            </div>
            <div class = "card-grid">
                <div class = "card" onClick={module}>
                    <div class = "container">
                        <h4 class = "text"><b>Introduction To The Stock Markets</b></h4>
                        <p class = "text">The stock market can play a pivotal role in ensuring your financial security. In this module, you will learn how to get started in the stock market, its fundamentals, how it functions, and the various intermediaries that appertain it.</p>
                    </div>
                </div>   
                <div class = "card">
                    <div class = "container">
                        <h4 class = "text"><b>Technical Analysis</b></h4>
                        <p class = "text">Here, we will discover the complex attributes, various patterns, indicators, and theories that will help you find good trading opportunities in the market.</p>
                    </div>
                </div> 
                <div class = "card">
                    <div class = "container">
                        <h4 class = "text"><b>Fundamental Analysis</b></h4>
                        <p class = "text">The Fundamental Analysis explores Equity research by reading financial statements and annual reports, etc of a stock to find long-term investing opportunities.</p>
                    </div>
                </div> 
                <div class = "card">
                    <div class = "container">
                        <h4 class = "text"><b>Markets and Taxations</b></h4>
                        <p class = "text">Users should be informed of the taxes applicable to their investments and trades. This module outlines essential topics like calculating your turnover, preparing balance sheet and P&L statements, and filing your Income Tax Returns.</p>
                    </div>
                </div>
            </div>
        </div>   
    );
}

export default Test;
