import React from 'react'

function Guidelines() {
  return (
    <div>
      <div>
        <section className="text-gray-300">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-indigo-500 mb-4">
                Community Guidelines
        </h1>
              <p className="text-base leading-relaxed text-gray-200 xl:w-2/4 lg:w-3/4 mx-auto">
                In the interest of fostering an open and welcoming environment for our members, we pledge to make our community a
                harassment-free experience
                for everyone, regardless of age, disability, ethnicity,  level of experience, personal appearance, religion.
        </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-800 rounded-md py-2 px-4">
                    Our Standards
            </summary>
                  <span className="py-4">
                    <ul >
                      <li className="py-2" >- Being respectful of differing opinions and viewpoints.
                    </li>
                      <li className="py-2" >- Using welcoming and inclusive language. </li>
                      <li className="py-2" >- Gracefully accepting constructive criticism.</li>
                      <li className="py-2" >- Focusing on what is best for the community. </li>
                    </ul>


                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-800 rounded-md py-2 px-4">
                    Unacceptable behaviours
            </summary>
                  <span>
                    <ul className="py-4">
                      <li className="py-2">- The use of sexualized language or imagery and unwelcome sexual attention or advances.
                    </li>
                      <li className="py-2">- Derogatory comments, and personal attacks.  </li>
                      <li className="py-2">- Other conduct which could reasonably be considered inappropriate in a professional setting.  </li>
                    </ul>

                  </span>
                </details>

              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-800 rounded-md py-2 px-4">
                    Actions and Reports
            </summary>
                  <div className=" py-4">
                    Community leaders are responsible for clarifying the standards of acceptable behavior and take appropriate
                    and fair corrective action in response to any instances of unacceptable behavior.
             <br /> if you feel overwhelmed by someone's action , we advise you to report it to the Community Moderators.
            </div>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-800 rounded-md py-2 px-4">
                    Scope
            </summary>
                  <span >
                    <div className="py-4">   The code of conduct applies in both online and offline interactions between members.</div>

                  </span>
                </details>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Guidelines
