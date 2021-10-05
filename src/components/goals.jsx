/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from "prop-types";

export const Goals = ({goals}) => (
    <div data-test="Goals">
      <section className="py-12  lg:py-16 xl:py-28">
        <div className="container mx-auto px-5">
          <div className="grid gap-6 lg:gap-10 xl:grid-cols-3">
            <div className="space-y-2 lg:space-y-4">
              <h2 className="text-2xl font-black sm:text-3xl">Our Goals</h2>
              <p className="w-full sm:w-1/2 xl:w-80 text-gray-600 md:text-lg">We're on a futuristic strategy and plan to
                achieve our goals </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-10 xl:col-span-2">
              {goals.map((goal, i) => (

                  <div key={i}
                       className=" bg-white p-5 rounded-xl shadow space-y-2 transition-shadow duration-200 ">
                    <dt>
                      <div

                          className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
                        {goal.svg}
                      </div>
                      <p className="ml-16 text-xl font-medium">{goal.title}</p>
                    </dt>
                    <dd className="ml-16 text-gray-500">
                      {goal.subtitle}
                    </dd>
                  </div>

              ))}

            </div>

          </div>
        </div>
      </section>
    </div>
);


Goals.propTypes = {
  cards: PropTypes.instanceOf(Array).isRequired,
};

export default React.memo(Goals);
