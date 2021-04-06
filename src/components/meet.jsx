import React from 'react';

/* meet the team componenet */
function meet() {
  return (
    <section className="text-gray-400 body-font">
      <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">
            Meet The Team
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            We are a team of coding enthusiasts, young student developers.
            <br />
            you could be one of us !
          </p>
          <div className="flex justify-center">
            <a href="/team" className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Our Team</a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="/assets/meet.png" />
        </div>
      </div>
    </section>
  );
}

export default meet;
