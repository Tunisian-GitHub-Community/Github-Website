import React from "react";
import PropTypes from "prop-types";

export const Team = ({team}) => {
  return (
      <section className="bg-gray-900 second-pattern py-12 lg:py-16 xl:py-28">
        <div className="container mx-auto px-5">
          <div className="grid gap-6 lg:gap-10 xl:grid-cols-3">
            <div className="space-y-2 lg:space-y-4">
              <h2 className="text-2xl font-bold text-gray-50 sm:text-3xl">Our team</h2>
              <p className="w-full sm:w-1/2 xl:w-80 text-gray-100 md:text-lg">Meet the team moderating our Community</p>
            </div>
            <div className="grid gap-6 grid-cols-2 md:grid-cols-5 lg:gap-12 xl:col-span-2">
              {team.map((member, i) => (
                  <div className="space-y-5" data-test="member"
                       key={i}>
                    <img className="rounded-xl shadow transition-shadow duration-200 hover:shadow-lg"
                         src={member.img} alt="github tunisian community"/>
                    <div className="space-y-1">
                      <h4 className="font-medium text-gray-50 lg:text-lg">   {member.name}</h4>

                      <a
                          href={member.link}
                          className="text-sm py-1 font-light  text-white capitalize transition-colors duration-200 transform text-green-500 rounded-md ">
                        GitHub

                      </a>

                    </div>

                  </div>
              ))}


            </div>


          </div>


        </div>


      </section>


  );
};

Team.propTypes = {
  team: PropTypes.instanceOf(Array).isRequired,
  isLoading: PropTypes.bool,
};

export default React.memo(Team);
