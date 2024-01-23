import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import Logo from './logo.png';
import { auth } from '../../firebase/firebase';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [okMessage, setOkMessage] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = async (event) => {
    event.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      setOkMessage('Password reset email sent. Check your inbox.');
      setErrorMessage('');
    } catch (error) {
      console.error('Forgot Password Error', error);
      setErrorMessage('Failed to send password reset email. Please try again.');
      setOkMessage('');
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-1/4 w-1/4" src={Logo} alt="Your Company" />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight dark:text-white text-gray-900">
            Forgot Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white dark:bg-gray-800 px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleForgotPassword}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 dark:text-white text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 dark:bg-gray-300 dark:text-gray-900 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Reset Password
                </button>
              </div>
              {errorMessage && (
                <p className="mt-2 text-red-500 text-sm">{errorMessage}</p>
              )}
              {okMessage && (
                <p className="mt-2 text-green-500 text-sm">{okMessage}</p>
              )}
            </form>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            Remember your password?{' '}
            <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default ForgotPasswordPage;
