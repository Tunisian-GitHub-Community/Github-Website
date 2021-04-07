import React, { Component, useEffect, useState } from "react";
import axios from "axios";
function Projects() {
  const URL = "https://api.github.com/orgs/Tunisian-GitHub-Community/repos";
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    axios.get(URL).then((res) => {
      setProjects(res.data);
    });
  }, [URL]);


  if (projects) {
    return (
      <div>
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
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-200 text-sm bg-gray-800"></th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-200 text-sm bg-gray-800">
                      Link{" "}
                    </th>
                 
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, i) => (
                    <tr key={i}className=" border border-gray-800">
                      <td className="px-4  py-3">{project.name}</td>
                      <td className="px-4 py-3">{project.description}</td>
                      <td className="px-4 py-3">
                        {project.contributors_url.login}
                      </td>

                      <td className="w-10 text-center">
                        <a
                          href={project.url}
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
      </div>
    );
  }
  return(
    <div>
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
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-200 text-sm bg-gray-800 rounded-tl rounded-bl">
                  Name
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-200 text-sm bg-gray-800">
                  Description
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-200 text-sm bg-gray-800"></th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-200 text-sm bg-gray-800">
                  Link{" "}
                </th>
                <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-800 rounded-tr rounded-br" />
              </tr>
            </thead>
        
          </table>
          <div className="flex items-center justify-center ">
         
         <div class="loader flex flex-center  m-10  text-alignease-linear rounded-full border-8 border-t-8 border-gray-800 h-20 w-20"></div> 
    
      </div>
      
        </div>
       
      </div>
    </section>
  </div>
  )  }
export default Projects ; 
