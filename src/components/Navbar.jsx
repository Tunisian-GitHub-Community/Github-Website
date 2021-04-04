import React from "react";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <div className="navbar">
        <nav className="bg-gray-800">
          <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10"
                    src="./assets/logo.png"
                    alt="Github's Tunisian Community"
                  />
                </div>
                <div className="flex-shrink mx-auto items-center justify-between">
                  <a href="/">
                    <h1 className="text-white  hover:text-white px-7 rounded-md text-base font-bold ">
                      Github's
                    </h1>
                    <h1 className="text-white  px-3 rounded-md text-xs font-thin ">
                      Tunisian Commmunity{" "}
                    </h1>
                  </a>
                </div>
                <div className="hidden md:block  ">
                  <div className=" mx-10 px-4 flex items-baseline">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a
                      href="/"
                      className="bg-gray-900 text-white px-4 mx-2 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </a>
                    <a
                      href="/team"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 mx-2 py-2 rounded-md text-sm font-medium"
                    >
                      Team
                    </a>
                    <a
                      href="/projects"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 mx-2 py-2 rounded-md text-sm font-medium"
                    >
                      Projects
                    </a>
                    <a
                      href="/projects"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 mx-2 py-2 rounded-md text-sm font-medium"
                    >
                      About us
                    </a>
                  </div>
                </div>
              </div>
              {/* TO DO : this Button should change according to the active component: if the Survey component active is active = it should 
              display "Take Survey" */}
              <div className="hidden md:block flex items-left">
                <div className="inline-block ">
                  <a
                    href="survey"
                    type="button"
                    className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-600 hover:bg-white hover:text-gray-800 hover:shadow-lg flex items-center"
                  >
                    Join The Challenge!
                  </a>
                </div>
              </div>

              <div className="mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <button
                  type="button"
                  className="bg-gray-800 inline-flex items-center justify-center
                 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 
                 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white  "
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  {/*
  

              Menu open: "hidden", Menu closed: "block"
            */}
                  <div className={navbarOpen ? " hidden" : " block"}>
                    <svg
                      className=" h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </div>
                  <div className={navbarOpen ? " block" : "hidden"}>
                    <svg
                      className="h-6 w-6"
                      ns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex items-left">
              <div
                className={
                  "md:hidden  ease-in-out" + (navbarOpen ? " flex" : " hidden")
                }
                id="mobile-menu"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <a
                    href="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="/team"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Team
                  </a>
                  <a
                    href="/projects"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Projects
                  </a>
                  <a
                    href="/about-us"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    About us
                  </a>
                  <a
                    href="/survey"
                    className="text-white bg-green-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Join the Challenge
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
