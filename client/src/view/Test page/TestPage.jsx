import React from "react";
// Learn how navigation works
import { Link, useNavigate } from 'react-router-dom';

function TestPage(){
  const navigate = useNavigate();

  const idk = async (event) => {
    event.preventDefault(); // Find out what prevent default is
    // Copied from LoginPage 
    try {
    
      // Log to see if this works
      console.log('Testing 123');

      // Now you can navigate or perform additional actions if needed
      navigate('/LoginSuccessPage');

      // Set the success message
      setOkMessage('Login successful');

      // Clear the error message
      setErrorMessage('');
    } catch (error) {
      // If there's an error, you can handle it here
      console.error('Some error', error);

      // Display an error message to the user
      setErrorMessage('Something went wrong');

      // Clear the success message
      setOkMessage('');
    }
  };

    return(
        <div className="flex min-h-screen justify-center items-center">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white dark:bg-gray-800 px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
              Testing Navigations and actions
            </h2>
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
              HELLO User,
            </h2>
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
              Welcome to Equity IQ
            </h2>
          </div>
          <button type="button" class="bg-indigo-500 ..." disabled>
            Click me
        </button>
        </div>
      </div>
    );
}

export default TestPage;