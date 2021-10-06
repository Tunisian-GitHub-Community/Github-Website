import React from "react";

import useGetTimeline from "../hooks/db/useGetTimeline";

import Spinner from "../components/Spinner";

function TimeLinePage() {
    const {data, isLoading} = useGetTimeline();

    if (isLoading) return <Spinner/>;

    let timelineData = [...data.events];

    return (

        <div className=" px-6 py-12 mx-auto bg-gray-900 mt-6 pattern mx-auto ">

            <div className=" ">
                <div
                    className="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
            <span className="block text-gray-50">
                Want to attend our future events?
            </span>
                        <span className="block text-indigo-500">
                Join our Discord
            </span>
                    </h2>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className=" inline-flex rounded-md shadow">
                            <a type="button"
                               href="https://discord.gg/MzXu6mM5eN"
                               className="py-4 px-6 sm:mt-5 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Discord Server Invitation
                            </a>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <a type="button"
                               href="https://www.facebook.com/GitHubTunisia/"
                               className="md:mt-8 py-4 px-6   bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Facebook Group
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" container px-4 py-5 border-b rounded-t sm:px-6">
                <div className="bg-gray-900 shadow overflow-hidden sm:rounded-md">
                    <ul className="divide-y divide-gray-200">
                        {timelineData.reverse().map((event, i) => {

                            return (
                                <li key={i}>
                                    <a className="block hover:bg-gray-800">
                                        <div className="px-4 py-4 sm:px-6">
                                            <div className="flex items-center justify-between">
                                                <p className="text-md text-gray-50 dark:text-white md:truncate">
                                                    {event.title}
                                                </p>
                                                <br/>

                                                <div className="ml-2 flex-shrink-0 flex">
                                                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-300 text-green-900 px-5">
                                                        {event.subTitle}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-400 dark:text-white ">
                                                {event.description}
                                            </p>
                                            <div className="mt-2 sm:flex sm:justify-between">
                                                <div className="sm:flex">
                                                    <p className="flex items-center text-md font-light text-gray-300">
                                                        {event.date}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            );
                        })};
                    </ul>
                    <div className="p-4 w-full md:w-1/2 mx-auto">

                    </div>
                </div>
            </div>

        </div>
    );
}

export default TimeLinePage;
