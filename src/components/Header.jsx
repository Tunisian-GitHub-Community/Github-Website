import React from 'react'



function Header() {
  return (
    <div className="Header ">
      <div className="bg-gray-800 flex relative items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span className="w-20 h-2 bg-white mb-12">
            </span>
            <h1 className="animate__animated animate__fadeIn font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-white ">
              Digital
        <span className="text-5xl text-green-600 sm:text-7xl">
                Community
        </span>
            </h1>
            <p className="text-sm sm:text-base text-white py-6">
              A community of students passionate about technologies, our goal is to fill the gap between what we learn in university and what the job market actually requires.</p>
            <div className="flex mt-8">
              <a href="https://github.com/Tunisian-GitHub-Community" className="uppercase py-2 px-4 rounded-lg bg-green-600 border-2 border-transparent text-white text-md mr-4 hover:bg-green-900">
                Our Github
        </a>
              <a href="https://discord.gg/MzXu6mM5eN" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-green-600 text-green-600  hover:border-green-400  hover:text-green-400 text-md">
                Engage
        </a>
            </div>
          </div>
          <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
            <img src="/assets/header.png" alt="header" className="max-w-xs md:max-w-sm m-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
