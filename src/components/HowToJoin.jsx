import React from "react";

/* the component to show instructions on how to join us,  This Component Exist in "TeamPage" Page. */
function HowToJoin({ guideLines }) {
  return (
    <div>

      <section className="py-12 pattern lg:py-16 xl:py-28">
        <div className="container mx-auto px-5">
          <div className="grid gap-6 lg:gap-10 xl:grid-cols-3">
            <div className="space-y-2 lg:space-y-4">
              <h2 className="text-2xl font-black sm:text-3xl">Code of Conduct</h2>
              <p className="w-full sm:w-1/2 xl:w-80 text-gray-600 md:text-lg">In the interest of fostering an open and
                welcoming environment for our members, we pledge to make our community a harassment-free experience for
                everyone, regardless of age, disability, ethnicity, level of experience, personal appearance,
                religion.</p>

            </div>
            <div className="flex flex-col space-y-5 xl:col-span-2">
              {guideLines.map((rule, i) => (
                  <div
                      key={i}
                      className="bg-white p-5 rounded-xl shadow space-y-2 cursor-pointer transition duration-200 hover:shadow-lg hover:text-blue-600 md:p-8">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-gray-800 mr-4">{rule.title}</h4>
                      <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round"
                                                             stroke-width="2"
                                                             d="M19 9l-7 7-7-7"/></svg></span>
                    </div>
                  </div>
              ))}

            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default HowToJoin;
