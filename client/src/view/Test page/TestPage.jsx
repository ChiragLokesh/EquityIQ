import React from "react";

function TestPage(){

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