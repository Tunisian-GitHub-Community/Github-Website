import React from 'react'

function WhereToGoPage() {
    function goBack() {
        window.history.back();
      };
    return (


  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-15 md:mb-0">
        <img className="object-cover object-center rounded" alt="error" src="./assets/error.png" />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className=" sm:text-9xl text-7xl mb-4 font-mono text-gray-200">4O4</h1>
        <p className="mb-8 leading-relaxed">This is not the page you're looking for. <br/> Looks like you lost you way but don't worry we got you covered</p>

        <div className="flex justify-center">
          <button   className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg" onClick={goBack}>Go Back</button>
          <a href="/" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Home</a>
        </div>
      </div>
    </div>
  </section>


    )
}

export default WhereToGoPage
