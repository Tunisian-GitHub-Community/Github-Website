import React from "react";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

export const Team = ({ team, isLoading, error }) => {
  if (error) console.log(error);
  if (isLoading)
    return (
      <div className="m-32">
        <Spinner />
      </div>
    );
  return (
    <div className="team">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Our Team
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Passionate Students united by Code.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {team.map((member, i) => (
              <div
                data-test="member"
                key={i}
                className="p-2 lg:w-1/3 md:w-1/2 w-full"
              >
                <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={member.img}
                  />
                  <div className="flex-grow">
                    <h2 className="text-white title-font font-medium">
                      {member.name}
                    </h2>
                    <p className="text-gray-500">{member.description}</p>
                    <a className="text-indigo-600" href={member}>
                      {" "}
                      Github{" "}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

Team.propTypes = {
  team: PropTypes.instanceOf(Array).isRequired,
  isLoading: PropTypes.bool,
};

export default React.memo(Team);
