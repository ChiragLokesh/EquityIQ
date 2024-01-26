import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './logo.png';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const provider = new GoogleAuthProvider();

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [okMessage, setOkMessage] = useState('');
  const navigate = useNavigate();


  const emailAndPasswordSignIn = async (event) => {
    event.preventDefault();

    try {
      // Sign in with email/password
      await signInWithEmailAndPassword(auth, email, password);

      // If successful, you can add your success message here
      console.log('Login with email/password successful');

      // Now you can navigate or perform additional actions if needed
      navigate('/LoginSuccessPage');

      // Set the success message
      setOkMessage('Login successful');

      // Clear the error message
      setErrorMessage('');
    } catch (error) {
      // If there's an error, you can handle it here
      console.error('Email/Password Sign-In Error', error);

      // Display an error message to the user
      setErrorMessage('Failed to sign in. Please check your email and password.');

      // Clear the success message
      setOkMessage('');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      // Sign in with Google
      await signInWithPopup(auth, provider);

      // If successful, you can add your success message here
      console.log('Login with Google successful');

      // Now you can navigate or perform additional actions if needed
      navigate('/LoginSuccessPage');

      // Clear the error message
      setErrorMessage('');
    } catch (error) {
      // If there's an error, you can handle it here
      console.error('Google Sign-In Error', error);

      // Display an error message to the user
      setErrorMessage('Failed to sign in with Google. Please try again.');

      // Clear the success message
      setOkMessage('');
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-1/4 w-1/4" src={Logo} alt="Your Company" />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight dark:text-white text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white dark:bg-gray-800 px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" action="#" method="POST">
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
                <label htmlFor="password" className="block text-sm font-medium leading-6 dark:text-white text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 dark:bg-gray-300 dark:text-gray-900   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm leading-6">
                <Link to="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  onClick={emailAndPasswordSignIn}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div>
              <div className="relative mt-10">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-200 dark:border-gray-700" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white dark:bg-gray-600 px-6 dark:text-white text-gray-900">Or continue with</span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={handleGoogleSignIn}
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                >
                  <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                  <path
                      d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                      fill="#34A853"
                    />
                  </svg>
                  <span className="text-sm font-semibold leading-6">Google</span>
                </button>
                {errorMessage && (
                  <p className="mt-2 text-red-500 text-sm">{errorMessage}</p>
                )}
                {okMessage && (
                  <p className="mt-2 text-green-500 text-sm">{okMessage}</p>
                )}
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to="/sign-up" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Create an account today
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
