import React from "react";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

export const Members = ({ members, isLoading, error }) => {
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
              A List Of Recent Contributors
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-white">
              if you dont see your name here please check your{" "}
              <a
                className="text-blue-600 outline-dotted"
                target="_blank"
                href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/publicizing-or-hiding-organization-membership"
              >
                org visibility
              </a>
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {members.map((member, i) => (
              <div
                data-test="member"
                key={i}
                className="p-2 lg:w-1/3 md:w-1/2 w-full"
              >
                <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={member.node.user.avatarUrl}
                  />
                  <div className="flex-grow">
                    <h2 className="text-white title-font font-medium">
                      {member.node.user.name}
                    </h2>
                    <p className="text-gray-500">
                      {member.node.user.bio.length > 10
                        ? member.node.user.bio.slice(0, 70) + "..."
                        : ""}
                    </p>
                    <a
                      className="text-indigo-600"
                      target="_blank"
                      href={member.node.user.url}
                    >
                      Github
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

Members.propTypes = {
  members: PropTypes.instanceOf(Array).isRequired,
  isLoading: PropTypes.bool,
};

export default React.memo(Members);
