import React from 'react'



function Header() {
    return (
        <div className="Header ">
<div className="bg-gray-800 flex relative items-center overflow-hidden">
  <div className="container mx-auto px-6 flex relative py-16">
    <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
      <span className="w-20 h-2 bg-white mb-12">
      </span>
      <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-white ">
        Digital
        <span className="text-5xl text-indigo-600 sm:text-7xl">
        Community
        </span>
      </h1>
      <p className="text-sm sm:text-base text-white py-6">
        Github's Tunisian Community is a place for Studnet Developers to share , engage and collobarate.
      </p>
      <div className="flex mt-8">
        <a href="https://github.com/Tunisian-GitHub-Community" className="uppercase py-2 px-4 rounded-lg bg-indigo-600 border-2 border-transparent text-white text-md mr-4 hover:bg-indigo-900">
          Our Github
        </a>
        <a href="https://discord.gg/MzXu6mM5eN" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-indigo-600 text-indigo-600  hover:border-indigo-400  hover:text-indigo-400 text-md">
          Engage
        </a>
      </div>
    </div>
    <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
      <img src="/assets/header.png" className="max-w-xs md:max-w-sm m-auto" />
    </div>
  </div>
</div>

           
        </div>
    )
}

export default Header
