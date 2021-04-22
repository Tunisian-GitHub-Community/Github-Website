/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
export const Projects = ({ repos, isLoading, error }) => {
  if (error) console.log(error);
  if (isLoading) return (
    <div className="m-32">
      <Spinner />
    </div>);
  return (
    <div data-test="Projects">
      <section className="text-gray-200 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-200">
              Our Projects
              </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base pt-6">
              Projects contributed by our Team during monthly challenges.
              </p>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto border-collapse border border-gray-800 w-full text-left whitespace-no-wrap">
              <thead>
                <tr className="border border-gray-800">
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-200 text-sm bg-gray-800 rounded-tl rounded-bl">
                    Name
                    </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-200 text-sm  bg-gray-800">
                    Description
                    </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-200 text-sm bg-gray-800">
                    Link
                </th>

                </tr>
              </thead>
              <tbody>
                {repos.map((repo, i) => (
                  <tr data-test="repo" key={i} className=" border border-gray-800">
                    <td className="px-4 py-3">{repo.node.name}</td>
                    <td className="px-4 py-3">{repo.node.description}</td>
                    <td className="w-10 text-center">
                      <a
                        href={`https://github.com/${repo.node.url}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex text-green-500  border border-green-500 mx-2 py-1 my-1 px-3  hover:bg-green-500 hover:text-white  rounded"
                      >
                        Github
                        </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <a className="text-indigo-500 inline-flex items-center hover:text-green-500 md:mb-2 lg:mb-0"
              href="https://github.com/Tunisian-GitHub-Community">

              View more
                <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

          </div>
        </div>
      </section>
    </div >)
};
Projects.propTypes = {
  repos: PropTypes.instanceOf(Array).isRequired,
  isLoading: PropTypes.bool
};

export default React.memo(Projects);
