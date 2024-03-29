/* eslint-disable react/no-array-index-key */
import React from 'react';

export const ActiviesGrid = ({ cards }) => (
  <div data-test="ActiviesGrid">
    <div className=" bg-gray-900">
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
                        {card.title ? (
                          <a href={card.link} target="_blank" rel="noreferrer">
                            <div className="flex items-center mt-3 text-sm font-semibold text-green-400 hover:underline">
                              <div>{card.LinkTitle}</div>
                              <div className="ml-1 text-green-500">
                                <svg
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="w-4 h-4"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </div>
                          </a>
                        ) : null}
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
  </div>
);

export default React.memo(ActiviesGrid);
