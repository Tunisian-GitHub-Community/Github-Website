import React, {useState} from "react";

function Header() {
  const [show, setShow] = useState(false);
  return (

      <div>

        <header className="bg-gray-900 pattern " id="home">
          <div className="container px-6 py-12 mx-auto">

            <div className="flex flex-col items-center py-12 lg:h-128 lg:flex-row">
              <div className="lg:w-1/2 sm:mt-4 md:mt-8 lg:mt-12">
                <h2 className="text-4xl font-semibold text-gray-100">Digital Community
                </h2>
                <h3 className="text-4xl font-semibold text-gray-100">
                  Connecting Student <span className="text-green-500">Developers</span>
                </h3>
                <p className="mt-7 text-gray-100">
                  A community of students passionate about technologies, our goal is
                  to fill the gap between what we learn in university and what the
                  job market actually requires.
                </p>
              </div>
              <div className="flex  mb-8 lg:w-1/2 lg:justify-end lg:mt-0">
                <div className="max-w-sm bg-white rounded-lg  sm:mt-4 md:mt-8 lg:mt-12 dark:bg-gray-800">
                  <div className="p-5 text-center mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-white fo">
                      NewsLetter
                    </h2>
                    <form action="#">
                      <div className="mt-8">
                        <input
                            className="block w-full px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            type="email"
                            placeholder="Email address"
                            aria-label="Email address"
                        />
                        <button
                            className="block w-full px-4 mt-4 py-2 font-semibold text-white duration-200  bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800 ">
                          Keep me updated
                        </button>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

      </div>


  );
}

export default Header;
