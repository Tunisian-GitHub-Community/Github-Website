/* eslint-disable react/no-array-index-key */
import React from 'react';
import RulesDropDown from "../components/RulesDropDown";
import GuidelinesData from "./GuidelinesPage.data";

export const GuidelinesPage = () => (
  <div data-test="GuidelinesPage">
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
          <div className="flex flex-row">
            {
              GuidelinesData.map((data, i) => (
                <RulesDropDown key={i} title={data.title} subtitles={data.subtitle} />
              ))
            }
          </div>
        </div>
      </section>
    </div>
  </div>
)

export default GuidelinesPage;
