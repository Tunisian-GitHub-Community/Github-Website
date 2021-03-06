import React from 'react'

function RegistrationBanner() {
    function hidee(){
        document.getElementById('hide').style.display = 'none';
    };
    return (
      
        <div className="RegistrationBanner">
            
          
{/* This example requires Tailwind CSS v2.0+ */}
<div className="bg-indigo-600" id="hide">
  <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between flex-wrap">
      <div className="w-0 flex-1 flex items-center">
        <span className="flex p-2 rounded-lg bg-indigo-800">
          {/* Heroicon name: outline/speakerphone */}
          <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        </span>
        <p className="ml-3 font-medium text-white truncate">
          
          <span className=" md:inline">
            This month's 
            registration is closed.
          </span>
        </p>
      </div>
      
      <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
        <button onClick={hidee}  type="button" className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
          <span className="sr-only">Dismiss</span>
          <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default RegistrationBanner
