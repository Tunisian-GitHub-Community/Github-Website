import React from 'react'


function Registration() {
  return (
    <div className="registration">
      <div className="bg-gray-800 flex items-center p-5 overflow-hidden relative">
        <div className="flex-1 min-h-full min-w-full rounded-3xl bg-gray-200 shadow-xl p-10 lg:p-20 text-gray-900 relative md:flex items-center text-center md:text-left">
          <div className="w-full md:w-1/2">
            <div className="mb-10 md:mb-20 text-gray-600 font-base">
              <h1 className="font-black uppercase text-3xl lg:text-5xl text-gradient bg-gradient-to-r from-blue-500 to-blue-600 mb-10 ">Registration Closed</h1>
              <p> We're sorry to inform you that this month's
            registration is closed.</p>
            </div>
            <div className="mb-20 md:mb-0">

              <a className="py-2 px-4 bg-blue-600 text-gray-50 font-semibold border border-blue-600 rounded-lg   hover:text-blue-600 hover:bg-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                href="https://discord.gg/MzXu6mM5eN">  Join our Discord </a>

            </div>
          </div>
          <div className="w-full md:w-1/2 text-center">
            <img className="octo " src="./assets/registration.png" alt="octocat" />
          </div>
        </div>
        <div className="w-64 md:w-96 h-96 md:h-full bg-gray-900 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform" />

      </div>
    </div>




  )
}

export default Registration
