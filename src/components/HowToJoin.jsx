import React from "react";
import RulesDropDown from "../components/RulesDropDown";

/* the component to show instructions on how to join us,  This Component Exist in "TeamPage" Page. */
function HowToJoin({ guideLines }) {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container  mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              Private Community
            </h1>
            <h1 className="sm:text-3xl text-2xlg font-medium title-font text-gray-300">
              How to join us ?{" "}
            </h1>
          </div>
        </div>
      </section>
      <div>
        <div>
          <section className="text-gray-300">
            <div className="container mx-auto">
              <div className="text-center mb-10">
                <p className="text-base leading-relaxed text-gray-200 xl:w-2/4 lg:w-3/4 mx-auto">
                  In the interest of fostering an open and welcoming environment
                  for our members, we pledge to make our community a
                  harassment-free experience for everyone, regardless of age,
                  disability, ethnicity, level of experience, personal
                  appearance, religion.
                </p>
              </div>
              <div className="flex flex-row mb-10">
                {guideLines.map((data, i) => (
                  <RulesDropDown
                    key={i}
                    title={data.title}
                    subtitles={data.subtitle}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HowToJoin;
