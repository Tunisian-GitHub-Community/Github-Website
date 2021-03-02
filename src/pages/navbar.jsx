import React from 'react'
import logo from './logo.png'

function Navbar() {

    return (
        <div className="Navbar">
{/* This example requires Tailwind CSS v2.0+ */}
<div>
  <nav className="bg-gray-900 ">
    <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-10 w-10" src={logo} alt="Github's Tunisian Community" />
           
          </div>
          <div className="flex-shrink mx-auto items-center justify-between">
          <h1 className="text-white  hover:text-white px-7 rounded-md text-base font-bold ">Github's</h1>
          <h1 className="text-white  px-3 rounded-md text-xs font-thin ">Tunisian Commmunity </h1>
          </div>
          <div className="hidden md:block  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

      
            </div>
          </div>
        </div>
        
      
      </div>
    </div>

  </nav>
 
</div>


        </div>
    )
}

export default Navbar
