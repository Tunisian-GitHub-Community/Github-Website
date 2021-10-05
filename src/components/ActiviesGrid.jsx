/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from "prop-types";

export const ActiviesGrid = ({ cards }) => (
  <div data-test="ActiviesGrid">
    {/*  <div className=" bg-gray-900">
      <main>
        <div className="py-15 pb-20">
          <div className="mx-auto max-w-7xl py-25 sm:px-6 lg:px-8">
            <div className="overflow-hidden   bg-gray-800 sm:rounded-lg">
              <div>
                <div className="grid grid-cols-1 bg-opacity-25 bg-gray-800 md:grid-cols-2">
                  {cards.map((card, i) => (
                    <div data-test="ActiviesItem" key={i} className="p-6">
                      <div className="flex items-center">
                        {card.icon}
                        <div className="ml-4 text-lg font-semibold leading-7  text-gray-200">
                          {card.title}
                        </div>
                      </div>
                      <div className="ml-12">
                        <div className="mt-2 text-sm text-gray-400">
                          {card.text}

                        </div>
                        {
                          card.title ? (
                            <a href={card.link} target="_blank" rel="noreferrer">
                              <div className="flex items-center mt-3 text-sm font-semibold text-green-400 hover:underline">
                                <div>{card.LinkTitle}</div>
                                <div className="ml-1 text-green-500">
                                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              </div>
                            </a>
                          ) : null
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div> */}
    <section className="py-12 pattern lg:py-16 xl:py-28">
      <div className="container mx-auto px-5">
        <div className="grid gap-6 lg:gap-10 xl:grid-cols-3">
          <div className="space-y-2 lg:space-y-4">
            <h2 className="text-2xl font-black sm:text-3xl">Our Goals</h2>
            <p className="w-full sm:w-1/2 xl:w-80 text-gray-600 md:text-lg">Voluptates aliquid est labore dignissimos
              similique incidunt porro temporibus. Omnis commodi dolorem.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-10 xl:col-span-2">
            <div
                className="relative bg-white p-5 rounded-xl shadow space-y-2 transition-shadow duration-200 hover:shadow-lg md:p-8">
              <dt>
                <div
                    className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                </div>
                <p className="ml-16 text-xl font-medium">Step one</p>
              </dt>
              <dd className="ml-16 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt
                repellat distinctio.
              </dd>
            </div>

            <div
                className="relative bg-white p-5 rounded-xl shadow space-y-2 transition-shadow duration-200 hover:shadow-lg md:p-8">
              <dt>
                <div
                    className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                  </svg>
                </div>
                <p className="ml-16 text-xl font-medium">Step two</p>
              </dt>
              <dd className="ml-16 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt
                repellat distinctio.
              </dd>
            </div>

            <div
                className="relative bg-white p-5 rounded-xl shadow space-y-2 transition-shadow duration-200 hover:shadow-lg md:p-8">
              <dt>
                <div
                    className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                </div>
                <p className="ml-16 text-xl font-medium">Step three</p>
              </dt>
              <dd className="ml-16 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt
                repellat distinctio.
              </dd>
            </div>

            <div
                className="relative bg-white p-5 rounded-xl shadow space-y-2 transition-shadow duration-200 hover:shadow-lg md:p-8">
              <dt>
                <div
                    className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <p className="ml-16 text-xl font-medium">Step four</p>
              </dt>
              <dd className="ml-16 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt
                repellat distinctio.
              </dd>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
);


ActiviesGrid.propTypes = {
  cards: PropTypes.instanceOf(Array).isRequired,
};

export default React.memo(ActiviesGrid);
