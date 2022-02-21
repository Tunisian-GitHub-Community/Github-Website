import React from 'react';
import { NavLink } from 'react-router-dom';

const WhereToGoPage = ({ history }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 justify-center items-center">
        <div className="flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className=" sm:text-9xl text-7xl mb-4 font-mono text-gray-200">
            4O4
          </h1>
          <p className="mb-8 leading-relaxed">
            وين ماشي ؟
            <br />
            Looks like you lost your way.
          </p>
          <br />
          <div className="flex justify-center">
            <button
              type="button"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              onClick={() => history.goBack()}
            >
              Go Back
            </button>
            <NavLink
              to="/"
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Home
            </NavLink>
          </div>
        </div>
      </div>
      <br />
    </section>
  );
};

export default WhereToGoPage;
